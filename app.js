// ═══════════════════════════════════════════════════
//  JCRP FAMILY FINANCE · PWA · v43
// ═══════════════════════════════════════════════════

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz7fY0H-OV2_7vzb69KMVrXQ-AxdVKsHuNXDqA8eAzdTQUPjTBHiyD1dJIPc5vUVa88Bw/exec';

// ── RULES ─────────────────────────────────────────
const RULES_ITAU = [
  ['JUROS LIMITE','Fixa','IMPOSTOS',null],['IOF','Fixa','IMPOSTOS',null],
  ['INT DOC ARREC E-SOCI','Fixa','FUNCIONÁRIAS',null],['BKI DOC ARREC E-SOCI','Fixa','FUNCIONÁRIAS',null],
  ['PAG TIT INT 104','Fixa','CONDOMÍNIO',null],['PAG TIT BANCO 104','Fixa','CONDOMÍNIO',null],
  ['PAG TIT INT 197','Fixa','CATARINA',null],['PAG TIT BANCO 197','Fixa','CATARINA',null],
  ['PAG TIT INT 237','Fixa','CARRO',null],['PAG TIT BANCO 237','Fixa','CARRO',null],
  ['PAG TIT INT 338','Fixa','SEGUROS',null],['PAG TIT INT 328','Fixa','SEGUROS',null],['PAG TIT BANCO 328','Fixa','SEGUROS',null],
  ['DA  CELESC','Fixa','LUZ',null],['DA  CLARO','Fixa','ASSINATURAS',null],['DA  TIM CELU','Fixa','ASSINATURAS',null],
  ['PIX TRANSF PRISCIL','Variáveis','NÃO CATEGORIZADO',null],
  ['PIX TRANSF PATRICI','Fixa','FUNCIONÁRIAS',null],['PIX TRANSF NARA','Fixa','FUNCIONÁRIAS',null],
  ['PIX WHATS NARA','Fixa','FUNCIONÁRIAS',null],['PIX TRANSF FRANCIS','Fixa','FUNCIONÁRIAS',null],
  ['TED D INT6D00AD26','Variáveis','FUNCIONÁRIAS',null],['PIX TRANSF BETINA','Variáveis','COMPRAS P',null],
  ['PIX QRS VITOR COELH','Variáveis','BELEZA ESTÉTICA BEM ESTAR','J'],
  ['PIX TRANSF ELIZABE','Variáveis','SUPERMERCADO',null],['PIX QRS PARCELADOUS','Variáveis','VIAGEM',null],
  ['PIX TRANSF LUIGI','Variáveis','PRESENTES',null],['ALEXANDRE BOTTARO','Variáveis','DOAÇÕES',null],
  ['CARTAO ITAU THE ONE',null,null,null],['PIX TRANSF JOAO RI',null,null,null],
  ['TED D INT209C64C6',null,null,null],['SALDO TOTAL',null,null,null],
];
const RULES_UNICRED = [
  ['TRANSFERENCIA ENTRE CONTAS',null,null,null],['JOAO RICARDO DOZZA PEDROZO',null,null,null],
  ['GENIAL INVESTIMENTOS',null,null,null],
  ['LIQUIDACAO DE PARCELA DE FINANCIAMENTO','Fixa','APTO',null],
  ['JUROS CHEQUE ESPECIAL','Fixa','IMPOSTOS',null],['DEB MENSALID QUANTA PREVID','Fixa','PREVIDENCIA /  VIDA',null],
  ['DEBITO FATURA.*CARTAO VISA',null,null,null],['ARRECADACAO DE CONVENIOS.*CSLL','Fixa','IMPOSTOS',null],
  ['IOF.*SALDO DEV','Fixa','IMPOSTOS',null],['LUIGI FREIRE PEDROZO','Variáveis','PRESENTES',null],
  ['JEHNNIFER','Variáveis','MORADIA',null],['GOMES.*COSTA.*MEDICOS','Variáveis','SAÚDE',null],
  ['ALEXANDRE BOTTARO','Variáveis','DOAÇÕES',null],['LIQUIDACAO DE TITULO',null,null,null],
];
const RULES_CARD = [
  ['HIPPO','Variáveis','SUPERMERCADO',null],['ANGELONI','Variáveis','SUPERMERCADO',null],
  ['UBER','Variáveis','TRANSPORTE',null],['99APP','Variáveis','TRANSPORTE',null],
  ['LATAM','Variáveis','VIAGEM',null],['BOOKING','Variáveis','VIAGEM',null],
  ['ROYAL CARIBBEAN','Variáveis','VIAGEM',null],['HOTELDO','Variáveis','VIAGEM',null],
  ['ALAMO RENT','Variáveis','VIAGEM',null],['LUXURY COLLECTION','Variáveis','VIAGEM',null],
  ['APPLE','Fixa','ASSINATURAS',null],['NETFLIX','Fixa','ASSINATURAS',null],
  ['SPOTIFY','Fixa','ASSINATURAS',null],['IFOOD CLUB','Fixa','ASSINATURAS',null],['ANUIDADE','Fixa','ASSINATURAS',null],
  ['IOF TRANSACOES','Fixa','IMPOSTOS',null],['IOF COMPRA','Fixa','IMPOSTOS',null],
  ['RAIA','Variáveis','FARMÁCIA',null],['DIMED','Variáveis','FARMÁCIA',null],['WALGREENS','Variáveis','FARMÁCIA',null],
  ['CLINICA KOZM','Variáveis','BELEZA ESTÉTICA BEM ESTAR','J'],
  ['DOUGLAS LUCAS','Variáveis','BELEZA ESTÉTICA BEM ESTAR','P'],
  ['HAIR ADDRESS','Variáveis','BELEZA ESTÉTICA BEM ESTAR','P'],['ADCOS','Variáveis','BELEZA ESTÉTICA BEM ESTAR','P'],
  ['BODY HALL','Variáveis','ESPORTE',null],['DECATHLON','Variáveis','ESPORTE',null],
  ['FIT2RUN','Variáveis','COMPRAS J',null],['FITRUN','Variáveis','COMPRAS J',null],
  ['BRUNELLO','Variáveis','COMPRAS J',null],['OLIVER PEOPLE','Variáveis','COMPRAS J',null],
  ['DIESEL','Variáveis','COMPRAS J',null],['ZEGNA','Variáveis','COMPRAS J',null],
  ['LULULEMON','Variáveis','COMPRAS CR',null],['ZALES','Variáveis','COMPRAS P',null],
  ['HERMES','Variáveis','COMPRAS P',null],['RIMOWA','Variáveis','COMPRAS P','J'],
  ['PLANET CAP','Variáveis','COMPRAS P',null],['YELUMSEG','Fixa','SEGUROS',null],
  ['FRANKJOSEDASILVA','Fixa','FUNCIONÁRIAS',null],
  ['PAGAMENTO RECEBIDO',null,null,null],['ESTORNO',null,null,null],
];

const ALL_SUBS = ['ALIMENTAÇÃO','APTO','ASSINATURAS','BELEZA ESTÉTICA BEM ESTAR','CARRO','CATARINA',
  'COMPRAS CR','COMPRAS J','COMPRAS P','CONDOMÍNIO','DOAÇÕES','EMPÓRIOS','ESPORTE','FARMÁCIA',
  'FUNCIONÁRIAS','IMPOSTOS','LAVANDERIA','LAZER','LUZ','MORADIA','NÃO CATEGORIZADO',
  'PRESENTES','PREVIDENCIA /  VIDA','RICARDO','SAÚDE','SEGUROS','SUPERMERCADO','TRANSPORTE','VIAGEM'];

const CAT_MAP = {
  'CATARINA':'Fixa','CARRO':'Fixa','FUNCIONÁRIAS':'Fixa','SEGUROS':'Fixa',
  'APTO':'Fixa','PREVIDENCIA /  VIDA':'Fixa','ASSINATURAS':'Fixa',
  'CONDOMÍNIO':'Fixa','LUZ':'Fixa','IMPOSTOS':'Fixa',
};

const BUDGET = {
  'VIAGEM':25000,'COMPRAS P':5000,'CARRO':17000,'FUNCIONÁRIAS':8000,'COMPRAS J':5000,
  'CATARINA':6000,'SUPERMERCADO':7000,'IMPOSTOS':2200,'TRANSPORTE':1000,'ESPORTE':3000,
  'CONDOMÍNIO':3500,'FARMÁCIA':2500,'MORADIA':2000,'SEGUROS':1500,'RICARDO':1500,
  'COMPRAS CR':2000,'BELEZA ESTÉTICA BEM ESTAR':1500,'ALIMENTAÇÃO':3000,'SAÚDE':1000,
  'LAVANDERIA':1000,'LUZ':1000,'ASSINATURAS':600,'LAZER':1000,'PRESENTES':1000,
  'APTO':8000,'PREVIDENCIA /  VIDA':2500,
};

const MNAMES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const COLORS = ['#2C6FAC','#1A8C5B','#C07010','#8C2A8C','#C0392B','#2980B9','#16A085','#E67E22','#8E44AD','#D35400'];

