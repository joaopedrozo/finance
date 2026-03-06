// ═══════════════════════════════════════════════════
//  JCRP FAMILY FINANCE · PWA · v76
// ═══════════════════════════════════════════════════

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz7fY0H-OV2_7vzb69KMVrXQ-AxdVKsHuNXDqA8e7A2gxLW4_7_Msl4gXGvdMzpZsxQ/exec';

const RULES_ITAU = [
  ['JUROS LIMITE','Fixa','IMPOSTOS'],['IOF','Fixa','IMPOSTOS'],
  ['INT DOC ARREC E-SOCI','Fixa','FUNCIONÁRIAS'],['PAG TIT INT 104','Fixa','CONDOMÍNIO'],
  ['PAG TIT BANCO 104','Fixa','CONDOMÍNIO'],['PAG TIT INT 197','Fixa','CATARINA'],
  ['PAG TIT BANCO 197','Fixa','CATARINA'],['PAG TIT INT 237','Fixa','CARRO'],
  ['PAG TIT BANCO 237','Fixa','CARRO'],['PAG TIT INT 338','Fixa','SEGUROS'],
  ['DA  CELESC','Fixa','LUZ'],['DA  CLARO','Fixa','ASSINATURAS'],
  ['DA  TIM CELU','Fixa','ASSINATURAS'],
  ['PIX TRANSF PATRICI','Fixa','FUNCIONÁRIAS'],['PIX TRANSF NARA','Fixa','FUNCIONÁRIAS'],
  ['PIX WHATS NARA','Fixa','FUNCIONÁRIAS'],['PIX TRANSF FRANCIS','Fixa','FUNCIONÁRIAS'],
  ['PIX TRANSF LUIGI','Variáveis','PRESENTES'],['ALEXANDRE BOTTARO','Variáveis','DOAÇÕES'],
  ['CARTAO ITAU THE ONE',null,null],['PIX TRANSF JOAO RI',null,null],
  ['SALDO TOTAL',null,null],
];
const RULES_UNICRED = [
  ['TRANSFERENCIA ENTRE CONTAS',null,null],['JOAO RICARDO DOZZA PEDROZO',null,null],
  ['GENIAL INVESTIMENTOS',null,null],
  ['LIQUIDACAO DE PARCELA DE FINANCIAMENTO','Fixa','APTO'],
  ['JUROS CHEQUE ESPECIAL','Fixa','IMPOSTOS'],
  ['DEB MENSALID QUANTA PREVID','Fixa','PREVIDENCIA / VIDA'],
  ['DEBITO FATURA',null,null],['IOF.*SALDO DEV','Fixa','IMPOSTOS'],
  ['LUIGI FREIRE PEDROZO','Variáveis','PRESENTES'],
  ['JEHNNIFER','Variáveis','MORADIA'],['ALEXANDRE BOTTARO','Variáveis','DOAÇÕES'],
  ['LIQUIDACAO DE TITULO',null,null],
];
const RULES_CARD = [
  ['HIPPO','Variáveis','SUPERMERCADO'],['ANGELONI','Variáveis','SUPERMERCADO'],
  ['UBER EATS','Variáveis','ALIMENTAÇÃO'],['UBER','Variáveis','TRANSPORTE'],
  ['99APP','Variáveis','TRANSPORTE'],['LATAM','Variáveis','VIAGEM'],
  ['BOOKING','Variáveis','VIAGEM'],['ROYAL CARIBBEAN','Variáveis','VIAGEM'],
  ['APPLE','Fixa','ASSINATURAS'],['NETFLIX','Fixa','ASSINATURAS'],
  ['SPOTIFY','Fixa','ASSINATURAS'],['IFOOD CLUB','Fixa','ASSINATURAS'],
  ['IOF TRANSACOES','Fixa','IMPOSTOS'],['IOF COMPRA','Fixa','IMPOSTOS'],
  ['RAIA','Variáveis','FARMÁCIA'],['DIMED','Variáveis','FARMÁCIA'],
  ['CLINICA KOZM','Variáveis','BELEZA ESTÉTICA BEM ESTAR'],
  ['DOUGLAS LUCAS','Variáveis','BELEZA ESTÉTICA BEM ESTAR'],
  ['BODY HALL','Variáveis','ESPORTE'],['DECATHLON','Variáveis','ESPORTE'],
  ['AMAZON','Variáveis','COMPRAS J'],['MERCADO LIVRE','Variáveis','COMPRAS J'],
  ['IFOOD','Variáveis','ALIMENTAÇÃO'],
];

const BUDGET = {
  'APTO':8000,'CONDOMÍNIO':3500,'LUZ':1000,'FUNCIONÁRIAS':8000,'ASSINATURAS':600,
  'IMPOSTOS':2200,'CARRO':17000,'SEGUROS':1500,'EDUCAÇÃO':500,'RICARDO':1500,'CATARINA':6000,
  'SUPERMERCADO':7000,'ALIMENTAÇÃO':3000,'TRANSPORTE':1000,'FARMÁCIA':2500,
  'SAÚDE':2000,'BELEZA ESTÉTICA BEM ESTAR':3000,'ESPORTE':3000,'COMPRAS J':5000,
  'COMPRAS P':5000,'COMPRAS CR':2000,'LAZER':2000,'LAVANDERIA':500,'MORADIA':2000,
  'PRESENTES':1000,'VIAGEM':25000,'DOAÇÕES':1000,'PREVIDENCIA / VIDA':2000,
};

const MNAMES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

// ── STORES ────────────────────────────────────────
const cache = {
  load: function() { try { return JSON.parse(localStorage.getItem('jcrp_txs')||'[]'); } catch(e) { return []; } },
  save: function(t) { try { localStorage.setItem('jcrp_txs', JSON.stringify(t)); } catch(e) {} }
};
const localEdits = {
  _k: 'jcrp_local_edits',
  load: function() { try { return JSON.parse(localStorage.getItem(this._k)||'{}'); } catch(e) { return {}; } },
  set: function(id, data) { var e=this.load(); e[id]=data; localStorage.setItem(this._k, JSON.stringify(e)); },
  clear: function(id) { var e=this.load(); delete e[id]; localStorage.setItem(this._k, JSON.stringify(e)); },
  applyTo: function(txs) {
    var e=this.load();
    return txs
      .map(function(t){ return e[t.id] ? Object.assign({}, t, e[t.id]) : t; })
      .filter(function(t){ return !(e[t.id] && e[t.id]._deleted); });
  }
};
const syncQueue = {
  _k: 'jcrp_sync_queue',
  load: function() { try { return JSON.parse(localStorage.getItem(this._k)||'[]'); } catch(e) { return []; } },
  save: function(q) { try { localStorage.setItem(this._k, JSON.stringify(q)); } catch(e) {} },
  add: function(item) { var q=this.load(); q.push(item); this.save(q); },
  count: function() { return this.load().length; }
};
const reviewed = {
  _k: 'jcrp_reviewed',
  load: function() { try { return JSON.parse(localStorage.getItem(this._k)||'{}'); } catch(e) { return {}; } },
  approve: function(id) { var r=this.load(); r[id]=true; localStorage.setItem(this._k, JSON.stringify(r)); },
  isReviewed: function(id) { return !!this.load()[id]; }
};
const patStore = {
  _k: 'jcrp_patrimonio',
  _def: function() {
    return { grupos:[
      {id:'imoveis', nome:'Imóveis',      itens:[{id:'i1',name:'Apartamento',val:1500000}]},
      {id:'invest',  nome:'Investimentos', itens:[{id:'i2',name:'Portfel / BTG',val:867803}]},
      {id:'liquid',  nome:'Liquidez',      itens:[{id:'i3',name:'Conta Corrente',val:50000}]},
      {id:'empresa', nome:'Empresa',       itens:[{id:'i4',name:'Participação',val:200000}]},
    ]};
  },
  load: function() { try { return JSON.parse(localStorage.getItem(this._k)||'null') || this._def(); } catch(e) { return this._def(); } },
  save: function(obj) { try { localStorage.setItem(this._k, JSON.stringify(obj)); } catch(e) {} }
};
const fundoStore = {
  _k: 'jcrp_fundo',
  load: function() { try { return JSON.parse(localStorage.getItem(this._k)||'null'); } catch(e) { return null; } },
  save: function(obj) { try { localStorage.setItem(this._k, JSON.stringify(obj)); } catch(e) {} },
  clear: function() { localStorage.removeItem(this._k); }
};
const budgetStore = {
  _k: 'jcrp_budget',
  load: function() { try { return JSON.parse(localStorage.getItem(this._k)||'null'); } catch(e) { return null; } },
  save: function(obj) { try { localStorage.setItem(this._k, JSON.stringify(obj)); } catch(e) {} }
};
const userRules = {
  _k: 'jcrp_rules',
  load: function() { try { return JSON.parse(localStorage.getItem(this._k)||'[]'); } catch(e) { return []; } },
  add: function(kw, sub) { var r=this.load(); r.push({kw:kw, sub:sub, cat:getCat(sub)}); localStorage.setItem(this._k, JSON.stringify(r)); },
  remove: function(kw) { var r=this.load().filter(function(x){ return x.kw!==kw; }); localStorage.setItem(this._k, JSON.stringify(r)); }
};
const threshold = {
  _k: 'jcrp_threshold',
  get: function() { return parseFloat(localStorage.getItem(this._k)||'0')||0; },
  set: function(v) { localStorage.setItem(this._k, String(v)); }
};

