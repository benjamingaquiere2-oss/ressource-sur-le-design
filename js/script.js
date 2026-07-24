/* ==========================================================================
   ARCHIVE — script unique du site
   1. DONNÉES  → à modifier pour ajouter vos propres références et ressources
   2. LOGIQUE  → navigation, carrousels, filtres (ne pas toucher sauf besoin)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DONNÉES
   -------------------------------------------------------------------------- */

/**
 * CATÉGORIES — taxonomie fixe utilisée pour filtrer les références.
 * Chaque catégorie a une couleur de pastille (code couleur façon ligne de métro).
 * Ne pas ajouter/retirer de clé sans mettre à jour le CSS (variables --c-...).
 */
const CATEGORIES = {
  "OBJET":          "#FFD230",
  "ESPACE":         "#1E72EF",
  "GRAPHISME":      "#FC4FAC",
  "SOCIAL":         "#FF6A00",
  "ARTS PLASTIQUES": "#58DF55",
  "ARTISANAT":      "#FA3C2F"
};

/**
 * RÉFÉRENCES DE DESIGN
 * Chaque entrée = une fiche sur la page "references.html".
 * - id          : identifiant unique affiché sur la fiche (ex: "ref-001")
 * - titre       : nom du projet / du site référencé
 * - description : une phrase courte
 * - categorie   : UNE valeur parmi les clés de CATEGORIES ci-dessus
 * - images      : tableau de 1 à 3 URLs d'images (le carrousel s'adapte
 *                 au nombre fourni ; laissez [] pour un visuel par défaut)
 * - lien        : URL vers la référence
 */
const REFERENCES = [
  {
    id: "ref-001",
    titre: "Super Terrain",
    description: "Portfolio d'un studio graphique, grille stricte et typographie XXL.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://example.com"
  },
  {
    id: "ref-002",
    titre: "Festival Chromatique",
    description: "Identité visuelle d'un festival, système de couleurs vives.",
    categorie: "SOCIAL",
    images: [],
    lien: "https://example.com"
  },
  {
    id: "ref-003",
    titre: "Chaise Empilable 04",
    description: "Design produit, structure tubulaire et assise moulée.",
    categorie: "OBJET",
    images: [],
    lien: "https://example.com"
  },
  {
    id: "ref-004",
    titre: "Pavillon Nord",
    description: "Scénographie d'exposition, parcours et signalétique intérieure.",
    categorie: "ESPACE",
    images: [],
    lien: "https://example.com"
  }
  // ➜ Ajoutez vos propres fiches en copiant un bloc { ... } ci-dessus,
  //   séparé par une virgule. "categorie" doit être une des 6 clés de CATEGORIES.
];

/**
 * RESSOURCES
 * Regroupées par sous-page. Les clés de l'objet doivent correspondre
 * à l'attribut data-page du <body> de chaque sous-page dans /ressources/.
 */
const RESOURCES = {
  typographie: [
    { nom: "Google Fonts", domaine: "fonts.google.com", description: "Bibliothèque de polices libres de droits, à intégrer facilement au web.", lien: "https://fonts.google.com" },
    { nom: "Font Squirrel", domaine: "fontsquirrel.com", description: "Polices gratuites pour usage commercial, avec kit de webfonts.", lien: "https://www.fontsquirrel.com" },
    { nom: "Fontshare", domaine: "fontshare.com", description: "Polices modernes et soignées, publiées par Indian Type Foundry.", lien: "https://www.fontshare.com" }
    // ➜ Ajoutez vos sites de typographie ici.
  ],
  mockups: [
    { nom: "Mockup World", domaine: "mockupworld.co", description: "Grande collection de mockups gratuits, packaging, print et digital.", lien: "https://www.mockupworld.co" },
    { nom: "Smartmockups", domaine: "smartmockups.com", description: "Générateur de mockups en ligne, personnalisable dans le navigateur.", lien: "https://smartmockups.com" }
    // ➜ Ajoutez vos sites de mockups ici.
  ],
  images: [
    { nom: "Unsplash", domaine: "unsplash.com", description: "Photographies libres de droits en haute résolution.", lien: "https://unsplash.com" },
    { nom: "Pexels", domaine: "pexels.com", description: "Photos et vidéos gratuites, licence permissive.", lien: "https://www.pexels.com" },
    { nom: "unDraw", domaine: "undraw.co", description: "Illustrations vectorielles open-source, couleur personnalisable.", lien: "https://undraw.co" }
    // ➜ Ajoutez vos sites d'images ici.
  ],
  outils: [
    { nom: "Coolors", domaine: "coolors.co", description: "Générateur de palettes de couleurs rapide.", lien: "https://coolors.co" },
    { nom: "Are.na", domaine: "are.na", description: "Plateforme de veille visuelle et de curation collaborative.", lien: "https://www.are.na" }
    // ➜ Ajoutez vos autres sites ressources ici.
  ]
};