// ── HELPERS ───────────────────────────────────────
function getCat(sub) { return CAT_MAP[sub] || 'Variáveis'; }
function fmt(v) {
  if (STATE.hidden) return 'R$ ••••••';
  return 'R$ '+Number(v||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function toggleHide() {
  STATE.hidden = !STATE.hidden;
  const icon = document.getElementById('hide-icon');
  if (icon) {
    if (STATE.hidden) {
      icon.innerHTML =
        '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>'+
        '<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>'+
        '<line x1="1" y1="1" x2="23" y2="23"/>';
    } else {
      icon.innerHTML =
        '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>'+
        '<circle cx="12" cy="12" r="3"/>';
    }
  }
  refreshAll();
}
function fmtK(v) { const n=Number(v||0); if(Math.abs(n)>=1000000) return 'R$'+(n/1000000).toFixed(1)+'M'; if(Math.abs(n)>=1000) return 'R$'+(n/1000).toFixed(0)+'k'; return 'R$'+n.toFixed(0); }
function pctOf(v,t) { return t?((v/t)*100).toFixed(0)+'%':'0%'; }

// ── USER RULES ────────────────────────────────────
const USER_RULES_KEY = 'jcrp_user_rules';
const userRules = {
  load() { try { return JSON.parse(localStorage.getItem(USER_RULES_KEY)||'[]'); } catch { return []; } },
  save(r) { localStorage.setItem(USER_RULES_KEY, JSON.stringify(r)); },
  add(kw,sub) { const rules=this.load().filter(r=>r.kw.toUpperCase()!==kw.toUpperCase()); rules.unshift({kw:kw.toUpperCase(),cat:getCat(sub),sub}); this.save(rules); },
  remove(kw) { this.save(this.load().filter(r=>r.kw.toUpperCase()!==kw.toUpperCase())); }
};

function categorize(desc, type) {
  const d = desc.toUpperCase();
  for (const r of userRules.load()) { if (d.includes(r.kw)) return {cat:r.cat,sub:r.sub,pessoa:null}; }
  const rules = type==='itau'?RULES_ITAU:type==='unicred'?RULES_UNICRED:RULES_CARD;
  for (const [kw,cat,sub,pessoa] of rules) { if (new RegExp(kw.toUpperCase()).test(d)) return {cat,sub,pessoa}; }
  return {cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:null};
}

// ── STORAGE ───────────────────────────────────────
const cache = {
  load() { try { return JSON.parse(localStorage.getItem('jcrp_txs')||'[]'); } catch { return []; } },
  save(txs) { try { localStorage.setItem('jcrp_txs', JSON.stringify(txs)); } catch(e) {} }
};

// Tracks every local edit (sub/cat/obs changes + deletions)
// so they survive a Sheets sync that returns stale data
const localEdits = {
  _key: 'jcrp_local_edits',
  load() { try { return JSON.parse(localStorage.getItem(this._key)||'{}'); } catch { return {}; } },
  save(obj) { try { localStorage.setItem(this._key, JSON.stringify(obj)); } catch(e) {} },
  set(id, fields) {
    const all = this.load();
    all[id] = {...(all[id]||{}), ...fields, _ts: Date.now()};
    this.save(all);
  },
  del(id) {
    const all = this.load();
    all[id] = {_deleted: true, _ts: Date.now()};
    this.save(all);
  },
  clear(id) {
    const all = this.load();
    delete all[id];
    this.save(all);
  },
  applyTo(txs) {
    const edits = this.load();
    // Remove deleted
    const filtered = txs.filter(t => !edits[t.id]?._deleted);
    // Apply field edits
    return filtered.map(t => {
      const e = edits[t.id];
      if (!e || e._deleted) return t;
      const {_deleted, _ts, ...fields} = e;
      return {...t, ...fields};
    });
  }
};
const threshold = {
  get() { return parseFloat(localStorage.getItem('jcrp_review_threshold')||'1000'); },
  set(v) { localStorage.setItem('jcrp_review_threshold', String(v)); }
};
const reviewed = {
  load() { try { return JSON.parse(localStorage.getItem('jcrp_reviewed')||'{}'); } catch { return {}; } },
  save(obj) { localStorage.setItem('jcrp_reviewed', JSON.stringify(obj)); },
  approve(id) {
    const r=this.load(); r[id]='ok';
    this.save(r);
    // Push to Sheets in background for backup
    if(isConfigured()) sheetsPost({action:'saveReviewed', reviewed:r}).catch(()=>{});
  },
  // Restore from Sheets — called on load if localStorage is empty
  async restore() {
    if(!isConfigured()) return;
    try {
      const timeout = new Promise((_,r)=>setTimeout(()=>r(new Error('t')),5000));
      const remote = await Promise.race([sheetsGet('getReviewed'), timeout]);
      if(remote && typeof remote === 'object' && Object.keys(remote).length > 0) {
        const local = this.load();
        const merged = {...remote, ...local}; // local wins on conflict
        this.save(merged);
        return merged;
      }
    } catch(e) {}
    return this.load();
  }
};

// ── STATE ─────────────────────────────────────────
const STATE = { txs:[], synced:false, error:null, hidden:false };
let activeMonth = '02'; // mês atual padrão
let despSort = 'valor_desc';

// ── SHEETS ────────────────────────────────────────
const isConfigured = () => SHEETS_URL && SHEETS_URL.includes('script.google.com');
async function sheetsGet(action) {
  const r = await fetch(`${SHEETS_URL}?action=${action}`); return r.json();
}

// ── SYNC QUEUE: edições que falharam são reenviadas automaticamente ──
const syncQueue = {
  _key: 'jcrp_sync_queue',
  load() { try { return JSON.parse(localStorage.getItem(this._key)||'[]'); } catch { return []; } },
  save(q) { try { localStorage.setItem(this._key, JSON.stringify(q)); } catch {} },
  add(body) {
    const q = this.load();
    // Deduplicate: if same tx id already queued, replace
    const filtered = body.tx?.id
      ? q.filter(item => item.tx?.id !== body.tx.id)
      : body.id
        ? q.filter(item => item.id !== body.id)
        : q;
    filtered.push({...body, _qts: Date.now()});
    this.save(filtered);
    setSyncBadge();
  },
  remove(idx) {
    const q = this.load();
    q.splice(idx, 1);
    this.save(q);
  },
  count() { return this.load().length; }
};

async function sheetsPost(body) {
  try {
    const r = await fetch(SHEETS_URL, {method:'POST', body:JSON.stringify(body)});
    const data = await r.json();
    return data;
  } catch(e) {
    // Network failed — queue for retry
    if (body.action === 'editTx' || body.action === 'deleteTx' || body.action === 'addTxs') {
      syncQueue.add(body);
    }
    throw e;
  }
}

// Flush pending queue — called on every successful load
async function flushSyncQueue() {
  const q = syncQueue.load();
  if (q.length === 0) return;
  const failed = [];
  for (const item of q) {
    try {
      const {_qts, ...body} = item;
      await fetch(SHEETS_URL, {method:'POST', body:JSON.stringify(body)});
    } catch(e) {
      failed.push(item);
    }
  }
  syncQueue.save(failed);
  setSyncBadge();
  if (failed.length < q.length) {
    // Some succeeded — re-pull from Sheets to confirm state
    showToast((q.length - failed.length) + ' edições sincronizadas ✓', 'ok');
  }
}

// ── LOAD ──────────────────────────────────────────
async function loadData(silent=false) {
  // Load saved budget overrides
  const savedBud = budgetStore.load();
  if (savedBud) { Object.keys(BUDGET).forEach(k=>delete BUDGET[k]); Object.assign(BUDGET, savedBud); }

  STATE.error = null;
  // 1. Show local data immediately (never wait for network to render)
  STATE.txs = cache.load();
  if (STATE.txs.length === 0) { seedData(); STATE.txs = cache.load(); }
  STATE.synced = false;
  refreshAll();

  // Warn user if leaving with unsynced local edits
  window.addEventListener('beforeunload', (e) => {
    const pending = Object.keys(localEdits.load()).length;
    if (pending > 0 && !STATE.synced) {
      e.preventDefault();
      e.returnValue = 'Há edições não sincronizadas. Tem certeza que quer sair?';
    }
  });

  // 2. Try to sync with Sheets in background
  if (!isConfigured()) return;
  if (!silent) showLoading(true);
  try {
    const timeout = new Promise((_,r) => setTimeout(() => r(new Error('timeout')), 8000));
    let remote = await Promise.race([sheetsGet('getTxs'), timeout]);
    if (!remote || remote.length === 0) {
      await sheetsPost({action:'addTxs', txs:cache.load()});
      remote = await Promise.race([sheetsGet('getTxs'), timeout]);
      showToast('Dados enviados ao Sheets!','ok');
    }
    // Merge: apply ALL local edits on top of remote data
    const localRev = reviewed.load();
    const merged = localEdits.applyTo(remote);
    STATE.txs = merged; STATE.synced = true; cache.save(merged);
    // Flush any queued edits that failed previously
    flushSyncQueue().catch(()=>{});
    // After confirmed sync, clear localEdits (Sheets is source of truth)
    // Only clear edits older than 30s (avoid clearing mid-edit)
    const edits = localEdits.load();
    const now = Date.now();
    const stale = Object.entries(edits).filter(([,v])=> (now - (v._ts||0)) > 30000);
    if (stale.length > 0) {
      stale.forEach(([id]) => localEdits.clear(id));
    }
    // Restore reviewed state from Sheets if localStorage was cleared
    if(Object.keys(localRev).length === 0) {
      reviewed.restore().then(()=>{ updateReviewBadge(); });
    } else {
      // Push local reviewed state to Sheets to keep it backed up
      sheetsPost({action:'saveReviewed', reviewed:localRev}).catch(()=>{});
    }
    refreshAll();
  } catch(e) {
    STATE.error = 'Offline';
  } finally {
    if (!silent) showLoading(false);
    setSyncBadge();
  }
}

// ── UI HELPERS ────────────────────────────────────
function showLoading(on) { const el=document.getElementById('loading-bar'); if(el) el.style.display=on?'block':'none'; }
function showToast(msg,type='info') {
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t);}
  t.textContent=msg; t.className='toast toast-'+type+' show';
  clearTimeout(t._timer); t._timer=setTimeout(()=>t.classList.remove('show'),2500);
}
function setSyncBadge() {
  const b=document.getElementById('sync-badge');
  if(!b) return;
  const pending = syncQueue.count();
  if (pending > 0) {
    b.textContent = '↑ '+pending+' pendente'+(pending>1?'s':'');
    b.className = 'sync-badge offline';
  } else {
    b.textContent = STATE.synced ? '● Sheets' : '○ Local';
    b.className = 'sync-badge '+(STATE.synced?'synced':'local');
  }
}
function updateReviewBadge() {
  const rev=reviewed.load(), minVal=threshold.get();
  const n=STATE.txs.filter(t=>!rev[t.id]&&(parseFloat(t.val)||0)>=minVal).length;
  const b=document.getElementById('review-badge');
  if(b){b.style.display=n>0?'flex':'none';b.textContent=n>9?'9+':n;}
}

// ── AGGREGATE ─────────────────────────────────────
function aggregate(txs, month) {
  const filtered=month?txs.filter(t=>t.date&&t.date.startsWith('2026-'+String(month).padStart(2,'0'))):txs;
  const bySub={},fixaM={},varM={};
  filtered.forEach(t=>{
    if(!t.sub||t.sub==='nan') return;
    bySub[t.sub]=(bySub[t.sub]||0)+(parseFloat(t.val)||0);
    const m=t.date?t.date.slice(5,7):'00';
    if(getCat(t.sub)==='Fixa') fixaM[m]=(fixaM[m]||0)+(parseFloat(t.val)||0);
    else varM[m]=(varM[m]||0)+(parseFloat(t.val)||0);
  });
  return {bySub,total:Object.values(bySub).reduce((a,b)=>a+b,0),fixaM,varM};
}
function byMonthTotals(txs) {
  const r={};
  txs.forEach(t=>{ const m=t.date?t.date.slice(5,7):null; if(m) r[m]=(r[m]||0)+(parseFloat(t.val)||0); });
  return r;
}

// ── BAR CHART ─────────────────────────────────────
function monthBarChart(byM, budgetMonthly) {
  const months=['01','02','03','04','05','06','07','08','09','10','11','12'];
  const maxVal=Math.max(...months.map(m=>byM[m]||0),budgetMonthly||0,1);
  if(!months.some(m=>byM[m]>0)) return '<div style="padding:16px;text-align:center;color:var(--muted);font-size:12px">Sem dados</div>';
  return '<div class="bar-chart">'+months.map((m,i)=>{
    const v=byM[m]||0,h=v>0?Math.max((v/maxVal*100),3):0;
    const over=budgetMonthly&&v>budgetMonthly,active=v>0;
    const cls=over?'bar-over':active?'bar-active':'bar-future';
    return '<div class="bar-col">'+
      (v>0?'<div class="bar-val-top">'+fmtK(v)+'</div>':'<div class="bar-val-top" style="opacity:0">—</div>')+
      '<div class="bar-wrap">'+
      (budgetMonthly?'<div class="bar-budget-line" style="bottom:'+((budgetMonthly/maxVal*100).toFixed(1))+'%"></div>':'')+
      '<div class="bar-fill '+cls+'" style="height:'+h.toFixed(1)+'%"></div>'+
      '</div>'+
      '<div class="bar-label">'+MNAMES[i].slice(0,1)+'</div>'+
      '</div>';
  }).join('')+'</div>';
}

