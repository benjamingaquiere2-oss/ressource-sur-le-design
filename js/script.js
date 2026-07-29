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
  "ARTISANAT":      "#FA3C2F",
  "ILLUSTRATION":   "#8B5CF6"
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
    description: "Travail graphique allant de l'édition, au digital en passant par la création d'identités visuelles. Leur style est très coloré avec des couleurs vives presque fluos !",
    categorie: "GRAPHISME",
    images: ["https://www.superterrain.fr/media/pages/nuits-sonores-2024/efb28f66b1-1729678422/superterrain-2024-ns24-1920x.jpg", "https://www.superterrain.fr/media/pages/super-flux-24/45b672544a-1742210475/super-flux-24-super-terrain-1920x.jpg", "https://www.superterrain.fr/media/pages/theatre-joliette/72c0a49000-1739439721/joliette-23-24-super-terrain-0-1920x.jpg"],
    lien: "https://superterrain.fr"
  },

/**  <img src="images/logo/logo-bde-baker.png" alt="Logo BDE Baker"> */
   
  {
    id: "ref-002",
    titre: "Diane Bovin atelier",
    description: "Graphiste, motion designer, illustratrice, typographe, ... Polymathe, elle a notamment fait la charte graphique et le site de l'ISDAT.",
    categorie: "GRAPHISME",
    images: ["https://freight.cargo.site/w/468/q/75/i/M2780697332757205817932007084098/ANIMATION-GRAND-FORMAT.gif", "https://freight.cargo.site/w/600/q/75/i/M1684048173851469950433005670466/Traversee-du-vivant_comm_OK_7_Mars3.jpg", "https://freight.cargo.site/w/400/q/75/i/P1696854550773008203190741766210/4_photo.jpg"],
    lien: "https://dianeboivinatelier.com"
  },
  {
    id: "ref-003",
    titre: "Lucile Viaud",
    description: "Design de produit et artisanat du verre autour du concept de géoverrerie :  Idée que le verre pourrait refléter les caractères naturels et humains de la région dont les matières premières qui le composent sont issues.",
    categorie: "ARTISANAT",
    images: ["https://atelierlucileviaud.com/wp-content/uploads/2020/06/MaisonOrso_ReserveEau_2021_LucileViaud18-512x768.jpg", "https://atelierlucileviaud.com/wp-content/uploads/2020/06/vignettes_ALV_ponant-echantillons-10-512x717.jpg", "https://atelierlucileviaud.com/wp-content/uploads/2023/09/Atelier_Lucile_Viaud_05.23_64_GermainHerriau-1280x854.jpg"],
    lien: "https://atelierlucileviaud.com/"
  },
  {
    id: "ref-004",
    titre: "Alexandre Echasseriau",
    description: "Design industriel, design de fiction, upcycling, ... Pour Alexandre, le travail de la matière semble être le point essentiel à travailler pour connecter l'usager et la production.",
    categorie: "OBJET",
    images: ["https://freight.cargo.site/w/900/q/75/i/5e2ca4c9c30c3298c873fd041f12a39a3f30006b44fa5d9d50352ef06882528a/A.jpg", "https://freight.cargo.site/t/original/i/5c2fc9b0c3c628eb00f5c5d258cea31cceba04610c4c57b9ac1cc318a378abe4/25-Alexandre-Echasseriau.JPG", "https://freight.cargo.site/w/1000/q/75/i/28afab0c9edc6436593129a10898056fc5c9a77d4ca6ca5015b68d09a4cbd2ff/doc-finale6.jpg"],
    lien: "https://alexandreechasseriau.com"
  },
  {
    id: "ref-005",
    titre: "Atelier Baudelaire",
    description: "L'Atelier Baudelaire est un studio de recherche et de création qui relie le design graphisme et le volume, les domaines de la culture et de l'innovation.",
    categorie: "GRAPHISME",
    images: ["https://atelierbaudelaire.com/images/7/4/c/8/2/74c825ff1e521d6d1be7b2f7207927c04063f94c-dsc00660a.jpg?g-98a38b16", "https://atelierbaudelaire.com/images/6/c/7/f/e/6c7fe4fe69a13743a275231e21f0e8bdd72929c0-1dsc00348ret.jpg?g-98a38b16", "https://atelierbaudelaire.com/images/e/7/5/7/4/e75746d8cf725c79322592d56359b814148706a4-dsc04203.jpg?g-98a38b16"],
    lien: "https://atelierbaudelaire.com"
  },
  {
    id: "ref-006",
    titre: "Roxane Andrès",
    description: "Roxane s'ancre dans une démarche qui relie les gens et son design. Des formes organiques et un design social formant des projets autour de grandes étapes de la vie d'un usager.",
    categorie: "OBJET",
    images: ["http://www.roxaneandres.com/wp-content/uploads/2017/06/valet_discret-Roxane_Andres-3.jpg", "http://www.roxaneandres.com/wp-content/uploads/2014/10/urnemiroir-loyasse-03B-web.jpg", "http://www.roxaneandres.com/wp-content/uploads/2013/11/expo-e%CC%81vian-vue3.jpg"],
    lien: "http://www.roxaneandres.com/"
  },
  {
    id: "ref-007",
    titre: "Collectif Gru",
    description: "Scénographies et architectures, le Collectif Gru crée de véritables espaces vivants, souvent éphémères, transportant le visiteur.",
    categorie: "ESPACE",
    images: ["https://collectifgru.fr/wp-content/uploads/2022/03/Axo-1-100-PF-1536x1229.jpg", "https://collectifgru.fr/wp-content/uploads/2025/12/IMG_2061-1536x1024.jpg", "https://collectifgru.fr/wp-content/uploads/2025/12/MG_2122-1365x2048.jpg"],
    lien: "https://collectifgru.fr/"
  },
  {
    id: "ref-008",
    titre: "Matali Crasset",
    description: "Figure emblématique du design français, elle a un travail très coloré et ludique. Principalement designer d'objet, son travail est maintenant un mélange entre les arts plastique, le design et une pratique sociale forte.",
    categorie: "OBJET",
    images: ["https://image.jimcdn.com/app/cms/image/transf/dimension=397x1024:format=png/path/s43202160869f99f9/image/i619b5dac35226f79/version/1455713855/image.png", "https://www.campeggidesign.it/wp-content/uploads/2022/05/Concentre-de-Vie-5.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-5zfCiXgzrY6pPeoxnjt64czYcRwfcigHS5fWm84Ng&s=10"],
    lien: "https://www.matalicrasset.com/fr"
  },
  {
    id: "ref-009",
    titre: "Mathieu Lehanneur",
    description: "Entre oeuvres d'arts et design, Mathieu Lehanneur crée un design épuré et sans superflu. Il imagine aussi des objet qui ne sont pas seulement esthétiquement plaisant mais qui sont des solutions.",
    categorie: "OBJET",
    images: ["https://www.mathieulehanneur.fr/imagesbank/1715338089_663dfb6980d19.jpg", "https://www.mathieulehanneur.fr/imagesbank/1461886831_57229f6f24d36.jpg", "https://www.mathieulehanneur.fr/imagesbank/1668505379_63735f23b8878.jpg"],
    lien: "https://www.mathieulehanneur.fr/works"
  },
  {
    id: "ref-010",
    titre: "The Shelf Compagny",
    description: "De gros travaux d'éditions sont réunies sur leur site internet permettant de voir de la data visualisation, des illustrations et de la composition de livres et magazines.",
    categorie: "GRAPHISME",
    images: ["https://company.theshelf.fr/content/2-portfolio/624-paname-express-vitry-centre/sgp-g_32.jpg", "https://company.theshelf.fr/content/2-portfolio/229-the-shelf-journal-5-laurel-parker-double-page-i/tsj_n5_7.jpg", "https://company.theshelf.fr/content/2-portfolio/695-ccc-od-cartes-de-visite/cco-cv-01_1.svg"],
    lien: "https://company.theshelf.fr/"
  },
  {
    id: "ref-011",
    titre: "Filloque & Zammie & Cie",
    description: "Ils forment un groupe d'artistes plasticien.ne.s utilisant des techniques traditionnelles comme le collage, le crayonnage ou une écriture plus manuscrite.",
    categorie: "GRAPHISME",
    images: ["https://www.filloque-zammit.net/wp-content/uploads/2026/02/Zammit-Malvolti-carte_chateauneuf_2026_intro.jpg", "https://www.filloque-zammit.net/wp-content/uploads/2025/06/Zammit-festin-Bigoud-4.jpg", "https://www.filloque-zammit.net/wp-content/uploads/2022/08/2111-Filloque_affichesintergalictique-copie-1200x848.jpg"],
    lien: "https://www.filloque-zammit.net/"
  },
  {
    id: "ref-012",
    titre: "Formes Vives",
    description: "Même si ce groupe n'hexiste plus, leur travail reste majeur sur la scène française de l'identité visuelle. Leurs nombreux travaux vont plus loin que du graphisme et sont travaillés au travers de plusieurs outils et techniques.",
    categorie: "GRAPHISME",
    images: ["https://www.formes-vives.org/images/public/FormesVives-13Vents-2021-aff_saison-2020.jpg", "https://www.formes-vives.org/images/public/FormesVives-13Vents-1920-Prog2001.jpg", "https://www.formes-vives.org/atelier/public/sceno-installations/BarreauCharbonnet-Fichtre-FormesVives-StudioPlage-Sion-2018.jpg"],
    lien: "https://www.formes-vives.org/images/"
  },
  {
    id: "ref-013",
    titre: "Studio François Azembourg",
    description: "Travail des objets d'une manière très sculturale avec des productions bordant l'oeuvre d'art. François Azembourg est notamment connu pour ces vases Douglas.",
    categorie: "OBJET",
    images: ["https://azambourg.com/wp-content/uploads/2016/12/Vase-noir-rvb-e1516791229187.jpg", "https://azambourg.com/wp-content/uploads/2023/03/boisfendu-web.jpg", "https://azambourg.com/wp-content/uploads/2023/02/francois-azambourg-ciav-metamorfoses-2-copie-e1677163528401.jpg"],
    lien: "https://azambourg.com/"
  },
  {
    id: "ref-014",
    titre: "Fanette Mellier",
    description: "Designer graphique, elle fait de gros travaux d'édition avec des systèmes de lecture innovants.",
    categorie: "GRAPHISME",
    images: ["https://fanettemellier.com/media/pages/carottage/9ef8e544c9-1770915705/image-carottage-01.jpg", "https://fanettemellier.com/media/pages/bonnes-meres/b0969580a9-1782311742/bonnes-meres-02.jpg", "https://fanettemellier.com/media/pages/memoria/ef4856f331-1747735775/memoria-01.jpg"],
    lien: "https://fanettemellier.com/"
  },
  {
    id: "ref-015",
    titre: "Pinaffo & Pluvinage",
    description: "De très gros travaux d'installations (généralement en espace muséal), mélangeant beaucoup de couleurs et de matière (gros travail du bois).",
    categorie: "ARTS PLASTIQUES",
    images: ["https://freight.cargo.site/w/1702/q/94/i/919ac65ff9342daf69e5d93c53440183c8a3c174bb2b8d33d39cac0b231ace52/montage6.gif", "https://freight.cargo.site/w/2000/q/75/i/de2c68ba87b26eb2889d7dfe8bb1992fc10cba1331fa0521dd499a3af6067e58/Voutes-Volutes-Pinaffo_-_Pluvinage_3.jpg", "https://freight.cargo.site/w/1710/q/94/i/d37ca5e8dbf9b5d00d51638600802c8e81938f29b4520582b12c8d1e2cc99924/accueil-2.gif"],
    lien: "https://pinaffo-pluvinage.com/"
  },
  {
    id: "ref-016",
    titre: "Studio 5.5",
    description: "Studio multidisciplinaire, travaillant activement avec de grande marque et très réputé sur la scène française. Beaucoup de leurs projets sont des incontournables comme Nature & Découverte, Duralex ou Réanim.",
    categorie: "OBJET",
    images: ["https://www.5-5.paris/public_data/diapo/projets/1516356318/3000/2015_print_your_duralex_760.jpg", "https://www.5-5.paris/public_data/diapo/projets/1515772576/3000/2003_reanim_protocolebequille_portrait.jpg", "https://www.5-5.paris/public_data/diapo/projets/1552490193/3000/19_03_13_nature_decouvertes061b.jpg"],
    lien: "https://www.5-5.paris/fr/"
  },
  {
    id: "ref-017",
    titre: "Studio Nucléo",
    description: "Connu pour son fauteuil Terra, ce studio mélange artisanat et arts plastiques par leurs expérimentations avec la transparence et la texture des matériaux.",
    categorie: "SOCIAL",
    images: ["https://nucleo.to/wp-content/uploads/2024/10/Studio-Nucleo_Terra_official-ph_high_03_blurb-1-1536x1029.jpg", "https://nucleo.to/wp-content/uploads/2024/11/cover-1-1440x824.jpg", "https://nucleo.to/wp-content/uploads/2020/05/Presenze_Vase_P2_Site-1440x916.jpg"],
    lien: "https://nucleo.to/"
  },
  {
    id: "ref-018",
    titre: "Front Design",
    description: "Ce groupe aime expérimenter au travers des logiciels et des possibilités qu'ils nous offre comme par le vase Blow ou les meubles Sketch Furnitures.",
    categorie: "OBJET",
    images: ["https://www.friedmanbenda.com/wp-content/uploads/2021/09/Front_Sketch-Chair-Rectangualr-Back-White_2000x1500-1024x768.jpg", "https://moroso.it/app/uploads/2014/01/cover1-4.jpg", "https://moroso.it/app/uploads/2026/05/Product-Diorama-Slider.jpg"],
    lien: "http://www.frontdesign.se/"
  },
  {
    id: "ref-019",
    titre: "Terrains Vagues",
    description: "Un atelier graphique faisant de très gros travaux colorés de communication au travers de multiples médiums.",
    categorie: "GRAPHISME",
    images: ["https://terrainsvagues.fr/wp-content/uploads/2023/06/logo1-1024x513.png", "https://terrainsvagues.fr/wp-content/uploads/2022/11/MOCKUP-catalogue4-1024x655.jpg", "https://terrainsvagues.fr/wp-content/uploads/2022/01/06-voiceofthings-1024x683.png"],
    lien: "https://terrainsvagues.fr/"
  },
  {
    id: "ref-020",
    titre: "Ne Rougissez Pas !",
    description: "Elles sont plusieurs à travailler le design graphique comme outils rapprochant les gens. Leurs travaux permet aussi aux gens de s'approprier l'espace et de s'y sentir bien.",
    categorie: "OBJET",
    images: ["https://nerougissezpas.fr/site/assets/files/7470/livret_jdp_bd_10.1280x0-srcset.webp", "https://nerougissezpas.fr/site/assets/files/7928/tract_une.1280x0-srcset.webp", "https://nerougissezpas.fr/site/assets/files/8627/couv_event_fb_bleu_banniere.1280x0-srcset.webp"],
    lien: "https://nerougissezpas.fr/"
  },
  {
    id: "ref-021",
    titre: "Poppy field",
    description: "Le site est pas particulièrement heureux mais c'est une superbe référence sur la datavisualisation grâce à Valentina D’Efilippo.",
    categorie: "GRAPHISME",
    images: ["https://www.poppyfield.org/img/PoppyField.jpg"],
    lien: "https://poppyfield.org/"
  },
  {
    id: "ref-022",
    titre: "Tessa Silva",
    description: "Cette créatrice mélange ses convictions et son art pour en faire des objets politique portant ainsi sa voix mais aussi celles des animaux exploités.",
    categorie: "ARTISANAT",
    images: ["https://images.squarespace-cdn.com/content/v1/53ce5eeae4b09f1cf081b990/c702eff9-c1c0-42f9-a666-eb3997dc64fb/collect+2026+exhibitions.jpg?format=1500w", "https://images.squarespace-cdn.com/content/v1/53ce5eeae4b09f1cf081b990/66248467-5d28-4a3a-ad8a-d32585f9d2fb/%E2%80%98Feminised+Protein+Loop%E2%80%99+sculpture%2C+off+white%2C+skimmed+milk%2C+Tessa+Silva.JPG?format=750w", "https://images.squarespace-cdn.com/content/v1/53ce5eeae4b09f1cf081b990/1731176152994-YOXSIQPW41R2HPIDWRSZ/IMG_0059.JPG?format=750w"],
    lien: "https://www.tessasilva.com/"
  },
  {
    id: "ref-023",
    titre: "Bruit du Frigo",
    description: "Leur travail consiste principalement à rassembler les communautés et créer un espace de partage.",
    categorie: "SOCIAL",
    images: ["https://picsum.photos/seed/ref-023-1/640/480", "https://picsum.photos/seed/ref-023-2/640/480", "https://picsum.photos/seed/ref-023-3/640/480"],
    lien: "https://bruitdufrigo.com/"
  },
  {
    id: "ref-024",
    titre: "Écouter pour voir",
    description: "L'Atelier Graphique fait de gros projets d'identité visuelle et de design graphique.",
    categorie: "GRAPHISME",
    images: ["https://ecouter-pour-voir.net/sites/default/files/projets/ondif_diapo.gif", "https://ecouter-pour-voir.net/sites/default/files/styles/large/public/projets/superpo_5_0.jpg?itok=gx2NHTc0", "https://ecouter-pour-voir.net/sites/default/files/styles/medium/public/projets/korea_edition_1.jpg?itok=rqxbNh4L"],
    lien: "https://ecouter-pour-voir.net/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhNulmHrMPqGcsf7fXQOp7JrNdTY4D9rW-_T3a3uwfUp2WrqQcyXqC3bge3k_aem_1jnCHtUFx7IcHdW78vtpBQ"
  },
  {
    id: "ref-025",
    titre: "Humaniteam",
    description: "HUMANITEAM est une agence de design en santé et d’innovation sociale. Ils accompagnent les organisations de santé dans leurs projets d'innovation pour faciliter le parcours patient et l'accès au soin.",
    categorie: "SOCIAL",
    images: ["https://humaniteam-design.com/wp-content/uploads/2024/02/FRESQUE_GRAPHIQUE_DESIGN_HOPITAL.png", "https://humaniteam-design.com/wp-content/uploads/2020/02/HUMANITEAM-%C3%80-CORPS-%C3%80-CRU-%C3%89QUITH%C3%89RAPIE-1.jpg", "https://humaniteam-design.com/wp-content/uploads/2020/02/BOCCIA8.jpg"],
    lien: "https://humaniteam-design.com/"
  },
  {
    id: "ref-026",
    titre: "Malte Martin - Agrafmobil",
    description: "L’association agrafmobile a pour objet de créer et d'organiser des événements artistiques tant dans le domaine des arts visuels que dans celui du spectacle vivant. Elle intègre ainsi la possibilité du croisement des approches entre plasticiens, chorégraphes, metteurs en scène et autres auteurs. Elle privilégie des interventions qui s'intègrent dans l’espace urbain et rend accessible la création contemporaine à un large public.",
    categorie: "ARTS PLASTIQUES",
    images: ["https://agrafmobile.net/sites/default/files/projets/lv_diapo.gif", "https://agrafmobile.net/sites/default/files/styles/medium/public/projets/im_2004_7_0.jpg?itok=Gqjkw-Yn", "https://agrafmobile.net/sites/default/files/styles/medium/public/projets/qdn_3.jpg?itok=I59eOATd"],
    lien: "https://agrafmobile.net/"
  },
  {
    id: "ref-027",
    titre: "Collectif Etc",
    description: "Ce collectif ancré dans un design d'espace par leurs architectures, espaces publics, installations artistiques et scénographies. Ils sont un peu tout à la fois architecte, artiste et artisan, s’emploie à requestionner ces différentes compétences, en proposant des réponses créatives, décalées, joyeuses et constructives, aux questions que posent l’aménagement des espaces collectifs, en milieu urbain ou rural.",
    categorie: "ESPACE",
    images: ["https://www.collectifetc.com/wp-content/uploads/2023/02/collectif-etc-mas-chabans-1500pxweb-6.jpg", "https://www.collectifetc.com/wp-content/uploads/2014/06/Collectif-Etc-Aulnay-Gerad-Philipe-37.jpg", "https://www.collectifetc.com/wp-content/uploads/2012/10/Collectif_ETC_Detour_de_France_Bruxelles_591.jpg"],
    lien: "https://www.collectifetc.com/"
  },
  {
    id: "ref-028",
    titre: "Sara de Gouy",
    description: "Architecte, designer d’espace et artiste, elle se saisit de chaque opportunité pour concevoir une réponse basé sur l’inventivité, l’écoute et la curiosité.",
    categorie: "ESPACE",
    images: ["https://www.saradegouy.com/wp-content/uploads/bfi_thumb/sara-de-gouy-sorbiers-6-7ht8uup9n0mrgjbb7s0hf7mq5jzs9atrvm72n89ohz9.jpg", "https://www.saradegouy.com/wp-content/uploads/bfi_thumb/sara-de-gouy-le-banc-a-palabres-banc-design-unieux-1-6qx3virlhvxqkf2bx3pr40glfvhtw7dj1d9udwrsa2n.jpg", "https://www.saradegouy.com/wp-content/uploads/bfi_thumb/sara-de-gouy-bureaux-lyon-metropole-habitat-design-lyon-1-6qwoumf9d85kh6aztwors88ljbyj1l9oeu4intnm57r.jpg"],
    lien: "https://www.saradegouy.com/"
  },
  {
    id: "ref-029",
    titre: "Studio Petra Vonk",
    description: "Ce studio essaye de dépasser les usages traditionnels du tissu pour leur donner une fonction dans l'espace laissant ainsi aussi les fonction de réduction de bruit des tissus servir avec esthétique.",
    categorie: "ESPACE",
    images: ["https://images.squarespace-cdn.com/content/v1/606db57105114b552b3a10e2/c6c82850-2086-4a1c-8502-2f2fb580c62f/Plectere+Re_play+at+BDO+Rotterdam+by+MplusR+architecten.jpg?format=1500w", "https://images.squarespace-cdn.com/content/v1/606db57105114b552b3a10e2/00dd93dd-dd24-47a9-9efa-8f6d0c7d6edd/StudioPetraVonk+PLECTERE+acoustic+textile+tube+1.jpg?format=750w", "https://images.squarespace-cdn.com/content/v1/606db57105114b552b3a10e2/95360f12-9de7-4b3a-a910-b2ecc250bd10/StudioPetraVonk+School+cladding+with+intergrated+lace+knit.jpg?format=1500w"],
    lien: "https://www.petravonk.nl/"
  },
  {
    id: "ref-030",
    titre: "smarin - Stéphanie Marin",
    description: "Stéphanie Marin est une designer qui met au coeur de son travail des objets modulables mettant en avant par la même occasion, les matières bois, tissu et  liège. Par ces créations, elle crée des rythmes au seins des espaces du quotidien qui s'adaptent à chacun et aux changement d'une vie.",
    categorie: "OBJET",
    images: ["https://www.smarin.net/files/photo/medium/1606301203-5446.gif?v=1606301226", "https://www.smarin.net/files/photo/medium/1607013715-5882.jpg?v=1607013716", "https://www.smarin.net/files/photo/medium/1701252475-2757.jpg?v=1701252475"],
    lien: "https://www.smarin.net/fr/"
  },
  {
    id: "ref-031",
    titre: "Distaff Studio",
    description: "Gros travail graphique et typographique allant de la simple affiche, à la signalétique dans les musées en passant par de l'édition. Elles travaillent dans un univers baignée dans la culture et l'art.",
    categorie: "GRAPHISME",
    images: ["https://distaff.studio/media/pages/media/881fefb70d-1717564554/quecksilbergarten-0-2880x-q84.webp", "https://distaff.studio/media/pages/media/3629aa3e23-1707304675/fyv-kindertransport-poster-big-1-2880x-q84.webp", "https://distaff.studio/media/pages/media/81523962f8-1709463530/specology-1-x2200-q84.webp"],
    lien: "https://distaff.studio/"
  },
  {
    id: "ref-032",
    titre: "SUPERCONTINENT VE GmbH",
    description: "Ce studio a une esthétique très puissante qui a su séduire de très grande marque pour qu'ils leur réalisent des motions et cinématiques profondes.",
    categorie: "OBJET",
    images: ["https://spc.co/wp-content/uploads/2023/08/compressed_0006_Doja-Cat-Paint-The-Town-Red-Official-Video-0026-1600x900.jpg", "https://spc.co/wp-content/uploads/2024/07/Kendrick-Lamar-Not-Like-Us-0016-aspect-ratio-16-9.png", "https://spc.co/wp-content/uploads/2023/10/Teezo-Touchdown-Impossible-Official-Video-0006-aspect-ratio-16-9.png"],
    lien: "https://spc.co/#works"
  },
  {
    id: "ref-033",
    titre: "Leo Toronto",
    description: "Connu pour leur collaboration avec IKEA pour Cook This Page, ce studio fait énormément de publicité et de campagne de prévention au travers de cinématique et motions.",
    categorie: "GRAPHISME",
    images: ["https://leotoronto.com/wp-content/uploads/2025/05/ikea-food-58d95435d5ce8.jpg", "https://leotoronto.com/wp-content/uploads/2025/05/2025-0512-lfsq53d3g-cheat-on-your-cheeseburger-promo-image-1-1-.png", "https://leotoronto.com/wp-content/uploads/2025/05/2022-0115-jzidpfp7m-genderless-poster-supporting-img-03sm.png"],
    lien: "https://leotoronto.com/"
  },
  {
    id: "ref-034",
    titre: "Androlus Studio",
    description: "Pauline Androlus crée des produits accès sur la matière même quand les projets ne sont pas dans l'objectifs d'aider les personnes aveugles ou mal-voyantes comme le projet Tact.",
    categorie: "OBJET",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9gMIQHblMsT9Rl41CKSgrOPE1J5P9uArn0U-tpVnxA&s=10", "https://www.ladn.eu/wp-content/uploads/2022/07/collection-vaisselle-linge-table-malvoyants-aveugles.5.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28MOioyW9nP3r1TwOPGtYd7KZBMbT4XVyFDfFSk1BNA&s=10"],
    lien: "https://androlusstudio.com/fr"
  },
  {
    id: "ref-035",
    titre: "Les frères Bouroullec",
    description: "Ce duo de frères sont très connus, particulièrement pour leur travaux modulables comme les Vases Combinatoires ou ALgues.",
    categorie: "OBJET",
    images: ["https://www.bouroullec.com/upload/medias_site/f10_1.bd.combinatoryensemble_medium.jpg", "https://www.bouroullec.com/upload/medias_site/f25_1hd.nuages2mudam_medium.jpg", "https://www.bouroullec.com/upload/medias_site/f82_bouroullecroubaixexhibition_large.jpg"],
    lien: "https://www.bouroullec.com/"
  },
  {
    id: "ref-036",
    titre: "Maarten Baas",
    description: "Son travail, à la limite entre art plastique et design, mélangeant installations, artisanat et performance.",
    categorie: "ARTS PLASTIQUES",
    images: ["https://maartenbaas.com/cdn/shop/products/210922123404_n_mob.jpg?v=1675862653&width=720", "https://maartenbaas.com/cdn/shop/products/Pag-026A_Clay-chairs_credits-Marielle-Leenders.jpg?v=1676305395&width=720", "https://maartenbaas.com/cdn/shop/products/5e6d975ae5e6871ac25a09b1384f50e0j.jpg?v=1696358467&width=720"],
    lien: "https://maartenbaas.com/"
  },
  {
    id: "ref-037",
    titre: "Les Sismo",
    description: "Les Sismo, une agence de design qui, au travers de projets, concrétise la transformation des organisations face aux enjeux du XXIe siècle grâce au design with care.",
    categorie: "ARTISANAT",
    images: ["https://www.les-sismo.com/media/CNSA/cnsa-urgences-bandeau-1_hu_c729a6f420744ec7.webp", "https://www.les-sismo.com/media/Bouygues-jardins/bouygues-immo-jardins-bandeau-1_hu_3ce0f48ad90e5e9e.webp", "https://www.les-sismo.com/media/Lille-2020/lille-2020-bandeau-1_hu_db7a69ba2ce1ecca.webp"],
    lien: "https://www.les-sismo.com/"
  },
  {
    id: "ref-038",
    titre: "Collectif Yakafokon",
    description: "Le collectif yakafokon rassemble architectes, artistes, constructeur·ices, qui explorent les champs de la conception-réalisation dans les domaines du design, de l’architecture, de l’urbanisme et expérimentent des processus de création collaboratifs à différentes échelles, des ateliers de conception, des chantiers ouverts et des résidences artistiques.",
    categorie: "ESPACE",
    images: ["https://freight.cargo.site/w/1600/q/94/i/5de4334732c329ede3e0876cfb45709e139f5f8e81bf9f753c7e01a3a9d0cc80/c8ac17c8-5a55-4e38-b584-3c0e0908d207.jpg", "https://freight.cargo.site/w/2480/q/75/i/cd589bcdb171da3d072f93590e7d2ae516cde1f8205176bebe1d0d76a5f06335/20201115_axo-02-1.jpg", "https://freight.cargo.site/w/2000/q/75/i/db249cbe5e225d3ae5f632eeec2ba293f545b1ac8d23a8a16be050e4f39f4c2a/USEIT_ROUEN_VERSION_WEB-1.jpg"],
    lien: "https://collectifyakafokon.com/"
  },
  {
    id: "ref-039",
    titre: "YA+K",
    description: "Ce collectif d'architectes a une pratique qui est au coeur de l'innovation sociale par leur idée de réemploi, de réhabilitation, de co-construction et d'éco-construction.",
    categorie: "ESPACE",
    images: ["https://yaplusk.org/wp-content/uploads/2024/11/YAK-Aglaebory-3.png", "https://yaplusk.org/wp-content/uploads/2016/12/JVS-YAK-9.jpg", "https://yaplusk.org/wp-content/uploads/2024/09/Bd-Coquibus-YAK.jpg"],
    lien: "https://yaplusk.org/"
  },
  {
    id: "ref-040",
    titre: "Pierre Charrié",
    description: "Pierre Charrié est fasciné par la dimension sensorielle des objets du quotidien et explore la manière dont les matériaux, les sons ou les gestes peuvent créer de nouvelles interactions et transcender l’ordinaire.",
    categorie: "OBJET",
    images: ["https://www.pierrecharrie.com/wp-content/uploads/2021/11/Pierre_Charrie_MoCo_02.jpg", "https://www.pierrecharrie.com/wp-content/uploads/2024/08/Pierre_Charrie_Niskala_Batuan_04.jpg", "https://www.pierrecharrie.com/wp-content/uploads/2025/01/Pierre_Charrie_Phonemes_01.jpg"],
    lien: "https://www.pierrecharrie.com/"
  },
  {
    id: "ref-041",
    titre: "Olivier Vadrot",
    description: "Si certains de ces dispositifs sont nomades, reproductibles et éphémères, réduits à des formes essentielles et réalisés dans des matériaux peu coûteux, d’autres ont été plus durablement implantés dans l’espace public (Conversations, 2018 ; Orchestre, 2018 ; Les Fossiles, 2020).",
    categorie: "ESPACE",
    images: ["https://vadrot.com/media/pages/projets/tuk-tuk/4f1d733722-1772665524/olivier_vadrot_tuk-tuk_01.jpg", "https://vadrot.com/media/pages/projets/escalier-et-chevalets/f0208c11e5-1772572936/olivier_vadrot_chevalets_oise_5.jpg", "https://vadrot.com/media/pages/projets/kiosk/25afb912a6-1658340188/olivier_vadrot_kiosquefrac_04.jpg"],
    lien: "https://vadrot.com/fr"
  },
  {
    id: "ref-042",
    titre: "Kamonchanok Wongwiboonsat",
    description: "Issu d'une famille cultivant le riz, c'est après son dîplome, en retournant chez ses parents, que Kamonchanok Wongwiboonsat découvre la vrai valeur du riz et ses qualité comme matériaux versatil pouvant être moulé comme du béton ou transformé en tissu.",
    categorie: "ARTISANAT",
    images: ["https://static.wixstatic.com/media/d87882_c1e8fb2eedc740b484ddfcffd3f6c68b~mv2.jpg/v1/fill/w_1024,h_517,al_c,q_85,enc_avif,quality_auto/1DC0C206-F846-4D11-B456-88ED870B38CF_1_105_c%20copy.jpg", "https://static.wixstatic.com/media/d87882_6ee9310fac20465cb20ccb5a1efa4623~mv2.jpg/v1/fill/w_2538,h_1112,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/new.jpg", "https://static.wixstatic.com/media/d87882_c72d763c1a284453803682ab0f63204d~mv2.jpg/v1/fill/w_780,h_1023,al_c,q_85,enc_avif,quality_auto/332040038_896812334874380_1756535456544383091_n%20copy.jpg"],
    lien: "https://korairlorbor.wixstudio.com/kalbstudio"
  },
  {
    id: "ref-043",
    titre: "Stacey Thomas",
    description: "De gros travaaux d'illustration centré sur la nature dans un univers très doux et rassurant. Elle s'inspire notamment de musée, de la nature, de jeux de société, de l'artisanat et de folklores.",
    categorie: "ILLUSTRATION",
    images: ["https://cdn.myportfolio.com/4ee1f068-30ca-47e2-819b-10084059651b/8603f733-7418-44fa-9a01-814f9d045647_rw_3840.jpg?h=27e246552c3d44f494d04dc16eb0e249", "https://cdn.myportfolio.com/4ee1f068-30ca-47e2-819b-10084059651b/276e0a08-4a7d-485e-b0ff-2097d928d06a_rw_3840.jpg?h=73e2e2c52705694adcbc3b7058d2aa28", "https://cdn.myportfolio.com/4ee1f068-30ca-47e2-819b-10084059651b/5a73cac4-1ca3-4e64-9c8a-a7c256e62ec0_rw_1920.jpg?h=ee05af8f1c75e632ce022b63caa2195f"],
    lien: "https://staceythomasmakes.com/"
  },
  {
    id: "ref-044",
    titre: "Camille Circlude",
    description: "Rien de plus politique que le language, Camille Circlude l'a bien compris et essaye au travers de ses typographies et de ses travaux graphiques de dépasser les limites du language oral et du genre. Ses typographies sont téléchargeables sur le site Bye Bye Binary.",
    categorie: "GRAPHISME",
    images: ["https://camillecirclude.be/wp-content/uploads/2025/12/m5050_arc_20220908_museographie_extra_herve_veronese_-3376.jpg", "https://camillecirclude.be/wp-content/uploads/2025/12/9_2022_extra_bbb_cc_tb_9-1350x1800.jpg", "https://camillecirclude.be/wp-content/uploads/2025/12/1_2022_extra_bbb_cc_tb_1-1350x1800.jpg"],
    lien: "https://camillecirclude.be/"
  },
  {
    id: "ref-045",
    titre: "Natasha Durley",
    description: "Natasha Burley a un travail très coloré centré sur la nature avec de grands projets autours des animaux qu'elles réimaginent très colorés.",
    categorie: "ILLUSTRATION",
    images: ["https://static.wixstatic.com/media/734fdb_bd0174fcc4b8489a92d596af4fc9bfb6~mv2.gif?dn=tiny-fish-by-Natasha-Durley.gif", "https://static.wixstatic.com/media/734fdb_111afe568cb24bb299baba60c99a37cc~mv2.jpg/v1/fill/w_2000,h_1351,al_t,q_90,enc_avif,quality_auto/734fdb_111afe568cb24bb299baba60c99a37cc~mv2.jpg", "https://static.wixstatic.com/media/734fdb_0e6befd82317497191e587ef0dcae6bc~mv2.jpg?dn=Gobi desert-Habitat collection-art print-sunny beast.jpg"],
    lien: "https://www.natashadurley.com/"
  },
  {
    id: "ref-046",
    titre: "Owen Davey",
    description: "Travaux d'illustration colorés sur les animaux et la nature principalement, dans un style géométrique.",
    categorie: "ILLUSTRATION",
    images: ["https://freight.cargo.site/w/400/q/75/i/e4407a61ad48e1e993a7e1201920a21f1c3fffaf9358c45b04ece331411a2d11/Djeco-Tableaux-Cinetique-1-2.jpg", "https://freight.cargo.site/w/400/q/75/i/bbac9d6266404018b88a176b4e57eb5f0a6a621e92d8dc555643945f213ded56/Djeco-Wizard-Box-72.png", "https://freight.cargo.site/w/400/q/75/i/05e9c61148d7b4295ed11c9a58e775cd3d95bb7e4393476b7ae7a46ee3f4c8d9/prt_270x160_1572822705_2x.jpg"],
    lien: "https://owendavey.com/"
  },
  {
    id: "ref-047",
    titre: "La Bonneterie",
    description: "Ils y plein de trucs à base de bois et de métal, ils se forment à différentes techniques suivant les intervenant.e.s, ils répètent, ils dorment, ils y brassent de la bière, on imprime ou ils floquent des vêtement. Ce lieu devient vraiment un lieu de rencontre et de co-création ressemblant à un fablab.",
    categorie: "SOCIAL",
    images: ["https://freight.cargo.site/w/1500/q/75/i/870976c2a0f373928125ca9dc787f2f42168b52add4878523c39915d33f968a0/DSC_0019.JPG", "https://freight.cargo.site/w/1280/q/75/i/47930c8d37711a0d52a95262c678c992771895c0e706d486180ca3948cd1c032/2021.05.23_sotmoIV_nouveau_monde_brigou_8482.jpg", "https://freight.cargo.site/w/1500/q/75/i/db20a19190e620062821f8bb4e4312a55066a4075708578c1f0c60b3ace4c8f9/IMG-1615.JPG"],
    lien: "https://labonneterie.be/"
  },
  {
    id: "ref-048",
    titre: "Milla Vaahtera",
    description: "Milla Vaahtera est une artiste designer d'objet et artisane du métal dont le travail sculptural mène souvent à la création de luminaires. Mélangeant des forment très organiques et des matériaux froids comme le verre ou le métal, elle crée un réel oxymore au travers de son art.",
    categorie: "ARTISANAT",
    images: ["https://freight.cargo.site/w/2000/q/75/i/Z2986211990479386457141951886195/Atlas-ripustus.jpg", "https://freight.cargo.site/w/500/q/75/i/E2354674965894468014159762060147/MillaVaahtera_Nuutajarvi_2024_cHannakaisaPekkala-53.jpg", "https://freight.cargo.site/w/3000/q/75/i/W2369228224263087412694576296819/Milla-Vaahtera---Lintumaa-Installation--Hannakaisa-Pekkala-114.jpg"],
    lien: "https://millavaahtera.com/northern-alps"
  },
  {
    id: "ref-049",
    titre: "Lorenzo Mattotti",
    description: "C’est son sens du trait comme de la couleur qui a permis à l’artiste de construire une oeuvre aux facettes multiples – bande dessinée, cinéma d’animation, peinture, dessin – en façonnant au gré de ses propres expériences, un langage unique. Il a notamment réillustré le conte d'Hansel & Gretel fait entièrement à l'encre de chine.",
    categorie: "ILLUSTRATION",
    images: ["https://www.dordogne.fr/fileadmin/_processed_/4/3/csm_Visuel_Lorenzo_Mattotti_70a44a5ba2.jpg", "https://cdn.artcld.com/img/w_640,h_640,c_pad,b_ffffff/3tgqrijuulwqyfs66jr6.jpg", "https://cdn.artcld.com/img/w_640,h_640,c_pad,b_ffffff/wt4vros40ayenaybr7ob.jpg"],
    lien: "https://www.instagram.com/lorenzomattotti/?hl=fr"
  },
  {
    id: "ref-050",
    titre: "Studio Samuel Tomatis",
    description: "La Bretagne et son écosystème est la base toute sa réflexion autour des matériaux que Samuel Tomatis et son équipe conçoivent grâce aux algues qui pullulent sur les plages de Bretagne.",
    categorie: "ARTISANAT",
    images: ["https://www.studiosamueltomatis.com/media/pages/projects/contenants/6fcfed0f57-1784873209/contenants-alimentaire-22-studio-samuel-tomatis-design-materiaux-algue-alg-seaweed-biomaterial-1200x.webp", "https://www.studiosamueltomatis.com/media/pages/projects/vannerie/6f17d21cf3-1784873155/vannerie-1-studio-samuel-tomatis-design-materiaux-algue-alg-seaweed-biomaterial.jpg", "https://www.studiosamueltomatis.com/media/pages/projects/papier/dd4d1149ac-1784873196/papier-1-studio-samuel-tomatis-design-materiaux-algue-alg-seaweed-biomaterial.jpg"],
    lien: "https://www.studiosamueltomatis.com/"
  },
  {
    id: "ref-051",
    titre: "",
    description: "",
    categorie: "ESPACE",
    images: [],
    lien: ""
  },
  {
    id: "ref-052",
    titre: "",
    description: "",
    categorie: "GRAPHISME",
    images: [],
    lien: ""
  },
  {
    id: "ref-053",
    titre: "",
    description: "",
    categorie: "SOCIAL",
    images: [],
    lien: ""
  },
  {
    id: "ref-054",
    titre: "",
    description: "",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: ""
  },
  {
    id: "ref-055",
    titre: "",
    description: "",
    categorie: "ARTISANAT",
    images: [],
    lien: ""
  },
  {
    id: "ref-056",
    titre: "",
    description: "",
    categorie: "OBJET",
    images: [],
    lien: ""
  },
  {
    id: "ref-057",
    titre: "",
    description: "",
    categorie: "ESPACE",
    images: [],
    lien: ""
  },
  {
    id: "ref-058",
    titre: "",
    description: "",
    categorie: "GRAPHISME",
    images: [],
    lien: ""
  },
  {
    id: "ref-059",
    titre: "",
    description: "",
    categorie: "SOCIAL",
    images: [],
    lien: ""
  },
  {
    id: "ref-060",
    titre: "",
    description: "",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: ""
  },
  {
    id: "ref-061",
    titre: "",
    description: "",
    categorie: "ARTISANAT",
    images: [],
    lien: ""
  },
  {
    id: "ref-062",
    titre: "",
    description: "",
    categorie: "OBJET",
    images: [],
    lien: ""
  },
  {
    id: "ref-063",
    titre: "",
    description: "",
    categorie: "ESPACE",
    images: [],
    lien: ""
  },
  {
    id: "ref-064",
    titre: "",
    description: "",
    categorie: "GRAPHISME",
    images: [],
    lien: ""
  },
  {
    id: "ref-065",
    titre: "",
    description: "",
    categorie: "SOCIAL",
    images: [],
    lien: ""
  },
  {
    id: "ref-066",
    titre: "",
    description: "",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: ""
  },
  {
    id: "ref-067",
    titre: "",
    description: "",
    categorie: "ARTISANAT",
    images: [],
    lien: ""
  },
  {
    id: "ref-068",
    titre: "",
    description: "",
    categorie: "OBJET",
    images: [],
    lien: ""
  },
  {
    id: "ref-069",
    titre: "",
    description: "",
    categorie: "ESPACE",
    images: [],
    lien: ""
  },
  {
    id: "ref-070",
    titre: "",
    description: "",
    categorie: "GRAPHISME",
    images: [],
    lien: ""
  },
  {
    id: "ref-071",
    titre: "",
    description: "",
    categorie: "SOCIAL",
    images: [],
    lien: ""
  },
  {
    id: "ref-072",
    titre: "",
    description: "",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: ""
  },
  {
    id: "ref-073",
    titre: "",
    description: "",
    categorie: "ARTISANAT",
    images: [],
    lien: ""
  },
  {
    id: "ref-074",
    titre: "",
    description: "",
    categorie: "OBJET",
    images: [],
    lien: ""
  },
  {
    id: "ref-075",
    titre: "",
    description: "",
    categorie: "ESPACE",
    images: [],
    lien: ""
  },
  {
    id: "ref-076",
    titre: "",
    description: "",
    categorie: "GRAPHISME",
    images: [],
    lien: ""
  },
  {
    id: "ref-077",
    titre: "",
    description: "",
    categorie: "SOCIAL",
    images: [],
    lien: ""
  },
  {
    id: "ref-078",
    titre: "",
    description: "",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: ""
  },
  {
    id: "ref-079",
    titre: "",
    description: "",
    categorie: "ARTISANAT",
    images: [],
    lien: ""
  },
  {
    id: "ref-080",
    titre: "",
    description: "",
    categorie: "OBJET",
    images: [],
    lien: ""
  },

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
      const isFilled = r.titre && r.titre.trim() !== "";
      const matchCat = activeCat === "TOUTES" || r.categorie === activeCat;
      const matchQuery = !query ||
        r.titre.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query);
      return isFilled && matchCat && matchQuery;
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
