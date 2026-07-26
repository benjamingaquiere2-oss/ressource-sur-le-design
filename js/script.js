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
    description: "Travail graphique allant de l'édition, au digital en passant par la création d'identités visuelles. Leur style est très coloré avec des couleurs vives presque fluos !",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://superterrain.fr"
  },
  {
    id: "ref-002",
    titre: "Diane Bovin atelier",
    description: "Graphiste, motion designer, illustratrice, typographe, ... Polymathe, elle a notamment fait la charte graphique et le site de l'ISDAT.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://dianeboivinatelier.com"
  },
  {
    id: "ref-003",
    titre: "Lucile Viaud",
    description: "Design de produit et artisanat du verre autour du concept de géoverrerie :  Idée que le verre pourrait refléter les caractères naturels et humains de la région dont les matières premières qui le composent sont issues.",
    categorie: "ARTISANAT",
    images: [],
    lien: "https://atelierlucileviaud.com/"
  },
  {
    id: "ref-004",
    titre: "Alexandre Echasseriau",
    description: "Design industriel, design de fiction, upcycling, ... Pour Alexandre, le travail de la matière semble être le point essentiel à travailler pour connecter l'usager et la production.",
    categorie: "OBJET",
    images: [],
    lien: "https://alexandreechasseriau.com"
  },
  {
    id: "ref-005",
    titre: "Atelier Baudelaire",
    description: "L'Atelier Baudelaire est un studio de recherche et de création qui relie le design graphisme et le volume, les domaines de la culture et de l'innovation.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://atelierbaudelaire.com"
  },
  {
    id: "ref-006",
    titre: "Roxane Andrès",
    description: "Roxane s'ancre dans une démarche qui relie les gens et son design. Des formes organiques et un design social formant des projets autour de grandes étapes de la vie d'un usager.",
    categorie: "OBJET",
    images: [],
    lien: "https://roxaneandres.com"
  },
  {
    id: "ref-007",
    titre: "Collectif Gru",
    description: "Scénographies et architectures, le Collectif Gru crée de véritables espaces vivants, souvent éphémères, transportant le visiteur.",
    categorie: "ESPACE",
    images: [],
    lien: "https://collectifgru.fr"
  },
  {
    id: "ref-008",
    titre: "Matali Crasset",
    description: "Figure emblématique du design français, elle a un travail très coloré et ludique. Principalement designer d'objet, son travail est maintenant un mélange entre les arts plastique, le design et une pratique sociale forte.",
    categorie: "OBJET",
    images: [],
    lien: "https://www.matalicrasset.com/fr"
  },
  {
    id: "ref-009",
    titre: "Mathieu Lehanneur",
    description: "Entre oeuvres d'arts et design, Mathieu Lehanneur crée un design épuré et sans superflu. Il imagine aussi des objet qui ne sont pas seulement esthétiquement plaisant mais qui sont des solutions.",
    categorie: "OBJET",
    images: [],
    lien: "https://www.mathieulehanneur.fr/works"
  },
  {
    id: "ref-010",
    titre: "The Shelf Compagny",
    description: "De gros travaux d'éditions sont réunies sur leur site internet permettant de voir de la data visualisation, des illustrations et de la composition de livres et magazines.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://company.theshelf.fr/"
  },
  {
    id: "ref-011",
    titre: "Filloque & Zammie & Cie",
    description: "Ils forment un groupe d'artistes plasticien.ne.s utilisant des techniques traditionnelles comme le collage, le crayonnage ou une écriture plus manuscrite.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://www.filloque-zammit.net/"
  },
  {
    id: "ref-012",
    titre: "Formes Vives",
    description: "Même si ce groupe n'hexiste plus, leur travail reste majeur sur la scène française de l'identité visuelle. Leurs nombreux travaux vont plus loin que du graphisme et sont travaillés au travers de plusieurs outils et techniques.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://www.formes-vives.org/images/"
  },
  {
    id: "ref-013",
    titre: "Studio Françoois Azembourg",
    description: "Travail des objets d'une manière très sculturale avec des productions bordant l'oeuvre d'art. François Azembourg est notamment connu pour ces vases Douglas.",
    categorie: "OBJET",
    images: [],
    lien: "https://azambourg.com/"
  },
  {
    id: "ref-014",
    titre: "Fanette Mellier",
    description: "Designer graphique, elle fait de gros travaux d'édition avec des systèmes de lecture innovants.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://fanettemellier.com/"
  },
  {
    id: "ref-015",
    titre: "Pinaffo & Pluvinage",
    description: "De très gros travaux d'installations (généralement en espace muséal), mélangeant beaucoup de couleurs et de matière (gros travail du bois).",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: "https://pinaffo-pluvinage.com/"
  },
  {
    id: "ref-016",
    titre: "Studio 5.5",
    description: "Studio multidisciplinaire, travaillant activement avec de grande marque et très réputé sur la scène française. Beaucoup de leurs projets sont des incontournables comme Nature & Découverte, Duralex ou Réanim.",
    categorie: "OBJET",
    images: [],
    lien: "https://www.5-5.paris/fr/"
  },
  {
    id: "ref-017",
    titre: "Studio Nucléo",
    description: "Connu pour son fauteuil Terra, ce studio mélange artisanat et arts plastiques par leurs expérimentations avec la transparence et la texture des matériaux.",
    categorie: "SOCIAL",
    images: [],
    lien: "https://nucleo.to/"
  },
  {
    id: "ref-018",
    titre: "Front Design",
    description: "Ce groupe aime expérimenter au travers des logiciels et des possibilités qu'ils nous offre comme par le vase Blow ou les meubles Sketch Furnitures.",
    categorie: "OBJET",
    images: [],
    lien: "http://www.frontdesign.se/"
  },
  {
    id: "ref-019",
    titre: "Terrains Vagues",
    description: "Un atelier graphique faisant de très gros travaux colorés de communication au travers de multiples médiums.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://terrainsvagues.fr/"
  },
  {
    id: "ref-020",
    titre: "Ne Rougissez Pas !",
    description: "Elles sont plusieurs à travailler le design graphique comme outils rapprochant les gens. Leurs travaux permet aussi aux gens de s'approprier l'espace et de s'y sentir bien.",
    categorie: "OBJET",
    images: [],
    lien: "https://nerougissezpas.fr/"
  },
  {
    id: "ref-021",
    titre: "Poppy field",
    description: "Le site est pas particulièrement heureux mais c'est une superbe référence sur la datavisualisation grâce à Valentina D’Efilippo.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://poppyfield.org/"
  },
  {
    id: "ref-022",
    titre: "Tessa Silva",
    description: "Cette créatrice mélange ses convictions et son art pour en faire des objets politique portant ainsi sa voix mais aussi celles des animaux exploités.",
    categorie: "ARTISANAT",
    images: [],
    lien: "https://www.tessasilva.com/"
  },
  {
    id: "ref-023",
    titre: "Bruit du Frigo",
    description: "Leur travail consiste principalement à rassembler les communautés et créer un espace de partage.",
    categorie: "SOCIAL",
    images: [],
    lien: "https://bruitdufrigo.com/"
  },
  {
    id: "ref-024",
    titre: "écouter pour voir",
    description: "L'Atelier Graphique fait de gros projets d'identité visuelle et de design graphique.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://ecouter-pour-voir.net/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhNulmHrMPqGcsf7fXQOp7JrNdTY4D9rW-_T3a3uwfUp2WrqQcyXqC3bge3k_aem_1jnCHtUFx7IcHdW78vtpBQ"
  },
  {
    id: "ref-025",
    titre: "Humaniteam",
    description: "HUMANITEAM est une agence de design en santé et d’innovation sociale. Ils accompagnent les organisations de santé dans leurs projets d'innovation pour faciliter le parcours patient et l'accès au soin.",
    categorie: "SOCIAL",
    images: [],
    lien: "https://humaniteam-design.com/"
  },
  {
    id: "ref-026",
    titre: "Malte Martin - Agrafmobil",
    description: "L’association agrafmobile a pour objet de créer et d'organiser des événements artistiques tant dans le domaine des arts visuels que dans celui du spectacle vivant. Elle intègre ainsi la possibilité du croisement des approches entre plasticiens, chorégraphes, metteurs en scène et autres auteurs. Elle privilégie des interventions qui s'intègrent dans l’espace urbain et rend accessible la création contemporaine à un large public.",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: ""
  },
  {
    id: "ref-027",
    titre: "Collectif Etc",
    description: "Ce collectif ancré dans un design d'espace par leurs architectures, espaces publics, installations artistiques et scénographies. Ils sont un peu tout à la fois architecte, artiste et artisan, s’emploie à requestionner ces différentes compétences, en proposant des réponses créatives, décalées, joyeuses et constructives, aux questions que posent l’aménagement des espaces collectifs, en milieu urbain ou rural.",
    categorie: "ESPACE",
    images: [],
    lien: "https://www.collectifetc.com/"
  },
  {
    id: "ref-028",
    titre: "Sara de Gouy",
    description: "Architecte, designer d’espace et artiste, elle se saisit de chaque opportunité pour concevoir une réponse basé sur l’inventivité, l’écoute et la curiosité.",
    categorie: "ESPACE",
    images: [],
    lien: "https://www.saradegouy.com/"
  },
  {
    id: "ref-029",
    titre: "Studio Petra Vonk",
    description: "Ce studio essaye de dépasser les usages traditionnels du tissu pour leur donner une fonction dans l'espace laissant ainsi aussi les fonction de réduction de bruit des tissus servir avec esthétique.",
    categorie: "ESPACE",
    images: [],
    lien: "https://www.petravonk.nl/"
  },
  {
    id: "ref-030",
    titre: "smarin - Stéphanie Marin",
    description: "Stéphanie Marin est une designer qui met au coeur de son travail des objets modulables mettant en avant par la même occasion, les matières bois, tissu et  liège. Par ces créations, elle crée des rythmes au seins des espaces du quotidien qui s'adaptent à chacun et aux changement d'une vie.",
    categorie: "OBJET",
    images: [],
    lien: "https://www.smarin.net/fr/"
  },
  {
    id: "ref-031",
    titre: "Distaff Studio",
    description: "Gros travail graphique et typographique allant de la simple affiche, à la signalétique dans les musées en passant par de l'édition. Elles travaillent dans un univers baignée dans la culture et l'art.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://distaff.studio/"
  },
  {
    id: "ref-032",
    titre: "SUPERCONTINENT VE GmbH",
    description: "Ce studio a une esthétique très puissante qui a su séduire de très grande marque pour qu'ils leur réalisent des motions profonds.",
    categorie: "OBJET",
    images: [],
    lien: "https://spc.co/#works"
  },
  {
    id: "ref-033",
    titre: "Leo Toronto",
    description: "Connu pour leur collaboration avec IKEA pour Cook This Page, ce studio fait énormément de publicité et de campagne de prévention au travers de cinématique et motions.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://leotoronto.com/"
  },
  {
    id: "ref-034",
    titre: "Androlus Studio",
    description: "Pauline Androlus crée des produits accès sur la matière même quand les projets ne sont pas dans l'objectifs d'aider les personnes aveugles ou mal-voyantes comme le projet Tact.",
    categorie: "OBJET",
    images: [],
    lien: "https://androlusstudio.com/fr"
  },
  {
    id: "ref-035",
    titre: "Les frères Bouroullec",
    description: "Ce duo de frères sont très connus, particulièrement pour leur travaux modulables comme les Vases Combinatoires ou ALgues.",
    categorie: "OBJET",
    images: [],
    lien: "https://www.bouroullec.com/"
  },
  {
    id: "ref-036",
    titre: "Maarten Baas",
    description: "Son travail, à la limite entre art plastique et design, mélangeant installations, artisanat et performance.",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: "https://maartenbaas.com/"
  },
  {
    id: "ref-037",
    titre: "Les Sismo",
    description: "Les Sismo, une agence de design qui, au travers de projets, concrétise la transformation des organisations face aux enjeux du XXIe siècle grâce au design with care.",
    categorie: "ARTISANAT",
    images: [],
    lien: "https://www.les-sismo.com/"
  },
  {
    id: "ref-038",
    titre: "Collectif Yakafokon",
    description: "Le collectif yakafokon rassemble architectes, artistes, constructeur·ices, qui explorent les champs de la conception-réalisation dans les domaines du design, de l’architecture, de l’urbanisme et expérimentent des processus de création collaboratifs à différentes échelles, des ateliers de conception, des chantiers ouverts et des résidences artistiques.",
    categorie: "ESPACE",
    images: [],
    lien: "https://collectifyakafokon.com/"
  },
  {
    id: "ref-039",
    titre: "YA+K",
    description: "Ce collectif d'architectes a une pratique qui est au coeur de l'innovation sociale par leur idée de réemploi, de réhabilitation, de co-construction et d'éco-construction.",
    categorie: "ESPACE",
    images: [],
    lien: "https://yaplusk.org/"
  },
  {
    id: "ref-040",
    titre: "Pierre Charrié",
    description: "Pierre Charrié est fasciné par la dimension sensorielle des objets du quotidien et explore la manière dont les matériaux, les sons ou les gestes peuvent créer de nouvelles interactions et transcender l’ordinaire.",
    categorie: "OBJET",
    images: [],
    lien: "https://www.pierrecharrie.com/"
  },
  {
    id: "ref-041",
    titre: "Olivier Vadrot",
    description: "Si certains de ces dispositifs sont nomades, reproductibles et éphémères, réduits à des formes essentielles et réalisés dans des matériaux peu coûteux, d’autres ont été plus durablement implantés dans l’espace public (Conversations, 2018 ; Orchestre, 2018 ; Les Fossiles, 2020).",
    categorie: "ESPACE",
    images: [],
    lien: "https://vadrot.com/fr"
  },
  {
    id: "ref-042",
    titre: "Kamonchanok Wongwiboonsat",
    description: "Issu d'une famille cultivant le riz, c'est après son dîplome, en retournant chez ses parents, que Kamonchanok Wongwiboonsat découvre la vrai valeur du riz et ses qualité comme matériaux versatil pouvant être moulé comme du béton ou transformé en tissu.",
    categorie: "ARTISANAT",
    images: [],
    lien: "https://korairlorbor.wixstudio.com/kalbstudio"
  },
  {
    id: "ref-043",
    titre: "Stacey Thomas",
    description: "De gros travaaux d'illustration centré sur la nature dans un univers très doux et rassurant. Elle s'inspire notamment de musée, de la nature, de jeux de société, de l'artisanat et de folklores.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://staceythomasmakes.com/"
  },
  {
    id: "ref-044",
    titre: "Camille Circlude",
    description: "Rien de plus politique que le language, Camille Circlude l'a bien compris et essaye au travers de ses typographies et de ses travaux graphiques de dépasser les limites du language oral et du genre. Ses typographies sont téléchargeables sur le site Bye Bye Binary.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://camillecirclude.be/"
  },
  {
    id: "ref-045",
    titre: "Natasha Durley",
    description: "Natasha Burley a un travail très coloré centré sur la nature avec de grands projets autours des animaux qu'elles réimaginent très colorés.",
    categorie: "ESPACE",
    images: [],
    lien: "https://www.natashadurley.com/"
  },
  {
    id: "ref-046",
    titre: "Owen Davey",
    description: "Travaux d'illustration colorés sur les animaux et la nature principalement, dans un style géométrique.",
    categorie: "GRAPHISME",
    images: [],
    lien: "https://owendavey.com/"
  },
  {
    id: "ref-047",
    titre: "La Bonneterie",
    description: "Ils y plein de trucs à base de bois et de métal, ils se forment à différentes techniques suivant les intervenant.e.s, ils répètent, ils dorment, ils y brassent de la bière, on imprime ou ils floquent des vêtement. Ce lieu devient vraiment un lieu de rencontre et de co-création ressemblant à un fablab.",
    categorie: "SOCIAL",
    images: [],
    lien: "https://labonneterie.be/"
  },
  {
    id: "ref-048",
    titre: "Milla Vaahtera",
    description: "Milla Vaahtera est une artiste designer d'objet et artisane du métal dont le travail sculptural mène souvent à la création de luminaires. Mélangeant des forment très organiques et des matériaux froids comme le verre ou le métal, elle crée un réel oxymore au travers de son art.",
    categorie: "ARTISANAT",
    images: [],
    lien: "https://www.instagram.com/millavaahtera/"
  },
  {
    id: "ref-049",
    titre: "Lorenzo Mattotti",
    description: "C’est son sens du trait comme de la couleur qui a permis à l’artiste de construire une oeuvre aux facettes multiples – bande dessinée, cinéma d’animation, peinture, dessin – en façonnant au gré de ses propres expériences, un langage unique.",
    categorie: "ARTS PLASTIQUES",
    images: [],
    lien: "https://www.instagram.com/lorenzomattotti/?hl=fr"
  },
  {
    id: "ref-050",
    titre: "Studio Samuel Tomatis",
    description: "La Bretagne et son écosystème est la base toute sa réflexion autour des matériaux que Samuel Tomatis et son équipe conçoivent grâce aux algues qui pullulent sur les plages de Bretagne.",
    categorie: "ARTISANAT",
    images: [],
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