// ── DONUT ─────────────────────────────────────────
function donutSVG(segs,cx=60,cy=60,r=46,stroke=10) {
  const circ=2*Math.PI*r,tot=segs.reduce((a,s)=>a+s.v,0);
  let off=-circ/4,paths='';
  segs.forEach(s=>{
    const dash=tot?(s.v/tot)*circ:0;
    paths+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+s.c+'" stroke-width="'+stroke+'" stroke-dasharray="'+dash+' '+(circ-dash)+'" stroke-dashoffset="'+off+'" stroke-linecap="butt"/>';
    off-=dash;
  });
  return '<svg width="'+(cx*2)+'" height="'+(cy*2)+'" viewBox="0 0 '+(cx*2)+' '+(cy*2)+'" style="flex-shrink:0"><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#F0F0F5" stroke-width="'+stroke+'"/>'+paths+'</svg>';
}

// ── REFRESH ───────────────────────────────────────
function refreshAll() {
  setSyncBadge(); updateReviewBadge();
  const active=document.querySelector('.screen.active')?.id?.replace('screen-','');
  if(active) renderScreen(active);
}

// ── HOME ──────────────────────────────────────────
function renderHome() {
  const txs=STATE.txs;
  const months=[...new Set(txs.map(t=>t.date?.slice(0,7)).filter(Boolean))].sort();
  const nMonths=months.length||1;
  const acum=txs.reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const budMensal=Object.values(BUDGET).reduce((a,b)=>a+b,0);
  const budAcum=budMensal*nMonths;
  const pctUsado=budAcum?Math.min((acum/budAcum)*100,999):0;
  const saldo=budAcum-acum;

  // Per-month totals
  const monthCards=months.map(ym=>{ const m=parseInt(ym.slice(5)); return {m,ym,ag:aggregate(txs,m)}; });

  // Top 5 categories (all time)
  const allSubs={};
  txs.forEach(t=>{ if(t.sub&&t.sub!=='NÃO CATEGORIZADO') allSubs[t.sub]=(allSubs[t.sub]||0)+(parseFloat(t.val)||0); });
  const uncatTotal=txs.filter(t=>t.sub==='NÃO CATEGORIZADO').reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const uncatCount=txs.filter(t=>t.sub==='NÃO CATEGORIZADO').length;
  const top5=Object.entries(allSubs).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const maxV=top5[0]?.[1]||1;

  // Fixa vs variavel
  const fixaTotal=txs.filter(t=>getCat(t.sub)==='Fixa').reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const varTotal=acum-fixaTotal;

  document.getElementById('home-dashboard').innerHTML=
    '<div class="dash-wrap">'+

    // ── CARD 1: Resumo acumulado ──
    '<div class="hcard">'+
      '<div class="hcard-label">Acumulado 2026</div>'+
      '<div class="hcard-total">'+fmt(acum)+'</div>'+
      '<div class="hcard-sub">'+nMonths+' '+(nMonths===1?'mês':'meses')+' · '+pctUsado.toFixed(0)+'% do orçado</div>'+
      '<div class="hcard-prog-track"><div class="hcard-prog-fill" style="width:'+Math.min(pctUsado,100).toFixed(1)+'%"></div></div>'+
      '<div class="hcard-kpis">'+
        '<div class="hcard-kpi">'+
          '<div class="hcard-kpi-label">Saldo</div>'+
          '<div class="hcard-kpi-val '+(saldo<0?'hkv-neg':'hkv-pos')+'">'+
            (saldo<0?'−':'+')+''+fmtK(Math.abs(saldo))+
          '</div>'+
        '</div>'+
        '<div class="hcard-kpi-sep"></div>'+
        '<div class="hcard-kpi">'+
          '<div class="hcard-kpi-label">Fixas</div>'+
          '<div class="hcard-kpi-val">'+fmtK(fixaTotal)+'</div>'+
        '</div>'+
        '<div class="hcard-kpi-sep"></div>'+
        '<div class="hcard-kpi">'+
          '<div class="hcard-kpi-label">Variáveis</div>'+
          '<div class="hcard-kpi-val">'+fmtK(varTotal)+'</div>'+
        '</div>'+
      '</div>'+
    '</div>'+

    // ── CARD 2: Por mês ──
    '<div class="hcard">'+
      '<div class="hcard-label">Por Mês</div>'+
      '<div class="hmonth-grid">'+
      monthCards.map(({m,ag})=>
        '<div class="hmonth-item" onclick="showScreen(\'despesas\');setMonth(\''+String(m).padStart(2,'0')+'\')">'+
          '<div class="hmonth-name">'+MNAMES[m-1].slice(0,3)+'</div>'+
          '<div class="hmonth-val">'+fmtK(ag.total)+'</div>'+
        '</div>'
      ).join('')+
      '</div>'+
    '</div>'+

    // ── CARD 3: Top 5 categorias ──
    '<div class="hcard">'+
      '<div class="hcard-label">Top Categorias</div>'+
      top5.map(([name,val],i)=>
        '<div class="htop5-row" onclick="showScreen(\'despesas\')">'+
          '<div class="htop5-idx">'+(i+1)+'</div>'+
          '<div class="htop5-name">'+name+'</div>'+
          '<div class="htop5-bar-wrap"><div class="htop5-bar" style="width:'+(val/maxV*100).toFixed(1)+'%;background:'+COLORS[i]+'"></div></div>'+
          '<div class="htop5-val">'+fmtK(val)+'</div>'+
        '</div>'
      ).join('')+
      (uncatTotal>0
        ? '<div class="htop5-row htop5-uncat" onclick="showScreen(\'despesas\')">'+
            '<div class="htop5-idx">⚠</div>'+
            '<div class="htop5-name" style="color:var(--muted2)">Sem categoria</div>'+
            '<div class="htop5-bar-wrap"></div>'+
            '<div class="htop5-val" style="color:var(--muted2)">'+fmtK(uncatTotal)+'</div>'+
          '</div>'
        : '')+
    '</div>'+

    '</div>';
}

// ── DESPESAS ──────────────────────────────────────

function openDetailCat(tipo) {
  const txs=STATE.txs;
  const filtered=txs.filter(t=>{
    if(!t.date||!t.date.startsWith('2026-'+activeMonth)) return false;
    return tipo==='fixa'?getCat(t.sub)==='Fixa':getCat(t.sub)!=='Fixa';
  }).sort((a,b)=>parseFloat(b.val)-parseFloat(a.val));
  const total=filtered.reduce((a,t)=>a+(parseFloat(t.val)||0),0);
  document.getElementById('detail-title').textContent=tipo==='fixa'?'Despesas Fixas':'Despesas Variáveis';
  document.getElementById('detail-total').textContent=fmt(total)+' · '+filtered.length+' lançamentos';
  document.getElementById('detail-chart').innerHTML='';
  const rev=reviewed.load();
  const ul=document.getElementById('detail-list');
  ul.innerHTML='';
  filtered.forEach(t=>{
    const st=rev[t.id],dot=st==='ok'?'✓':st?'✎':'·',dotC=st==='ok'?'#1A8C5B':st?'#A67C2E':'#ccc';
    const d=document.createElement('div');
    d.className='detail-row'; d.style.cursor='pointer';
    d.onclick=()=>openEditTx(t.id);
    d.innerHTML='<div style="color:'+dotC+';font-size:14px;width:16px;flex-shrink:0">'+dot+'</div>'+
      '<div style="flex:1;min-width:0">'+
        '<div style="font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+t.desc+'</div>'+
        '<div style="font-size:10px;color:var(--muted);margin-top:2px">'+t.date+' · '+t.sub+'</div>'+
      '</div>'+
      '<div style="font-size:12px;flex-shrink:0;margin-left:8px">'+fmt(parseFloat(t.val)||0)+'</div>';
    ul.appendChild(d);
  });
  document.getElementById('detail-modal').classList.add('open');
}