/* --------------------------------------------------------------------------
   2. LOGIQUE
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initFooterYear();

  if (document.body.dataset.page === "references") {
    initReferencesPage();
  }

  const resourcePage = document.body.dataset.page;
  if (resourcePage && RESOURCES[resourcePage]) {
    renderResourceList(resourcePage);
  }
});

/* ---------- Navigation mobile ---------- */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---------- Année dans le footer ---------- */
function initFooterYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Page Références : rendu + filtres ---------- */
function initReferencesPage() {
  const grid = document.querySelector("[data-ref-grid]");
  const countEl = document.querySelector("[data-result-count]");
  const catRow = document.querySelector("[data-filter-cat]");
  const searchInput = document.querySelector("[data-search]");
  if (!grid) return;

  let activeCat = "TOUTES";
  let query = "";

  buildCategoryChips();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  function buildCategoryChips() {
    if (!catRow) return;
    catRow.innerHTML = "";
    const all = [{ key: "TOUTES", color: null }, ...Object.keys(CATEGORIES).map(k => ({ key: k, color: CATEGORIES[k] }))];
    all.forEach(({ key, color }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (key === activeCat ? " active" : "");
      if (color) btn.style.setProperty("--chip-color", color);
      btn.innerHTML = (color ? `<span class="dot"></span>` : "") + key;
      btn.addEventListener("click", () => {
        activeCat = key;
        catRow.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        render();
      });
      catRow.appendChild(btn);
    });
  }

  function render() {
    const filtered = REFERENCES.filter((r) => {
      const matchCat = activeCat === "TOUTES" || r.categorie === activeCat;
      const matchQuery = !query ||
        r.titre.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (countEl) {
      countEl.innerHTML = `<strong>${filtered.length}</strong> référence${filtered.length !== 1 ? "s" : ""} affichée${filtered.length !== 1 ? "s" : ""}`;
    }

    grid.innerHTML = "";
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">Aucune référence ne correspond à ces filtres.</div>`;
      return;
    }

    filtered.forEach((r) => grid.appendChild(buildRefCard(r)));
  }

  render();
}

/* ---------- Construction d'une fiche + son carrousel ---------- */
function buildRefCard(r) {
  const color = CATEGORIES[r.categorie] || "#0D0D0D";
  const images = (r.images && r.images.length ? r.images : [null]).slice(0, 3);

  const card = document.createElement("article");
  card.className = "ref-card";

  const slides = images.map((src) => src
    ? `<div class="carousel-slide"><img src="${escapeAttr(src)}" alt="${escapeHtml(r.titre)}" loading="lazy"></div>`
    : `<div class="carousel-slide placeholder"></div>`
  ).join("");

  const dots = images.length > 1
    ? `<div class="carousel-nav">${images.map((_, i) => `<button type="button" class="carousel-dot${i === 0 ? " active" : ""}" data-dot="${i}" aria-label="Image ${i + 1}"></button>`).join("")}</div>`
    : "";

  const arrows = images.length > 1
    ? `<button type="button" class="carousel-arrow prev" aria-label="Image précédente">&larr;</button>
       <button type="button" class="carousel-arrow next" aria-label="Image suivante">&rarr;</button>`
    : "";

  card.innerHTML = `
    <div class="carousel" data-carousel>
      <span class="carousel-cat" style="--cat-color:${color}">${escapeHtml(r.categorie)}</span>
      <span class="carousel-code">${escapeHtml(r.id)}</span>
      <div class="carousel-track" data-track>${slides}</div>
      ${arrows}
      ${dots}
    </div>
    <div class="ref-body">
      <h3>${escapeHtml(r.titre)}</h3>
      <p>${escapeHtml(r.description)}</p>
      <a class="ref-link" href="${escapeAttr(r.lien)}" target="_blank" rel="noopener">
        <span class="roundel">&rarr;</span> Voir la référence
      </a>
    </div>
  `;

  if (images.length > 1) initCarousel(card);
  return card;
}

/* ---------- Carrousel : logique d'un composant ---------- */
function initCarousel(card) {
  const track = card.querySelector("[data-track]");
  const dots = [...card.querySelectorAll(".carousel-dot")];
  const prev = card.querySelector(".carousel-arrow.prev");
  const next = card.querySelector(".carousel-arrow.next");
  let index = 0;
  const total = track.children.length;

  function go(i) {
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
  if (prev) prev.addEventListener("click", () => go(index - 1));
  if (next) next.addEventListener("click", () => go(index + 1));
}

/* ---------- Sous-pages Ressources : rendu de la liste ---------- */
function renderResourceList(pageKey) {
  const list = document.querySelector("[data-res-list]");
  const countEl = document.querySelector("[data-result-count]");
  if (!list) return;

  const items = RESOURCES[pageKey] || [];

  if (countEl) {
    countEl.innerHTML = `<strong>${items.length}</strong> site${items.length !== 1 ? "s" : ""} référencé${items.length !== 1 ? "s" : ""}`;
  }

  if (items.length === 0) {
    list.innerHTML = `<div class="empty-state">Aucun site ajouté pour le moment. Complétez le tableau RESOURCES dans js/script.js.</div>`;
    return;
  }

  list.innerHTML = items.map((item, i) => `
    <article class="res-card">
      <span class="res-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="res-main">
        <h3>${escapeHtml(item.nom)}<span class="domain">${escapeHtml(item.domaine || "")}</span></h3>
        <p>${escapeHtml(item.description)}</p>
      </div>
      <a class="res-visit" href="${escapeAttr(item.lien)}" target="_blank" rel="noopener">Visiter →</a>
    </article>
  `).join("");
}

/* ---------- Utilitaires ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}
function escapeAttr(str) { return escapeHtml(str); }