const STATE = { txs:[], synced:false, error:null, hidden:false };
var activeMonth = null;
var reviewQueue = [];
var pendingTxs  = [];
var splitTxId   = null;
var splitParts  = [];

// ── CONFIG ────────────────────────────────────────
function getCfg() { try { return JSON.parse(localStorage.getItem('jcrp_cfg')||'null'); } catch(e) { return null; } }
function saveCfg(obj) { localStorage.setItem('jcrp_cfg', JSON.stringify(obj)); }
function isConfigured() { var c=getCfg(); return !!(c&&c.url&&c.sheet); }

// ── CAT MAP ───────────────────────────────────────
var FIXA_SUBS = ['APTO','CONDOMÍNIO','LUZ','FUNCIONÁRIAS','ASSINATURAS','IMPOSTOS','CARRO','SEGUROS','EDUCAÇÃO','RICARDO','CATARINA','PREVIDENCIA / VIDA'];
function getCat(sub) { return FIXA_SUBS.indexOf(sub) >= 0 ? 'Fixa' : 'Variáveis'; }

function categorize(desc, type) {
  var d = (desc||'').toUpperCase();
  var rules = userRules.load();
  for (var i=0; i<rules.length; i++) {
    if (d.indexOf(rules[i].kw) >= 0) return {cat: rules[i].cat||'Variáveis', sub: rules[i].sub};
  }
  var rlist = type==='itau' ? RULES_ITAU : type==='unicred' ? RULES_UNICRED : RULES_CARD;
  for (var j=0; j<rlist.length; j++) {
    var kw=rlist[j][0], cat=rlist[j][1], sub=rlist[j][2];
    try { if (new RegExp(kw).test(d)) return {cat:cat, sub:sub}; }
    catch(e) { if (d.indexOf(kw) >= 0) return {cat:cat, sub:sub}; }
  }
  return {cat:'Variáveis', sub:'NÃO CATEGORIZADO'};
}

function applyUserRulesToAll() {
  var n = 0;
  STATE.txs = STATE.txs.map(function(t) {
    if (t.sub && t.sub !== 'NÃO CATEGORIZADO') return t;
    var r = categorize(t.desc, t.source||'card');
    if (r.sub && r.sub !== 'NÃO CATEGORIZADO') { n++; return Object.assign({}, t, {cat:r.cat, sub:r.sub}); }
    return t;
  });
  cache.save(STATE.txs);
  return n;
}

// ── FORMAT ────────────────────────────────────────
function fmt(v) {
  if (STATE.hidden) return 'R$ ••••••';
  var n = parseFloat(v)||0;
  return 'R$\u00a0' + n.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
}
function fmtK(v) {
  if (STATE.hidden) return '•••';
  var n = parseFloat(v)||0;
  if (n >= 1000000) return 'R$\u00a0' + (n/1000000).toFixed(1) + 'M';
  if (n >= 1000) return 'R$\u00a0' + (n/1000).toFixed(0) + 'k';
  return 'R$\u00a0' + n.toFixed(0);
}
function pctOf(a, b) { return b ? Math.round((a/b)*100) : 0; }

// ── SHEETS ────────────────────────────────────────
function sheetsGet(action) {
  var cfg = getCfg();
  if (!cfg) return Promise.reject(new Error('not configured'));
  return fetch(cfg.url + '?action=' + action + '&sheet=' + encodeURIComponent(cfg.sheet)).then(function(r){ return r.json(); });
}
function sheetsPost(data) {
  var cfg = getCfg();
  if (!cfg) return Promise.reject(new Error('not configured'));
  var body = Object.assign({}, data, {sheet: cfg.sheet});
  return fetch(cfg.url, {method:'POST', body:JSON.stringify(body)}).then(function(r){ return r.json(); });
}
function flushSyncQueue() {
  var q = syncQueue.load();
  if (!q.length || !isConfigured()) return Promise.resolve();
  return q.reduce(function(chain, item) {
    return chain.then(function(){ return sheetsPost(item); });
  }, Promise.resolve()).then(function(){ syncQueue.save([]); });
}