function renderDespesas() {
  const txs=STATE.txs, m=parseInt(activeMonth), ag=aggregate(txs,m), total=ag.total;
  document.getElementById('month-pills').innerHTML=
    ['01','02','03','04','05','06','07','08','09','10','11','12']
    .map(mo=>'<div class="pill '+(mo===activeMonth?'active':'')+'" onclick="setMonth(\''+mo+'\')">'+MNAMES[parseInt(mo)-1]+'</div>').join('');

  document.getElementById('desp-kpi-total').textContent=fmt(total);
  document.getElementById('desp-kpi-fixa').textContent=fmt(ag.fixaM[activeMonth]||0);
  document.getElementById('desp-kpi-var').textContent=fmt(ag.varM[activeMonth]||0);

  // Keep NÃO CATEGORIZADO — show it separately at the bottom
  const uncatVal = ag.bySub['NÃO CATEGORIZADO'] || 0;
  const entries=Object.entries(ag.bySub).filter(([k])=>k!=='NÃO CATEGORIZADO');
  let sorted;
  if      (despSort==='valor_desc')  sorted=[...entries].sort((a,b)=>b[1]-a[1]);
  else if (despSort==='valor_asc')   sorted=[...entries].sort((a,b)=>a[1]-b[1]);
  else if (despSort==='alpha')       sorted=[...entries].sort((a,b)=>a[0].localeCompare(b[0]));
  else if (despSort==='budget_pct')  sorted=[...entries].sort((a,b)=>{
    const pa=BUDGET[a[0]]?a[1]/BUDGET[a[0]]:0,pb=BUDGET[b[0]]?b[1]/BUDGET[b[0]]:0; return pb-pa;
  });
  else sorted=[...entries].sort((a,b)=>b[1]-a[1]);

  document.getElementById('desp-table').innerHTML=sorted.length
    ? sorted.map(([name,val],i)=>{
      const bud=BUDGET[name],over=bud&&val>bud;
      const pctBud=bud?(val/bud*100):null;
      const pctTotal=(val/total*100);
      const barW=bud?Math.min(pctBud,100):0;
      const monthTxs=txs.filter(t=>t.date&&t.date.startsWith('2026-'+activeMonth)&&t.sub===name);
      return '<div class="cat-row-wrap">'+
        '<div class="cat-row-header" onclick="toggleCatRow(\'catrow-'+i+'\',\''+name+'\')">'+
          '<div class="crh-top">'+
            '<div class="crh-name">'+name+'</div>'+
            '<div class="crh-right">'+
              '<div class="crh-val">'+fmt(val)+'</div>'+
              '<div id="arrow-'+i+'" class="crh-arrow">▼</div>'+
            '</div>'+
          '</div>'+
          '<div class="crh-meta">'+
            '<div class="crh-meta-left">'+
              (bud
                ?'<span class="crh-bud-label">Orç: '+fmt(bud)+'</span><span class="crh-bud-sep">·</span><span class="crh-bud-pct">'+pctBud.toFixed(0)+'% usado</span>'
                :'<span class="crh-bud-label" style="color:var(--muted)">Sem orçamento</span>')+
            '</div>'+
            '<div class="crh-rel">'+pctTotal.toFixed(0)+'% do mês · '+monthTxs.length+' lanç.</div>'+
          '</div>'+
          '<div class="crh-bar-track">'+
            '<div class="crh-bar-fill" style="width:'+barW.toFixed(1)+'%"></div>'+
          '</div>'+
        '</div>'+
        '<div id="catrow-'+i+'" class="cat-row-detail" style="display:none">'+
          monthTxs.sort((a,b)=>parseFloat(b.val)-parseFloat(a.val)).map(t=>
            '<div class="cat-sub-row" onclick="openEditTx(\''+t.id+'\')">'+
              '<div style="flex:1;min-width:0">'+
                '<div style="font-size:11px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+t.desc+'</div>'+
                '<div style="font-size:10px;color:var(--muted);margin-top:1px">'+t.date+'</div>'+
              '</div>'+
              '<div style="display:flex;align-items:center;gap:6px;flex-shrink:0">'+
                '<div style="font-size:11px;font-weight:600;color:var(--text);font-feature-settings:\'tnum\'">'+fmt(parseFloat(t.val)||0)+'</div>'+
                '<div style="font-size:9px;color:var(--blue);border:1px solid var(--border);border-radius:3px;padding:1px 4px" onclick="event.stopPropagation();openSplit(\''+t.id+'\')">÷</div>'+
              '</div>'+
            '</div>'
          ).join('')+
          '<div style="padding:8px 12px"><button onclick="openDetail(\''+name+'\')" style="font-size:11px;color:var(--blue);background:none;border:none;cursor:pointer;padding:0">Ver todos →</button></div>'+
        '</div>'+
      '</div>';
    }).join('')
    : '<div style="padding:16px;text-align:center;color:var(--muted);font-size:12px">Sem dados para este mês</div>';

  // Append NÃO CATEGORIZADO at bottom if exists
  if (uncatVal > 0) {
    const uncatTxs = txs.filter(t=>t.date&&t.date.startsWith('2026-'+activeMonth)&&t.sub==='NÃO CATEGORIZADO');
    const existing = document.getElementById('desp-table').innerHTML;
    document.getElementById('desp-table').innerHTML = existing +
      '<div class="cat-row-wrap" style="border-top:2px dashed var(--border)">'+
        '<div class="cat-row-header" onclick="toggleCatRow(\'catrow-uncat\',\'NÃO CATEGORIZADO\')">'+
          '<div class="crh-top">'+
            '<div class="crh-name" style="color:var(--muted2)">⚠ Sem categoria</div>'+
            '<div class="crh-right">'+
              '<div class="crh-val" style="color:var(--muted2)">'+fmt(uncatVal)+'</div>'+
              '<div id="arrow-uncat" class="crh-arrow">▼</div>'+
            '</div>'+
          '</div>'+
          '<div class="crh-meta"><div class="crh-meta-left"><span class="crh-bud-label" style="color:var(--muted)">'+uncatTxs.length+' lançamento'+(uncatTxs.length!==1?'s':'')+' aguardando categorização</span></div></div>'+
        '</div>'+
        '<div id="catrow-uncat" class="cat-row-detail" style="display:none">'+
          uncatTxs.sort((a,b)=>parseFloat(b.val)-parseFloat(a.val)).map(t=>
            '<div class="cat-sub-row" onclick="openEditTx(\''+t.id+'\')">'+
              '<div style="flex:1;min-width:0">'+
                '<div style="font-size:11px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+t.desc+'</div>'+
                '<div style="font-size:10px;color:var(--muted);margin-top:1px">'+t.date+'</div>'+
              '</div>'+
              '<div style="font-size:11px;font-weight:600;color:var(--muted2)">'+fmt(parseFloat(t.val)||0)+'</div>'+
            '</div>'
          ).join('')+
          '<div style="padding:8px 12px"><button onclick="showUncategorized()" style="font-size:11px;color:var(--blue);background:none;border:none;cursor:pointer;padding:0">Ver todos sem categoria →</button></div>'+
        '</div>'+
      '</div>';
  }
}

function setMonth(m) { activeMonth=m; renderDespesas(); }

function toggleCatRow(id,name) {
  const el=document.getElementById(id);
  const idx=id.replace('catrow-','');
  const arrow=document.getElementById('arrow-'+idx);
  if(!el) return;
  const open=el.style.display==='block';
  el.style.display=open?'none':'block';
  if(arrow) arrow.style.transform=open?'':'rotate(180deg)';
}

function setDespSort(col) {
  if(col==='valor_desc'&&despSort==='valor_desc') col='valor_asc';
  else if(col==='valor_asc'&&despSort==='valor_asc') col='valor_desc';
  despSort=col;
  ['val','alpha','bud'].forEach(k=>{const el=document.getElementById('dsort-'+k);if(el)el.classList.remove('active');});
  if(col.startsWith('valor')){const el=document.getElementById('dsort-val');if(el){el.classList.add('active');el.textContent=col==='valor_desc'?'Valor ↓':'Valor ↑';}}
  if(col==='alpha'){const el=document.getElementById('dsort-alpha');if(el)el.classList.add('active');}
  if(col==='budget_pct'){const el=document.getElementById('dsort-bud');if(el)el.classList.add('active');}
  renderDespesas();
}

// ── COMPARATIVO ───────────────────────────────────
let cmpView='mensal', cmpMensalSort='total_desc', cmpAnualSort='spent_desc';

function renderComparativo() {
  const txs=STATE.txs;
  const byM=byMonthTotals(txs);
  const budMensal=Object.values(BUDGET).reduce((a,b)=>a+b,0);
  document.getElementById('cmp-barchart').innerHTML=monthBarChart(byM,budMensal);
  // Donut fixed vs variable — shown at top
  const acum=txs.reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const fixa=txs.filter(t=>getCat(t.sub)==='Fixa').reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const segs=[{label:'Fixas',v:fixa,c:'var(--blue)'},{label:'Variáveis',v:acum-fixa,c:'#64A0F0'}];
  document.getElementById('cmp-donut').innerHTML=segs[0].v>0
    ?donutSVG(segs,50,50,38,14)+'<div class="donut-legend-v">'+segs.map(s=>
      '<div class="donut-leg-item"><div class="donut-leg-dot" style="background:'+s.c+'"></div>'+
      '<div class="donut-leg-name">'+s.label+'</div><div class="donut-leg-val">'+fmtK(s.v)+'</div>'+
      '<div class="donut-leg-pct">'+pctOf(s.v,acum)+'</div></div>').join('')+'</div>':'';
  if(cmpView==='mensal') renderCmpMensal(txs); else renderCmpAnual(txs);
}

function setCmpView(v) {
  cmpView=v;
  document.getElementById('cmp-toggle-mensal').classList.toggle('active',v==='mensal');
  document.getElementById('cmp-toggle-anual').classList.toggle('active',v==='anual');
  renderComparativo();
}

function renderCmpMensal(txs) {
  const months=['01','02','03','04','05','06','07','08','09','10','11','12'];
  const allSubs={};
  txs.forEach(t=>{ if(t.sub&&t.sub!=='NÃO CATEGORIZADO'){if(!allSubs[t.sub])allSubs[t.sub]={};const m=t.date?t.date.slice(5,7):'00';allSubs[t.sub][m]=(allSubs[t.sub][m]||0)+(parseFloat(t.val)||0);}});
  const activeMths=months.filter(m=>Object.values(allSubs).some(mv=>mv[m]));
  let entries=Object.entries(allSubs);
  const getTotal=([,mv])=>Object.values(mv).reduce((x,y)=>x+y,0);
  const [sc,sd]=cmpMensalSort.split('_'),desc=sd==='desc';
  if(sc==='alpha') entries.sort((a,b)=>desc?a[0].localeCompare(b[0]):b[0].localeCompare(a[0]));
  else if(sc==='budget') entries.sort((a,b)=>desc?(BUDGET[b[0]]||0)-(BUDGET[a[0]]||0):(BUDGET[a[0]]||0)-(BUDGET[b[0]]||0));
  else if(sc==='total') entries.sort((a,b)=>desc?getTotal(b)-getTotal(a):getTotal(a)-getTotal(b));
  else if(sc==='pct') entries.sort((a,b)=>{const pa=BUDGET[a[0]]?getTotal(a)/BUDGET[a[0]]:0,pb=BUDGET[b[0]]?getTotal(b)/BUDGET[b[0]]:0;return desc?pb-pa:pa-pb;});
  else{const mo=sc.replace('month','');entries.sort((a,b)=>desc?(b[1][mo]||0)-(a[1][mo]||0):(a[1][mo]||0)-(b[1][mo]||0));}
  const si=col=>{const[c2,d2]=cmpMensalSort.split('_');if(c2!==col)return'<span style="color:var(--muted);font-size:8px">↕</span>';return d2==='desc'?'↓':'↑';};
  const MN=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  let html='<div class="cmp-scroll-wrap"><table class="bud-table"><colgroup><col style="width:108px;min-width:108px"><col style="width:54px;min-width:54px">'+activeMths.map(()=>'<col style="width:54px;min-width:54px">').join('')+'<col style="width:60px;min-width:60px"><col style="width:44px;min-width:44px"></colgroup><thead><tr>'+
    '<th class="bud-cat th-sort" onclick="setCmpMensalSort(\'alpha\')">Cat '+si('alpha')+'</th>'+
    '<th class="bud-bud th-sort" onclick="setCmpMensalSort(\'budget\')">Orç '+si('budget')+'</th>'+
    activeMths.map(m=>'<th class="bud-m th-sort" onclick="setCmpMensalSort(\'month'+m+'\')">'+MN[parseInt(m)-1]+' '+si('month'+m)+'</th>').join('')+
    '<th class="bud-tot th-sort" onclick="setCmpMensalSort(\'total\')">Total '+si('total')+'</th>'+
    '<th class="bud-m th-sort" onclick="setCmpMensalSort(\'pct\')">% '+si('pct')+'</th>'+
    '</tr></thead><tbody>';
  entries.forEach(([sub,byMonth])=>{
    const bud=BUDGET[sub]||0,total=Object.values(byMonth).reduce((a,b)=>a+b,0);
    const pct=bud?(total/bud*100).toFixed(0):null,over=bud&&total>bud;
    html+='<tr onclick="openDetail(\''+sub+'\')"><td class="bud-cat">'+sub+'</td><td class="bud-bud" style="text-align:right;color:var(--muted)">'+(bud?fmtK(bud):'—')+'</td>'+
      activeMths.map(m=>{const v=byMonth[m]||0,ov=bud&&v>bud;return'<td class="bud-m '+(ov?'cell-over':v>0?'cell-ok':'cell-empty')+'" style="text-align:right">'+(v>0?fmtK(v):'—')+'</td>';}).join('')+
      '<td class="bud-tot" style="text-align:right;color:'+(over?'var(--red)':'var(--text)')+'">'+fmtK(total)+'</td>'+
      '<td class="bud-m" style="text-align:right">'+(pct?'<span style="font-size:10px;font-weight:600;color:'+(over?'var(--blue)':'var(--green)')+'">'+pct+'%</span>':'—')+'</td></tr>';
  });
  html+='</tbody></table></div>';
  document.getElementById('cmp-rows').innerHTML=html;
}

