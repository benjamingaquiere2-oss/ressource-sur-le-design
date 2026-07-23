/* ==========================================================================
   ARCHIVE — script unique du site
   1. DONNÉES  → à modifier pour ajouter vos propres références et ressources
   2. LOGIQUE  → navigation mobile, rendu des fiches, filtres (ne pas toucher
                 sauf si vous savez ce que vous faites)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DONNÉES
   -------------------------------------------------------------------------- */

/**
 * RÉFÉRENCES DE DESIGN
 * Chaque entrée = une fiche sur la page "references.html".
 * - id        : identifiant unique (texte libre, ex: "ref-001")
 * - titre     : nom du projet / du site référencé
 * - description : une phrase courte
 * - categorie : UNE catégorie principale (ex: "Web", "Print", "Branding", "UI")
 * - styles    : tableau de mots-clés de style (ex: ["Minimaliste", "Coloré"])
 * - image     : URL d'une image (vide "" = dégradé de couleur par défaut)
 * - lien      : URL vers la référence
 */
const REFERENCES = [
  {
    id: "ref-001",
    titre: "Studio Moderne",
    description: "Portfolio d'un studio graphique, grille stricte et typographie XXL.",
    categorie: "Web",
    styles: ["Minimaliste", "Éditorial"],
    image: "",
    lien: "https://example.com"
  },
  {
    id: "ref-002",
    titre: "Festival Chromatique",
    description: "Identité visuelle d'un festival, système de couleurs vives et formes organiques.",
    categorie: "Branding",
    styles: ["Coloré", "Expérimental"],
    image: "",
    lien: "https://example.com"
  },
  {
    id: "ref-003",
    titre: "Revue Papier Nord",
    description: "Mise en page éditoriale, grille à colonnes et hiérarchie typographique marquée.",
    categorie: "Print",
    styles: ["Éditorial", "Minimaliste"],
    image: "",
    lien: "https://example.com"
  },
  {
    id: "ref-004",
    titre: "Tableau de bord Orbit",
    description: "Interface produit, densité d'information maîtrisée et composants clairs.",
    categorie: "UI",
    styles: ["Fonctionnel", "Sombre"],
    image: "",
    lien: "https://example.com"
  }
  // ➜ Ajoutez vos propres fiches en copiant un bloc { ... } ci-dessus,
  //   séparé par une virgule.
];

/**
 * RESSOURCES
 * Regroupées par sous-page. Les clés de l'objet doivent correspondre
 * à l'attribut data-page du <body> de chaque sous-page dans /ressources/.
 * - nom, description, lien : identiques à ci-dessus
 * - tag : un mot-clé affiché sur la fiche (facultatif)
 */
const RESOURCES = {
  typographie: [
    {
      nom: "Google Fonts",
      domaine: "fonts.google.com",
      description: "Bibliothèque de polices libres de droits, à intégrer facilement au web.",
      tag: "Web",
      lien: "https://fonts.google.com"
    },
    {
      nom: "Font Squirrel",
      domaine: "fontsquirrel.com",
      description: "Polices gratuites pour usage commercial, avec kit de webfonts.",
      tag: "Commercial",
      lien: "https://www.fontsquirrel.com"
    },
    {
      nom: "Fontshare",
      domaine: "fontshare.com",
      description: "Polices modernes et soignées, publiées par Indian Type Foundry.",
      tag: "Moderne",
      lien: "https://www.fontshare.com"
    }
    // ➜ Ajoutez vos sites de typographie ici.
  ],
  mockups: [
    {
      nom: "Mockup World",
      domaine: "mockupworld.co",
      description: "Grande collection de mockups gratuits, packaging, print et digital.",
      tag: "Gratuit",
      lien: "https://www.mockupworld.co"
    },
    {
      nom: "Smartmockups",
      domaine: "smartmockups.com",
      description: "Générateur de mockups en ligne, personnalisable directement dans le navigateur.",
      tag: "En ligne",
      lien: "https://smartmockups.com"
    }
    // ➜ Ajoutez vos sites de mockups ici.
  ],
  images: [
    {
      nom: "Unsplash",
      domaine: "unsplash.com",
      description: "Photographies libres de droits en haute résolution.",
      tag: "Photo",
      lien: "https://unsplash.com"
    },
    {
      nom: "Pexels",
      domaine: "pexels.com",
      description: "Photos et vidéos gratuites, licence permissive.",
      tag: "Photo / Vidéo",
      lien: "https://www.pexels.com"
    },
    {
      nom: "unDraw",
      domaine: "undraw.co",
      description: "Illustrations vectorielles open-source, couleur personnalisable.",
      tag: "Illustration",
      lien: "https://undraw.co"
    }
    // ➜ Ajoutez vos sites d'images ici.
  ],
  outils: [
    {
      nom: "Coolors",
      domaine: "coolors.co",
      description: "Générateur de palettes de couleurs rapide.",
      tag: "Couleur",
      lien: "https://coolors.co"
    },
    {
      nom: "Are.na",
      domaine: "are.na",
      description: "Plateforme de veille visuelle et de curation collaborative.",
      tag: "Veille",
      lien: "https://www.are.na"
    }
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
  const styleRow = document.querySelector("[data-filter-style]");
  const searchInput = document.querySelector("[data-search]");
  if (!grid) return;

  let activeCat = "Toutes";
  let activeStyle = "Tous";
  let query = "";

  // Construit dynamiquement les boutons de filtre à partir des données
  const categories = ["Toutes", ...new Set(REFERENCES.map(r => r.categorie))];
  const styles = ["Tous", ...new Set(REFERENCES.flatMap(r => r.styles))];

  buildChips(catRow, categories, activeCat, (val) => { activeCat = val; render(); });
  buildChips(styleRow, styles, activeStyle, (val) => { activeStyle = val; render(); });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  function buildChips(container, values, active, onSelect) {
    if (!container) return;
    container.innerHTML = "";
    values.forEach((val) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (val === active ? " active" : "");
      btn.textContent = val;
      btn.addEventListener("click", () => {
        container.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        onSelect(val);
      });
      container.appendChild(btn);
    });
  }

  function render() {
    const filtered = REFERENCES.filter((r) => {
      const matchCat = activeCat === "Toutes" || r.categorie === activeCat;
      const matchStyle = activeStyle === "Tous" || r.styles.includes(activeStyle);
      const matchQuery = !query ||
        r.titre.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query);
      return matchCat && matchStyle && matchQuery;
    });

    if (countEl) {
      countEl.innerHTML = `<strong>${filtered.length}</strong> référence${filtered.length !== 1 ? "s" : ""} affichée${filtered.length !== 1 ? "s" : ""}`;
    }

    grid.innerHTML = "";
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">Aucune référence ne correspond à ces filtres.</div>`;
      return;
    }

    filtered.forEach((r, i) => {
      const card = document.createElement("article");
      card.className = "ref-card";
      const thumbStyle = r.image ? `style="background:none"` : "";
      card.innerHTML = `
        <div class="ref-thumb" ${thumbStyle}>
          ${r.image ? `<img src="${escapeHtml(r.image)}" alt="${escapeHtml(r.titre)}">` : ""}
          <span class="ref-code">${r.id}</span>
        </div>
        <div class="ref-body">
          <h3>${escapeHtml(r.titre)}</h3>
          <p>${escapeHtml(r.description)}</p>
          <div class="ref-tags">
            <span class="tag cat">${escapeHtml(r.categorie)}</span>
            ${r.styles.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join("")}
          </div>
          <a class="ref-link" href="${escapeAttr(r.lien)}" target="_blank" rel="noopener">Voir la référence →</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  render();
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