// ── SEED DATA ─────────────────────────────────────
function seedData() {
  if (cache.load().length > 0) return;
  cache.save([
    {id:'s001',date:'2026-01-02',desc:'PAG TIT INT 104',val:3718.59,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {id:'s002',date:'2026-01-02',desc:'DA  CELESC',val:487.32,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {id:'s003',date:'2026-01-05',desc:'DA  CLARO',val:189.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'s004',date:'2026-01-06',desc:'NETFLIX',val:55.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {id:'s005',date:'2026-01-06',desc:'SPOTIFY',val:21.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {id:'s006',date:'2026-01-07',desc:'ANGELONI SUPERMERCADO',val:892.40,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'s007',date:'2026-01-08',desc:'UBER',val:45.20,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {id:'s008',date:'2026-01-10',desc:'APPLE.COM/BILL',val:23.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {id:'s009',date:'2026-01-12',desc:'RAIA DROGASIL',val:234.50,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {id:'s010',date:'2026-01-13',desc:'PIX PATRICIA NARA',val:3200.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'s011',date:'2026-01-14',desc:'BODY HALL ACADEMIA',val:290.00,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {id:'s012',date:'2026-01-15',desc:'HIPPO SUPERMERCADO',val:1240.80,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'s013',date:'2026-01-15',desc:'PAG TIT BANCO 237',val:4200.00,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {id:'s014',date:'2026-01-16',desc:'CLINICA KOZM',val:480.00,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'card'},
    {id:'s015',date:'2026-01-18',desc:'RESTAURANTE GERO',val:680.00,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'s016',date:'2026-01-20',desc:'PAG TIT INT 197',val:1200.00,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {id:'s017',date:'2026-01-20',desc:'LATAM AIRLINES',val:2340.00,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'s018',date:'2026-01-22',desc:'YELUMSEG SEGUROS',val:494.32,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {id:'s019',date:'2026-01-23',desc:'SUPERMERCADO BISTEK',val:567.90,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'s020',date:'2026-01-25',desc:'IOF TRANSACOES',val:34.20,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'s021',date:'2026-01-26',desc:'DECATHLON',val:349.90,cat:'Variáveis',sub:'ESPORTE',pessoa:'J',obs:'',source:'card'},
    {id:'s022',date:'2026-01-27',desc:'UBER EATS',val:89.50,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'s023',date:'2026-01-28',desc:'ROYAL CARIBBEAN',val:4471.89,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'Cruzeiro Julho 2026',source:'card'},
    {id:'s024',date:'2026-01-29',desc:'DA  TIM CELULAR',val:129.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'s025',date:'2026-01-30',desc:'FARMACIA PREVENCAO',val:156.80,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {id:'s026',date:'2026-02-02',desc:'PAG TIT INT 104',val:3718.59,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {id:'s027',date:'2026-02-03',desc:'DA  CELESC',val:412.10,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {id:'s028',date:'2026-02-04',desc:'NETFLIX',val:55.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {id:'s029',date:'2026-02-05',desc:'ANGELONI SUPERMERCADO',val:1043.20,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'s030',date:'2026-02-06',desc:'PIX PATRICIA NARA',val:3200.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'s031',date:'2026-02-07',desc:'UBER',val:67.30,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {id:'s032',date:'2026-02-10',desc:'PAG TIT BANCO 237',val:4200.00,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {id:'s033',date:'2026-02-11',desc:'BODY HALL ACADEMIA',val:290.00,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {id:'s034',date:'2026-02-12',desc:'HIPPO SUPERMERCADO',val:1180.60,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'s035',date:'2026-02-13',desc:'CLINICA KOZM',val:480.00,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'card'},
    {id:'s036',date:'2026-02-14',desc:'RESTAURANTE LA PIAZZA',val:420.00,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'s037',date:'2026-02-15',desc:'PAG TIT INT 197',val:1200.00,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {id:'s038',date:'2026-02-17',desc:'RAIA DROGASIL',val:189.40,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {id:'s039',date:'2026-02-18',desc:'APPLE.COM/BILL',val:23.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {id:'s040',date:'2026-02-19',desc:'YELUMSEG SEGUROS',val:494.32,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {id:'s041',date:'2026-02-20',desc:'DECATHLON',val:289.90,cat:'Variáveis',sub:'ESPORTE',pessoa:'J',obs:'',source:'card'},
    {id:'s042',date:'2026-02-22',desc:'LATAM AIRLINES',val:1890.00,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'s043',date:'2026-02-24',desc:'SUPERMERCADO BISTEK',val:634.50,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'s044',date:'2026-02-25',desc:'IOF TRANSACOES',val:28.40,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'s045',date:'2026-02-26',desc:'UBER EATS',val:112.30,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'s046',date:'2026-02-27',desc:'DA  CLARO',val:189.90,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'s047',date:'2026-02-28',desc:'ALEXANDRE BOTTARO',val:500.00,cat:'Variáveis',sub:'DOAÇÕES',pessoa:'',obs:'',source:'itau'},
  ]);
}

// ── LOAD DATA ─────────────────────────────────────
function loadData(silent) {
  var savedBud = budgetStore.load();
  if (savedBud) Object.assign(BUDGET, savedBud);

  STATE.txs = cache.load();
  if (STATE.txs.length === 0) { seedData(); STATE.txs = cache.load(); }
  STATE.txs = localEdits.applyTo(STATE.txs);
  STATE.synced = false;
  refreshAll();

  window.addEventListener('beforeunload', function(e) {
    if (syncQueue.count() > 0) { e.preventDefault(); e.returnValue = ''; }
  });

  if (!isConfigured()) return;
  if (!silent) showLoading(true);

  flushSyncQueue().then(function() {
    return Promise.race([
      sheetsGet('getTxs'),
      new Promise(function(_, r) { setTimeout(function(){ r(new Error('timeout')); }, 8000); })
    ]);
  }).then(function(remote) {
    if (remote && remote.length > 0) {
      var edits = localEdits.load();
      STATE.txs = remote
        .map(function(t){ return edits[t.id] ? Object.assign({}, t, edits[t.id]) : t; })
        .filter(function(t){ return !(edits[t.id] && edits[t.id]._deleted); });
      cache.save(STATE.txs);
      STATE.synced = true;
      refreshAll();
    }
  }).catch(function(e) {
    STATE.error = e.message;
  }).then(function() {
    showLoading(false);
    setSyncBadge();
  });
}

// ── UI BASICS ─────────────────────────────────────
function showLoading(on) {
  var el = document.getElementById('loading-bar');
  if (el) el.style.display = on ? 'block' : 'none';
}
function showToast(msg, type) {
  var t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'toast ' + (type==='ok' ? 'toast-ok' : type==='warn' ? 'toast-warn' : 'toast-info');
  t.style.display = 'block';
  clearTimeout(t._tmr);
  t._tmr = setTimeout(function(){ t.style.display = 'none'; }, 3000);
}
function setSyncBadge() {
  var b = document.getElementById('sync-badge');
  if (!b) return;
  var n = syncQueue.count();
  b.textContent = n > 0 ? String(n) : '';
  b.style.display = n > 0 ? 'inline' : 'none';
}
function updateReviewBadge() {
  var rev = reviewed.load();
  var min = threshold.get();
  var n = STATE.txs.filter(function(t){ return !rev[t.id] && (parseFloat(t.val)||0) > min; }).length;
  var b = document.getElementById('review-badge');
  if (b) { b.textContent = n > 0 ? String(n) : ''; b.style.display = n > 0 ? 'inline' : 'none'; }
}

// ── NAVIGATION ────────────────────────────────────
var SCREENS = ['home','despesas','comparativo','patrimonio','ajustes'];
function showScreen(id) {
  SCREENS.forEach(function(s) {
    var el = document.getElementById('screen-'+s);
    if (el) el.classList.toggle('active', s===id);
    var nav = document.getElementById('nav-'+s);
    if (nav) nav.classList.toggle('active', s===id);
  });
  renderScreen(id);
}
function renderScreen(id) {
  if (id==='home') renderHome();
  else if (id==='despesas') renderDespesas();
  else if (id==='comparativo') renderComparativo();
  else if (id==='patrimonio') renderPatrimonio();
  else if (id==='ajustes') renderAjustes();
}
function refreshAll() {
  setSyncBadge(); updateReviewBadge();
  var el = document.querySelector('.screen.active');
  renderScreen(el ? el.id.replace('screen-','') : 'home');
}

// ── AGGREGATE ─────────────────────────────────────
function aggregate(txs, month, year) {
  var filtered = month ? txs.filter(function(t) {
    return t.date && parseInt(t.date.slice(5,7))===month && (!year||parseInt(t.date.slice(0,4))===year);
  }) : txs;
  var byCat = {};
  filtered.forEach(function(t) {
    var cat = t.cat||'Variáveis', sub = t.sub||'NÃO CATEGORIZADO';
    if (!byCat[cat]) byCat[cat] = {};
    byCat[cat][sub] = (byCat[cat][sub]||0) + (parseFloat(t.val)||0);
  });
  return { byCat:byCat, total:filtered.reduce(function(s,t){ return s+(parseFloat(t.val)||0); },0), txs:filtered };
}
function byMonthTotals(txs) {
  var map = {};
  txs.forEach(function(t){ var k=t.date?t.date.slice(0,7):null; if(k) map[k]=(map[k]||0)+(parseFloat(t.val)||0); });
  return map;
}

// ── CHARTS ────────────────────────────────────────
function donutSVG(pct, color) {
  var r=20, c=2*Math.PI*r, dash=Math.min(pct/100,1)*c;
  return '<svg width="56" height="56" viewBox="0 0 56 56">' +
    '<circle cx="28" cy="28" r="'+r+'" fill="none" stroke="var(--border)" stroke-width="6"/>' +
    '<circle cx="28" cy="28" r="'+r+'" fill="none" stroke="'+(color||'var(--blue)')+'" stroke-width="6"' +
    ' stroke-dasharray="'+dash.toFixed(1)+' '+c.toFixed(1)+'" stroke-linecap="round" transform="rotate(-90 28 28)"/>' +
    '<text x="28" y="33" text-anchor="middle" font-size="11" fill="var(--text)" font-weight="600">'+pct+'%</text>' +
    '</svg>';
}
function monthBarChart(map) {
  var entries = Object.entries(map).sort(function(a,b){ return a[0]<b[0]?-1:1; });
  if (!entries.length) return '';
  var max = Math.max.apply(null, entries.map(function(e){ return e[1]; }))||1;
  return '<div class="bar-chart">' +
    entries.map(function(e) {
      var pct = Math.round((e[1]/max)*100);
      var mo = parseInt(e[0].slice(5));
      return '<div class="bar-col" onclick="setMonth(\''+e[0]+'\')">' +
        '<div class="bar-fill" style="height:'+pct+'%"></div>' +
        '<div class="bar-label">'+MNAMES[mo-1].slice(0,3)+'</div>' +
      '</div>';
    }).join('') + '</div>';
}

// ── HOME ──────────────────────────────────────────
function renderHome() {
  var txs = STATE.txs;
  var monthMap = byMonthTotals(txs);
  var months = Object.keys(monthMap).sort();
  var nMonths = months.length||1;
  var acum = txs.reduce(function(s,t){ return s+(parseFloat(t.val)||0); },0);
  var budMensal = Object.values(BUDGET).reduce(function(a,b){ return a+b; },0);
  var pct = budMensal*nMonths ? Math.min(Math.round(acum/(budMensal*nMonths)*100),999) : 0;
  var fixaTotal = txs.filter(function(t){ return t.cat==='Fixa'; }).reduce(function(s,t){ return s+(parseFloat(t.val)||0); },0);

  var allSubs = {};
  txs.forEach(function(t){ if(t.sub&&t.sub!=='NÃO CATEGORIZADO') allSubs[t.sub]=(allSubs[t.sub]||0)+(parseFloat(t.val)||0); });
  var top5 = Object.entries(allSubs).sort(function(a,b){ return b[1]-a[1]; }).slice(0,5);
  var uncatTotal = txs.filter(function(t){ return !t.sub||t.sub==='NÃO CATEGORIZADO'; }).reduce(function(s,t){ return s+(parseFloat(t.val)||0); },0);

  var html = '<div class="dash-wrap">';
  html += '<div class="hcard">' +
    '<div class="hcard-label">Acumulado '+new Date().getFullYear()+'</div>' +
    '<div class="hcard-val">'+fmtK(acum)+'</div>' +
    '<div class="hcard-sub">'+pct+'% do orçamento acumulado</div>' +
    '<div style="display:flex;gap:16px;margin-top:12px">' +
      '<div><div class="hcard-sublabel">Fixa</div><div class="hcard-subval">'+fmtK(fixaTotal)+'</div></div>' +
      '<div><div class="hcard-sublabel">Variável</div><div class="hcard-subval">'+fmtK(acum-fixaTotal)+'</div></div>' +
      '<div><div class="hcard-sublabel">Meses</div><div class="hcard-subval">'+nMonths+'</div></div>' +
    '</div></div>';

  if (months.length) {
    html += '<div class="hcard"><div class="hcard-label">Evolução mensal</div>' +
      monthBarChart(monthMap) +
      '<div class="hmonth-list">' +
      months.map(function(ym) {
        var mo = parseInt(ym.slice(5));
        return '<div class="hmonth-item" onclick="showScreen(\'despesas\');setMonth(\''+ym+'\')">'+
          '<div class="hmonth-name">'+MNAMES[mo-1].slice(0,3)+'</div>'+
          '<div class="hmonth-val">'+fmtK(monthMap[ym])+'</div>'+
        '</div>';
      }).join('')+'</div></div>';
  }

  html += '<div class="hcard"><div class="hcard-label">Top categorias</div>';
  top5.forEach(function(e,i) {
    var pctB = acum ? Math.round(e[1]/acum*100) : 0;
    html += '<div class="htop5-row" onclick="showScreen(\'despesas\')">' +
      '<div class="htop5-rank">'+(i+1)+'</div>' +
      '<div class="htop5-name">'+e[0]+'</div>' +
      '<div class="htop5-bar"><div class="htop5-fill" style="width:'+pctB+'%"></div></div>' +
      '<div class="htop5-val">'+fmtK(e[1])+'</div></div>';
  });
  if (uncatTotal>0) html += '<div class="htop5-row htop5-uncat" onclick="showUncategorized()">' +
    '<div class="htop5-rank">?</div><div class="htop5-name">NÃO CATEGORIZADO</div>' +
    '<div class="htop5-bar"></div><div class="htop5-val">'+fmtK(uncatTotal)+'</div></div>';
  html += '</div></div>';
  document.getElementById('home-dashboard').innerHTML = html;
}

function setMonth(ym) { activeMonth = ym; renderDespesas(); }

// ── DESPESAS ──────────────────────────────────────
function renderDespesas() {
  var txs = STATE.txs;
  var monthMap = byMonthTotals(txs);
  var months = Object.keys(monthMap).sort().reverse();
  if (!activeMonth && months.length) activeMonth = months[0];

  var pillsEl = document.getElementById('month-pills');
  if (pillsEl) pillsEl.innerHTML = months.map(function(ym) {
    var mo = parseInt(ym.slice(5));
    return '<div class="pill'+(ym===activeMonth?' active':'')+'" onclick="setMonth(\''+ym+'\')">'+MNAMES[mo-1].slice(0,3)+'</div>';
  }).join('');

  if (!activeMonth) return;
  var mo = parseInt(activeMonth.slice(5)), yr = parseInt(activeMonth.slice(0,4));
  var ag = aggregate(txs, mo, yr);
  var fixaSum = Object.values(ag.byCat['Fixa']||{}).reduce(function(a,b){ return a+b; },0);

  var el;
  el = document.getElementById('desp-kpi-total'); if (el) el.textContent = fmt(ag.total);
  el = document.getElementById('desp-kpi-fixa');  if (el) el.textContent = fmt(fixaSum);
  el = document.getElementById('desp-kpi-var');   if (el) el.textContent = fmt(ag.total-fixaSum);

  var listEl = document.getElementById('desp-table');
  if (!listEl) return;
  var cats = Object.entries(ag.byCat).sort(function(a,b) {
    return Object.values(b[1]).reduce(function(x,y){return x+y;},0) - Object.values(a[1]).reduce(function(x,y){return x+y;},0);
  });
  listEl.innerHTML = cats.map(function(entry) {
    var cat=entry[0], subs=entry[1];
    var catTotal = Object.values(subs).reduce(function(a,b){ return a+b; },0);
    var subRows = Object.entries(subs).sort(function(a,b){ return b[1]-a[1]; }).map(function(se) {
      var sub=se[0], val=se[1], bud=BUDGET[sub]||0;
      var pctB = bud ? Math.min(Math.round(val/bud*100),100) : 0;
      return '<div class="sub-row" onclick="openDetailCat(\''+sub.replace(/\\/g,'\\\\').replace(/'/g,'\\x27')+'\')">' +
        '<div class="sub-row-name">'+sub+'</div>' +
        '<div class="sub-row-right">' +
          (bud?'<div class="sub-progress"><div class="sub-progress-fill" style="width:'+pctB+'%"></div></div>':'') +
          '<div class="sub-row-val">'+fmt(val)+'</div>' +
        '</div></div>';
    }).join('');
    return '<div class="cat-group">' +
      '<div class="cat-header" onclick="toggleCatRow(this)">' +
        '<span class="cat-name">'+cat+'</span><span class="cat-total">'+fmt(catTotal)+'</span>' +
      '</div><div class="cat-body">'+subRows+'</div></div>';
  }).join('');
}

function toggleCatRow(el) { var b=el.nextElementSibling; if(b) b.classList.toggle('open'); }
function setDespSort(s) {}

function openDetailCat(sub) {
  if (!activeMonth) return;
  var mo=parseInt(activeMonth.slice(5)), yr=parseInt(activeMonth.slice(0,4));
  var txs = STATE.txs.filter(function(t){ return t.sub===sub&&t.date&&parseInt(t.date.slice(5,7))===mo&&parseInt(t.date.slice(0,4))===yr; })
                     .sort(function(a,b){ return a.date<b.date?1:-1; });
  var total = txs.reduce(function(s,t){ return s+(parseFloat(t.val)||0); },0);
  var bud = BUDGET[sub]||0;
  var el = document.getElementById('detail-modal');
  if (!el) return;
  el.classList.add('open');
  document.getElementById('detail-title').textContent = sub;
  document.getElementById('detail-list').innerHTML =
    '<div class="detail-kpi">' +
      '<div><div class="kpi-label">Total</div><div class="kpi-val">'+fmt(total)+'</div></div>' +
      (bud?'<div><div class="kpi-label">Budget</div><div class="kpi-val">'+fmt(bud)+'</div></div>':'') +
      (bud?'<div>'+donutSVG(pctOf(total,bud))+'</div>':'') +
    '</div>' +
    '<div class="detail-list">' +
    txs.map(function(t) {
      return '<div class="tx-row">' +
        '<div class="tx-row-left"><div class="tx-desc">'+t.desc+'</div>' +
        '<div class="tx-date">'+t.date+(t.pessoa?' · '+t.pessoa:'')+(t.obs?' · '+t.obs:'')+'</div></div>' +
        '<div class="tx-row-right"><div class="tx-val">'+fmt(parseFloat(t.val)||0)+'</div>' +
        '<button class="tx-edit-btn" onclick="openEditTx(\''+t.id+'\')">✎</button></div>' +
      '</div>';
    }).join('')+'</div>';
}
function closeDetail() { var el=document.getElementById('detail-modal'); if(el) el.classList.remove('open'); }

// ── COMPARATIVO ───────────────────────────────────
function renderComparativo() {
  var el = document.getElementById('cmp-rows');
  if (!el) return;
  var monthMap = byMonthTotals(STATE.txs);
  var months = Object.keys(monthMap).sort();
  if (months.length < 2) { el.innerHTML='<div style="padding:40px;text-align:center;color:var(--muted)">Precisa de pelo menos 2 meses.</div>'; return; }
  var m1=months[months.length-2], m2=months[months.length-1];
  var ag1=aggregate(STATE.txs,parseInt(m1.slice(5)),parseInt(m1.slice(0,4)));
  var ag2=aggregate(STATE.txs,parseInt(m2.slice(5)),parseInt(m2.slice(0,4)));
  var subs={};
  [ag1,ag2].forEach(function(ag){ Object.values(ag.byCat).forEach(function(sm){ Object.keys(sm).forEach(function(s){ subs[s]=true; }); }); });
  var rows=Object.keys(subs).map(function(sub){
    var v1=(ag1.byCat[getCat(sub)]||{})[sub]||0, v2=(ag2.byCat[getCat(sub)]||{})[sub]||0;
    return {sub:sub, v1:v1, v2:v2, delta:v2-v1};
  }).sort(function(a,b){ return b.v2-a.v2; });
  el.innerHTML='<div style="padding:16px"><div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;font-size:11px;color:var(--muted);padding:0 4px 8px">' +
    '<div>Categoria</div><div style="text-align:right">'+MNAMES[parseInt(m1.slice(5))-1].slice(0,3)+'</div>' +
    '<div style="text-align:right">'+MNAMES[parseInt(m2.slice(5))-1].slice(0,3)+'</div><div style="text-align:right">Δ</div></div>' +
    rows.map(function(r){
      var color=r.delta>0?'var(--red)':r.delta<0?'var(--green)':'var(--muted)';
      return '<div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;padding:8px 4px;border-bottom:1px solid var(--border);font-size:13px">' +
        '<div>'+r.sub+'</div><div style="text-align:right">'+fmtK(r.v1)+'</div>' +
        '<div style="text-align:right">'+fmtK(r.v2)+'</div>' +
        '<div style="text-align:right;color:'+color+'">'+(r.delta>0?'+':'')+fmtK(r.delta)+'</div></div>';
    }).join('')+'</div>';
}
function setCmpView(v) {} function renderCmpMensal() { renderComparativo(); }
function setCmpMensalSort(s) {} function renderCmpAnual() {} function setCmpAnualSort(s) {}

// ── PATRIMÔNIO ────────────────────────────────────
function patTotals() {
  var pat=patStore.load(), total=0;
  pat.grupos.forEach(function(g){ g.itens.forEach(function(i){ total+=parseFloat(i.val)||0; }); });
  return {total:total, pat:pat};
}
function renderPatrimonio() {
  var el=document.getElementById('pat-grupos');
  if (!el) return;
  var data=patTotals(), pat=data.pat, total=data.total;
  el.innerHTML='<div style="padding:16px">' +
    '' +
    pat.grupos.map(function(g){
      var gTotal=g.itens.reduce(function(s,i){ return s+(parseFloat(i.val)||0); },0);
      return '<div class="pat-grupo">' +
        '<div class="pat-grupo-header">'+g.nome+' <span style="float:right;color:var(--muted)">'+fmt(gTotal)+'</span></div>' +
        g.itens.map(function(item){
          return '<div class="pat-item"><div class="pat-item-name">'+item.name+'</div>' +
            '<input class="pat-item-input" type="number" value="'+item.val+'" ' +
            'onchange="patSaveItem(\''+g.id+'\',\''+item.id+'\',this.value)"></div>';
        }).join('') +
        '<div class="pat-add-btn" onclick="patAddItem(\''+g.id+'\')">+ item</div>' +
      '</div>';
    }).join('') + renderFundoCard() + '</div>';
}
function patAddItem(gid) {
  var pat=patStore.load(), g=pat.grupos.find(function(x){ return x.id===gid; });
  if (!g) return;
  var name=prompt('Nome:'); if (!name) return;
  var val=parseFloat(prompt('Valor:')||'0');
  g.itens.push({id:'i'+Date.now(), name:name, val:val});
  patStore.save(pat); renderPatrimonio();
}
function patSaveItem(gid,iid,v) {
  var val=parseFloat(String(v).replace(/[^0-9.]/g,''))||0;
  var pat=patStore.load(), g=pat.grupos.find(function(x){ return x.id===gid; });
  if (!g) return;
  var item=g.itens.find(function(x){ return x.id===iid; });
  if (item) item.val=val;
  patStore.save(pat); renderPatrimonio();
}
function renderFundoCard() {
  var fundo=fundoStore.load();
  if (!fundo) return '<div class="pat-grupo"><div class="pat-grupo-header">Portfel / BTG</div>' +
    '<div style="padding:12px;color:var(--muted);font-size:13px">Importe o PDF do Portfel.</div>' +
    '<label style="display:inline-block;margin:8px;padding:8px 16px;background:var(--blue);color:#fff;border-radius:8px;cursor:pointer">' +
    'Importar <input type="file" accept=".pdf" style="display:none" onchange="importFundo(this.files)"></label></div>';
  return '<div class="pat-grupo"><div class="pat-grupo-header">Portfel / BTG <span style="float:right;color:var(--muted)">'+fmt(fundo.total||0)+'</span></div>' +
    (fundo.classes||[]).map(function(cl){ return '<div class="pat-item"><div class="pat-item-name">'+cl.nome+'</div><div style="color:var(--muted)">'+fmt(cl.valor)+'</div></div>'; }).join('') +
    '<div class="pat-add-btn" onclick="fundoStore.clear();renderPatrimonio()">× Limpar</div></div>';
}
function importFundo(files) {
  showToast('Portfel simulado importado', 'ok');
  fundoStore.save({total:867803, classes:[{nome:'Renda Fixa',valor:521000},{nome:'Multimercado',valor:220000},{nome:'Ações',valor:80000},{nome:'Internacional',valor:46803}]});
  renderPatrimonio();
}

// ── REVISAR ───────────────────────────────────────
function renderRevisar() {
  var rev=reviewed.load(), min=threshold.get();
  reviewQueue=STATE.txs.filter(function(t){ return !rev[t.id]&&(parseFloat(t.val)||0)>min; });
  var cnt=document.getElementById('review-count');
  if (cnt) cnt.textContent=reviewQueue.length+' para revisar';
  var el=document.getElementById('revisar-content');
  if (!el) return;
  if (!reviewQueue.length) { el.innerHTML='<div style="padding:40px;text-align:center;color:var(--muted)">Tudo revisado!</div>'; return; }
  showReviewCard(0);
}
function showReviewCard(idx) {
  var el=document.getElementById('revisar-content');
  if (!el) return;
  var t=reviewQueue[idx];
  if (!t) { el.innerHTML='<div style="padding:40px;text-align:center;color:var(--muted)">Tudo revisado!</div>'; return; }
  var subs=Object.keys(BUDGET).sort();
  el.innerHTML='<div class="review-card">' +
    '<div class="review-card-desc">'+t.desc+'</div>' +
    '<div class="review-card-val">'+fmt(parseFloat(t.val)||0)+'</div>' +
    '<div class="review-card-date">'+t.date+(t.pessoa?' · '+t.pessoa:'')+'</div>' +
    '<div class="review-field"><label>Subcategoria</label>' +
    '<select id="rv-sub">'+subs.map(function(s){ return '<option value="'+s+'"'+(s===t.sub?' selected':'')+'>'+s+'</option>'; }).join('')+'</select></div>' +
    '<div class="review-field"><label>Obs</label><input id="rv-obs" type="text" value="'+(t.obs||'')+'"></div>' +
    '<div class="review-actions">' +
    '<button class="btn-reject" onclick="rejectCard('+idx+')">Pular</button>' +
    '<button class="btn-approve" onclick="approveCard('+idx+')">✓ Ok</button>' +
    '</div><div style="text-align:center;color:var(--muted);font-size:12px;margin-top:8px">'+(idx+1)+' de '+reviewQueue.length+'</div></div>';
}
function onReviewSubChange() {}
function approveCard(idx) {
  var t=reviewQueue[idx]; if (!t) return;
  var sub=document.getElementById('rv-sub'), obs=document.getElementById('rv-obs');
  var newSub=sub?sub.value:t.sub;
  Object.assign(t, {sub:newSub, cat:getCat(newSub), obs:obs?obs.value:t.obs});
  var i=STATE.txs.findIndex(function(x){ return x.id===t.id; });
  if (i>=0) STATE.txs[i]=t;
  cache.save(STATE.txs); reviewed.approve(t.id);
  if (isConfigured()) sheetsPost({action:'updateTx',tx:t}).catch(function(){});
  renderRevisar();
}
function rejectCard(idx) { var t=reviewQueue[idx]; if(t) reviewed.approve(t.id); renderRevisar(); }
function skipCard(idx) { rejectCard(idx); }
function markAllReviewed() { reviewQueue.forEach(function(t){ reviewed.approve(t.id); }); renderRevisar(); }

// ── REGRAS ────────────────────────────────────────
function renderRules() {
  var el=document.getElementById('rules-content');
  if (!el) return;
  var rules=userRules.load();
  el.innerHTML=rules.length
    ? rules.map(function(r){ return '<div class="rule-row"><div class="rule-kw">'+r.kw+'</div><div style="color:var(--muted)">→</div><div class="rule-sub">'+r.sub+'</div><button onclick="removeRule(\''+r.kw+'\')" style="margin-left:auto;background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px">×</button></div>'; }).join('')
    : '<div style="padding:20px;color:var(--muted);font-size:13px;text-align:center">Nenhuma regra personalizada.</div>';
}
function saveNewRule() {
  var kw=document.getElementById('rule-kw'), sub=document.getElementById('rule-sub');
  if (!kw||!sub) return;
  var k=kw.value.trim().toUpperCase();
  if (!k) { showToast('Digite uma palavra-chave','warn'); return; }
  userRules.add(k, sub.value); kw.value=''; renderRules(); showToast('Regra salva','ok');
}
function removeRule(kw) { userRules.remove(kw); renderRules(); }
function applyAndRefresh() { var n=applyUserRulesToAll(); showToast(n+' categorizados','ok'); refreshAll(); }

// ── IMPORTAR ──────────────────────────────────────
function renderImport() {
  var el=document.getElementById('import-content');
  if (el) el.innerHTML='<div style="padding:16px">' +
    '<p style="color:var(--muted);font-size:13px">Selecione extratos .csv ou .xls</p>' +
    '<label style="display:inline-block;padding:10px 20px;background:var(--blue);color:#fff;border-radius:10px;cursor:pointer">' +
    'Selecionar <input type="file" multiple accept=".csv,.xls,.xlsx" style="display:none" onchange="handleFiles(this.files)"></label>' +
    '<div id="import-log" style="margin-top:16px;font-size:12px;color:var(--muted)"></div>' +
    '<div id="import-preview"></div></div>';
}
function handleFiles(files) {
  if (!files||!files.length) return;
  pendingTxs=[];
  Array.from(files).forEach(function(file) {
    var reader=new FileReader();
    reader.onload=function(e) {
      var parsed=parseCSV(e.target.result, file.name);
      pendingTxs=pendingTxs.concat(parsed);
      var log=document.getElementById('import-log');
      if (log) log.textContent=pendingTxs.length+' lançamentos encontrados';
      showImportPreview(pendingTxs);
    };
    reader.readAsText(file,'ISO-8859-1');
  });
}
function parseCSV(text, fname) {
  var lines=text.split('\n').map(function(l){ return l.trim(); }).filter(Boolean);
  var type=fname&&fname.toLowerCase().indexOf('unicred')>=0?'unicred':'card';
  return lines.reduce(function(acc,line) {
    var parts=line.split(';');
    if (parts.length<3) return acc;
    var dm=parts[0]&&parts[0].match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (!dm) return acc;
    var date=dm[3]+'-'+dm[2]+'-'+dm[1];
    var desc=(parts[1]||'').trim();
    var val=Math.abs(parseFloat((parts[2]||'').replace(/[^0-9,]/g,'').replace(',','.'))||0);
    if (!val) return acc;
    var cat=categorize(desc,type);
    if (!cat.cat) return acc;
    acc.push({id:'imp_'+date+'_'+Math.random().toString(36).slice(2,6), date:date, desc:desc, val:val, cat:cat.cat, sub:cat.sub||'NÃO CATEGORIZADO', pessoa:'', obs:'', source:type});
    return acc;
  }, []);
}
function showImportPreview(txs) {
  var el=document.getElementById('import-preview');
  if (!el) return;
  if (!txs.length) { el.innerHTML=''; return; }
  el.innerHTML='<div style="margin-top:16px"><div style="font-size:13px;font-weight:600;margin-bottom:8px">Preview ('+txs.length+')</div>' +
    txs.slice(0,10).map(function(t){ return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px"><div>'+t.date+' · '+t.desc.slice(0,30)+'</div><div>'+fmt(t.val)+'</div></div>'; }).join('') +
    (txs.length>10?'<div style="padding:6px 0;color:var(--muted);font-size:12px">...e mais '+(txs.length-10)+'</div>':'') +
    '<button onclick="confirmImport()" style="margin-top:16px;width:100%;padding:12px;background:var(--blue);color:#fff;border:none;border-radius:10px;cursor:pointer">Importar</button></div>';
}
function confirmImport() {
  if (!pendingTxs.length) return;
  var existing=new Set(STATE.txs.map(function(t){ return t.id; }));
  var novel=pendingTxs.filter(function(t){ return !existing.has(t.id); });
  STATE.txs=STATE.txs.concat(novel); cache.save(STATE.txs);
  if (isConfigured()) sheetsPost({action:'addTxs',txs:novel}).catch(function(){});
  pendingTxs=[]; showToast(novel.length+' importados','ok'); renderImport(); refreshAll();
}

// ── ORÇAMENTO ─────────────────────────────────────
function getBudget() { return Object.assign({},BUDGET); }
function saveBudgetField(sub,rawVal) {
  var val=parseFloat(String(rawVal).replace(/[^0-9,]/g,'').replace(',','.'))||0;
  if (val>0) BUDGET[sub]=val; else delete BUDGET[sub];
  budgetStore.save(Object.assign({},BUDGET));
}
function renderBudget() {
  var el=document.getElementById('budget-content');
  if (!el) return;
  var total=Object.values(BUDGET).reduce(function(a,b){ return a+b; },0);
  el.innerHTML='<div style="padding:16px">' +
    '<div style="display:flex;justify-content:space-between;padding:8px 0;font-weight:600;border-bottom:2px solid var(--border);margin-bottom:8px"><div>Categoria</div><div>Budget/mês</div></div>' +
    Object.entries(BUDGET).sort(function(a,b){ return b[1]-a[1]; }).map(function(e) {
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)">' +
        '<div style="font-size:13px">'+e[0]+'</div>' +
        '<input type="number" value="'+e[1]+'" step="100" style="width:100px;text-align:right;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:13px" ' +
        'onchange="saveBudgetField(\''+e[0].replace(/'/g,'\\x27')+'\',this.value);renderBudget()"></div>';
    }).join('')+'<div style="display:flex;justify-content:space-between;padding:12px 0;font-weight:600"><div>Total mensal</div><div>'+fmt(total)+'</div></div></div>';
}

// ── CONCILIAÇÃO ───────────────────────────────────
function forceFullSync() {
  if (!isConfigured()) { showToast('Configure o Google Sheets primeiro','warn'); return; }
  showLoading(true);
  var edits=localEdits.load();
  var chain=flushSyncQueue();
  Object.entries(edits).forEach(function(entry) {
    var id=entry[0], data=entry[1];
    chain=chain.then(function(){
      return data._deleted ? sheetsPost({action:'deleteTx',id:id}) : sheetsPost({action:'updateTx',tx:Object.assign({id:id},data)});
    });
  });
  chain.then(function(){ return loadData(true); })
       .then(function(){ showToast('Sincronizado!','ok'); })
       .catch(function(e){ showToast('Erro: '+e.message,'warn'); })
       .then(function(){ showLoading(false); renderConciliacao(); });
}
function renderConciliacao() {
  var el=document.getElementById('concil-content');
  if (!el) return;
  el.innerHTML='<div style="padding:16px">' +
    '<div class="hcard" style="margin-bottom:16px"><div class="hcard-label">Status</div>' +
    '<div style="display:flex;gap:24px;margin-top:8px">' +
      '<div><div class="kpi-label">Fila</div><div class="kpi-val">'+syncQueue.count()+'</div></div>' +
      '<div><div class="kpi-label">Edições locais</div><div class="kpi-val">'+Object.keys(localEdits.load()).length+'</div></div>' +
      '<div><div class="kpi-label">Sync</div><div class="kpi-val">'+(STATE.synced?'Ok':'Não')+'</div></div>' +
    '</div></div>' +
    '<button onclick="forceFullSync()" style="width:100%;padding:12px;background:var(--blue);color:#fff;border:none;border-radius:10px;cursor:pointer;margin-bottom:16px">Forçar sincronização</button>' +
    '<div style="font-size:13px;color:var(--muted)">Lançamentos: <b>'+STATE.txs.length+'</b> · Config: <b>'+(isConfigured()?'Sim':'Não')+'</b></div></div>';
}

// ── AJUSTES ───────────────────────────────────────
function renderAjustes() {
  var el=document.getElementById('screen-ajustes');
  setAjusteTab(el.dataset.tab||'revisar');
}
function setAjusteTab(tab) {
  var el=document.getElementById('screen-ajustes');
  if (el) el.dataset.tab=tab;
  ['revisar','regras','import','budget','concil'].forEach(function(t) {
    var btn=document.getElementById('atab-'+t);
    if (btn) btn.classList.toggle('active', t===tab);
  });
  var tabToId = {revisar:'ajuste-revisar',regras:'ajuste-regras',import:'ajuste-import',budget:'ajuste-budget',concil:'ajuste-concil'};
  var content=document.getElementById(tabToId[tab]||'ajuste-revisar');
  // Hide all tab content divs
  ['ajuste-revisar','ajuste-regras','ajuste-import','ajuste-budget','ajuste-concil'].forEach(function(id){
    var d=document.getElementById(id); if(d) d.style.display='none';
  });
  if (content) content.style.display='block';
  if (!content) return;
  var cfg=getCfg()||{};

  if (tab==='revisar') {
    content.innerHTML='<div style="padding:16px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">' +
        '<span style="font-size:13px;color:var(--muted)">Revisar acima de</span>' +
        '<input id="thresh-input" type="number" value="'+threshold.get()+'" step="100" style="width:80px;border:1px solid var(--border);border-radius:6px;padding:6px;text-align:right">' +
        '<button onclick="setReviewThreshold()" style="padding:6px 12px;background:var(--blue);color:#fff;border:none;border-radius:6px;cursor:pointer">OK</button>' +
      '</div>' +
      '<div id="review-count" style="color:var(--muted);font-size:13px;margin-bottom:12px"></div>' +
      '<div id="revisar-content"></div></div>';
    renderRevisar();
  } else if (tab==='regras') {
    content.innerHTML='<div style="padding:16px">' +
      '<div style="display:flex;gap:8px;margin-bottom:16px">' +
        '<input id="rule-kw" placeholder="Palavra-chave" style="flex:1;border:1px solid var(--border);border-radius:8px;padding:8px">' +
        '<select id="rule-sub" style="border:1px solid var(--border);border-radius:8px;padding:8px">' +
          Object.keys(BUDGET).sort().map(function(s){ return '<option>'+s+'</option>'; }).join('') +
        '</select>' +
        '<button onclick="saveNewRule()" style="padding:8px 14px;background:var(--blue);color:#fff;border:none;border-radius:8px;cursor:pointer">+</button>' +
      '</div><div id="rules-content"></div>' +
      '<button onclick="applyAndRefresh()" style="margin-top:16px;width:100%;padding:12px;background:var(--border);border:none;border-radius:10px;cursor:pointer;font-size:13px">Aplicar regras a todos</button></div>';
    renderRules();
  } else if (tab==='import') {
    content.innerHTML='<div id="import-content"></div>';
    renderImport();
  } else if (tab==='budget') {
    content.innerHTML='<div id="budget-content"></div>';
    renderBudget();
  } else if (tab==='concil') {
    content.innerHTML='<div style="padding:16px">' +
      '<div style="font-size:13px;color:var(--muted);margin-bottom:6px">Apps Script URL</div>' +
      '<input id="cfg-url" type="url" value="'+(cfg.url||'')+'" placeholder="https://script.google.com/..." style="width:100%;box-sizing:border-box;border:1px solid var(--border);border-radius:8px;padding:8px;font-size:12px;margin-bottom:8px">' +
      '<div style="font-size:13px;color:var(--muted);margin-bottom:6px">Nome da planilha</div>' +
      '<input id="cfg-sheet" type="text" value="'+(cfg.sheet||'')+'" placeholder="Finance" style="width:100%;box-sizing:border-box;border:1px solid var(--border);border-radius:8px;padding:8px;margin-bottom:12px">' +
      '<button onclick="saveCfgForm()" style="width:100%;padding:12px;background:var(--blue);color:#fff;border:none;border-radius:10px;cursor:pointer">Salvar</button>' +
      '<div id="concil-content" style="margin-top:16px"></div></div>';
    renderConciliacao();
  }
}
function saveCfgForm() {
  var url=document.getElementById('cfg-url'), sheet=document.getElementById('cfg-sheet');
  saveCfg({url:url?url.value:'', sheet:sheet?sheet.value:''});
  showToast('Configuração salva','ok'); renderConciliacao();
}
function setReviewThreshold() {
  var inp=document.getElementById('thresh-input');
  if (inp) threshold.set(parseFloat(inp.value)||0);
  renderRevisar();
}

// ── EDIT TX ───────────────────────────────────────
function openEditTx(id) {
  var t=STATE.txs.find(function(x){ return x.id===id; });
  if (!t) return;
  var modal=document.getElementById('edittx-modal');
  if (!modal) return;
  modal.classList.add('open'); modal.querySelector('#edittx-id') ? modal.querySelector('#edittx-id').value : modal.dataset.id=id;
  var el;
  el=document.getElementById('edittx-desc');   if(el) el.value=t.desc||'';
  el=document.getElementById('edittx-val');    if(el) el.value=t.val||'';
  el=document.getElementById('edittx-date');   if(el) el.value=t.date||'';
  el=document.getElementById('edittx-val');    if(el) el.value=t.obs||'';
  el=document.getElementById('edittx-val'); if(el) el.value=t.pessoa||'';
  var subSel=document.getElementById('edittx-sub');
  if (subSel) subSel.innerHTML=Object.keys(BUDGET).sort().concat(['NÃO CATEGORIZADO']).map(function(s){
    return '<option value="'+s+'"'+(s===t.sub?' selected':'')+'>'+s+'</option>';
  }).join('');
}
function closeEditTx() { var m=document.getElementById('edittx-modal'); if(m) m.classList.remove('open'); }
function onEditSubChange() {}
function saveEditTx() {
  var modal=document.getElementById('edittx-modal');
  if (!modal) return;
  var id=modal.querySelector('#edittx-id') ? modal.querySelector('#edittx-id').value : modal.dataset.id;
  var t=STATE.txs.find(function(x){ return x.id===id; });
  if (!t) return;
  var sub=document.getElementById('edittx-sub').value;
  var updated=Object.assign({},t,{
    desc:document.getElementById('edittx-desc').value,
    val: parseFloat(document.getElementById('edittx-val').value)||t.val,
    date:document.getElementById('edittx-date').value||t.date,
    obs: document.getElementById('edittx-val').value,
    pessoa:document.getElementById('edittx-val').value,
    sub:sub, cat:getCat(sub)
  });
  var idx=STATE.txs.findIndex(function(x){ return x.id===id; });
  if (idx>=0) STATE.txs[idx]=updated;
  cache.save(STATE.txs); localEdits.set(id, updated);
  closeEditTx(); refreshAll();
  if (isConfigured()) {
    Promise.race([
      sheetsPost({action:'updateTx',tx:updated}),
      new Promise(function(_,r){ setTimeout(function(){ r(new Error('t')); },6000); })
    ]).then(function(){ localEdits.clear(id); showToast('Salvo no Sheets ✓','ok'); })
      .catch(function(){ showToast('Salvo localmente','info'); });
  } else {
    showToast('Salvo','ok');
  }
}
function deleteTx() {
  var modal=document.getElementById('edittx-modal');
  if (!modal) return;
  var id=modal.querySelector('#edittx-id') ? modal.querySelector('#edittx-id').value : modal.dataset.id;
  if (!confirm('Excluir?')) return;
  STATE.txs=STATE.txs.filter(function(t){ return t.id!==id; });
  cache.save(STATE.txs); localEdits.set(id,{_deleted:true});
  closeEditTx(); refreshAll();
  if (isConfigured()) sheetsPost({action:'deleteTx',id:id}).then(function(){ localEdits.clear(id); }).catch(function(){});
  showToast('Excluído','ok');
}

// ── MANUAL TX ─────────────────────────────────────
function openManual() {
  var modal=document.getElementById('manual-modal');
  if (!modal) return;
  modal.classList.add('open');
  var d=document.getElementById('manual-date');
  if (d) d.value=new Date().toISOString().slice(0,10);
  var subSel=document.getElementById('manual-sub');
  if (subSel) subSel.innerHTML=Object.keys(BUDGET).sort().map(function(s){ return '<option>'+s+'</option>'; }).join('');
}
function closeManual() { var m=document.getElementById('manual-modal'); if(m) m.classList.remove('open'); }
function saveManual() {
  var desc=document.getElementById('manual-desc'), val=document.getElementById('manual-val');
  var date=document.getElementById('manual-date'), sub=document.getElementById('manual-sub');
  var obs=document.getElementById('manual-obs'), pessoa=document.getElementById('manual-pessoa');
  if (!desc||!val) return;
  var v=parseFloat((val.value||'').replace(',','.'))||0;
  if (!v) { showToast('Valor inválido','warn'); return; }
  var subVal=sub?sub.value:'NÃO CATEGORIZADO';
  var tx={id:'man_'+Date.now(), date:date?date.value:new Date().toISOString().slice(0,10),
    desc:desc.value||'Manual', val:v, cat:getCat(subVal), sub:subVal,
    obs:obs?obs.value:'', pessoa:pessoa?pessoa.value:'', source:'manual'};
  STATE.txs.push(tx); cache.save(STATE.txs);
  if (isConfigured()) sheetsPost({action:'addTxs',txs:[tx]}).catch(function(){});
  closeManual(); refreshAll(); showToast('Adicionado','ok');
}

// ── SPLIT ─────────────────────────────────────────
function openSplit(id) {
  var t=STATE.txs.find(function(x){ return x.id===id; });
  if (!t) return;
  splitTxId=id; var half=(parseFloat(t.val)||0)/2;
  splitParts=[{desc:t.desc,sub:t.sub||'',val:half},{desc:t.desc,sub:'',val:half}];
  var modal=document.getElementById('split-modal');
  if (modal) modal.classList.add('open');
  var title=document.getElementById('split-title');
  if (title) title.textContent=t.desc+' · '+fmt(parseFloat(t.val)||0);
  renderSplitParts();
}
function closeSplit() { var m=document.getElementById('split-modal'); if(m) m.classList.remove('open'); splitTxId=null; splitParts=[]; }
function renderSplitParts() {
  var el=document.getElementById('split-parts');
  if (!el) return;
  var subs=Object.keys(BUDGET).sort();
  el.innerHTML=splitParts.map(function(p,i) {
    return '<div class="split-part">' +
      '<input type="text" value="'+p.desc+'" placeholder="Descrição" style="width:100%;border:1px solid var(--border);border-radius:6px;padding:6px;margin-bottom:6px;box-sizing:border-box" oninput="splitParts['+i+'].desc=this.value">' +
      '<div style="display:flex;gap:8px">' +
        '<select style="flex:1;border:1px solid var(--border);border-radius:6px;padding:6px" onchange="splitParts['+i+'].sub=this.value">' +
          subs.map(function(s){ return '<option value="'+s+'"'+(s===p.sub?' selected':'')+'>'+s+'</option>'; }).join('') +
        '</select>' +
        '<input type="number" value="'+p.val.toFixed(2)+'" step="0.01" style="width:90px;border:1px solid var(--border);border-radius:6px;padding:6px;text-align:right" oninput="splitParts['+i+'].val=parseFloat(this.value)||0">' +
        (splitParts.length>2?'<button onclick="removeSplitPart('+i+')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px">×</button>':'') +
      '</div></div>';
  }).join('');
}
function addSplitPart() { splitParts.push({desc:'',sub:'',val:0}); renderSplitParts(); }
function removeSplitPart(i) { splitParts.splice(i,1); renderSplitParts(); }
function saveSplit() {
  var t=STATE.txs.find(function(x){ return x.id===splitTxId; });
  if (!t) return closeSplit();
  var total=parseFloat(t.val)||0;
  var used=splitParts.reduce(function(s,p){ return s+(parseFloat(p.val)||0); },0);
  if (Math.abs(used-total)>0.02) { showToast('Soma não bate com o total','warn'); return; }
  STATE.txs=STATE.txs.filter(function(x){ return x.id!==splitTxId; });
  var newTxs=splitParts.map(function(p,i) {
    var sub=p.sub||t.sub;
    return Object.assign({},t,{id:splitTxId+'_s'+(i+1),desc:p.desc||t.desc,sub:sub,cat:getCat(sub),val:String(p.val)});
  });
  STATE.txs=STATE.txs.concat(newTxs); cache.save(STATE.txs);
  if (isConfigured()) {
    sheetsPost({action:'deleteTx',id:splitTxId}).catch(function(){});
    sheetsPost({action:'addTxs',txs:newTxs}).catch(function(){});
  }
  closeSplit(); refreshAll(); showToast('Dividido em '+splitParts.length+' lançamentos','ok');
}

// ── SEARCH ────────────────────────────────────────
function openSearch() {
  var modal=document.getElementById('search-modal');
  if (modal) modal.classList.add('open');
  var inp=document.getElementById('search-input');
  if (inp) { inp.value=''; inp.focus(); }
  runSearch();
}
function closeSearch() { var m=document.getElementById('search-modal'); if(m) m.classList.remove('open'); }
function setSearchFilter(f) {}
function runSearch() {
  var inp=document.getElementById('search-input'), el=document.getElementById('search-results');
  if (!el) return;
  var q=inp?inp.value.trim().toLowerCase():'';
  var results=q.length>1
    ? STATE.txs.filter(function(t){ return (t.desc||'').toLowerCase().indexOf(q)>=0||(t.sub||'').toLowerCase().indexOf(q)>=0||(t.obs||'').toLowerCase().indexOf(q)>=0; })
    : STATE.txs.slice().sort(function(a,b){ return a.date<b.date?1:-1; }).slice(0,50);
  el.innerHTML=results.length
    ? results.map(function(t){
        return '<div class="tx-row">' +
          '<div class="tx-row-left"><div class="tx-desc">'+t.desc+'</div><div class="tx-date">'+t.date+' · '+(t.sub||'')+'</div></div>' +
          '<div class="tx-row-right"><div class="tx-val">'+fmt(parseFloat(t.val)||0)+'</div>' +
          '<button class="tx-edit-btn" onclick="openEditTx(\''+t.id+'\')">✎</button></div></div>';
      }).join('')
    : '<div style="padding:20px;text-align:center;color:var(--muted)">Nenhum resultado</div>';
}
function showUncategorized() {
  openSearch();
  setTimeout(function() {
    var inp=document.getElementById('search-input');
    if (inp) { inp.value='NÃO CATEGORIZADO'; runSearch(); }
  }, 100);
}

// ── TOGGLE HIDE ───────────────────────────────────
function toggleHide() {
  STATE.hidden=!STATE.hidden;
  var icon=document.getElementById('hide-icon');
  if (icon) {
    icon.innerHTML=STATE.hidden
      ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
      : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  }
  refreshAll();
}