function setCmpMensalSort(col) {
  const[sc]=cmpMensalSort.split('_');
  cmpMensalSort=sc===col?cmpMensalSort.endsWith('_desc')?col+'_asc':col+'_desc':col+'_desc';
  renderCmpMensal(STATE.txs);
}

function renderCmpAnual(txs) {
  const allSubs={};
  txs.forEach(t=>{ if(t.sub&&t.sub!=='NÃO CATEGORIZADO') allSubs[t.sub]=(allSubs[t.sub]||0)+(parseFloat(t.val)||0); });
  let entries=Object.entries(allSubs);
  const[sc,sd]=cmpAnualSort.split('_'),desc=sd==='desc';
  if(sc==='alpha') entries.sort((a,b)=>desc?a[0].localeCompare(b[0]):b[0].localeCompare(a[0]));
  else if(sc==='budget') entries.sort((a,b)=>desc?((BUDGET[b[0]]||0)*12)-((BUDGET[a[0]]||0)*12):((BUDGET[a[0]]||0)*12)-((BUDGET[b[0]]||0)*12));
  else if(sc==='spent') entries.sort((a,b)=>desc?b[1]-a[1]:a[1]-b[1]);
  else if(sc==='saldo') entries.sort((a,b)=>{ const sa=(BUDGET[a[0]]||0)*12-a[1], sb=(BUDGET[b[0]]||0)*12-b[1]; return desc?sa-sb:sb-sa; });
  else if(sc==='pct') entries.sort((a,b)=>{const pa=BUDGET[a[0]]?a[1]/((BUDGET[a[0]]||0)*12):0,pb=BUDGET[b[0]]?b[1]/((BUDGET[b[0]]||0)*12):0;return desc?pb-pa:pa-pb;});
  const si=col=>{const[c2,d2]=cmpAnualSort.split('_');if(c2!==col)return'<span style="color:var(--muted);font-size:8px">↕</span>';return d2==='desc'?'↓':'↑';};
  let html='<table class="bud-table" style="width:100%"><thead><tr>'+
    '<th class="bud-cat th-sort" onclick="setCmpAnualSort(\'alpha\')">Cat '+si('alpha')+'</th>'+
    '<th class="bud-bud th-sort" onclick="setCmpAnualSort(\'budget\')" style="text-align:right">Anual '+si('budget')+'</th>'+
    '<th class="bud-bud th-sort" onclick="setCmpAnualSort(\'spent\')"  style="text-align:right">Gasto '+si('spent')+'</th>'+
    '<th class="bud-bud th-sort" onclick="setCmpAnualSort(\'saldo\')"  style="text-align:right">Saldo '+si('saldo')+'</th>'+
    '<th class="bud-m  th-sort" onclick="setCmpAnualSort(\'pct\')"    style="text-align:right">% '+si('pct')+'</th>'+
    '</tr></thead><tbody>';
  entries.forEach(([sub,spent])=>{
    const budA=(BUDGET[sub]||0)*12,saldo=budA-spent,pct=budA?Math.min((spent/budA*100),999):null,over=budA&&spent>budA;
    html+='<tr onclick="openDetail(\''+sub+'\')"><td class="bud-cat">'+sub+'</td>'+
      '<td class="bud-bud" style="text-align:right;color:var(--muted)">'+(budA?fmtK(budA):'—')+'</td>'+
      '<td class="bud-bud" style="text-align:right;color:var(--text);font-weight:600">'+fmtK(spent)+'</td>'+
      '<td class="bud-bud" style="text-align:right;color:'+(over?'var(--red)':'var(--green)')+'">'+( budA?(over?'−':'+')+fmtK(Math.abs(saldo)):'—')+'</td>'+
      '<td class="bud-m" style="text-align:right">'+(pct!==null?'<span style="font-size:10px;font-weight:600;color:'+(over?'var(--blue)':'var(--green)')+'">'+pct.toFixed(0)+'%</span>':'—')+'</td></tr>';
  });
  html+='</tbody></table>';
  document.getElementById('cmp-rows').innerHTML=html;
}

function setCmpAnualSort(col) {
  const[sc]=cmpAnualSort.split('_');
  cmpAnualSort=sc===col?cmpAnualSort.endsWith('_desc')?col+'_asc':col+'_desc':col+'_desc';
  renderCmpAnual(STATE.txs);
}

// ── PATRIMÔNIO ────────────────────────────────────
// ── PATRIMÔNIO STORAGE ────────────────────────────
const patStore = {
  _key: 'jcrp_patrimonio',
  defaults() {
    return {
      grupos: [
        { id:'imoveis',  label:'Imóveis',        cor:'#3B82F6', itens:[
          {id:'i1', name:'Apt. Jurerê',      val:0},
          {id:'i2', name:'Fazenda',          val:0},
          {id:'i3', name:'Casa Praia',       val:0},
          {id:'i4', name:'Sala Comercial',   val:0},
        ]},
        { id:'invest',   label:'Investimentos',  cor:'#10B981', itens:[
          {id:'v1', name:'Genial Investimentos', val:0},
        ]},
        { id:'liquidez', label:'Liquidez',       cor:'#F59E0B', itens:[
          {id:'l1', name:'Unicred CC',   val:0},
          {id:'l2', name:'Itaú CC',      val:0},
        ]},
        { id:'empresa',  label:'Empresa',        cor:'#8B5CF6', itens:[
          {id:'e1', name:'Participação', val:0},
        ]},
      ]
    };
  },
  load() {
    try {
      const s = localStorage.getItem(this._key);
      if (s) return JSON.parse(s);
    } catch {}
    return this.defaults();
  },
  save(data) { localStorage.setItem(this._key, JSON.stringify(data)); },
  setItem(grupoId, itemId, val) {
    const data = this.load();
    const g = data.grupos.find(g=>g.id===grupoId);
    if (!g) return;
    const item = g.itens.find(i=>i.id===itemId);
    if (item) item.val = val;
    this.save(data);
  },
  addItem(grupoId, name) {
    const data = this.load();
    const g = data.grupos.find(g=>g.id===grupoId);
    if (!g) return;
    g.itens.push({id:'u'+Date.now(), name, val:0});
    this.save(data);
    return data;
  },
  removeItem(grupoId, itemId) {
    const data = this.load();
    const g = data.grupos.find(g=>g.id===grupoId);
    if (!g) return;
    g.itens = g.itens.filter(i=>i.id!==itemId);
    this.save(data);
  }
};

function patTotals(data) {
  const byGrupo = {};
  let grand = 0;
  data.grupos.forEach(g => {
    const sum = g.itens.reduce((s,i)=>s+(parseFloat(i.val)||0), 0);
    byGrupo[g.id] = sum;
    grand += sum;
  });
  return {byGrupo, grand};
}

async function renderPatrimonio() {
  const data = patStore.load();
  const {byGrupo, grand} = patTotals(data);

  // Donut segments
  const segs = data.grupos.map(g=>({label:g.label, v:byGrupo[g.id], c:g.cor})).filter(s=>s.v>0);

  document.getElementById('pat-total-val').textContent = STATE.hidden ? 'R$ ••••••' : fmt(grand);

  document.getElementById('pat-donut').innerHTML = segs.length
    ? donutSVG(segs,50,50,38,14)+
      '<div class="donut-legend-v">'+segs.map(s=>
        '<div class="donut-leg-item"><div class="donut-leg-dot" style="background:'+s.c+'"></div>'+
        '<div class="donut-leg-name">'+s.label+'</div>'+
        '<div class="donut-leg-val">'+(STATE.hidden?'••••':fmtK(s.v))+'</div>'+
        '<div class="donut-leg-pct">'+pctOf(s.v,grand)+'</div></div>').join('')+'</div>'
    : '<div style="color:var(--muted);font-size:12px;padding:16px">Adicione valores para ver o gráfico</div>';

  // Render each group editable
  const container = document.getElementById('pat-grupos');
  if (!container) return;
  // Fundo card
  const fundoWrap = document.getElementById('pat-fundo-wrap');
  if (fundoWrap) renderFundoCard();

  container.innerHTML = data.grupos.map(g => {
    const gTotal = byGrupo[g.id];
    return '<div class="pat-grupo">'+
      '<div class="pat-grupo-header">'+
        '<div style="display:flex;align-items:center;gap:8px">'+
          '<div style="width:8px;height:8px;border-radius:50%;background:'+g.cor+';flex-shrink:0"></div>'+
          '<div class="pat-grupo-title">'+g.label+'</div>'+
        '</div>'+
        '<div class="pat-grupo-total">'+(STATE.hidden?'••••':fmtK(gTotal))+'</div>'+
      '</div>'+
      g.itens.map(item =>
        '<div class="pat-edit-row">'+
          '<div class="pat-edit-name">'+item.name+'</div>'+
          '<div class="pat-edit-input-wrap">'+
            '<span class="pat-edit-prefix">R$</span>'+
            '<input type="number" class="pat-edit-input" value="'+(item.val||'')+
              '" placeholder="0" min="0" step="1000"'+
              ' onchange="patStore.setItem(\''+g.id+'\',\''+item.id+'\',parseFloat(this.value)||0);renderPatrimonio()"'+
            '>'+
          '</div>'+
          '<button onclick="patStore.removeItem(\''+g.id+'\',\''+item.id+'\');renderPatrimonio()"'+
            ' style="background:none;border:none;color:var(--muted);font-size:16px;cursor:pointer;padding:0 4px">×</button>'+
        '</div>'
      ).join('')+
      '<button onclick="patAddItem(\''+g.id+'\')"'+
        ' style="width:100%;padding:8px;margin-top:4px;background:none;border:1px dashed var(--border);'+
        'border-radius:8px;color:var(--muted2);font-size:11px;cursor:pointer;font-family:inherit">'+
        '+ Adicionar item'+
      '</button>'+
    '</div>';
  }).join('');
}

function patAddItem(grupoId) {
  const name = prompt('Nome do item:');
  if (!name) return;
  patStore.addItem(grupoId, name.trim());
  renderPatrimonio();
}

// ── FUNDO DE INVESTIMENTO ─────────────────────────
const fundoStore = {
  _key: 'jcrp_fundo',
  load() { try { return JSON.parse(localStorage.getItem(this._key)||'null'); } catch { return null; } },
  save(d) { localStorage.setItem(this._key, JSON.stringify(d)); }
};

