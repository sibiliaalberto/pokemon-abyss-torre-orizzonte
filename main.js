const searchablePokemonCatalog = [...pokemonSpriteCatalog, ...pokemonRegionalSpriteCatalog];

const floors = [
  {
    id: 0,
    label: 'Piano 0',
    name: 'Superficie',
    short: 'La soglia dell’Abisso',
    element: 'Soglia',
    icon: '⌁',
    status: 'available',
    accent: 'mist',
    terrain: 'Isola di Eruna · cratere · nebbia bassa',
    summary: 'Il punto d’incontro tra il mondo umano e l’Abisso: una grande isola, un foro centrale e una torre che aspetta di essere capita.',
    mood: 'Silenzio elettrico',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/PIevGhthhMcxfuBi.webp',
    characters: [{ name: 'Professor Barbagianni', role: 'Committente della spedizione', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/lSRXGdqtvOfyNQeh.webp', bio: 'Lo studioso che ha convocato gli allenatori e li attende con un kit di partenza e nuove domande.' }],
    details: [
      ['Scenario', 'Un’isola circondata da abitazioni evacuate e un cratere immenso, coperto da una nebbia bassa e fitta.'],
      ['Atmosfera', 'Le interferenze rendono ogni dispositivo incerto. La torre è l’unico luogo in cui le comunicazioni sembrano trovare un varco.'],
      ['Presenze', 'Il punto di partenza per gli avventurieri, con un kit di esplorazione e poche risposte già pronte.'],
    ],
  },
  {
    id: 1,
    label: 'Piano 1',
    name: 'Bosco floreale',
    short: 'Erba · profumi e radure',
    element: 'Erba',
    icon: '✦',
    status: 'available',
    accent: 'leaf',
    terrain: 'Alberi variopinti · fiori · radure',
    summary: 'Un bosco luminoso e profumato, dove sentieri, fiori e una casa avvolta dalle ragnatele costruiscono un paesaggio più ambiguo di quanto sembri.',
    mood: 'Bellezza sospetta',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/WYVyBVLZGVrbueqv.webp',
    characters: [{ name: 'Primula', role: 'Oracolo dell’erba', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/gwmCtQKPSyOvWbuE.webp', bio: 'Regina del piano, amante della bellezza e dei profumi, legata allo stemma d’erba.' }],
    details: [
      ['Scenario', 'La luce attraversa le nubi della superficie e si posa su alberi dai colori diversi, erba alta e campi di fiori.'],
      ['Atmosfera', 'Una fragranza gradevole accompagna l’esplorazione, mentre una melodia lontana invita a seguire il sentiero.'],
      ['Presenze', 'Pokémon di tipo Erba, Coleottero e piccoli volatili. Se lasciati in pace, tendono a non essere aggressivi.'],
    ],
  },
  {
    id: 2,
    label: 'Piano 2',
    name: 'Deserto antico',
    short: 'Terra · dune e oasi',
    element: 'Terra',
    icon: '◇',
    status: 'available',
    accent: 'sand',
    terrain: 'Tempesta di sabbia · dune · villaggi',
    summary: 'Distese di sabbia e oasi punteggiano un ecosistema in movimento, dove orientarsi è difficile e il rispetto può diventare la migliore forma di passaggio.',
    mood: 'Orizzonte mobile',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/JhlfyiCSkbKmnCqz.webp',
    characters: [{ name: 'Chisel', role: 'Oracolo della terra', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/ggYDUwkYdxCSnAGx.webp', bio: 'Governatore delle distese sabbiose, custode delle tradizioni e dell’orientamento tra le dune.' }],
    details: [
      ['Scenario', 'Dune alte e basse, villaggi sparsi, oasi di ristoro e una piramide che emerge tra le correnti di sabbia.'],
      ['Atmosfera', 'La tempesta è perenne. I riferimenti cambiano, ma chi sa ascoltare il territorio può trovare la propria direzione.'],
      ['Presenze', 'Pokémon adattati al clima: mammiferi, piante e forme di vita legate alle oasi. Il territorio va attraversato con cautela.'],
    ],
  },
  {
    id: 3,
    label: 'Piano 3',
    name: 'Fonderie sulfuree',
    short: 'Fuoco · lavoro e calore',
    element: 'Fuoco',
    icon: '△',
    status: 'available',
    accent: 'ember',
    terrain: 'Montagna di cenere · nastri · officine',
    summary: 'Una fabbrica a cielo aperto costruita attorno a estrazione, manutenzione e smistamento: un piano organizzato, caldo e pieno di energia.',
    mood: 'Calore industriale',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/zGcGpButzbYnfDhE.webp',
    characters: [{ name: 'Celsius', role: 'Oracolo del fuoco', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/FBEuqIziCIAfqjBX.webp', bio: 'Minatore energico e magnetico: conosce la Montagna di cenere come le sue tasche.' }],
    details: [
      ['Scenario', 'La Montagna di cenere domina una rete di nastri trasportatori, miniere, abitazioni operaie e laboratori di analisi.'],
      ['Atmosfera', 'Il calore è costante ma sostenibile: lastre di terracotta e terreno umido isolano il suolo dalle zone più ardenti.'],
      ['Presenze', 'Pokémon di tipo Fuoco e Pokémon di tipo Lotta abituati alle caverne, all’estrazione e ai lavori più pesanti.'],
    ],
  },
  {
    id: 4,
    label: 'Piano 4',
    name: 'Oceano emerso',
    short: 'Acqua · relitti e porti',
    element: 'Acqua',
    icon: '≈',
    status: 'available',
    accent: 'tide',
    terrain: 'Isole · relitti · capitale portuale',
    summary: 'Un mare senza confini netti: navi distrutte e rocce diventano isole, mentre una grande città-porta osserva il traffico dell’oceano.',
    mood: 'Libertà inquieta',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/GQNbzDmzKsBnFwEx.webp',
    characters: [{ name: 'Tidal', role: 'Oracolo dell’acqua', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/WvMVLnQcLUtHZOhR.webp', bio: 'Un giovane pirata libero e sicuro di sé, al servizio delle rotte e della sua gente.' }],
    details: [
      ['Scenario', 'Pioggia insistente, rotte tra isole e relitti che si fondono con la roccia. Il commercio passa da approdi imprevedibili.'],
      ['Atmosfera', 'È un ambiente caotico, dominato dal movimento: si può puntare alla capitale o seguire una rotta più incerta.'],
      ['Presenze', 'Equipaggi, mercanti, Pokémon acquatici e abitanti del porto convivono tra pattugliamenti e acque profonde.'],
    ],
  },
  {
    id: 5,
    label: 'Piano 5',
    name: 'Palazzo bianco',
    short: 'Acciaio · disciplina e onore',
    element: 'Acciaio',
    icon: '▱',
    status: 'available',
    accent: 'steel',
    terrain: 'Grotta cristallina · regni · palazzo',
    summary: 'Oltre una grotta dalle molte vie si apre una città costruita sulla disciplina, sull’onore e su una precisa idea di ordine.',
    mood: 'Geometria severa',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/hlWiGgkJLmLIKvxR.webp',
    characters: [{ name: 'Efesto', role: 'Oracolo dell’acciaio', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/DHdVnxrMPpXRQWyb.webp', bio: 'Re indiscusso del Palazzo bianco, legato alla forza e alla sicurezza dei Pokémon d’acciaio.' }, { name: 'Irou', role: 'Presenza del Regno della spada', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/hHjkZngVIYyPWjZF.webp', bio: 'Figura legata alla disciplina del regno e alla cultura della forgia.' }, { name: 'Mizui', role: 'Presenza del Regno della spada', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/SqGHGWoxReBwMCMl.webp', bio: 'Figura legata alla città fortificata e alle sue regole d’onore.' }],
    details: [
      ['Scenario', 'L’accesso passa dalla Grotta cristallina, un labirinto di uscite e diramazioni che può essere esplorato in più modi.'],
      ['Atmosfera', 'La città è divisa tra il Regno della spada e il Regno del tempio: due presenze affiancate, non facili da leggere.'],
      ['Presenze', 'Pokémon legati al metallo, alla difesa e alla costruzione di una società fondata su regole e responsabilità.'],
    ],
  },
  {
    id: 6,
    label: 'Piano 6',
    name: 'Palude mistica',
    short: 'Psico · nebbia e percezioni',
    element: 'Psico',
    icon: '◌',
    status: 'available',
    accent: 'psy',
    terrain: 'Acque stagnanti · villaggio · visioni',
    summary: 'Un territorio umido e rarefatto, dove la nebbia modifica la percezione e il confine tra ciò che si vede e ciò che si intuisce resta sottile.',
    mood: 'Realtà sfocata',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/eauLRDpcMoqUREMb.webp',
    characters: [{ name: 'Tim, Tom e Tam', role: 'Trio degli sciamani', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/nlKyXLAKIyMvWdmK.webp', bio: 'Tre presenze del piano psichico, associate al campo degli sciamani e alla nebbia del villaggio.' }],
    details: [
      ['Scenario', 'La palude si articola in tre aree, con un villaggio immerso nella nebbia e zone dove il terreno sembra cambiare ritmo.'],
      ['Atmosfera', 'I suoni arrivano attenuati, le distanze ingannano e l’esplorazione richiede pazienza oltre che coraggio.'],
      ['Presenze', 'Pokémon e abitanti sensibili alle energie psichiche, alle variazioni dell’ambiente e a ciò che la palude preferisce non mostrare.'],
    ],
  },
  {
    id: 7,
    label: 'Piano 7',
    name: 'Soglia sigillata',
    short: 'Accesso sigillato',
    element: 'Buio',
    icon: '？',
    status: 'locked',
    accent: 'dark',
    terrain: 'Informazioni non ancora disponibili',
    summary: 'Il nome e l’elemento sono noti. Il resto appartiene ancora alle parti non documentate della campagna.',
    mood: 'Dati sigillati',
    details: [],
  },
  {
    id: 8,
    label: 'Piano 8',
    name: 'Soglia sigillata',
    short: 'Accesso sigillato',
    element: 'Folletto',
    icon: '？',
    status: 'locked',
    accent: 'fairy',
    terrain: 'Informazioni non ancora disponibili',
    summary: 'Un titolo, un elemento e nessuna anticipazione: il sipario resta chiuso finché la campagna non avrà sbloccato questa parte.',
    mood: 'Sipario chiuso',
    details: [],
  },
  {
    id: 9,
    label: 'Piano 9',
    name: 'Soglia sigillata',
    short: 'Accesso sigillato',
    element: 'Drago',
    icon: '？',
    status: 'locked',
    accent: 'dragon',
    terrain: 'Informazioni non ancora disponibili',
    summary: 'La destinazione più alta indicata nel dossier. Ogni altro dettaglio è volutamente escluso da questo archivio.',
    mood: 'Soglia finale',
    details: [],
  },
];

let exploredCount = null;
let accessMode = null;
let selectedFloor = 0;
let currentFilter = 'all';
const oracles = [
  { floor: 1, name: 'Primula', role: 'Oracolo dell’erba', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/gwmCtQKPSyOvWbuE.webp', text: 'Regina del Bosco floreale, guidata dalla bellezza, dai profumi e dal legame con il suo piano.' },
  { floor: 2, name: 'Chisel', role: 'Oracolo della terra', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/ggYDUwkYdxCSnAGx.webp', text: 'Governatore del Deserto antico: conosce le dune, le oasi e le tradizioni degli Oracoli.' },
  { floor: 3, name: 'Celsius', role: 'Oracolo del fuoco', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/FBEuqIziCIAfqjBX.webp', text: 'Minatore magnetico e dinamico, profondamente legato alla Montagna di cenere.' },
  { floor: 4, name: 'Tidal', role: 'Oracolo dell’acqua', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/WvMVLnQcLUtHZOhR.webp', text: 'Pirata giovane e libero, pattuglia l’Oceano emerso e protegge le sue rotte.' },
  { floor: 5, name: 'Efesto', role: 'Oracolo dell’acciaio', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/DHdVnxrMPpXRQWyb.webp', text: 'Re del Palazzo bianco, simbolo di forza, sicurezza e disciplina ferrea.' },
  { floor: 6, name: 'Tim, Tom e Tam', role: 'Oracoli della palude', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/nlKyXLAKIyMvWdmK.webp', text: 'Un trio di sciamani del piano psichico, immerso nella nebbia e nelle percezioni alterate.' },
];
const originMembers = [
  { name: 'Zero', role: 'Capo del Team Origin', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/hkRFrkJSwArYXqQn.webp', text: 'Il promotore dell’ideale Origin: vuole riportare il mondo a una condizione più semplice e controllabile.' },
  { name: 'Atlas', role: 'Vicecomandante', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/zNcbcpxIskvhusFR.webp', text: 'Aggressivo e determinato, è il braccio destro di Zero e guida le reclute sul campo.' },
  { name: 'Ambra', role: 'Luogotenente', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/aSYBmhtshRtilTAk.webp', text: 'Fredda e perfida, ma sorprendentemente mite quando il fratello Atlas è vicino.' },
];
const app = document.querySelector('#app');

const playerStorageKey = 'abyss-player-character-v1';
const emptyParty = () => Array.from({ length: 6 }, () => ({ name: '', id: '', sprite: '', source: '' }));
const defaultPlayerCharacter = () => ({
  saved: false,
  name: '',
  role: 'Allenatore della spedizione',
  description: '',
  notes: '',
  portrait: '',
  party: emptyParty(),
});
function loadPlayerCharacter() {
  try {
    const saved = JSON.parse(localStorage.getItem(playerStorageKey) || 'null');
    if (!saved || typeof saved !== 'object') return defaultPlayerCharacter();
    return { ...defaultPlayerCharacter(), ...saved, party: Array.from({ length: 6 }, (_, index) => ({ ...emptyParty()[0], ...(saved.party?.[index] || {}) })) };
  } catch {
    return defaultPlayerCharacter();
  }
}
let playerCharacter = loadPlayerCharacter();
if (playerCharacter.portrait?.startsWith('/assets/characters/player-trainer-default') || playerCharacter.portrait?.startsWith('data:image/svg+xml')) playerCharacter.portrait = '';
playerCharacter.party = playerCharacter.party.map((partyMember) => {
  if (!partyMember.name) return partyMember;
  const localSprite = searchablePokemonCatalog.find((pokemon) => normalizePokemonSearch(pokemon.name) === normalizePokemonSearch(partyMember.name));
  return localSprite ? { ...partyMember, name: displayPokemonName(localSprite.name), id: localSprite.id, sprite: localSprite.asset, source: 'Pokémon Database' } : { ...partyMember, sprite: '', source: '' };
});
function savePlayerCharacter() {
  playerCharacter.saved = true;
  try { localStorage.setItem(playerStorageKey, JSON.stringify(playerCharacter)); } catch { /* storage may be unavailable in private browsing */ }
}
function optimizePortrait(file, done) {
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      const maxSide = 900;
      const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
      done(canvas.toDataURL('image/webp', .84));
    };
    image.onerror = () => done(null);
    image.src = reader.result;
  };
  reader.onerror = () => done(null);
  reader.readAsDataURL(file);
}
function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}
function recipeCardMarkup(recipe, index) {
  const image = recipe.image ? `<img src="${escapeHtml(recipe.image)}" alt="${escapeHtml(recipe.name)}">` : '<div class="recipe-mt-diagram"><span>5 PICCOLI</span><i>＋</i><span>3 MEDI</span><i>＋</i><span>2 GRANDI</span></div>';
  return `<article class="recipe-card recipe-${recipe.category === 'Pokeballs' ? 'pokeball' : recipe.category === 'MT / esempio' ? 'mt' : 'held'}" data-recipe-card data-recipe-category="${escapeHtml(recipe.category)}" style="--recipe-index:${index}">
    <div class="recipe-visual">${image}<span class="recipe-category">${escapeHtml(recipe.category)}</span></div>
    <div class="recipe-copy"><h3>${escapeHtml(recipe.name)}</h3><span class="recipe-rule"></span><p class="recipe-method">${escapeHtml(recipe.method)}</p><div class="recipe-materials"><span>COMPONENTI</span><ul>${recipe.materials.map((material) => `<li>${escapeHtml(material)}</li>`).join('')}</ul></div><p class="recipe-note">${escapeHtml(recipe.note)}</p></div>
  </article>`;
}
function craftingSectionMarkup() {
  const heldCount = recipeCatalog.filter((recipe) => recipe.category === 'Held Items').length;
  const ballCount = recipeCatalog.filter((recipe) => recipe.category === 'Pokeballs').length;
  return `<section class="crafting-section section-pad" id="ricettario" aria-labelledby="crafting-title">
    <div class="crafting-heading"><div><p class="eyebrow">07 / OFFICINA DELL’ABISSO</p><h2 id="crafting-title">Ricettario<br><em>da spedizione.</em></h2></div><p>Un banco da campo per ricostruire gli strumenti incontrati lungo la Torre. Ogni ricetta usa materiali leggibili e resta sempre disponibile sotto la tua scheda.</p></div>
    <div class="crafting-toolbar" role="toolbar" aria-label="Filtra il ricettario"><button class="recipe-filter is-active" type="button" data-recipe-filter="all">TUTTE <span>${recipeCatalog.length}</span></button><button class="recipe-filter" type="button" data-recipe-filter="Held Items">HELD ITEMS <span>${heldCount}</span></button><button class="recipe-filter" type="button" data-recipe-filter="Pokeballs">POKEBALLS <span>${ballCount}</span></button><button class="recipe-filter" type="button" data-recipe-filter="MT / esempio">MT · ESEMPIO <span>1</span></button></div>
    <div class="recipe-grid">${recipeCatalog.map(recipeCardMarkup).join('')}</div>
  </section>`;
}
function playerSectionMarkup() {
  const hasCharacterArea = accessMode === 'beginner' || accessMode === 'depth';
  if (!hasCharacterArea) return '';
  const character = playerCharacter;
  return `<section class="player-section section-pad" id="personaggio" aria-labelledby="player-title">
    <div class="player-section-heading"><div><p class="eyebrow">06 / DOSSIER PERSONALE</p><h2 id="player-title">La tua scheda<br><em>di spedizione.</em></h2></div><p>Costruisci il profilo del tuo allenatore, annota ciò che scopri e prepara la squadra per la discesa. I dati vengono salvati in questo browser.</p></div>
    <form class="player-sheet" id="player-sheet-form">
      <div class="player-sheet-main">
      <aside class="player-portrait-panel"><div class="player-portrait-frame">${character.portrait ? `<img id="player-portrait" src="${escapeHtml(character.portrait)}" alt="Ritratto del personaggio${character.name ? ` ${escapeHtml(character.name)}` : ''}">` : '<div class="portrait-empty"><span>+</span><strong>Nessun ritratto caricato</strong><small>Inserisci l’immagine del tuo allenatore</small></div>'}</div><div class="portrait-actions"><label class="button button-primary" for="portrait-upload">Carica immagine <span>↗</span></label><button class="portrait-remove" type="button" data-clear-portrait ${character.portrait ? '' : 'hidden'}>Rimuovi immagine ×</button><input id="portrait-upload" type="file" accept="image/*" hidden></div><small class="player-source">Sono accettati tutti i formati immagine supportati dal browser. Il file viene salvato direttamente in questo browser.</small></aside>
        <div class="player-fields"><label><span>Nome dell’allenatore</span><input data-character-field="name" type="text" maxlength="42" value="${escapeHtml(character.name)}" placeholder="Scrivi il tuo nome"></label><label><span>Ruolo nella spedizione</span><input data-character-field="role" type="text" maxlength="60" value="${escapeHtml(character.role)}" placeholder="Scrivi il tuo ruolo"></label><label><span>Descrizione del personaggio</span><textarea data-character-field="description" rows="6" maxlength="700" placeholder="Chi sei? Cosa ti ha portato davanti alla Torre?">${escapeHtml(character.description)}</textarea></label><label><span>Appunti della spedizione</span><textarea data-character-field="notes" rows="6" maxlength="1200" placeholder="Indizi, incontri, luoghi da ricordare…">${escapeHtml(character.notes)}</textarea></label></div>
      </div>
      <div class="party-heading"><div><p class="eyebrow">SQUADRA REGISTRATA</p><h3>Sei slot per i tuoi Pokémon.</h3></div></div>
      <div class="party-grid">${character.party.map((pokemon, index) => `<article class="party-card" data-party-slot="${index}"><div class="party-slot-number">${String(index + 1).padStart(2, '0')}</div><div class="party-sprite">${pokemon.sprite ? `<img data-party-image src="${escapeHtml(pokemon.sprite)}" alt="Sprite di ${escapeHtml(pokemon.name)}">` : '<span data-party-placeholder>+</span>'}</div><label><span>Slot ${index + 1}</span><input data-party-search type="search" value="${escapeHtml(pokemon.name)}" placeholder="Cerca Pokémon…" autocomplete="off"></label><div class="party-results" data-party-results></div><button class="party-clear" type="button" data-clear-party ${pokemon.name ? '' : 'hidden'}>Rimuovi Pokémon ×</button><small class="party-source">Sprite locale · Pokémon Database</small></article>`).join('')}</div>
      <div class="player-sheet-footer"><span data-player-status>${character.saved ? 'SCHEDA SALVATA NEL BROWSER' : 'COMPILA E SALVA LA SCHEDA'}</span><button class="button button-primary" type="submit">Salva la scheda <span>↗</span></button></div>
    </form>
  </section>`;
}
function normalizePokemonSearch(value = '') { return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, ''); }
function displayPokemonName(name) { return name.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' '); }
function searchPokemonLocal(query, slot) {
  const card = document.querySelector(`[data-party-slot="${slot}"]`);
  const results = card?.querySelector('[data-party-results]');
  if (!results || query.trim().length < 2) { if (results) results.innerHTML = ''; return; }
  const needle = normalizePokemonSearch(query);
  const queryTokens = query.trim().split(/\s+/).map(normalizePokemonSearch).filter(Boolean);
  const hits = searchablePokemonCatalog.filter((pokemon) => {
    const searchableText = normalizePokemonSearch(`${pokemon.name} ${pokemon.slug || ''} ${pokemon.region || ''} ${pokemon.baseName || ''}`);
    return searchableText.includes(needle) || queryTokens.every((token) => searchableText.includes(token));
  }).slice(0, 8);
  results.innerHTML = hits.length ? hits.map((pokemon) => `<button type="button" data-pokemon-result data-slot="${slot}" data-pokemon-key="${escapeHtml(pokemon.slug || pokemon.name)}">${escapeHtml(displayPokemonName(pokemon.name))}<span>Sprite locale</span></button>`).join('') : '<span class="party-searching">Nessun Pokémon trovato nel catalogo.</span>';
  results.querySelectorAll('[data-pokemon-result]').forEach((button) => button.addEventListener('click', () => choosePokemon(button.dataset.pokemonKey, slot)));
}
function choosePokemon(slug, slot) {
  const card = document.querySelector(`[data-party-slot="${slot}"]`);
  if (!card) return;
  const results = card.querySelector('[data-party-results]');
  const pokemon = searchablePokemonCatalog.find((item) => (item.slug || item.name) === slug);
  if (!pokemon) { if (results) results.innerHTML = '<span class="party-searching">Sprite non disponibile.</span>'; return; }
  playerCharacter.party[slot] = { name: displayPokemonName(pokemon.name), id: pokemon.id, sprite: pokemon.asset, source: 'Pokémon Database' };
  savePlayerCharacter();
  updatePartyCard(slot);
}
function updatePartyCard(slot) {
  const card = document.querySelector(`[data-party-slot="${slot}"]`);
  const pokemon = playerCharacter.party[slot];
  if (!card || !pokemon) return;
  const input = card.querySelector('[data-party-search]');
  const art = card.querySelector('.party-sprite');
  if (input) input.value = pokemon.name;
  if (art) art.innerHTML = pokemon.sprite ? `<img data-party-image src="${escapeHtml(pokemon.sprite)}" alt="Sprite di ${escapeHtml(pokemon.name)}">` : '<span data-party-placeholder>+</span>';
  const results = card.querySelector('[data-party-results]');
  if (results) results.innerHTML = '';
  const clearButton = card.querySelector('[data-clear-party]');
  if (clearButton) clearButton.hidden = !pokemon.name;
  const status = document.querySelector('[data-player-status]');
  if (status) status.textContent = 'SQUADRA SALVATA NEL BROWSER';
}
function clearPokemonSlot(slot) {
  playerCharacter.party[slot] = { name: '', id: '', sprite: '', source: '' };
  savePlayerCharacter();
  updatePartyCard(slot);
  const card = document.querySelector(`[data-party-slot="${slot}"]`);
  card?.querySelector('[data-party-search]')?.focus();
}
function clearPlayerPortrait() {
  playerCharacter.portrait = '';
  savePlayerCharacter();
  const frame = document.querySelector('.player-portrait-frame');
  if (frame) frame.innerHTML = '<div class="portrait-empty"><span>+</span><strong>Nessun ritratto caricato</strong><small>Inserisci l’immagine del tuo allenatore</small></div>';
  const input = document.querySelector('#portrait-upload');
  if (input) input.value = '';
  const button = document.querySelector('[data-clear-portrait]');
  if (button) button.hidden = true;
  const status = document.querySelector('[data-player-status]');
  if (status) status.textContent = 'RITRATTO RIMOSSO E SCHEDA AGGIORNATA';
}
function bindPlayerSheet() {
  const form = document.querySelector('#player-sheet-form');
  if (!form) return;
  form.querySelectorAll('[data-character-field]').forEach((field) => field.addEventListener('input', () => { playerCharacter[field.dataset.characterField] = field.value; savePlayerCharacter(); const status = document.querySelector('[data-player-status]'); if (status) status.textContent = 'MODIFICHE SALVATE AUTOMATICAMENTE'; }));
  form.addEventListener('submit', (event) => { event.preventDefault(); savePlayerCharacter(); const status = document.querySelector('[data-player-status]'); if (status) status.textContent = 'SCHEDA SALVATA NEL BROWSER'; });
  document.querySelector('#portrait-upload')?.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const status = document.querySelector('[data-player-status]');
    const imageExtension = /\.(avif|bmp|gif|jpe?g|png|svg|tiff?|webp)$/i.test(file.name);
    if (!(file.type.startsWith('image/') || imageExtension)) {
      if (status) status.textContent = 'FILE NON VALIDO: SELEZIONA UN’IMMAGINE';
      event.target.value = '';
      return;
    }
    if (status) status.textContent = 'CARICAMENTO DEL RITRATTO…';
    optimizePortrait(file, (dataUrl) => {
      if (!dataUrl) { if (status) status.textContent = 'IMPOSSIBILE LEGGERE L’IMMAGINE'; return; }
      playerCharacter.portrait = dataUrl;
      savePlayerCharacter();
      const frame = document.querySelector('.player-portrait-frame');
      if (frame) frame.innerHTML = `<img id="player-portrait" src="${escapeHtml(dataUrl)}" alt="Ritratto del personaggio${playerCharacter.name ? ` ${escapeHtml(playerCharacter.name)}` : ''}">`;
      const clearButton = document.querySelector('[data-clear-portrait]');
      if (clearButton) clearButton.hidden = false;
      if (status) status.textContent = 'RITRATTO CARICATO E SALVATO';
    });
  });
  document.querySelector('[data-clear-portrait]')?.addEventListener('click', clearPlayerPortrait);
  form.querySelectorAll('[data-party-search]').forEach((input) => { let timer; input.addEventListener('input', () => { const slot = Number(input.closest('[data-party-slot]').dataset.partySlot); clearTimeout(timer); timer = setTimeout(() => searchPokemonLocal(input.value, slot), 160); }); });
  form.querySelectorAll('[data-clear-party]').forEach((button) => button.addEventListener('click', () => { const slot = Number(button.closest('[data-party-slot]').dataset.partySlot); clearPokemonSlot(slot); }));
}

floors.forEach((floor) => {
  const catalog = zoneCatalog[String(floor.id)] || [];
  floor.mapCatalog = catalog;
  floor.mainMaps = catalog.filter((item) => item.kind === 'main');
  const aiMain = floor.mainMaps.find((item) => item.path.includes('-ai.'));
  if (aiMain) floor.mainMaps = [aiMain, ...floor.mainMaps.filter((item) => item !== aiMain)];
  floor.zones = catalog.filter((item) => item.kind !== 'main');
  floor.image = floor.mainMaps[0]?.path || floor.image;
  if (floor.id === 0) floor.image = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/JiAKnYjBXxhxaufN.webp';
});

function isExplored(floor) { return floor.id === 0 || (exploredCount !== null && floor.id <= exploredCount); }
function isOpen(floor) { return floor.status === 'available' && isExplored(floor); }
function accessibleFloors() { return floors.filter(isOpen); }
function zoneTitle(source) { return source.replace(/^[0-9. -]+/, '').replace(/\.(png|jpg|jpeg)$/i, '').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim() || 'Zona del piano'; }

function floorStatusLabel(status) {
  return status === 'available' ? 'Sbloccato nel dossier' : 'Non ancora sbloccato';
}

function floorCard(floor) {
  const open = isOpen(floor);
  const isSelected = selectedFloor === floor.id;
  const publicName = open ? floor.name : 'Accesso sigillato';
  const publicShort = open ? floor.short : 'Nessun dato disponibile';
  return `
    <button class="floor-node ${open ? 'available' : 'locked'} ${isSelected ? 'selected' : ''}" data-floor="${floor.id}" aria-pressed="${isSelected}" aria-label="${open ? `${floor.label}: ${floor.name}` : 'Accesso sigillato'}" >
      <span class="floor-index">${open ? String(floor.id).padStart(2, '0') : '??'}</span>
      <span class="floor-glyph" aria-hidden="true">${open ? floor.icon : '×'}</span>
      <span class="floor-copy"><strong>${publicName}</strong><small>${publicShort}</small></span>
      <span class="floor-state">${open ? 'aperto' : 'sigillo'}</span>
    </button>
  `;
}

function detailPanel(floor) {
  const isLocked = !isOpen(floor);
  const rows = floor.details.map(([label, text]) => `<div class="detail-row"><dt>${label}</dt><dd>${text}</dd></div>`).join('');
  return `
    <div class="detail-kicker"><span class="eyebrow">${floor.label}</span><span class="detail-status ${isLocked ? 'locked' : ''}"><span class="status-dot"></span>${floorStatusLabel(floor.status)}</span></div>
    <h3>${isLocked ? 'Accesso sigillato' : floor.name}</h3>
    ${isLocked ? `<div class="locked-note locked-large"><span aria-hidden="true">×</span><div><strong>Accesso non disponibile</strong><p>Questa soglia non rientra nei piani indicati nella pergamena iniziale, oppure non è ancora documentata nel dossier pubblico.</p></div></div>` : `<div class="detail-meta"><span class="element-chip accent-${floor.accent}">${floor.element}</span><span>${floor.mood}</span></div><div class="detail-floor-image" data-map-stage><img src="${floor.image}" alt="Immagine rappresentativa del ${floor.name}"><button class="map-fullscreen" type="button" data-map-fullscreen aria-label="Visualizza l’immagine di ${floor.name} a schermo intero">⛶ <span>Schermo intero</span></button></div><div class="detail-summary-block"><span class="detail-section-label">SINTESI DEL PIANO</span><p class="detail-summary">${floor.summary}</p></div><div class="detail-details-block"><span class="detail-section-label">NOTE DI ESPLORAZIONE</span><dl class="detail-list">${rows}</dl></div>`}
  `;
}
function directoryCards(items, kind) {
  return items.map((person, index) => `<article class="directory-card ${kind}-card" style="--card-index:${index}"><div class="directory-portrait"><img src="${person.image}" alt="${person.name}"><span class="portrait-ring"></span></div><div class="directory-copy"><span class="directory-role">${person.role}</span><h3>${person.name}</h3><p>${person.text}</p></div></article>`).join('');
}
function mapExplorer(floor) {
  const base = { path: floor.image };
  return `<div class="map-explorer"><div class="map-canvas" data-map-stage><img src="${base.path}" alt="Immagine rappresentativa del ${floor.name}"><span class="map-canvas-label">IMMAGINE DEL PIANO · ${floor.label.toUpperCase()}</span><button class="map-fullscreen" type="button" data-map-fullscreen aria-label="Visualizza l’immagine di ${floor.name} a schermo intero">⛶ <span>Schermo intero</span></button></div></div>`;
}

function render() {
  const openFloors = accessibleFloors();
  const openCount = openFloors.length;
  const isBeginner = accessMode === 'beginner';
  const visibleFloors = isBeginner ? floors.slice(0, 1) : floors;
  const lockedCount = visibleFloors.length - openCount;
  const visibleOracles = isBeginner ? [] : oracles.filter((oracle) => oracle.floor <= (exploredCount ?? -1));
  app.innerHTML = `
    <div class="site-shell${isBeginner ? ' beginner-mode' : ''}">
      ${exploredCount === null ? `<div class="access-overlay" role="dialog" aria-modal="true" aria-labelledby="access-title"><div class="access-backdrop"></div><form class="access-scroll" id="access-form"><span class="access-mark">B</span><p class="eyebrow">REGISTRO DI ACCESSO · ERUNA</p><h2 id="access-title">Come vuoi iniziare la spedizione?</h2><p>Scegli il livello di accesso al dossier. Potrai sempre ricaricare la pagina per cambiare risposta.</p><div class="access-options" role="radiogroup" aria-label="Modalità di accesso"><label class="access-option"><input type="radio" name="access-mode" value="beginner" checked><span><strong>1) Sono un nuovo allenatore della spedizione.</strong><small>Mostra solo la lettera e il primo piano della Superficie.</small></span></label><label class="access-option"><input type="radio" name="access-mode" value="depth"><span><strong>2) Quanto ti sei mosso in profondità?</strong><small>Inserisci il numero del piano che hai raggiunto per aprire il dossier corrispondente.</small></span></label></div><div class="access-field depth-field" id="depth-field" hidden><label for="explored-count">Piano raggiunto <span>0–9</span></label><input id="explored-count" name="explored" type="number" min="0" max="9" value="0"><span>/ 9</span></div><button class="button button-primary" type="submit">Apri il dossier <span>↗</span></button><small>La scelta resta attiva fino al prossimo aggiornamento della pagina.</small></form></div>` : ''}
      <header class="topbar">
        <a class="brand" href="#top" aria-label="Pokémon Abyss, torna all’inizio">
          <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
          <span><strong>ABYSS</strong><small>TORRE DELL’ORIZZONTE</small></span>
        </a>
        <nav class="topnav" aria-label="Navigazione principale">
          <a href="#torre">La torre</a>
          <a href="#oracoli">Oracoli</a>
          <a href="#origin">Origin</a>
        </nav>
        <a class="nav-pill" href="#torre"><span class="nav-pulse"></span> Archivio vivo</a>
      </header>

      <main id="top">
        <section class="hero invitation-hero section-pad" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="eyebrow">LETTERA D’INVITO <span>/</span> PROF. BARBAGIANNI</p>
            <h1 id="hero-title">Avventurieri,<br><em>l’Abisso vi attende.</em></h1>
            <p class="hero-lede">L’incipit della campagna non è una profezia: è una convocazione. Leggi la lettera, prepara la squadra e scendi sotto la nebbia di Eruna.</p>
            <div class="hero-actions"><a class="button button-primary" href="#lettera">Leggi la lettera <span>↓</span></a><a class="text-link" href="#torre">Vai alla mappa <span>↘</span></a></div>
          </div>
          <div class="hero-letter${isBeginner ? ' beginner-letter' : ''}" id="lettera" aria-label="Lettera d’invito del professor Barbagianni">
            ${isBeginner ? `<div class="sealed-letter-wrap"><button class="sealed-envelope" type="button" data-open-letter aria-expanded="false"><span class="envelope-flap"></span><span class="envelope-paper">LETTERA D’INVITO<br><strong>ALLA SPEDIZIONE</strong></span><span class="envelope-seal" aria-hidden="true">B</span><span class="envelope-hint">Apri la lettera ↗</span></button><div class="sealed-letter-content" hidden>` : ''}
            <div class="letter-paper">
              <div class="letter-seal" aria-hidden="true">B</div>
              <div class="letter-head"><span>ARCHIVIO DELLA TORRE DELL’ORIZZONTE</span><span>ERUNA · 00:00</span></div>
              <p class="letter-date">LETTERA UFFICIALE · ARCHIVIO BARBAGIANNI</p>
              <h2>Lettera d’invito<br>alla spedizione.</h2>
              <div class="letter-fulltext">
                <p>Avventurieri e allenatori, siete stati chiamati per esplorare ed analizzare un fenomeno unico nel suo genere. Nell’ultimo periodo nell’arcipelago orizzonte, più precisamente nell’isola Eruna, si è generato un cratere immenso, con al centro una torre.</p>
                <p>Non sappiamo esattamente che cosa sia, ma sappiamo che il percorso all’interno della torre è attraversabile e finisce con una grande porta.</p>
                <p>Inoltre, ipotizziamo la torre sia un luogo di passaggio, dato che l’abbiamo già controllata in passato e non abbiamo notato nulla di strano, ma bisognerebbe esplorare più a fondo il luogo…</p>
                <p>Ed è qui che entrate in gioco voi: vi lasciamo completa libertà di movimento e metodo con cui vorrete esplorare L’ABISSO (sì con tanta fantasia è il nome che i nostri scienziati hanno dato al cratere….).</p>
                <p>La popolazione è già stata evacuata, e portata nelle isole vicine.</p>
                <p>L' obiettivo penso sia chiaro, comprendere la natura del fenomeno e trovare un modo per risolvere la situazione.</p>
                <p>Attendiamo i vostri aggiornamenti, e al vostro sbarco troverete un kit di partenza, con tutto il necessario per lanciarvi nell’avventura.</p>
                <p>Buon viaggio allenatori e che la fortuna vi assista!</p>
              </div>
              <div class="letter-signature"><span></span><strong>-Professor Barbagianni</strong></div>
              <div class="letter-corner" aria-hidden="true">⌁</div>
            </div>
            ${isBeginner ? `</div></div>` : ''}
          </div>
        </section>

        <section class="tower-section section-pad" id="torre" aria-labelledby="tower-title">
          <div class="section-heading"><div><p class="eyebrow">01 / CARTOGRAFIA</p><h2 id="tower-title">La Torre dell’Orizzonte</h2></div><p>Un’architettura impossibile composta da ambienti distinti e da una stessa sensazione: qualcosa, dentro i mattoni, sta imparando.</p></div>
          <div class="tower-menu-stage"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663938569359/wVOFopOwhwkwDODT.webp" alt="Silhouette dell’isola di Eruna con la Torre dell’Orizzonte"><div class="stage-vignette"></div><div class="stage-copy"><span>ARCHIVIO DELLA TORRE</span><strong>ERUNA / -∞</strong><small>${exploredCount === null ? 'Attendi il registro di accesso.' : 'Seleziona una soglia nella mappa sottostante.'}</small></div><div class="stage-spine"><span>SUPERFICIE</span><i></i><span>ABISSO</span></div></div>
          <div class="tower-layout">
            <div class="tower-map-wrap">
              <div class="map-toolbar"><div class="map-legend"><span><i class="legend-dot open"></i> scheda aperta</span><span><i class="legend-dot closed"></i> sigillo attivo</span></div><span class="map-count">${openCount} / ${visibleFloors.length} accessi leggibili</span></div>
              <div class="tower-map" aria-label="Mappa verticale discendente della Torre dell’Orizzonte"><div class="depth-marker"><span>SUPERFICIE</span><i>↓</i><span>ABISSO</span></div>${visibleFloors.map(floorCard).join('')}</div>
            </div>
            <aside class="floor-detail" aria-live="polite"><div class="detail-stamp">SCHEDA DI CAMPO <span>ARCH. 01</span></div><div class="detail-inner">${detailPanel(floors[selectedFloor])}</div><div class="detail-footer"><span>SELEZIONA UNA SOGLIA</span><span>↳ per orientarti</span></div></aside>
          </div>
          <div class="tower-footnote"><span>NOTA DI LETTURA</span> Il Piano 0 è la superficie. Da qui in poi si scende: ogni numero è una soglia più profonda, non un piano più alto.</div>
        </section>

        <section class="factions-section section-pad" id="oracoli" aria-labelledby="oracoli-title">
          <div class="faction-intro oracle-intro"><div class="faction-index">03 / ARCHIVIO VIVENTE</div><div class="faction-copy"><p class="eyebrow">GLI ORACOLI</p><h2 id="oracoli-title">Custodi, rivali,<br><em>una stessa torre.</em></h2><p>Scelti dagli stemmi naturali, gli Oracoli sono legati al piano che proteggono e al suo elemento. Questa galleria raccoglie solo le presenze già incontrate o descritte.</p></div></div>
          <div class="directory-block oracle-directory"><div class="directory-heading"><span>REGISTRO DEI CUSTODI</span><small>${visibleOracles.length} / ${oracles.length} PRESENZE SBLOCCATE</small></div>${visibleOracles.length ? `<div class="directory-grid">${directoryCards(visibleOracles, 'oracle')}</div>` : '<div class="oracle-locked-state"><strong>REGISTRO IN ATTESA</strong><p>Gli Oracoli compaiono quando il relativo piano viene raggiunto.</p></div>'}</div>
          <div class="faction-intro origin-intro" id="origin"><div class="faction-index">04 / FAZIONE OSTILE</div><div class="faction-copy"><p class="eyebrow">TEAM ORIGIN</p><h2 id="origin-title">Un mondo più semplice.<br><em>Una visione più pericolosa.</em></h2><p>Una fazione organizzata e determinata, convinta che il mondo Pokémon debba tornare a una condizione primordiale, dove la legge del più forte rende tutto più facile da controllare.</p></div></div>
          <div class="directory-block origin-directory"><div class="directory-heading"><span>CATENA DI COMANDO</span><small>03 PROFILI PUBBLICI</small></div><div class="directory-grid">${directoryCards(originMembers, 'origin')}</div></div>
        </section>
        ${playerSectionMarkup()}
        ${craftingSectionMarkup()}
        <section class="closing section-pad" id="oracoli-note" aria-labelledby="closing-title"><div class="closing-line"></div><p class="eyebrow">L’ABISSO RESTA APERTO</p><h2 id="closing-title">La parte più importante<br>è quella che <em>non è ancora scritta.</em></h2><p class="closing-copy">Torna qui quando nuovi piani verranno sbloccati. Fino ad allora, questa mappa custodisce solo ciò che serve per partire.</p><a class="button button-ghost" href="#top">Torna alla superficie <span>↑</span></a></section>
      </main>
      <footer class="site-footer"><div class="footer-brand"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><strong>ABYSS</strong></div><p>Archivio pubblico della campagna Pokémon Abyss.<br>Costruito per esploratori curiosi, non per rovinare le sorprese.</p><div class="footer-meta"><span>ERUNA / TORRE DELL’ORIZZONTE</span><span>NO SPOILER BEYOND THIS POINT</span></div></footer>
      <div class="floor-modal" id="floor-modal" aria-hidden="true"><div class="modal-backdrop" data-close-modal></div><article class="floor-sheet floor-atlas-sheet" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" data-close-modal aria-label="Chiudi scheda">×</button><div class="modal-visual atlas-visual" id="modal-atlas"></div><div class="modal-content"><p class="eyebrow" id="modal-label"></p><h2 id="modal-title"></h2><div class="modal-meta" id="modal-meta"></div><p class="modal-summary" id="modal-summary"></p><div class="modal-grid"><div><span class="modal-section-label">NOTE DI CAMPO</span><dl id="modal-details"></dl></div><div><span class="modal-section-label">PRESENZA DEL PIANO</span><div class="character-list" id="modal-characters"></div></div></div></div></article></div>
    </div>
  `;

  bindInteractions();
}

function selectFloor(id) {
  selectedFloor = Number(id);
  const panel = document.querySelector('.floor-detail');
  const floor = floors[selectedFloor];
  if (panel) {
    panel.querySelector('.detail-inner').innerHTML = detailPanel(floor);
    bindMapFullscreen();
    document.querySelectorAll('.floor-node').forEach((node) => {
      const selected = Number(node.dataset.floor) === selectedFloor;
      node.classList.toggle('selected', selected);
      node.setAttribute('aria-pressed', String(selected));
    });
  }
}
function openFloorSheet(id) {
  const floor = floors[Number(id)];
  if (!floor || !isOpen(floor)) return;
  const modal = document.querySelector('#floor-modal');
  document.querySelector('#modal-atlas').innerHTML = mapExplorer(floor);
  document.querySelector('#modal-label').textContent = `${floor.label} / SCHEDA DI ESPLORAZIONE`;
  document.querySelector('#modal-title').textContent = floor.name;
  document.querySelector('#modal-meta').innerHTML = `<span class="element-chip accent-${floor.accent}">${floor.element}</span><span>${floor.terrain}</span>`;
  document.querySelector('#modal-summary').textContent = floor.summary;
  document.querySelector('#modal-details').innerHTML = floor.details.map(([label, text]) => `<div class="modal-detail-row"><dt>${label}</dt><dd>${text}</dd></div>`).join('');
  document.querySelector('#modal-characters').innerHTML = (floor.characters || []).map((character) => `<div class="character-card ${floor.id === 0 && character.name === 'Professor Barbagianni' ? 'professor-card' : ''}"><div class="character-image-frame"><img src="${character.image}" alt="${character.name}"></div><div class="character-copy"><strong>${character.name}</strong><span>${character.role}</span><p>${character.bio}</p></div></div>`).join('');
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
}
function closeFloorSheet() { const modal = document.querySelector('#floor-modal'); if (!modal) return; modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); }

function bindMapFullscreen() {
  document.querySelectorAll('[data-map-fullscreen]').forEach((button) => {
    if (button.dataset.fullscreenBound) return;
    button.dataset.fullscreenBound = 'true';
    button.addEventListener('click', async () => {
      const stage = button.closest('[data-map-stage]');
      if (!stage) return;
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else if (stage.requestFullscreen) await stage.requestFullscreen();
      } catch { stage.classList.toggle('is-map-expanded'); }
    });
  });
}

function bindInteractions() {
  document.querySelectorAll('[data-open-letter]').forEach((button) => button.addEventListener('click', () => { const wrapper = button.closest('.sealed-letter-wrap'); if (!wrapper) return; wrapper.classList.add('is-open'); button.hidden = true; button.setAttribute('aria-expanded', 'true'); const content = wrapper.querySelector('.sealed-letter-content'); if (content) content.hidden = false; }));
  const accessForm = document.querySelector('#access-form');
  const depthField = document.querySelector('#depth-field');
  document.querySelectorAll('input[name="access-mode"]').forEach((input) => input.addEventListener('change', () => { const isDepth = input.value === 'depth' && input.checked; if (depthField) depthField.hidden = !isDepth; const depthInput = document.querySelector('#explored-count'); if (depthInput) depthInput.required = isDepth; }));
  if (accessForm) accessForm.addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(accessForm); accessMode = data.get('access-mode') === 'depth' ? 'depth' : 'beginner'; exploredCount = accessMode === 'beginner' ? 0 : Math.max(0, Math.min(9, Number(data.get('explored') || 0))); render(); });
  document.querySelectorAll('[data-floor]').forEach((button) => {
    button.addEventListener('click', () => {
      selectFloor(button.dataset.floor);
      if (button.classList.contains('archive-card')) document.querySelector('#torre').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeFloorSheet));
  bindMapFullscreen();
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeFloorSheet(); });
  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll('.filter-button').forEach((item) => item.classList.toggle('active', item.dataset.filter === currentFilter));
      document.querySelectorAll('.archive-card').forEach((card) => { card.hidden = currentFilter !== 'all' && card.dataset.status !== currentFilter; });
    });
  });
  document.querySelectorAll('[data-library-filter]').forEach((button) => button.addEventListener('click', () => { const filter = button.dataset.libraryFilter; document.querySelectorAll('[data-library-filter]').forEach((item) => item.classList.toggle('active', item === button)); document.querySelectorAll('.library-card').forEach((card) => { card.hidden = filter !== 'all' && card.dataset.libraryCategory !== filter; }); }));
  document.querySelectorAll('[data-recipe-filter]').forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.recipeFilter;
    document.querySelectorAll('[data-recipe-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
    document.querySelectorAll('[data-recipe-card]').forEach((card) => { card.hidden = filter !== 'all' && card.dataset.recipeCategory !== filter; });
  }));
  bindPlayerSheet();
}

render();