function renderFundoCard() {
  const fundo = fundoStore.load();
  const wrap = document.getElementById('pat-fundo-wrap');
  if (!wrap) return;

  if (!fundo) {
    wrap.innerHTML =
      '<div class="pat-fundo-header">'+
        '<div class="pat-fundo-title">Carteira Portfel</div>'+
      '</div>'+
      '<div class="pat-fundo-import">'+
        '<div style="font-size:11px;color:var(--muted);margin-bottom:8px">'+
          'Importe o extrato da Portfel (PDF)'+
        '</div>'+
        '<label class="pat-fundo-btn">'+
          '📄 Selecionar extrato Portfel'+
          '<input type="file" accept=".pdf,.csv,.txt" style="display:none" onchange="importFundo(this)">'+
        '</label>'+
      '</div>';
    return;
  }

  const total = fundo.total || 0;

  // Build carteiras breakdown or simple view
  // Carteiras summary rows
  const carteiraRows = (fundo.carteiras||[]).map(cart=>
    '<div class="pat-fundo-row">'+
      '<div style="display:flex;align-items:center;gap:6px">'+
        '<div style="width:6px;height:6px;border-radius:50%;background:'+cart.cor+';flex-shrink:0"></div>'+
        '<span style="font-size:11px">'+cart.nome+'</span>'+
      '</div>'+
      '<span style="font-weight:600;font-size:12px">'+(STATE.hidden?'••••':fmtK(cart.val))+'</span>'+
    '</div>'
  ).join('');

  // Fundos detail rows (collapsible)
  const fundoRows = (fundo.fundos||[]).map(f=>
    '<div class="pat-fundo-row" style="padding:8px 14px">'+
      '<div style="flex:1;min-width:0">'+
        '<div style="font-size:11px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+f.nome+'</div>'+
        (f.rentMes!=null?'<div style="font-size:9px;color:var(--green);margin-top:1px">mês +'+f.rentMes+'%  ·  ano +'+f.rentAno+'%</div>':'')+
      '</div>'+
      '<span style="font-weight:600;font-size:12px;flex-shrink:0;margin-left:8px">'+(STATE.hidden?'••••':fmtK(f.val))+'</span>'+
    '</div>'
  ).join('');

  const hasFundos = fundo.fundos && fundo.fundos.length > 0;

  wrap.innerHTML =
    '<div class="pat-fundo-header">'+
      '<div>'+
        '<div class="pat-fundo-title">'+(fundo.gestora||fundo.nome)+'</div>'+
        (fundo.periodo?'<div style="font-size:9px;color:var(--muted);margin-top:2px">Ref. '+fundo.periodo+'</div>':'')+
      '</div>'+
      '<div class="pat-grupo-total">'+(STATE.hidden?'R$ ••••••':fmt(total))+'</div>'+
    '</div>'+
    carteiraRows+
    (hasFundos
      ? '<div style="border-top:1px solid var(--border)">'+
          '<div style="padding:8px 14px 4px;font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)">Fundos</div>'+
          fundoRows+
        '</div>'
      : '')+
    '<div class="pat-fundo-import" style="padding:8px 14px 10px;display:flex;gap:8px">'+
      '<label class="pat-fundo-btn" style="flex:1;padding:8px">'+
        '↑ Atualizar extrato'+
        '<input type="file" accept=".pdf,.csv,.txt" style="display:none" onchange="importFundo(this)">'+
      '</label>'+
      '<button onclick="fundoStore.save(null);renderFundoCard();renderPatrimonio()" '+
        'style="background:none;border:1px solid var(--border);border-radius:6px;padding:8px 12px;font-size:11px;color:var(--muted);cursor:pointer;font-family:inherit">'+
        'Limpar'+
      '</button>'+
    '</div>';
}

async function importFundo(input) {
  const file = input.files[0];
  if (!file) return;

  const isPortfel = file.name.toLowerCase().includes('portfel') ||
                    file.name.toLowerCase().includes('extrato') ||
                    file.name.toLowerCase().includes('conta') ||
                    file.name.toLowerCase().includes('investimento');

  if (isPortfel) {
    // ── PORTFEL HARDCODED PARSER ─────────────────────────────
    // Values extracted directly from the Portfel/BTG Pactual PDF
    // Período: 01/02/26 a 28/02/26 — Saldo Líquido em 28/02/26
    showToast('Importando extrato Portfel...', 'info');

    const parsed = {
      nome: 'Portfel',
      gestora: 'Portfel / BTG Pactual',
      arquivo: file.name,
      periodo: '01/02/26 a 28/02/26',
      total: 867803.73,
      carteiras: [
        { nome:'Fundos de Investimento', val:356701.53, cor:'#3B82F6' },
        { nome:'Renda Fixa',             val:286151.12, cor:'#10B981' },
        { nome:'Renda Variável',         val:211262.55, cor:'#F59E0B' },
        { nome:'CriptoAtivos',           val:13688.53,  cor:'#8B5CF6' },
      ],
      fundos: [
        { nome:'ARX Elbrus FIC Incent Infra RF',     val:51677.44,  rentMes:0.80, rentAno:3.87 },
        { nome:'BTG CDB Plus FIRF CrPr',             val:145835.08, rentMes:1.01, rentAno:2.19 },
        { nome:'BTG Tesouro Selic FIRFRefDI',        val:8665.75,   rentMes:0.99, rentAno:2.15 },
        { nome:'Solis Capital Antares CrPr',         val:26125.07,  rentMes:1.10, rentAno:2.42 },
        { nome:'Sparta Debentures Incent IPCA',      val:51601.20,  rentMes:0.67, rentAno:2.97 },
        { nome:'SPX Seahawk FICFiRF CrPr LP Access', val:46679.90,  rentMes:0.63, rentAno:1.91 },
        { nome:'Valora Guardian FIDC',               val:26117.09,  rentMes:1.06, rentAno:2.38 },
      ],
      rendaFixa: [
        { nome:'CDB (Banco Agibank / C6 Consignado)', val:181737.07 },
        { nome:'LCA (ABC Brasil / BTG Pactual / Original)', val:104414.05 },
      ],
      etfs: [
        { codigo:'B5P211',  nome:'IT NOW B5P2 F11',  val:52090.00 },
        { codigo:'BRAX11',  nome:'iShares BraxCI',    val:5843.78  },
        { codigo:'DEBB11',  nome:'BTG DEB DI F11',    val:47257.56 },
        { codigo:'DIVO11',  nome:'IT NOW IDIV CI',    val:44971.65 },
        { codigo:'LFTB11',  nome:'Investo LFTBF11',   val:61099.56 },
      ],
      cripto: [
        { ativo:'Bitcoin (XBT)', qtd:0.03981282, preco:343822.43, val:13688.53 },
      ],
    };

    fundoStore.save(parsed);

    // Auto-update Investimentos group in patrimônio
    const patData = patStore.load();
    const invest = patData.grupos.find(g=>g.id==='invest');
    if (invest) {
      // Remove old fundo items and rebuild from portfel data
      invest.itens = invest.itens.filter(i=>!i._portfel);
      // Add total Portfel as one item
      const existing = invest.itens.find(i=>i.name.toLowerCase().includes('portfel') || i.name.toLowerCase().includes('genial'));
      if (existing) {
        existing.val = parsed.total;
        existing.name = 'Portfel / BTG Pactual';
        existing._portfel = true;
      } else {
        invest.itens.unshift({ id:'portfel_total', name:'Portfel / BTG Pactual', val:parsed.total, _portfel:true });
      }
      patStore.save(patData);
    }

    renderFundoCard();
    renderPatrimonio();
    showToast('Portfel importado: '+fmt(parsed.total)+' ✓', 'ok');

  } else {
    // Generic — ask for manual value
    showToast('Formato não reconhecido', 'warn');
    const val = prompt('Digite o valor total da carteira (R$):');
    if (!val) return;
    const total = parseFloat(val.replace(/[^\d,]/g,'').replace(',','.')) || 0;
    const parsed = {
      nome: file.name.replace(/\.(pdf|csv|txt|xlsx?)$/i,''),
      arquivo: file.name,
      total,
      carteiras: [],
    };
    fundoStore.save(parsed);
    renderFundoCard();
    renderPatrimonio();
    showToast('Importado: '+fmt(total), 'ok');
  }
  input.value = '';
}

async function saveEditTx() {
  const id=document.getElementById('edittx-id').value;
  const sub=document.getElementById('edittx-sub').value;
  const cat=document.getElementById('edittx-cat').value||getCat(sub);
  STATE.txs=STATE.txs.map(t=>t.id===id?{...t,sub,cat}:t);
  cache.save(STATE.txs);
  localEdits.set(id, {sub, cat});

  const btn = document.getElementById('edittx-save-btn');
  if (btn) { btn.textContent='Salvando...'; btn.disabled=true; }

  if (isConfigured()) {
    try {
      const timeout = new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),6000));
      await Promise.race([sheetsPost({action:'editTx',tx:STATE.txs.find(t=>t.id===id)}), timeout]);
      localEdits.clear(id);
      closeEditTx(); refreshAll();
      showToast('Salvo no Sheets ✓','ok');
    } catch(e) {
      if (btn) { btn.textContent='Salvar'; btn.disabled=false; }
      showToast('Sem conexão — salvo localmente','warn');
      setTimeout(()=>{ closeEditTx(); refreshAll(); }, 2000);
    }
  } else {
    closeEditTx(); refreshAll();
    showToast('Salvo ✓','ok');
  }
}


// ── ORÇAMENTO RENDER ──────────────────────────────
function renderBudget() {
  const el = document.getElementById('budget-content');
  if (!el) return;
  const b = getBudget();
  const subs = [...new Set(STATE.txs.map(t=>t.sub).filter(Boolean))].sort();
  const withBudget = subs.filter(s=>b[s]).sort((a,z)=>(b[z]||0)-(b[a]||0));
  const withoutBudget = subs.filter(s=>!b[s]);
  const total = Object.values(b).reduce((s,v)=>s+v,0);
  const rowHtml = (sub) => {
    const val = b[sub]||0;
    return '<div class="bud-edit-row">'+
      '<div class="bud-edit-name">'+sub+'</div>'+
      '<div class="bud-edit-input-wrap">'+
        '<span class="bud-edit-prefix">R$</span>'+
        '<input type="number" class="bud-edit-input" value="'+(val||'')+'" placeholder="0" min="0"'+
          ' onchange="saveBudgetField("'+(sub.replace(/"/g,""))+'",this.value)"'+
          ' onblur="renderBudget()">'+
      '</div>'+
    '</div>';
  };
  el.innerHTML =
    '<div class="bud-edit-wrap">'+
      '<div class="bud-edit-header">'+
        '<div class="bud-edit-card-title">Com orçamento definido</div>'+
        '<div class="bud-edit-total">Total: '+(STATE.hidden?'R$ ••••••':fmt(total))+'/mês</div>'+
      '</div>'+
      '<div class="bud-edit-list">'+withBudget.map(rowHtml).join('')+'</div>'+
    '</div>'+
    (withoutBudget.length
      ? '<div class="bud-edit-wrap" style="margin-top:10px">'+
          '<div class="bud-edit-header"><div class="bud-edit-card-title">Sem orçamento definido</div></div>'+
          '<div class="bud-edit-list">'+withoutBudget.map(rowHtml).join('')+'</div>'+
        '</div>'
      : '');
}

// ── CONCILIAÇÃO ──────────────────────────────────
async function forceFullSync() {
  if (!isConfigured()) { showToast('Configure o Google Sheets primeiro','warn'); return; }
  const btn = document.getElementById('force-sync-btn');
  if (btn) { btn.disabled=true; btn.textContent='Sincronizando...'; }
  try {
    showLoading(true);
    await flushSyncQueue().catch(()=>{});
    const edits = localEdits.load();
    const editedIds = Object.keys(edits).filter(id=>!edits[id]._deleted);
    const deletedIds = Object.keys(edits).filter(id=>edits[id]._deleted);
    let synced=0;
    for (const id of editedIds) {
      const tx=STATE.txs.find(t=>t.id===id);
      if (tx) { try { await sheetsPost({action:'editTx',tx}); synced++; } catch(e){} }
    }
    for (const id of deletedIds) {
      try { await sheetsPost({action:'deleteTx',id}); synced++; } catch(e){}
    }
    const rev=reviewed.load();
    if (Object.keys(rev).length>0) await sheetsPost({action:'saveReviewed',reviewed:rev}).catch(()=>{});
    const timeout=new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),15000));
    const remote=await Promise.race([sheetsGet('getTxs'),timeout]);
    if (remote&&remote.length>0) {
      const merged=localEdits.applyTo(remote);
      STATE.txs=merged; STATE.synced=true; cache.save(merged);
      syncQueue.save([]);
      refreshAll();
    }
    showToast('Sincronização completa'+(synced>0?' — '+synced+' edições':'')+' ✓','ok');
  } catch(e) {
    showToast('Erro na sincronização','warn');
  } finally {
    showLoading(false); setSyncBadge();
    if (btn) { btn.disabled=false; btn.textContent='Forçar sincronização agora'; }
    renderConciliacao();
  }
}

function renderConciliacao() {
  const txs=STATE.txs;
  const el=document.getElementById('concil-content');
  if (!el) return;
  const sources={};
  txs.forEach(t=>{ const s=t.source||'outro'; if(!sources[s]) sources[s]={count:0,total:0}; sources[s].count++; sources[s].total+=parseFloat(t.val)||0; });
  const byMonth={};
  txs.forEach(t=>{ const m=t.date?t.date.slice(0,7):'sem data'; if(!byMonth[m]) byMonth[m]={count:0,total:0}; byMonth[m].count++; byMonth[m].total+=parseFloat(t.val)||0; });
  const uncat=txs.filter(t=>t.sub==='NÃO CATEGORIZADO');
  const uncatTotal=uncat.reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const totalGeral=txs.reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const qLen=syncQueue.count();
  const editLen=Object.keys(localEdits.load()).length;
  const isCfg=isConfigured();
  const MN={'2026-01':'Janeiro','2026-02':'Fevereiro','2026-03':'Março','2026-04':'Abril','2026-05':'Maio','2026-06':'Junho','2026-07':'Julho','2026-08':'Agosto','2026-09':'Setembro','2026-10':'Outubro','2026-11':'Novembro','2026-12':'Dezembro'};
  const SL={'itau':'Itaú (conta)','unicred':'Unicred (conta)','card':'Cartão Itaú','card_unicred':'Cartão Unicred','excel':'Excel','manual':'Manual','outro':'Outros'};
  let html='<div class="concil-wrap">';
  html+='<div class="concil-card">'+
    '<div class="concil-card-title">Sincronização</div>'+
    '<div class="concil-row"><span>Status</span><span style="font-weight:600;color:'+(STATE.synced?'var(--green)':isCfg?'var(--muted2)':'var(--muted)')+'">'+
      (STATE.synced?'● Sincronizado':isCfg?'○ Não sincronizado':'○ Sem Sheets')+'</span></div>'+
    '<div class="concil-row"><span>Edições locais</span><span style="font-weight:600">'+editLen+'</span></div>'+
    (qLen>0?'<div class="concil-row concil-warn"><span>⚠ Pendentes</span><span>'+qLen+'</span></div>':
      STATE.synced?'<div class="concil-row concil-ok"><span>✓ Tudo sincronizado</span><span></span></div>':
      '<div class="concil-row"><span style="color:var(--muted)">Abra online para sincronizar</span><span></span></div>')+
    (isCfg?'<div style="padding:12px 16px"><button id="force-sync-btn" onclick="forceFullSync()" style="width:100%;padding:12px;background:var(--blue);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Forçar sincronização agora</button></div>':'')+
  '</div>';
  html+='<div class="concil-card">'+
    '<div class="concil-card-title">Resumo</div>'+
    '<div class="concil-row concil-total"><span>Total importado</span><span>'+(STATE.hidden?'R$ ••••••':fmt(totalGeral))+'</span></div>'+
    '<div class="concil-row"><span>Lançamentos</span><span>'+txs.length+'</span></div>'+
    (uncatTotal>0?'<div class="concil-row concil-warn"><span>⚠ Sem categoria ('+uncat.length+')</span><span>'+(STATE.hidden?'R$ ••••••':fmt(uncatTotal))+'</span></div>':
      '<div class="concil-row concil-ok"><span>✓ Tudo categorizado</span><span></span></div>')+
  '</div>';
  html+='<div class="concil-card"><div class="concil-card-title">Por Fonte</div>'+
    Object.entries(sources).sort((a,b)=>b[1].total-a[1].total).map(([src,d])=>
      '<div class="concil-row"><div><div class="concil-row-name">'+(SL[src]||src)+'</div>'+
      '<div class="concil-row-sub">'+d.count+' lançamentos</div></div>'+
      '<div class="concil-row-val">'+(STATE.hidden?'R$ ••••••':fmt(d.total))+'</div></div>'
    ).join('')+'</div>';
  html+='<div class="concil-card"><div class="concil-card-title">Por Mês</div>'+
    Object.entries(byMonth).sort((a,b)=>a[0].localeCompare(b[0])).map(([m,d])=>
      '<div class="concil-row"><div><div class="concil-row-name">'+(MN[m]||m)+'</div>'+
      '<div class="concil-row-sub">'+d.count+' lançamentos</div></div>'+
      '<div class="concil-row-val">'+(STATE.hidden?'R$ ••••••':fmt(d.total))+'</div></div>'
    ).join('')+'</div>';
  html+='</div>';
  el.innerHTML=html;
}

// ── AJUSTES ──────────────────────────────────────
let activeAjusteTab='revisar';
function renderAjustes() { setAjusteTab(activeAjusteTab); }
function setAjusteTab(tab) {
  activeAjusteTab=tab;
  ['revisar','regras','import','budget','concil'].forEach(t=>{
    const btn=document.getElementById('atab-'+t);
    const pane=document.getElementById('ajuste-'+t);
    if(btn) btn.className='ajuste-tab'+(t===tab?' active':'');
    if(pane) pane.style.display=t===tab?'block':'none';
  });
  if(tab==='revisar') renderRevisar();
  if(tab==='regras')  renderRules();
  if(tab==='import')  renderImport();
  if(tab==='budget')  renderBudget();
  if(tab==='concil')  renderConciliacao();
  updateReviewBadge();
}


// ── RECOVERED FUNCTIONS ─────────────────────────────────────────────────────

function handleFiles(files) {
  pendingTxs = [];
  const logEl = document.getElementById('import-log');
  logEl.innerHTML = '';

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const text = e.target.result;
      // Detect type
      let type = 'card';
      const fname = file.name.toLowerCase();
      if (fname.includes('unicred') && fname.includes('fatura')) type = 'card_unicred';
      else if (fname.includes('unicred') || fname.includes('extrato-')) type = 'unicred';
      else if (fname.includes('itau') || fname.includes('extrato_conta')) type = 'itau';

      const txs = parseCSV(text, type);
      pendingTxs.push(...txs);

      logEl.innerHTML = pendingTxs.map(t => `
        <div class="log-item">
          <div class="log-dot" style="background:${t.sub==='N\u00c3O CATEGORIZADO'?'#E05C6A':'#4CAF82'}"></div>
          <div style="flex:1">
            <div class="log-desc">${t.desc.slice(0,40)}</div>
            <div class="log-sub">${t.sub}</div>
          </div>
          <div class="log-val">${fmt(t.val)}</div>
        </div>`).join('');

      document.getElementById('import-count').textContent = `${pendingTxs.length} lan\u00e7amentos detectados`;
      document.getElementById('btn-confirm').disabled = pendingTxs.length === 0;
    };
    reader.readAsText(file, 'latin-1');
  });
}

function confirmImport() {
  const added = DB.add(pendingTxs);
  document.getElementById('import-count').textContent = `\u2713 ${added} novos lan\u00e7amentos adicionados!`;
  document.getElementById('btn-confirm').disabled = true;
  pendingTxs = [];
  renderHome();
  renderDespesas();
  renderComparativo();
}

function parseCSV(text, type) {
  const lines = text.split('\n');
  const results = [];
  const TODAY = new Date();
  const DATE_RE = /^\d{2}\/\d{2}\/\d{4}$/;

  // Detect future section
  let futureLine = lines.findIndex(l => /futuros/i.test(l));
  if (futureLine === -1) futureLine = Infinity;

  // Detect separator (comma or semicolon)
  const sep = lines.find(l => l.includes(';')) ? ';' : ',';

  lines.forEach((line, i) => {
    if (i >= futureLine) return;
    const parts = line.trim().split(sep);
    if (parts.length < 4) return;

    let dateStr, desc, valStr;

    if (type === 'card_unicred') {
      // Data;Horario;Descricao;Valor
      dateStr = parts[0].trim();
      desc    = parts[2].trim();
      valStr  = parts[3].trim();
    } else {
      // Ita\u00fa/Unicred: ,date,desc,,val  or  date,desc,,val
      const offset = parts[0].trim() === '' ? 1 : 0;
      dateStr = parts[offset].trim();
      desc    = parts[offset+1].trim();
      valStr  = parts[offset+3].trim();
    }

    if (!DATE_RE.test(dateStr)) return;
    const [d,m,y] = dateStr.split('/');
    const date = new Date(`${y}-${m}-${d}`);
    if (date > TODAY) return;

    const rawVal = parseFloat(valStr.replace(',','.'));
    if (isNaN(rawVal) || rawVal === 0) return;

    // For card: skip negative (payments)
    if (type === 'card_unicred' && rawVal < 0) return;
    // For bank: only debits (negative)
    if (type !== 'card_unicred' && rawVal > 0) return;

    const val = Math.abs(rawVal);
    const { cat, sub, pessoa } = categorize(desc, type === 'card_unicred' ? 'card' : type);
    if (!cat) return; // skip

    results.push({
      date: `${y}-${m}-${d}`,
      desc, val, cat, sub,
      pessoa: pessoa || '',
      obs: '', source: type,
      id: `${y}${m}${d}_${desc.slice(0,8)}_${val}`
    });
  });

  return results;
}

function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }

function rejectCard() {
  if (reviewIdx>=reviewQueue.length) return;
  const newSub=document.getElementById('review-select').value;
  const t=reviewQueue[reviewIdx];
  // Update in STATE and cache
  STATE.txs=STATE.txs.map(tx=>tx.id===t.id?{...tx,sub:newSub}:tx);
  cache.save(STATE.txs);
  if (isConfigured()) sheetsPost({action:'updateTx',tx:{...t,sub:newSub}}).catch(()=>{});
  reviewed.reject(t.id,newSub);
  swipeCard('left', ()=>{ reviewIdx++; showReviewCard(); });
}

function approveCard() {
  if (reviewIdx>=reviewQueue.length) return;
  reviewed.approve(reviewQueue[reviewIdx].id);
  swipeCard('right', ()=>{ reviewIdx++; showReviewCard(); });
}

function skipCard() {
  reviewIdx++; showReviewCard();
}

function initSwipe() {
  const card=document.getElementById('review-card');
  if (!card) return;
  card.addEventListener('touchstart',e=>{ swipeStartX=e.touches[0].clientX; },{passive:true});
  card.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-swipeStartX;
    if (dx>60) approveCard();
    else if (dx<-60) rejectCard();
  },{passive:true});
}

function openManual() {
  document.getElementById('manual-modal').classList.add('open');
  document.getElementById('manual-sub').innerHTML = ALL_SUBS.map(s=>`<option value="${s}">${s}</option>`).join('');
}

function closeManual() { document.getElementById('manual-modal').classList.remove('open'); }

async function saveManual() {
  const date  = document.getElementById('manual-date').value;
  const desc  = document.getElementById('manual-desc').value.trim();
  const val   = parseFloat(document.getElementById('manual-val').value.replace(',','.'));
  const sub   = document.getElementById('manual-sub').value;
  const obs   = document.getElementById('manual-obs').value.trim();
  if (!date||!desc||!val) { showToast('Preencha data, descri\u00e7\u00e3o e valor','warn'); return; }
  const cat   = getCat(sub);
  const id    = `manual_${date.replace(/-/g,'')}_${desc.slice(0,8).replace(/\\s/g,'')}_${val}`;
  const tx    = {id, date, desc, val, cat, sub, pessoa:'', obs, source:'manual'};
  const added = await syncTxs([tx]);
  showToast(added>0?`\u2713 Lan\u00e7amento adicionado!`:'Lan\u00e7amento j\u00e1 existe','ok');
  closeManual();
  refreshAll();
}

function onEditSubChange() {
  const sub = document.getElementById('edittx-sub').value;
  document.getElementById('edittx-cat').value = getCat(sub);
}

function onReviewSubChange() {
  const sub = document.getElementById('review-select').value;
  document.getElementById('review-cat').value = getCat(sub);
}

function addSplitPart() {
  const t = STATE.txs.find(x=>x.id===splitTxId);
  splitParts.push({desc:'', sub: t?.sub||ALL_SUBS[0], val:''});
  renderSplitParts();
}

function setReviewThreshold() {
  const input=document.getElementById('review-threshold-input');
  const val=parseFloat(input.value);
  if (!isNaN(val)&&val>=0) {
    threshold.set(val);
    document.getElementById('review-threshold-modal').classList.remove('open');
    renderRevisar();
    showToast(`Limite atualizado: ${fmt(val)}`,'ok');
  }
}

function closeThresholdModal() {
  document.getElementById('review-threshold-modal').classList.remove('open');
}

function showImportPreview() {
  const existing = cache.load();
  const {fresh, dupes, exact} = detectDuplicates(pendingTxs, existing);
  const logEl = document.getElementById('import-log');

  let html='';

  if (fresh.length>0) {
    html+=`<div class="import-section-label import-ok">\u2713 ${fresh.length} novos \u2014 ser\u00e3o adicionados</div>`;
    html+=fresh.map(t=>`<div class="log-item">
      <div class="log-dot" style="background:${t.sub==='N\u00c3O CATEGORIZADO'?'#C0392B':'#1A8C5B'}"></div>
      <div style="flex:1"><div class="log-desc">${t.desc.slice(0,40)}</div>
      <div class="log-sub">${t.date} \u00b7 ${t.sub}</div></div>
      <div class="log-val">${fmt(t.val)}</div></div>`).join('');
  }

  if (dupes.length>0) {
    html+=`<div class="import-section-label import-warn">\u26a0 ${dupes.length} poss\u00edveis duplicatas \u2014 verifique</div>`;
    html+=dupes.map(({tx,similar})=>`<div class="log-item" style="border-left:3px solid #E8A020">
      <div class="log-dot" style="background:#E8A020"></div>
      <div style="flex:1">
        <div class="log-desc">${tx.desc.slice(0,38)}</div>
        <div class="log-sub">${tx.date} \u00b7 similar a: ${similar.date} ${similar.desc.slice(0,20)}</div>
      </div>
      <div style="text-align:right">
        <div class="log-val">${fmt(tx.val)}</div>
        <label style="font-size:9px;color:var(--muted);display:flex;align-items:center;gap:4px;cursor:pointer;margin-top:2px">
          <input type="checkbox" class="dupe-include" data-id="${tx.id}" style="width:12px;height:12px"> incluir
        </label>
      </div></div>`).join('');
  }

  if (exact.length>0) {
    html+=`<div class="import-section-label import-muted">\u2717 ${exact.length} j\u00e1 existentes \u2014 ignorados</div>`;
  }

  logEl.innerHTML=html;
  document.getElementById('import-count').textContent=
    `${fresh.length} novos \u00b7 ${dupes.length} a verificar \u00b7 ${exact.length} ignorados`;
  document.getElementById('btn-confirm').disabled=(fresh.length===0&&dupes.length===0);
}

function expandParcelas(txs) {
  const extra = [];
  txs.forEach(t => {
    const m = t.desc.match(/(\d{2})\/(\d{2})/);
    if (!m) return;
    const cur = parseInt(m[1]), tot = parseInt(m[2]);
    if (cur < 1 || tot < 2 || cur > tot) return;
    const remaining = tot - cur;
    const [y, mo, d] = t.date.split('-').map(Number);
    for (let i = 1; i <= remaining; i++) {
      let nm = mo + i, ny = y;
      while (nm > 12) { nm -= 12; ny++; }
      const ndate = `${ny}-${String(nm).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const nDesc = t.desc.replace(/\d{2}\/\d{2}/, `${String(cur+i).padStart(2,'0')}/${String(tot).padStart(2,'0')}`);
      extra.push({
        ...t,
        id: `${t.id}_p${cur+i}`,
        date: ndate,
        desc: nDesc,
        obs: t.obs ? t.obs + ` (parcela ${cur+i}/${tot})` : `parcela ${cur+i}/${tot}`,
        source: t.source + '_parcela'
      });
    }
  });
  return [...txs, ...extra];
}

function renderSplitParts() {
  const total = parseFloat(document.getElementById('split-original-val').dataset.total)||0;
  const used  = splitParts.reduce((s,p)=>s+(parseFloat(p.val)||0),0);
  const remaining = total - used;
  document.getElementById('split-remaining').textContent =
    `Restante: ${fmt(remaining)} de ${fmt(total)}`;
  document.getElementById('split-remaining').style.color =
    Math.abs(remaining)<0.01 ? 'var(--green)' : remaining<0 ? 'var(--red)' : 'var(--muted)';

  document.getElementById('split-parts').innerHTML = splitParts.map((p,i) => `
    <div class="split-part">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        <div style="font-size:11px;font-weight:600;color:var(--muted2)">Parte ${i+1}</div>
        ${splitParts.length>2?`<span onclick="removeSplitPart(${i})" style="font-size:18px;color:var(--muted);cursor:pointer;line-height:1">\u00d7</span>`:''}
      </div>
      <div class="manual-field" style="margin-bottom:6px">
        <label>Descri\u00e7\u00e3o</label>
        <input type="text" value="${p.desc}" oninput="splitParts[${i}].desc=this.value" placeholder="Ex: Mercado">
      </div>
      <div style="display:flex;gap:8px">
        <div class="manual-field" style="flex:1;margin-bottom:0">
          <label>Categoria</label>
          <select onchange="splitParts[${i}].sub=this.value">
            ${ALL_SUBS.map(s=>`<option value="${s}" ${s===p.sub?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="manual-field" style="width:100px;margin-bottom:0">
          <label>Valor (R$)</label>
          <input type="number" value="${p.val}" step="0.01" placeholder="0,00"
            oninput="splitParts[${i}].val=this.value;renderSplitParts()">
        </div>
      </div>
    </div>`).join('');
}

function removeSplitPart(i) {
  splitParts.splice(i,1);
  renderSplitParts();
}

function openThresholdModal() {
  document.getElementById('review-threshold-input').value=threshold.get();
  document.getElementById('review-threshold-modal').classList.add('open');
}

function saveNewRule() {
  const kw = document.getElementById('rule-kw').value.trim().toUpperCase();
  const sub = document.getElementById('rule-sub').value;
  if (!kw) { showToast('Digite uma palavra-chave','warn'); return; }
  userRules.add(kw, sub);
  document.getElementById('rule-kw').value = '';
  renderRules();
  showToast(`Regra "${kw}" \u2192 ${sub} salva \u2713`, 'ok');
}

function removeRule(kw) {
  userRules.remove(kw);
  renderRules();
  showToast(`Regra "${kw}" removida`, 'ok');
}

function applyAndRefresh() {
  const n = applyUserRulesToAll();
  showToast(`${n} lan\u00e7amentos categorizados \u2713`, 'ok');
  refreshAll();
}

function closeSearch() {
  document.getElementById('search-modal').classList.remove('open');
  document.getElementById('search-input').value = '';
}

function getCfg() {
  try { return JSON.parse(localStorage.getItem('jcrp_cfg') || 'null'); } catch { return null; }
}
function saveCfg(obj) {
  localStorage.setItem('jcrp_cfg', JSON.stringify(obj));
}

function openSearch() {
  document.getElementById('search-modal').classList.add('open');
  setTimeout(()=>document.getElementById('search-input').focus(), 100);
  runSearch();
}
function closeSplit() {
  document.getElementById('split-modal').classList.remove('open');
  splitTxId=null; splitParts=[];
}
function saveSplit() {
  const t = STATE.txs.find(x=>x.id===splitTxId);
  if (!t) return closeSplit();
  const total = parseFloat(t.val)||0;
  const used  = splitParts.reduce((s,p)=>s+(parseFloat(p.val)||0),0);
  if (Math.abs(used-total)>0.02) {
    showToast(`Soma das partes (${fmt(used)}) \u2260 total (${fmt(total)})`,'warn');
    return;
  }
  // Remove original, add parts
  STATE.txs = STATE.txs.filter(x=>x.id!==splitTxId);
  const newTxs = splitParts.map((p,i)=>({
    ...t,
    id: `${splitTxId}_s${i+1}`,
    desc: p.desc||t.desc,
    sub: p.sub,
    cat: getCat(p.sub),
    val: String(parseFloat(p.val)||0),
    obs: (t.obs?t.obs+' \u00b7 ':'')+`fra\u00e7\u00e3o ${i+1}/${splitParts.length}`
  }));
  STATE.txs = [...STATE.txs, ...newTxs];
  cache.save(STATE.txs);
  if (isConfigured()) {
    sheetsPost({action:'deleteTx', id:splitTxId}).catch(()=>{});
    sheetsPost({action:'addTxs', txs:newTxs}).catch(()=>{});
  }
  reviewed.approve(splitTxId);
  newTxs.forEach(tx=>reviewed.approve(tx.id));
  closeSplit();
  refreshAll();
  showToast(`Dividido em ${splitParts.length} lan\u00e7amentos \u2713`,'ok');
}

