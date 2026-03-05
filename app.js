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
function fmt(v) { return 'R$ '+Number(v||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
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
const threshold = {
  get() { return parseFloat(localStorage.getItem('jcrp_review_threshold')||'1000'); },
  set(v) { localStorage.setItem('jcrp_review_threshold', String(v)); }
};
const reviewed = {
  load() { try { return JSON.parse(localStorage.getItem('jcrp_reviewed')||'{}'); } catch { return {}; } },
  approve(id) { const r=this.load(); r[id]='ok'; localStorage.setItem('jcrp_reviewed',JSON.stringify(r)); }
};

// ── STATE ─────────────────────────────────────────
const STATE = { txs:[], synced:false, error:null };

// ── SHEETS ────────────────────────────────────────
const isConfigured = () => SHEETS_URL && SHEETS_URL.includes('script.google.com');
async function sheetsGet(action) {
  const r = await fetch(`${SHEETS_URL}?action=${action}`); return r.json();
}
async function sheetsPost(body) {
  const r = await fetch(SHEETS_URL,{method:'POST',body:JSON.stringify(body)}); return r.json();
}

// ── LOAD ──────────────────────────────────────────
async function loadData(silent=false) {
  STATE.error = null;
  // 1. Show local data immediately (never wait for network to render)
  STATE.txs = cache.load();
  if (STATE.txs.length === 0) { seedData(); STATE.txs = cache.load(); }
  STATE.synced = false;
  refreshAll();

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
    STATE.txs = remote; STATE.synced = true; cache.save(remote);
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
  b.textContent=STATE.synced?'● Sheets':'○ Local';
  b.className='sync-badge '+(STATE.synced?'synced':'local');
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
  const saldo=budAcum-acum, over=acum>budAcum;

  const allSubs={};
  txs.forEach(t=>{ if(t.sub&&t.sub!=='NÃO CATEGORIZADO') allSubs[t.sub]=(allSubs[t.sub]||0)+(parseFloat(t.val)||0); });
  const top5=Object.entries(allSubs).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const maxV=top5[0]?.[1]||1;

  const monthCards=months.map(ym=>{
    const m=parseInt(ym.slice(5));
    const ag=aggregate(txs,m);
    return {m,ym,ag,ov:ag.total>budMensal};
  });

  const byM=byMonthTotals(txs);
  const allMonths=['01','02','03','04','05','06','07','08','09','10','11','12'];
  const barMax=Math.max(...allMonths.map(m=>byM[m]||0),budMensal,1);

  const overCats=top5.filter(([n,v])=>BUDGET[n]&&v>BUDGET[n]*nMonths).map(([n])=>n+' acima do orçado');
  const alerts=overCats;

  document.getElementById('home-dashboard').innerHTML=
    '<div class="dash-wrap">'+

    // 1. ACUMULADO
    '<div class="dash-hero">'+
      '<div class="dash-hero-left">'+
        '<div class="dash-label">Acumulado 2026</div>'+
        '<div class="dash-total">'+fmt(acum)+'</div>'+
        '<div class="dash-sub">'+nMonths+' '+(nMonths===1?'mês':'meses')+' · '+pctUsado.toFixed(0)+'% do orçado</div>'+
      '</div>'+
      '<div class="dash-hero-right">'+
        '<div class="dash-saldo-label">'+(over?'Estouro':'Saldo')+'</div>'+
        '<div class="dash-saldo '+(over?'dash-over':'')+'">'+(over?'−':'+')+' '+fmtK(Math.abs(saldo))+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="dash-prog-track"><div class="dash-prog-fill '+(over?'dash-prog-over':'')+'" style="width:'+Math.min(pctUsado,100).toFixed(1)+'%"></div></div>'+

    // 2. MESES
    '<div class="dash-months">'+
    monthCards.map(({m,ag,ov},i)=>
      (i>0?'<div class="dash-month-div"></div>':'')+
      '<div class="dash-month-card '+(ov?'dash-month-over':'')+'" onclick="showScreen(\'despesas\');setMonth(\''+String(m).padStart(2,'0')+'\')">'+
        '<div class="dash-month-name">'+MNAMES[m-1].slice(0,3)+'</div>'+
        '<div class="dash-month-val">'+fmtK(ag.total)+'</div>'+
        '<div class="dash-month-sub">'+(ov?'▲ estouro':'▼ ok')+'</div>'+
      '</div>'
    ).join('')+
    '</div>'+

    // 3. TOP 5
    '<div class="dash-section-label">Top 5 Categorias</div>'+
    '<div class="dash-top5">'+
    top5.map(([name,val],i)=>{
      const ov=BUDGET[name]&&val>BUDGET[name]*nMonths;
      return '<div class="dash-cat-row" onclick="showScreen(\'despesas\')">'+
        '<div class="dash-cat-dot" style="background:'+COLORS[i]+'"></div>'+
        '<div class="dash-cat-name">'+name+'</div>'+
        '<div class="dash-cat-bar-wrap"><div class="dash-cat-bar" style="width:'+(val/maxV*100).toFixed(1)+'%;background:'+(ov?'var(--red)':COLORS[i])+'"></div></div>'+
        '<div class="dash-cat-val '+(ov?'dash-over':'')+'">'+fmtK(val)+'</div>'+
      '</div>';
    }).join('')+
    '</div>'+

    // 4. EVOLUÇÃO
    '<div class="dash-section-label">Evolução</div>'+
    '<div class="dash-bars">'+
    allMonths.map((mo,i)=>{
      const v=byM[mo]||0,h=v>0?Math.max((v/barMax*100),4):0;
      const ov=v>budMensal,active=v>0;
      return '<div class="dash-bar-col" '+(active?'onclick="showScreen(\'despesas\');setMonth(\''+mo+'\')" style="cursor:pointer"':'')+'>'+
        '<div class="dash-bar-wrap">'+
        '<div class="dash-budget-line" style="bottom:'+(budMensal/barMax*100).toFixed(1)+'%"></div>'+
        '<div class="dash-bar-fill '+(ov?'dash-bar-over':active?'dash-bar-active':'dash-bar-empty')+'" style="height:'+h.toFixed(1)+'%"></div>'+
        '</div>'+
        '<div class="dash-bar-lbl">'+MNAMES[i].slice(0,1)+'</div>'+
      '</div>';
    }).join('')+
    '</div>'+

    // 5. ALERTAS
    (alerts.length?'<div class="dash-alerts">'+alerts.map(a=>'<div class="dash-alert-item">⚠ '+a+'</div>').join('')+'</div>':'')+

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
              '<div class="crh-val '+(over?'crh-over':'')+'">'+fmt(val)+'</div>'+
              '<div id="arrow-'+i+'" class="crh-arrow">▼</div>'+
            '</div>'+
          '</div>'+
          '<div class="crh-meta">'+
            '<div class="crh-meta-left">'+
              (bud
                ?'<span class="crh-bud-label">Orç: '+fmt(bud)+'</span><span class="crh-bud-sep">·</span><span class="crh-bud-pct '+(over?'crh-over':pctBud>80?'crh-warn':'')+'">'+pctBud.toFixed(0)+'% usado</span>'
                :'<span class="crh-bud-label" style="color:var(--muted)">Sem orçamento</span>')+
            '</div>'+
            '<div class="crh-rel">'+pctTotal.toFixed(0)+'% do mês · '+monthTxs.length+' lanç.</div>'+
          '</div>'+
          '<div class="crh-bar-track">'+
            '<div class="crh-bar-fill '+(over?'crh-bar-over':'')+'" style="width:'+barW.toFixed(1)+'%"></div>'+
            (over?'<div class="crh-bar-extra" style="width:'+Math.min(((val-bud)/bud*100),100).toFixed(1)+'%"></div>':'')+
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
  if(cmpView==='mensal') renderCmpMensal(txs); else renderCmpAnual(txs);
  const byM=byMonthTotals(txs);
  const budMensal=Object.values(BUDGET).reduce((a,b)=>a+b,0);
  document.getElementById('cmp-barchart').innerHTML=monthBarChart(byM,budMensal);
  const acum=txs.reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const fixa=txs.filter(t=>getCat(t.sub)==='Fixa').reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  const segs=[{label:'Fixas',v:fixa,c:'var(--blue)'},{label:'Variáveis',v:acum-fixa,c:'var(--gold)'}];
  document.getElementById('cmp-donut').innerHTML=segs[0].v>0
    ?donutSVG(segs,50,50,38,14)+'<div class="donut-legend-v">'+segs.map(s=>
      '<div class="donut-leg-item"><div class="donut-leg-dot" style="background:'+s.c+'"></div>'+
      '<div class="donut-leg-name">'+s.label+'</div><div class="donut-leg-val">'+fmtK(s.v)+'</div>'+
      '<div class="donut-leg-pct">'+pctOf(s.v,acum)+'</div></div>').join('')+'</div>':'';
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
      '<td class="bud-m" style="text-align:right">'+(pct?'<span style="font-size:10px;font-weight:600;color:'+(over?'var(--red)':parseInt(pct)>80?'#C07010':'var(--green)')+'">'+pct+'%</span>':'—')+'</td></tr>';
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
      '<td class="bud-bud" style="text-align:right;color:'+(over?'var(--red)':'var(--text)')+';font-weight:600">'+fmtK(spent)+'</td>'+
      '<td class="bud-bud" style="text-align:right;color:'+(over?'var(--red)':'var(--green)')+'">'+( budA?(over?'−':'+')+fmtK(Math.abs(saldo)):'—')+'</td>'+
      '<td class="bud-m" style="text-align:right">'+(pct!==null?'<span style="font-size:10px;font-weight:600;color:'+(over?'var(--red)':pct>80?'#C07010':'var(--green)')+'">'+pct.toFixed(0)+'%</span>':'—')+'</td></tr>';
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
async function renderPatrimonio() {
  const segs=[{label:'Imóveis',v:17900000,c:'#2C6FAC'},{label:'Investimentos',v:7500000,c:'#1A8C5B'},{label:'Liquidez',v:1979902,c:'#C07010'}];
  const total=segs.reduce((s,x)=>s+x.v,0);
  document.getElementById('pat-total-val').textContent='R$ 27,4M';
  document.getElementById('pat-donut').innerHTML=donutSVG(segs,50,50,38,14)+
    '<div class="donut-legend-v">'+segs.map(s=>
      '<div class="donut-leg-item"><div class="donut-leg-dot" style="background:'+s.c+'"></div>'+
      '<div class="donut-leg-name">'+s.label+'</div><div class="donut-leg-val">'+fmtK(s.v)+'</div>'+
      '<div class="donut-leg-pct">'+pctOf(s.v,total)+'</div></div>').join('')+'</div>';
  const liq=[{name:'Genial Investimentos',val:7500000},{name:'Unicred CC',val:250000},{name:'Itaú CC',val:229902}];
  const imob=[{name:'Apt. Jurerê',val:8000000},{name:'Fazenda',val:5000000},{name:'Casa Praia',val:3200000},{name:'Sala Comercial',val:1700000}];
  document.getElementById('pat-items-liq').innerHTML=liq.map(i=>'<div class="pat-item"><div class="pat-item-name">'+i.name+'</div><div class="pat-item-val">'+fmt(i.val)+'</div></div>').join('');
  document.getElementById('pat-items-imob').innerHTML=imob.map(i=>'<div class="pat-item"><div class="pat-item-name">'+i.name+'</div><div class="pat-item-val">'+fmt(i.val)+'</div></div>').join('');
}

// ── AJUSTES ───────────────────────────────────────
let activeAjusteTab='revisar';

function renderAjustes() { setAjusteTab(activeAjusteTab); }

function setAjusteTab(tab) {
  activeAjusteTab=tab;
  ['revisar','regras','import'].forEach(t=>{
    const btn=document.getElementById('atab-'+t);
    const pane=document.getElementById('ajuste-'+t);
    if(btn) btn.classList.toggle('active',t===tab);
    if(pane) pane.style.display=t===tab?'block':'none';
  });
  if(tab==='revisar') { renderRevisar(); setTimeout(initSwipe,100); }
  if(tab==='regras')  renderRules();
  if(tab==='import')  renderImport();
  updateReviewBadge();
}

// ── REVISAR ───────────────────────────────────────
let reviewQueue=[], reviewIdx=0;

function renderRevisar() {
  const rev=reviewed.load(), minVal=threshold.get();
  document.getElementById('review-threshold-val').textContent=fmt(minVal);
  reviewQueue=STATE.txs.filter(t=>!rev[t.id]&&(parseFloat(t.val)||0)>=minVal).sort((a,b)=>parseFloat(b.val)-parseFloat(a.val));
  reviewIdx=0;
  const skipped=STATE.txs.filter(t=>!rev[t.id]&&(parseFloat(t.val)||0)<minVal).length;
  document.getElementById('review-skipped').textContent=skipped>0?skipped+' lançamento'+(skipped>1?'s':'')+' abaixo do limite.':'';
  showReviewCard();
}

function showReviewCard() {
  const wrap=document.getElementById('review-card-wrap');
  const done=document.getElementById('review-done');
  if(reviewIdx>=reviewQueue.length){wrap.style.display='none';done.style.display='flex';document.getElementById('review-progress').textContent='';return;}
  wrap.style.display='block';done.style.display='none';
  const t=reviewQueue[reviewIdx],total=reviewQueue.length;
  document.getElementById('review-progress').textContent=(reviewIdx+1)+' de '+total;
  document.getElementById('review-prog-fill').style.width=((reviewIdx/total)*100)+'%';
  const card=document.getElementById('review-card');
  card.innerHTML=
    '<div class="rv-date">'+t.date+'</div>'+
    '<div class="rv-desc">'+t.desc+'</div>'+
    '<div class="rv-val">'+fmt(parseFloat(t.val)||0)+'</div>'+
    '<div class="rv-sub-row">'+
      '<span class="rv-cat-badge '+(getCat(t.sub)==='Fixa'?'badge-blue':'badge-gold')+'">'+getCat(t.sub)+'</span>'+
      '<span class="rv-sub">'+t.sub+'</span>'+
    '</div>'+
    '<div class="rv-edit-row">'+
      '<div class="rv-edit-field"><div class="rv-edit-label">Subcategoria</div>'+
        '<select id="review-select" onchange="onReviewSubChange()">'+ALL_SUBS.map(s=>'<option value="'+s+'" '+(s===t.sub?'selected':'')+'>'+s+'</option>').join('')+'</select>'+
      '</div>'+
      '<div class="rv-edit-field"><div class="rv-edit-label">Tipo</div>'+
        '<select id="review-cat"><option value="Fixa" '+((t.cat||getCat(t.sub))==='Fixa'?'selected':'')+'>Fixa</option><option value="Variáveis" '+((t.cat||getCat(t.sub))!=='Fixa'?'selected':'')+'>Variável</option></select>'+
      '</div>'+
    '</div>';
  initSwipe(card);
}

function approveCard() {
  const t=reviewQueue[reviewIdx]; if(!t) return;
  reviewed.approve(t.id); reviewIdx++; showReviewCard();
}

function rejectCard() {
  const t=reviewQueue[reviewIdx]; if(!t) return;
  const sel=document.getElementById('review-select');
  const cat=document.getElementById('review-cat');
  const newSub=sel?sel.value:t.sub, newCat=cat?cat.value:getCat(newSub);
  STATE.txs=STATE.txs.map(x=>x.id===t.id?{...x,sub:newSub,cat:newCat}:x);
  cache.save(STATE.txs);
  if(isConfigured()) sheetsPost({action:'editTx',tx:{...t,sub:newSub,cat:newCat}}).catch(()=>{});
  reviewed.approve(t.id); reviewIdx++; showReviewCard();
}

function skipCard() { reviewIdx++; showReviewCard(); }
function onReviewSubChange() { const sel=document.getElementById('review-select'),cat=document.getElementById('review-cat'); if(sel&&cat) cat.value=getCat(sel.value); }

function initSwipe(el) {
  let sx=0,sy=0;
  el.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
  el.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>50){dx>0?approveCard():rejectCard();}});
}

// ── REGRAS ────────────────────────────────────────
function renderRules() {
  const rules=userRules.load();
  const cats=STATE.txs.filter(t=>t.sub==='NÃO CATEGORIZADO').length;
  let html='<div style="padding:0 16px 12px">'+
    '<div style="font-size:12px;color:var(--muted2);line-height:1.5;margin-bottom:12px">Palavras-chave para categorização automática ao importar.'+
    (cats>0?'<span style="color:var(--red);font-weight:600"> '+cats+' lançamentos sem categoria.</span>':'')+
    '</div>'+
    '<div style="background:var(--s2);border-radius:10px;padding:12px;margin-bottom:16px;border:1px solid var(--border)">'+
      '<div style="font-size:11px;font-weight:600;color:var(--muted2);margin-bottom:10px;text-transform:uppercase;letter-spacing:.08em">Nova Regra</div>'+
      '<div style="display:flex;gap:8px;margin-bottom:8px">'+
        '<input id="rule-kw" type="text" placeholder="Palavra-chave (ex: UBER)" style="flex:1;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:12px;background:var(--s1);color:var(--text);font-family:inherit">'+
      '</div>'+
      '<div style="display:flex;gap:8px;align-items:center">'+
        '<select id="rule-sub" style="flex:1;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:12px;background:var(--s1);color:var(--text);font-family:inherit">'+ALL_SUBS.filter(s=>s!=='NÃO CATEGORIZADO').map(s=>'<option value="'+s+'">'+s+'</option>').join('')+'</select>'+
        '<button onclick="saveNewRule()" class="btn" style="margin:0;padding:8px 16px;flex-shrink:0">+ Adicionar</button>'+
      '</div>'+
      (cats>0?'<button onclick="applyAndRefresh()" class="btn" style="margin-top:8px;width:100%;background:var(--green);border:none">✓ Aplicar aos '+cats+' sem categoria</button>':'')+
    '</div>';
  if(rules.length>0) {
    html+='<div style="font-size:10px;font-weight:600;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">Suas Regras ('+rules.length+')</div>';
    html+=rules.map(r=>
      '<div style="display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--border)">'+
        '<div style="flex:1;min-width:0">'+
          '<div style="font-size:12px;font-weight:600;color:var(--text);font-family:monospace">'+r.kw+'</div>'+
          '<div style="font-size:10px;color:var(--muted);margin-top:2px">→ '+r.sub+'</div>'+
        '</div>'+
        '<button onclick="removeRule(\''+r.kw+'\')" style="background:none;border:none;color:var(--muted);font-size:18px;cursor:pointer;padding:4px;line-height:1">×</button>'+
      '</div>'
    ).join('');
  }
  const builtIn=RULES_CARD.length+RULES_ITAU.length+RULES_UNICRED.length;
  html+='<div style="margin-top:16px;font-size:11px;color:var(--muted);text-align:center">'+builtIn+' regras pré-configuradas</div></div>';
  document.getElementById('rules-content').innerHTML=html;
}

function saveNewRule() {
  const kw=document.getElementById('rule-kw').value.trim().toUpperCase();
  const sub=document.getElementById('rule-sub').value;
  if(!kw){showToast('Digite uma palavra-chave','warn');return;}
  userRules.add(kw,sub); document.getElementById('rule-kw').value='';
  renderRules(); showToast('Regra "'+kw+'" → '+sub+' salva ✓','ok');
}

function removeRule(kw) { userRules.remove(kw); renderRules(); showToast('Regra removida','ok'); }

function applyAndRefresh() {
  const rules=userRules.load(); if(!rules.length) return;
  let changed=0;
  STATE.txs=STATE.txs.map(t=>{
    if(t.sub!=='NÃO CATEGORIZADO') return t;
    const d=t.desc.toUpperCase();
    for(const r of rules){if(d.includes(r.kw)){changed++;return{...t,sub:r.sub,cat:r.cat};}}
    return t;
  });
  if(changed>0){cache.save(STATE.txs);}
  showToast(changed+' lançamentos categorizados ✓','ok'); refreshAll();
}

// ── IMPORTAR ──────────────────────────────────────
let pendingTxs=[];

function renderImport() {
  const dz=document.getElementById('drop-zone'),fi=document.getElementById('file-input');
  if(dz&&!dz._bound){
    dz._bound=true;
    dz.addEventListener('click',()=>fi.click());
    dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('drag-over');});
    dz.addEventListener('dragleave',()=>dz.classList.remove('drag-over'));
    dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('drag-over');handleFiles(e.dataTransfer.files);});
    fi.onchange=e=>handleFiles(e.target.files);
  }
}

function parseCSV(text,type) {
  const lines=text.split(/\r?\n/).filter(l=>l.trim()), results=[];
  lines.forEach(line=>{
    const cols=line.split(';').map(c=>c.replace(/^"|"$/g,'').trim());
    let date='',desc='',val=0;
    if(type==='itau'){
      if(!/^\d{2}\/\d{2}\/\d{4}/.test(cols[0])) return;
      const[d,m,y]=cols[0].split('/');date=y+'-'+m+'-'+d;desc=cols[1]||'';
      val=parseFloat((cols[2]||'0').replace('.','').replace(',','.'))||0; if(val<=0) return;
    } else if(type==='unicred'){
      if(!/^\d{2}\/\d{2}\/\d{4}/.test(cols[0])) return;
      const[d,m,y]=cols[0].split('/');date=y+'-'+m+'-'+d;desc=cols[2]||cols[1]||'';
      val=parseFloat((cols[3]||'0').replace('.','').replace(',','.'))||0; if(val<=0) return;
    } else {
      if(!/^\d{2}\/\d{2}\/\d{4}/.test(cols[0])) return;
      const[d,m,y]=cols[0].split('/');date=y+'-'+m+'-'+d;desc=cols[1]||'';
      val=parseFloat((cols[2]||'0').replace('.','').replace(',','.'))||0; if(val<=0) return;
    }
    const slug=desc.replace(/[^a-zA-Z0-9]/g,'').slice(0,10);
    const id=type+'_'+date.replace(/-/g,'')+'_'+slug+'_'+val;
    const{cat,sub,pessoa}=categorize(desc,type);
    if(cat===null) return;
    results.push({id,date,desc,val:String(val),cat,sub:sub||'NÃO CATEGORIZADO',pessoa:pessoa||'',obs:'',source:type});
  });
  return results;
}

function expandParcelas(txs) {
  const extra=[];
  txs.forEach(t=>{
    const m=t.desc.match(/(\d{2})\/(\d{2})/); if(!m) return;
    const cur=parseInt(m[1]),tot=parseInt(m[2]); if(cur<1||tot<2||cur>tot) return;
    const[y,mo,d]=t.date.split('-').map(Number);
    for(let i=1;i<=tot-cur;i++){
      let nm=mo+i,ny=y; while(nm>12){nm-=12;ny++;}
      const ndate=ny+'-'+String(nm).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const nDesc=t.desc.replace(/\d{2}\/\d{2}/,String(cur+i).padStart(2,'0')+'/'+String(tot).padStart(2,'0'));
      extra.push({...t,id:t.id+'_p'+(cur+i),date:ndate,desc:nDesc,obs:'parcela '+(cur+i)+'/'+tot,source:t.source+'_parcela'});
    }
  });
  return [...txs,...extra];
}

function detectDuplicates(newTxs,existing){
  const existIds=new Set(existing.map(t=>t.id));
  const fresh=[],dupes=[],exact=[];
  newTxs.forEach(t=>{
    if(existIds.has(t.id)){exact.push(t);return;}
    const similar=existing.find(e=>{
      if(Math.abs(parseFloat(e.val)-parseFloat(t.val))>0.01) return false;
      if(!e.date||!t.date) return false;
      return Math.abs(new Date(e.date)-new Date(t.date))<=3*86400000;
    });
    if(similar) dupes.push({tx:t,similar}); else fresh.push(t);
  });
  return{fresh,dupes,exact};
}

function handleFiles(files) {
  pendingTxs=[]; document.getElementById('import-log').innerHTML='';
  document.getElementById('import-count').textContent='Lendo arquivos...';
  document.getElementById('btn-confirm').disabled=true;
  let processed=0;
  Array.from(files).forEach(file=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const fname=file.name.toLowerCase();
      let type='card';
      if(fname.includes('unicred')&&fname.includes('fatura')) type='card_unicred';
      else if(fname.includes('unicred')||fname.includes('extrato-')) type='unicred';
      else if(fname.includes('itau')||fname.includes('extrato_conta')) type='itau';
      pendingTxs.push(...expandParcelas(parseCSV(e.target.result,type)));
      if(++processed===files.length) showImportPreview();
    };
    reader.readAsText(file,'latin-1');
  });
}

function showImportPreview() {
  const existing=cache.load();
  const{fresh,dupes,exact}=detectDuplicates(pendingTxs,existing);
  let html='';
  if(fresh.length>0){
    html+='<div class="import-section-label import-ok">✓ '+fresh.length+' novos</div>';
    html+=fresh.map(t=>'<div class="log-item"><div class="log-dot" style="background:'+(t.sub==='NÃO CATEGORIZADO'?'#C0392B':'#1A8C5B')+'"></div><div style="flex:1"><div class="log-desc">'+t.desc.slice(0,40)+'</div><div class="log-sub">'+t.date+' · '+t.sub+'</div></div><div class="log-val">'+fmt(t.val)+'</div></div>').join('');
  }
  if(dupes.length>0){
    html+='<div class="import-section-label import-warn">⚠ '+dupes.length+' possíveis duplicatas</div>';
    html+=dupes.map(({tx,similar})=>'<div class="log-item" style="border-left:3px solid #E8A020"><div class="log-dot" style="background:#E8A020"></div><div style="flex:1"><div class="log-desc">'+tx.desc.slice(0,38)+'</div><div class="log-sub">'+tx.date+' · similar: '+similar.date+'</div></div><div style="text-align:right"><div class="log-val">'+fmt(tx.val)+'</div><label style="font-size:9px;color:var(--muted);display:flex;align-items:center;gap:4px;cursor:pointer;margin-top:2px"><input type="checkbox" class="dupe-include" data-id="'+tx.id+'" style="width:12px;height:12px"> incluir</label></div></div>').join('');
  }
  if(exact.length>0) html+='<div class="import-section-label import-muted">✗ '+exact.length+' já existentes — ignorados</div>';
  document.getElementById('import-log').innerHTML=html;
  document.getElementById('import-count').textContent=fresh.length+' novos · '+dupes.length+' a verificar · '+exact.length+' ignorados';
  document.getElementById('btn-confirm').disabled=(fresh.length===0&&dupes.length===0);
}

async function confirmImport() {
  const btn=document.getElementById('btn-confirm');
  btn.disabled=true; btn.textContent='Salvando...';
  const checkedDupes=[];
  document.querySelectorAll('.dupe-include:checked').forEach(cb=>{const tx=pendingTxs.find(t=>t.id===cb.dataset.id);if(tx)checkedDupes.push(tx);});
  const{fresh}=detectDuplicates(pendingTxs,cache.load());
  const toAdd=[...fresh,...checkedDupes];
  const all=cache.load(),keys=new Set(all.map(t=>t.id));
  const realFresh=toAdd.filter(t=>!keys.has(t.id));
  cache.save([...all,...realFresh]); STATE.txs=cache.load();
  if(isConfigured()&&realFresh.length>0){try{await sheetsPost({action:'addTxs',txs:realFresh});}catch(e){}}
  showToast('✓ '+realFresh.length+' lançamentos adicionados!','ok');
  document.getElementById('import-count').textContent='✓ '+realFresh.length+' adicionados';
  btn.textContent='Confirmar Importação'; pendingTxs=[]; refreshAll();
}

// ── DETAIL MODAL ──────────────────────────────────
function openDetail(subName) {
  const txs=STATE.txs;
  const filtered=txs.filter(t=>t.sub===subName).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const total=filtered.reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  document.getElementById('detail-title').textContent=subName;
  document.getElementById('detail-total').textContent=fmt(total)+' · '+filtered.length+' lançamentos';
  const byM={};filtered.forEach(t=>{const m=t.date?.slice(5,7)||'00';byM[m]=(byM[m]||0)+(parseFloat(t.val)||0);});
  document.getElementById('detail-chart').innerHTML=monthBarChart(byM,BUDGET[subName]);
  const rev=reviewed.load();
  document.getElementById('detail-list').innerHTML=filtered.map(t=>{
    const st=rev[t.id],dot=st==='ok'?'✓':st?'✎':'·',dotC=st==='ok'?'#1A8C5B':st?'#A67C2E':'#ccc';
    return '<div class="detail-row" style="cursor:pointer">'+
      '<div style="color:'+dotC+';font-size:14px;width:16px;flex-shrink:0">'+dot+'</div>'+
      '<div style="flex:1;min-width:0" onclick="openEditTx(\''+t.id+'\')">'+
        '<div style="font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+t.desc+'</div>'+
        '<div style="font-size:10px;color:var(--muted);margin-top:2px">'+t.date+(t.obs?' · '+t.obs:'')+'</div>'+
      '</div>'+
      '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0;margin-left:8px">'+
        '<div style="font-size:12px;color:var(--text);font-feature-settings:\'tnum\'">'+fmt(parseFloat(t.val)||0)+'</div>'+
        '<div onclick="openSplit(\''+t.id+'\')" style="font-size:10px;color:var(--blue);cursor:pointer;padding:2px 5px;border:1px solid var(--border);border-radius:4px">÷</div>'+
      '</div>'+
    '</div>';
  }).join('');
  document.getElementById('detail-modal').classList.add('open');
}
function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }

// ── EDIT TX MODAL ─────────────────────────────────
function openEditTx(txId) {
  const t=STATE.txs.find(x=>x.id===txId); if(!t) return;
  document.getElementById('edittx-id').value=txId;
  document.getElementById('edittx-desc').textContent=t.desc||'';
  document.getElementById('edittx-date').textContent=t.date||'';
  document.getElementById('edittx-val').textContent=fmt(parseFloat(t.val)||0);
  const sel=document.getElementById('edittx-sub');
  if(sel) sel.innerHTML=ALL_SUBS.map(s=>'<option value="'+s+'" '+(s===t.sub?'selected':'')+'>'+s+'</option>').join('');
  const catSel=document.getElementById('edittx-cat');
  if(catSel) catSel.value=t.cat||getCat(t.sub);
  document.getElementById('edittx-modal').classList.add('open');
}
function closeEditTx() { document.getElementById('edittx-modal').classList.remove('open'); }
function onEditSubChange() { const sel=document.getElementById('edittx-sub'),cat=document.getElementById('edittx-cat');if(sel&&cat)cat.value=getCat(sel.value); }

async function saveEditTx() {
  const id=document.getElementById('edittx-id').value;
  const sub=document.getElementById('edittx-sub').value;
  const cat=document.getElementById('edittx-cat').value||getCat(sub);
  STATE.txs=STATE.txs.map(t=>t.id===id?{...t,sub,cat}:t);
  cache.save(STATE.txs);
  if(isConfigured()) sheetsPost({action:'editTx',tx:STATE.txs.find(t=>t.id===id)}).catch(()=>{});
  closeEditTx(); refreshAll(); showToast('Salvo ✓','ok');
}

async function deleteTx() {
  const id=document.getElementById('edittx-id').value;
  if(!confirm('Excluir este lançamento?')) return;
  STATE.txs=STATE.txs.filter(t=>t.id!==id);
  cache.save(STATE.txs);
  if(isConfigured()) sheetsPost({action:'deleteTx',id}).catch(()=>{});
  closeEditTx(); refreshAll(); showToast('Excluído','ok');
}

// ── MANUAL ────────────────────────────────────────
function openManual() {
  document.getElementById('manual-date').value=new Date().toISOString().slice(0,10);
  document.getElementById('manual-val').value='';
  document.getElementById('manual-desc').value='';
  document.getElementById('manual-obs').value='';
  const sel=document.getElementById('manual-sub');
  if(sel) sel.innerHTML=ALL_SUBS.map(s=>'<option value="'+s+'">'+s+'</option>').join('');
  document.getElementById('manual-modal').classList.add('open');
}
function closeManual() { document.getElementById('manual-modal').classList.remove('open'); }

async function saveManual() {
  const date=document.getElementById('manual-date').value;
  const val=document.getElementById('manual-val').value;
  const desc=document.getElementById('manual-desc').value;
  const sub=document.getElementById('manual-sub').value;
  const obs=document.getElementById('manual-obs').value;
  if(!date||!val||!desc){showToast('Preencha data, valor e descrição','warn');return;}
  const cat=getCat(sub);
  const slug=desc.replace(/[^a-zA-Z0-9]/g,'').slice(0,10);
  const id='manual_'+date.replace(/-/g,'')+'_'+slug+'_'+val;
  const tx={id,date,desc,val:String(parseFloat(val)||0),cat,sub,pessoa:'',obs,source:'manual'};
  STATE.txs.push(tx); cache.save(STATE.txs);
  if(isConfigured()) sheetsPost({action:'addTxs',txs:[tx]}).catch(()=>{});
  closeManual(); refreshAll(); showToast('Lançamento adicionado ✓','ok');
}

// ── SPLIT ─────────────────────────────────────────
let splitTxId=null,splitParts=[];

function openSplit(txId) {
  const t=STATE.txs.find(x=>x.id===txId); if(!t) return;
  splitTxId=txId;
  splitParts=[{desc:t.desc,sub:t.sub,val:''},{desc:'',sub:t.sub,val:''}];
  document.getElementById('split-original-desc').textContent=t.desc;
  document.getElementById('split-original-val').textContent=fmt(parseFloat(t.val)||0);
  document.getElementById('split-original-val').dataset.total=t.val;
  renderSplitParts();
  document.getElementById('split-modal').classList.add('open');
}

function renderSplitParts() {
  const total=parseFloat(document.getElementById('split-original-val').dataset.total)||0;
  const used=splitParts.reduce((s,p)=>s+(parseFloat(p.val)||0),0);
  const rem=total-used;
  document.getElementById('split-remaining').textContent='Restante: '+fmt(rem)+' de '+fmt(total);
  document.getElementById('split-remaining').style.color=Math.abs(rem)<0.01?'var(--green)':rem<0?'var(--red)':'var(--muted)';
  document.getElementById('split-parts').innerHTML=splitParts.map((p,i)=>
    '<div class="split-part">'+
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">'+
        '<div style="font-size:11px;font-weight:600;color:var(--muted2)">Parte '+(i+1)+'</div>'+
        (splitParts.length>2?'<span onclick="removeSplitPart('+i+')" style="font-size:18px;color:var(--muted);cursor:pointer">×</span>':'')+
      '</div>'+
      '<div class="manual-field" style="margin-bottom:6px"><label>Descrição</label><input type="text" value="'+p.desc+'" oninput="splitParts['+i+'].desc=this.value" placeholder="Ex: Mercado"></div>'+
      '<div style="display:flex;gap:8px">'+
        '<div class="manual-field" style="flex:1;margin-bottom:0"><label>Categoria</label><select onchange="splitParts['+i+'].sub=this.value">'+ALL_SUBS.map(s=>'<option value="'+s+'" '+(s===p.sub?'selected':'')+'>'+s+'</option>').join('')+'</select></div>'+
        '<div class="manual-field" style="width:100px;margin-bottom:0"><label>Valor R$</label><input type="number" value="'+p.val+'" step="0.01" placeholder="0,00" oninput="splitParts['+i+'].val=this.value;renderSplitParts()"></div>'+
      '</div>'+
    '</div>'
  ).join('');
}

function addSplitPart(){const t=STATE.txs.find(x=>x.id===splitTxId);splitParts.push({desc:'',sub:t?.sub||ALL_SUBS[0],val:''});renderSplitParts();}
function removeSplitPart(i){splitParts.splice(i,1);renderSplitParts();}

function saveSplit() {
  const t=STATE.txs.find(x=>x.id===splitTxId); if(!t) return closeSplit();
  const total=parseFloat(t.val)||0;
  const used=splitParts.reduce((s,p)=>s+(parseFloat(p.val)||0),0);
  if(Math.abs(used-total)>0.02){showToast('Soma ('+fmt(used)+') ≠ total ('+fmt(total)+')','warn');return;}
  STATE.txs=STATE.txs.filter(x=>x.id!==splitTxId);
  const newTxs=splitParts.map((p,i)=>({...t,id:splitTxId+'_s'+(i+1),desc:p.desc||t.desc,sub:p.sub,cat:getCat(p.sub),val:String(parseFloat(p.val)||0),obs:'fração '+(i+1)+'/'+splitParts.length}));
  STATE.txs=[...STATE.txs,...newTxs]; cache.save(STATE.txs);
  if(isConfigured()){sheetsPost({action:'deleteTx',id:splitTxId}).catch(()=>{});sheetsPost({action:'addTxs',txs:newTxs}).catch(()=>{});}
  reviewed.approve(splitTxId); newTxs.forEach(tx=>reviewed.approve(tx.id));
  closeSplit(); refreshAll(); showToast('Dividido em '+splitParts.length+' lançamentos ✓','ok');
}
function closeSplit(){document.getElementById('split-modal').classList.remove('open');splitTxId=null;splitParts=[];}

// ── THRESHOLD ─────────────────────────────────────
function openThresholdModal(){document.getElementById('review-threshold-input').value=threshold.get();document.getElementById('review-threshold-modal').classList.add('open');}
function closeThresholdModal(){document.getElementById('review-threshold-modal').classList.remove('open');}
function setReviewThreshold(){const v=parseFloat(document.getElementById('review-threshold-input').value)||1000;threshold.set(v);closeThresholdModal();renderAjustes();}

// ── BUSCA ─────────────────────────────────────────
let searchFilter='all';

function openSearch(){document.getElementById('search-modal').classList.add('open');setTimeout(()=>document.getElementById('search-input').focus(),100);runSearch();}
function closeSearch(){document.getElementById('search-modal').classList.remove('open');document.getElementById('search-input').value='';}
function setSearchFilter(f){searchFilter=f;document.querySelectorAll('#search-filters .sort-pill').forEach(b=>b.classList.remove('active'));event.target.classList.add('active');runSearch();}

function runSearch(){
  const q=(document.getElementById('search-input').value||'').trim().toLowerCase();
  let pool=STATE.txs;
  if(searchFilter==='month') pool=STATE.txs.filter(t=>t.date&&t.date.startsWith('2026-'+activeMonth));
  if(searchFilter==='uncat') pool=STATE.txs.filter(t=>t.sub==='NÃO CATEGORIZADO');
  let results=q?pool.filter(t=>(t.desc||'').toLowerCase().includes(q)||(t.sub||'').toLowerCase().includes(q)||(t.obs||'').toLowerCase().includes(q)||String(parseFloat(t.val)||0).includes(q)):pool;
  results=[...results].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const total=results.reduce((s,t)=>s+(parseFloat(t.val)||0),0);
  document.getElementById('search-summary').textContent=(q||searchFilter!=='all')?results.length+' resultado'+(results.length!==1?'s':'')+' · '+fmt(total):pool.length+' lançamentos · '+fmt(pool.reduce((s,t)=>s+(parseFloat(t.val)||0),0));
  if(!results.length){document.getElementById('search-results').innerHTML='<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px">Nenhum resultado</div>';return;}
  const rev=reviewed.load();
  document.getElementById('search-results').innerHTML=results.slice(0,100).map(t=>{
    const st=rev[t.id],dot=st==='ok'?'✓':st?'✎':'·',dotC=st==='ok'?'var(--green)':st?'var(--blue)':'var(--border)';
    return '<div class="search-row" onclick="closeSearch();openEditTx(\''+t.id+'\')">'+
      '<div style="color:'+dotC+';font-size:13px;width:14px;flex-shrink:0">'+dot+'</div>'+
      '<div style="flex:1;min-width:0">'+
        '<div style="font-size:12px;font-weight:500;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+t.desc+'</div>'+
        '<div style="font-size:10px;color:var(--muted);margin-top:2px">'+t.date+' <span style="color:var(--blue)">'+t.sub+'</span>'+(t.obs?' · '+t.obs:'')+'</div>'+
      '</div>'+
      '<div style="font-size:13px;font-weight:600;font-feature-settings:\'tnum\';flex-shrink:0;margin-left:8px">'+fmt(parseFloat(t.val)||0)+'</div>'+
    '</div>';
  }).join('')+(results.length>100?'<div style="padding:12px;text-align:center;font-size:11px;color:var(--muted)">Mostrando 100 de '+results.length+'</div>':'');
}

// ── NAV ───────────────────────────────────────────
const SCREENS=['home','despesas','comparativo','patrimonio','ajustes'];

function showScreen(id) {
  SCREENS.forEach(s=>{
    document.getElementById('screen-'+s).classList.toggle('active',s===id);
    const n=document.getElementById('nav-'+s); if(n) n.classList.toggle('active',s===id);
  });
  document.querySelector('.scroll-area').scrollTop=0;
  renderScreen(id);
}

function renderScreen(id) {
  if(id==='home')        renderHome();
  if(id==='despesas')    renderDespesas();
  if(id==='comparativo') renderComparativo();
  if(id==='patrimonio')  renderPatrimonio();
  if(id==='ajustes')     renderAjustes();
}

// ── PIN ───────────────────────────────────────────
let pinBuffer='';
function pinKey(digit){if(pinBuffer.length>=4)return;pinBuffer+=digit;updatePinDots();if(pinBuffer.length===4){setTimeout(()=>{pinBuffer='';updatePinDots();},150);}}
function updatePinDots(){for(let i=0;i<4;i++){const d=document.getElementById('pd'+i);if(d)d.classList.toggle('filled',i<pinBuffer.length);}}
function pinDel(){pinBuffer=pinBuffer.slice(0,-1);updatePinDots();}
function seedData() {
  cache.save([
    {id:'xl_20260128_RoyalCaribb_4471.89',date:'2026-01-28',desc:'Royal Caribbean Cr06/10',val:4471.89,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'Cruzeiro Julho 2026',source:'excel'},
    {id:'xl_20260105_Pgbeautybi_210.01',date:'2026-01-05',desc:'Pg *beautybiz Come05/05',val:210.01,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'excel'},
    {id:'xl_20260129_Ppgrup_299.99',date:'2026-01-29',desc:'Pp     *grupokohal09/12',val:299.99,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'Capacete Bike',source:'excel'},
    {id:'xl_20260101_IconInterio_1089.0',date:'2026-01-01',desc:'Icon Interiores   08/10',val:1089.0,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Arandela Jader Almeida',source:'excel'},
    {id:'xl_20260113_Mercadolivre_937.53',date:'2026-01-13',desc:'Mercadolivre*mwbra02/04',val:937.53,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'Kart Ricardo',source:'excel'},
    {id:'xl_20260102_Dmspotify_31.9',date:'2026-01-02',desc:'Dm*spotify',val:31.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260104_YelumsegPar_494.32',date:'2026-01-04',desc:'Yelumseg Parc1',val:494.32,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260107_Mercadolivre_263.71',date:'2026-01-07',desc:'Mercadolivre*3produto',val:263.71,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260110_Apple.combi_23.9',date:'2026-01-10',desc:'Apple.com/bill',val:23.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_Apple.combi_66.9',date:'2026-01-13',desc:'Apple.com/bill',val:66.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_Apple.combi_99.9',date:'2026-01-13',desc:'Apple.com/bill',val:99.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_Hoteldo_698.34',date:'2026-01-13',desc:'Hoteldo           01/10',val:698.34,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_Hoteldo_1080.29',date:'2026-01-13',desc:'Hoteldo           01/10',val:1080.29,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_Hoteldo_1126.19',date:'2026-01-13',desc:'Hoteldo           01/10',val:1126.19,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_YelumsegPar_340.44',date:'2026-01-19',desc:'Yelumseg Parc1',val:340.44,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_Netflix.com_59.9',date:'2026-01-23',desc:'Netflix.com',val:59.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260124_Apple.combi_69.9',date:'2026-01-24',desc:'Apple.com/bill',val:69.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260128_Mercadolivre_106.39',date:'2026-01-28',desc:'Mercadolivre*2produto',val:106.39,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260131_Mercadolivre_73.8',date:'2026-01-31',desc:'Mercadolivre*mercadol',val:73.8,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_IofCompraI_84.87',date:'2026-02-01',desc:'Iof Compra Internaciona',val:84.87,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_Apple.combi_19.99',date:'2026-02-01',desc:'Apple.com/bill',val:19.99,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_IofCompraI_213.68',date:'2026-02-02',desc:'Iof Compra Internaciona',val:213.68,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_IofCompraI_56.9',date:'2026-02-02',desc:'Iof Compra Internaciona',val:56.9,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_IofCompraI_56.9',date:'2026-02-02',desc:'Iof Compra Internaciona',val:56.9,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_IofCompraI_56.9',date:'2026-02-02',desc:'Iof Compra Internaciona',val:56.9,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_IofCompraI_56.9',date:'2026-02-02',desc:'Iof Compra Internaciona',val:56.9,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_IofCompraI_56.9',date:'2026-02-02',desc:'Iof Compra Internaciona',val:56.9,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_IofCompraI_56.9',date:'2026-02-02',desc:'Iof Compra Internaciona',val:56.9,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_Specialized_249.24',date:'2026-01-26',desc:'Specialized Brasil12/12',val:249.24,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_Specialized_4137.49',date:'2026-01-12',desc:'Specialized Brasil11/12',val:4137.49,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260116_Hermes-cidad_14158.35',date:'2026-01-16',desc:'Hermes-cidade Jard05/06',val:14158.35,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_LeCreusetD_200.97',date:'2026-01-20',desc:'Le Creuset Do Bras04/10',val:200.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_Nike_266.94',date:'2026-01-23',desc:'Nike              03/10',val:266.94,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_Decathlon_283.87',date:'2026-01-23',desc:'Decathlon         03/04',val:283.87,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_GaloSc_319.01',date:'2026-01-02',desc:'Galo Sc',val:319.01,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_TopCar_2603.1',date:'2026-01-26',desc:'Top Car',val:2603.1,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260107_UberUbert_92.97',date:'2026-01-07',desc:'Uber Uber *trip Help.u',val:92.97,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260109_UberUbert_67.99',date:'2026-01-09',desc:'Uber Uber *trip Help.u',val:67.99,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_MsjRestaura_64.74',date:'2026-01-12',desc:'Msj Restaurante E Lanc',val:64.74,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260114_UberUbert_49.98',date:'2026-01-14',desc:'Uber Uber *trip Help.u',val:49.98,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260115_UberUbert_22.98',date:'2026-01-15',desc:'Uber Uber *trip Help.u',val:22.98,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260122_TrackField_869.5',date:'2026-01-22',desc:'Track Field Beiramar',val:869.5,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_AndraUnifor_868.5',date:'2026-01-19',desc:'Andra Uniformes',val:868.5,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Uniforme Funcionárias ',source:'excel'},
    {id:'xl_20260116_DiamondApli_155.0',date:'2026-01-16',desc:'Diamond Aplicaoes',val:155.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260116_UberUbert_13.98',date:'2026-01-16',desc:'Uber Uber *trip Help.u',val:13.98,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260116_UberUbert_26.98',date:'2026-01-16',desc:'Uber Uber *trip Help.u',val:26.98,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_NipoSushi_700.02',date:'2026-01-23',desc:'Nipo Sushi',val:700.02,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_DouglasLuca_713.0',date:'2026-01-20',desc:'Douglas Lucas Ferro E',val:713.0,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'excel'},
    {id:'xl_20260123_HippoSuperm_288.69',date:'2026-01-23',desc:'Hippo Supermercado',val:288.69,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_DiamondApli_155.0',date:'2026-01-23',desc:'Diamond Aplicaoes',val:155.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260114_Mercadomerc_697.0',date:'2026-01-14',desc:'Mercado*mercadolivre',val:697.0,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260124_PostoFl53_435.59',date:'2026-01-24',desc:'Posto Fl 53',val:435.59,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_MsjRestaura_68.54',date:'2026-01-26',desc:'Msj Restaurante E Lanc',val:68.54,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260129_MsjRestaura_51.68',date:'2026-01-29',desc:'Msj Restaurante E Lanc',val:51.68,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_SolparkingE_8.0',date:'2026-01-30',desc:'Solparking Estacioname',val:8.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_HidrolifeAc_35.0',date:'2026-01-30',desc:'Hidrolife Academia',val:35.0,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260115_IfdfgRepL_574.98',date:'2026-01-15',desc:'Ifd*fg Rep Ltda',val:574.98,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_DouglasLuca_564.0',date:'2026-01-30',desc:'Douglas Lucas Ferro E',val:564.0,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'excel'},
    {id:'xl_20260131_IofCompraI_132.74',date:'2026-01-31',desc:'Iof Compra Internaciona',val:132.74,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_BrasilBerry_248.0',date:'2026-02-01',desc:'Brasil Berry Natural F',val:248.0,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_BodyHall_282.0',date:'2026-01-13',desc:'Body Hall         04/12',val:282.0,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_BodyHall_282.0',date:'2026-01-19',desc:'Body Hall         03/12',val:282.0,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_IfdaAngelo_186.05',date:'2026-01-02',desc:'Ifd*a Angeloni Cia Ltd',val:186.05,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_IfdaAngelo_159.92',date:'2026-01-02',desc:'Ifd*a Angeloni Cia Ltd',val:159.92,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_Doc.kids_448.6',date:'2026-01-21',desc:'Doc.kids',val:448.6,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260103_IfdraiaDro_431.56',date:'2026-01-03',desc:'Ifd*raia Drogasil Sa',val:431.56,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_BarMolhado_500.0',date:'2026-01-05',desc:'Bar Molhado',val:500.0,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_Ortoclini_400.0',date:'2026-01-20',desc:'Ortoclini   -ct',val:400.0,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_UberUbert_56.63',date:'2026-01-05',desc:'Uber Uber *trip Help.u',val:56.63,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_UberUbert_48.93',date:'2026-01-05',desc:'Uber Uber *trip Help.u',val:48.93,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_RdSaude_372.27',date:'2026-01-26',desc:'Rd Saude',val:372.27,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260107_Mercadode_19.78',date:'2026-01-07',desc:'Mercadode',val:19.78,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260104_Neuzareginat_355.0',date:'2026-01-04',desc:'Neuzareginattodos',val:355.0,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260107_IfdpradoSu_51.68',date:'2026-01-07',desc:'Ifd*prado Supermercado',val:51.68,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260107_IfdciaLati_62.88',date:'2026-01-07',desc:'Ifd*cia Latino America',val:62.88,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260110_Mercadode_44.75',date:'2026-01-10',desc:'Mercadode',val:44.75,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_IfdaAngelo_214.12',date:'2026-01-12',desc:'Ifd*a Angeloni Cia Ltd',val:214.12,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_IfdaAngelo_129.59',date:'2026-01-12',desc:'Ifd*a Angeloni Cia Ltd',val:129.59,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260124_LraComercio_289.9',date:'2026-01-24',desc:'Lra Comercio Varejista',val:289.9,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_UberUbert_5.0',date:'2026-01-12',desc:'Uber Uber *trip Help.u',val:5.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_UberUbert_45.91',date:'2026-01-12',desc:'Uber Uber *trip Help.u',val:45.91,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_Ifdcomercio_190.67',date:'2026-01-13',desc:'Ifd*comercio De Medica',val:190.67,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260114_HippoSuperm_1.25',date:'2026-01-14',desc:'Hippo Supermercado',val:1.25,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260114_HippoSuperm_215.3',date:'2026-01-14',desc:'Hippo Supermercado',val:215.3,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260103_Ecmercadol_287.3',date:'2026-01-03',desc:'Ec *mercadolivre',val:287.3,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_RdSaude_177.79',date:'2026-01-23',desc:'Rd Saude',val:177.79,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260115_UberUbert_45.92',date:'2026-01-15',desc:'Uber Uber *trip Help.u',val:45.92,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260117_IfdraiaDro_163.89',date:'2026-01-17',desc:'Ifd*raia Drogasil Sa',val:163.89,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260116_UberUbert_32.18',date:'2026-01-16',desc:'Uber Uber *trip Help.u',val:32.18,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260107_Mercadolivre_149.9',date:'2026-01-07',desc:'Mercadolivre*franinova',val:149.9,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260107_IfdsdbCome_131.63',date:'2026-01-07',desc:'Ifd*sdb Comercio De Al',val:131.63,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_VerdureiraP_1723.85',date:'2026-01-19',desc:'Verdureira Pauli',val:1723.85,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_Raia2202_687.1',date:'2026-01-19',desc:'Raia2202',val:687.1,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260116_Jim.com606_120.0',date:'2026-01-16',desc:'Jim.com* 60630248 Bru',val:120.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_MilaRestaur_93.12',date:'2026-01-05',desc:'Mila Restaurante',val:93.12,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_HippoSuperm_679.55',date:'2026-01-19',desc:'Hippo Supermercado',val:679.55,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260114_Ifdmercado_93.0',date:'2026-01-14',desc:'Ifd*mercado Parador Da',val:93.0,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260115_MixComercio_92.99',date:'2026-01-15',desc:'Mix Comercio',val:92.99,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260127_IfdgiassiC_92.49',date:'2026-01-27',desc:'Ifd*giassi Cia Ltda',val:92.49,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260124_Ifddrogaria_85.98',date:'2026-01-24',desc:'Ifd*drogaria Brasil Lt',val:85.98,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_Lolihtoys_337.9',date:'2026-01-20',desc:'Lolihtoys',val:337.9,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_PlanetCap_96.0',date:'2026-01-20',desc:'Planet Cap',val:96.0,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_ArmazemCent_21.5',date:'2026-01-20',desc:'Armazem Central',val:21.5,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_DimedSa-dis_221.98',date:'2026-01-21',desc:'Dimed Sa-distribuidor',val:221.98,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_ShoppingExp_269.0',date:'2026-01-21',desc:'Shopping Express',val:269.0,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_PauliMercad_762.88',date:'2026-01-21',desc:'Pauli Mercado',val:762.88,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_IfdsimarCo_74.45',date:'2026-01-12',desc:'Ifd*simar Comercio Ltd',val:74.45,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_Toppark_7.5',date:'2026-01-21',desc:'Toppark',val:7.5,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_99app_44.55',date:'2026-01-21',desc:'99app       *99app',val:44.55,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_CafeDelicia_19.0',date:'2026-01-21',desc:'Cafe Delicia',val:19.0,cat:'Variáveis',sub:'EMPÓRIOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_BvPapelaria_19.5',date:'2026-01-21',desc:'Bv Papelaria',val:19.5,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_MixUtilidad_273.42',date:'2026-01-21',desc:'Mix Utilidades',val:273.42,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_IfdcnfCome_52.78',date:'2026-01-20',desc:'Ifd*cnf Comercio De Al',val:52.78,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260122_TrackField_479.8',date:'2026-01-22',desc:'Track Field Trompowsky',val:479.8,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260122_ShoppingExp_72.0',date:'2026-01-22',desc:'Shopping Express',val:72.0,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260122_MaisonDeLa_979.2',date:'2026-01-22',desc:'Maison De La Sante',val:979.2,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260122_Raia3858_110.05',date:'2026-01-22',desc:'Raia3858',val:110.05,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260122_HippoSuperm_734.37',date:'2026-01-22',desc:'Hippo Supermercado',val:734.37,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_YiduComerci_46.0',date:'2026-01-23',desc:'Yidu Comercio De Prese',val:46.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_EvolutionNu_445.22',date:'2026-01-23',desc:'Evolution Nutricao',val:445.22,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_FilhoDaFru_33.5',date:'2026-01-30',desc:'Filho Da Fruta',val:33.5,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_MiliumLoja_199.0',date:'2026-01-23',desc:'Milium Loja 12',val:199.0,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_Lavanderia5_1000.0',date:'2026-01-23',desc:'Lavanderia 5asec',val:1000.0,cat:'Variáveis',sub:'LAVANDERIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_ImunizarCen_798.0',date:'2026-01-23',desc:'Imunizar Centro De Vac',val:798.0,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260124_Mercadolivre_167.68',date:'2026-01-24',desc:'Mercadolivre*3produto',val:167.68,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_BraparkOper_24.0',date:'2026-01-19',desc:'Brapark Operacao De Es',val:24.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_Dl_22.93',date:'2026-01-26',desc:'Dl          *uberrides',val:22.93,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260124_Ifdempreend_98.98',date:'2026-01-24',desc:'Ifd*empreendimentos Pa',val:98.98,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260124_Ifdempreend_100.97',date:'2026-01-24',desc:'Ifd*empreendimentos Pa',val:100.97,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260125_Mercadolivre_231.37',date:'2026-01-25',desc:'Mercadolivre*3produtos',val:231.37,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_BeiramarPar_20.0',date:'2026-01-23',desc:'Beiramar Park',val:20.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_MilaRestaur_17.9',date:'2026-01-23',desc:'Mila Restaurante',val:17.9,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_SantaApolon_83.3',date:'2026-01-26',desc:'Santa Apolonia Hospita',val:83.3,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260119_FilhoDaFru_13.5',date:'2026-01-19',desc:'Filho Da Fruta',val:13.5,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_Ifdpanifica_36.49',date:'2026-01-26',desc:'Ifd*panificadora Sevil',val:36.49,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_AdcosProBe_605.86',date:'2026-01-26',desc:'Adcos Pro Beiramar',val:605.86,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260127_VerdureiraP_435.7',date:'2026-01-27',desc:'Verdureira Pauli',val:435.7,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260127_Ifdatac_124.19',date:'2026-01-27',desc:'Ifd    *atacadao Sa',val:124.19,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260127_Ifdcarrefou_157.16',date:'2026-01-27',desc:'Ifd*carrefour Comercio',val:157.16,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260128_IfoodClub_12.9',date:'2026-01-28',desc:'Ifood Club',val:12.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_BraparkOper_12.0',date:'2026-01-30',desc:'Brapark Operacao De Es',val:12.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260128_Mercadolivre_101.42',date:'2026-01-28',desc:'Mercadolivre*2produto',val:101.42,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260117_Ifdcristian_5.0',date:'2026-01-17',desc:'Ifd*cristiano Martins',val:5.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260129_SolparkingE_8.0',date:'2026-01-29',desc:'Solparking Estacioname',val:8.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260129_BarbaraK_3115.5',date:'2026-01-29',desc:'Barbara K',val:3115.5,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260129_HippoSuperm_896.21',date:'2026-01-29',desc:'Hippo Supermercado',val:896.21,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260129_Caffeine_335.68',date:'2026-01-29',desc:'Caffeine',val:335.68,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260129_Lolihtoys_220.0',date:'2026-01-29',desc:'Lolihtoys',val:220.0,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260129_MercadoAstr_437.0',date:'2026-01-29',desc:'Mercado Astral',val:437.0,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'Presente Nascimento Fe Fran',source:'excel'},
    {id:'xl_20260129_Jim.comGym_2567.5',date:'2026-01-29',desc:'Jim.com* Gym-ct Nt01/02',val:2567.5,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'Ginástica Catarina',source:'excel'},
    {id:'xl_20260130_TrackField_319.8',date:'2026-01-30',desc:'Track Field Trompowsky',val:319.8,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260127_IfdandsonA_5.0',date:'2026-01-27',desc:'Ifd*andson Araujo Da S',val:5.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_PlanetCap_335.0',date:'2026-01-30',desc:'Planet Cap',val:335.0,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_SummitOneV_2424.75',date:'2026-01-30',desc:'Summit One Vanderbilt',val:2424.75,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_BkghotelAt_6104.36',date:'2026-01-30',desc:'Bkg*hotel At Booking.c',val:6104.36,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_Delta0062401_1625.49',date:'2026-01-30',desc:'Delta00624016774511',val:1625.49,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_Delta0062401_1625.49',date:'2026-01-30',desc:'Delta00624016774522',val:1625.49,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_Delta0062401_1625.49',date:'2026-01-30',desc:'Delta00624016774533',val:1625.49,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_Delta0062401_1625.49',date:'2026-01-30',desc:'Delta00624016774544',val:1625.49,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_Delta0062401_1625.49',date:'2026-01-30',desc:'Delta00624016774555',val:1625.49,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_Delta0062401_1625.49',date:'2026-01-30',desc:'Delta00624016774566',val:1625.49,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_GoCityNew_3792.41',date:'2026-01-30',desc:'Go City New York',val:3792.41,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260130_UnitedState_3564.6',date:'2026-01-30',desc:'United States',val:3564.6,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260128_PIXQRSPaga_15.9',date:'2026-01-28',desc:'PIX QRS Pagar Me Pa28/01',val:15.9,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260128_PAGTITINT_13977.49',date:'2026-01-28',desc:'PAG TIT INT 237',val:13977.49,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260126_DATIMCELU_132.17',date:'2026-01-26',desc:'DA  TIM CELU 59077434010',val:132.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_PIXWHATSAn_30.0',date:'2026-01-23',desc:'PIX WHATS Anderso23/01',val:30.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_PIXWHATSQR_36.0',date:'2026-01-23',desc:'PIX WHATS QRCODE Liomar 23/01',val:36.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260122_TEDDINT6d0_2000.0',date:'2026-01-22',desc:'TED D INT6d00ad26',val:2000.0,cat:'Variáveis',sub:'FUNCIONÁRIAS',pessoa:'',obs:'Funcionárias',source:'excel'},
    {id:'xl_20260121_PIXWHATSNA_126.0',date:'2026-01-21',desc:'PIX WHATS NARA EL21/01',val:126.0,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_PIXTRANSF3_490.0',date:'2026-01-21',desc:'PIX TRANSF 39.746.21/01',val:490.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_PAGBOLETOG_329.0',date:'2026-01-21',desc:'PAG BOLETO GALAX PAY PAGAMENTOS ELETRON',val:329.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_INTDOCARRE_982.23',date:'2026-01-20',desc:'INT DOC ARREC E-SOCI 071',val:982.23,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260120_PAGTITINT_7862.05',date:'2026-01-20',desc:'PAG TIT INT 104',val:7862.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'IPTU Jan',source:'excel'},
    {id:'xl_20260119_PIXTRANSFF_1680.0',date:'2026-01-19',desc:'PIX TRANSF Francis19/01',val:1680.0,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260115_DACLAROBL_299.84',date:'2026-01-15',desc:'DA  CLARO BL/IT 19104556',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260115_PIXWHATSLi_31.5',date:'2026-01-15',desc:'PIX WHATS Liomar 15/01',val:31.5,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_PIXTRANSF3_304.0',date:'2026-01-13',desc:'PIX TRANSF 39.746.13/01',val:304.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_PAGTITINT_2643.72',date:'2026-01-12',desc:'PAG TIT INT 338295769000',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_PIXWHATSLO_16.0',date:'2026-01-12',desc:'PIX WHATS LORENA 10/01',val:16.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260108_PAGTITINT_3094.61',date:'2026-01-08',desc:'PAG TIT INT 237',val:3094.61,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_JUROSLIMITE_255.05',date:'2026-01-05',desc:'JUROS LIMITE DA CONTA',val:255.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_IOF_81.49',date:'2026-01-05',desc:'IOF',val:81.49,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_PIXWHATSOs_13.0',date:'2026-01-05',desc:'PIX WHATS Osvaldo05/01',val:13.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_PAGTITINT_3922.85',date:'2026-01-05',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_PIXTRANSFP_2000.0',date:'2026-01-05',desc:'PIX TRANSF PRISCIL04/01',val:2000.0,cat:'Fixa',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'⚠️ Desmembrar',source:'excel'},
    {id:'xl_20260105_MoradiaDive_500.0',date:'2026-01-05',desc:'Moradia Diversa',val:500.0,cat:'Fixa',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_Catarina_1500.0',date:'2026-01-05',desc:'Catarina',val:1500.0,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_Ricardo_3000.0',date:'2026-01-05',desc:'Ricardo',val:3000.0,cat:'Fixa',sub:'RICARDO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_Eliane_2000.0',date:'2026-01-05',desc:'Eliane',val:2000.0,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_DACELESC0_858.89',date:'2026-01-02',desc:'DA  CELESC 000000900540',val:858.89,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_PIXTRANSFE_1074.98',date:'2026-01-02',desc:'PIX TRANSF ELIZABE02/01',val:1074.98,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'Pauli',source:'excel'},
    {id:'xl_20260102_PIXWHATSHe_20.0',date:'2026-01-02',desc:'PIX WHATS Heberth02/01',val:20.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_PAGTITINT_3718.59',date:'2026-01-02',desc:'PAG TIT INT 104',val:3718.59,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'Condomínio Jan',source:'excel'},
    {id:'xl_20260102_PIXTRANSFF_3130.0',date:'2026-01-02',desc:'PIX TRANSF Francis02/01',val:3130.0,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'Funcionárias',source:'excel'},
    {id:'xl_20260102_PIXTRANSFP_3185.0',date:'2026-01-02',desc:'PIX TRANSF PATRICI02/01',val:3185.0,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'Funcionárias',source:'excel'},
    {id:'xl_20260228_IFDIFOODCL_12.9',date:'2026-02-28',desc:'IFD*IFOOD CLUB',val:12.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260228_CAFFEINE_347.04',date:'2026-02-28',desc:'CAFFEINE',val:347.04,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260227_HIPPOSUPERM_261.2',date:'2026-02-27',desc:'HIPPO SUPERMERCADO',val:261.2,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260227_ESBELACOMER_23.9',date:'2026-02-27',desc:'ESBELA COMERCIO DE PRO',val:23.9,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'excel'},
    {id:'xl_20260227_IOFCOMPRAI_46.79',date:'2026-02-27',desc:'IOF COMPRA INTERNACIONA',val:46.79,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260227_PLANETCAP_321.0',date:'2026-02-27',desc:'PLANET CAP',val:321.0,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260226_SPFIT2RUN_1337.15',date:'2026-02-26',desc:'SP FIT2RUN',val:1337.15,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260225_APPLECOMBILL_2.9',date:'2026-02-25',desc:'APPLECOMBILL',val:2.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260224_APPLECOMBILL_1.5',date:'2026-02-24',desc:'APPLECOMBILL',val:1.5,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260224_IOFCOMPRAI_9.54',date:'2026-02-24',desc:'IOF COMPRA INTERNACIONA',val:9.54,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260224_APPLECOMBILL_69.9',date:'2026-02-24',desc:'APPLECOMBILL',val:69.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260223_Frankjosedas_820.0',date:'2026-02-23',desc:'Frankjosedasilva',val:820.0,cat:'Variáveis',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260223_NETFLIXENTR_59.9',date:'2026-02-23',desc:'NETFLIX ENTRETENIMENTO',val:59.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260223_OTORRINOPED_600.0',date:'2026-02-23',desc:'OTORRINOPED -CT US',val:600.0,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260223_CAFSIRENEM_271.7',date:'2026-02-23',desc:'CAF SIRENE MOBILE 6893',val:271.7,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260222_IOFCOMPRAI_107.31',date:'2026-02-22',desc:'IOF COMPRA INTERNACIONA',val:107.31,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260222_IOFCOMPRAI_9.44',date:'2026-02-22',desc:'IOF COMPRA INTERNACIONA',val:9.44,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260222_IOFCOMPRAI_25.5',date:'2026-02-22',desc:'IOF COMPRA INTERNACIONA',val:25.5,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260222_IOFCOMPRAI_31.91',date:'2026-02-22',desc:'IOF COMPRA INTERNACIONA',val:31.91,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260221_IOFCOMPRAI_106.37',date:'2026-02-21',desc:'IOF COMPRA INTERNACIONA',val:106.37,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260221_ZegnaOrland_3065.81',date:'2026-02-21',desc:'Zegna Orlando',val:3065.81,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260221_WALGREENS#1_270.37',date:'2026-02-21',desc:'WALGREENS #15017',val:270.37,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260221_APPLECOMBILL_2.9',date:'2026-02-21',desc:'APPLECOMBILL',val:2.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260221_DeckersReta_728.97',date:'2026-02-21',desc:'Deckers Retail  LLC',val:728.97,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260221_APPLECOMBILL_2.9',date:'2026-02-21',desc:'APPLECOMBILL',val:2.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260221_DeckersReta_911.24',date:'2026-02-21',desc:'Deckers Retail  LLC',val:911.24,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260220_IOFCOMPRAI_131.87',date:'2026-02-20',desc:'IOF COMPRA INTERNACIONA',val:131.87,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260220_LULULEMONWI_3039.37',date:'2026-02-20',desc:'LULULEMON WINTER PARK',val:3039.37,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260220_IOFCOMPRAI_865.97',date:'2026-02-20',desc:'IOF COMPRA INTERNACIONA',val:865.97,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260219_YelumSegPar_340.49',date:'2026-02-19',desc:'YelumSeg Parc2',val:340.49,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260219_IOFCOMPRAI_162.23',date:'2026-02-19',desc:'IOF COMPRA INTERNACIONA',val:162.23,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260219_ZALESOUTLET_24742.07',date:'2026-02-19',desc:'ZALES OUTLET #2661',val:24742.07,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260219_DIESELUSAI_3768.12',date:'2026-02-19',desc:'DIESEL USA INC. US_026',val:3768.12,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260218_CLINICAKOZM_516.03',date:'2026-02-18',desc:'CLINICA KOZM-CT',val:516.03,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'excel'},
    {id:'xl_20260217_OLIVERPEOPL_4634.69',date:'2026-02-17',desc:'OLIVER PEOPLES 4538',val:4634.69,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260217_IOFCOMPRAI_2.72',date:'2026-02-17',desc:'IOF COMPRA INTERNACIONA',val:2.72,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260216_OMNYVENDING_77.7',date:'2026-02-16',desc:'OMNY VENDING*',val:77.7,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260216_APPLECOMBILL_2.9',date:'2026-02-16',desc:'APPLECOMBILL',val:2.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260216_APPLECOMBILL_2.9',date:'2026-02-16',desc:'APPLECOMBILL',val:2.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260215_IOFCOMPRAI_169.22',date:'2026-02-15',desc:'IOF COMPRA INTERNACIONA',val:169.22,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260214_BrunelloCuc_4834.05',date:'2026-02-14',desc:'Brunello Cucinelli',val:4834.05,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260213_APPLECOMBILL_99.9',date:'2026-02-13',desc:'APPLECOMBILL',val:99.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260213_APPLECOMBILL_66.9',date:'2026-02-13',desc:'APPLECOMBILL',val:66.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260212_IOFCOMPRAI_13.7',date:'2026-02-12',desc:'IOF COMPRA INTERNACIONA',val:13.7,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260211_OPENPAYLIMA_391.38',date:'2026-02-11',desc:'OPENPAY*LIMA AIRPORT P',val:391.38,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260210_DOUGLASLUCA_469.0',date:'2026-02-10',desc:'DOUGLAS LUCAS FERRO E',val:469.0,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'excel'},
    {id:'xl_20260210_APPLECOMBILL_14.9',date:'2026-02-10',desc:'APPLECOMBILL',val:14.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260210_ASAIDEIRAF_25.8',date:'2026-02-10',desc:'A SAIDEIRA FLORIPA',val:25.8,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260210_IFDCIALATI_65.78',date:'2026-02-10',desc:'IFD*CIA LATINO AMERICA',val:65.78,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260210_IPLACE_221.11',date:'2026-02-10',desc:'IPLACE',val:221.11,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260209_DIMEDSA-DIS_132.99',date:'2026-02-09',desc:'DIMED SA-DISTRIBUIDOR',val:132.99,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260209_BAZARDATERE_25.8',date:'2026-02-09',desc:'BAZAR DATERE COMERCIO',val:25.8,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260209_BRESSANBEIR_105.0',date:'2026-02-09',desc:'BRESSAN BEIRAMAR',val:105.0,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260209_ADCOSBEIRAM_179.0',date:'2026-02-09',desc:'ADCOS BEIRAMAR',val:179.0,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'excel'},
    {id:'xl_20260207_IFDRAIADRO_95.27',date:'2026-02-07',desc:'IFD*RAIA DROGASIL SA',val:95.27,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260207_HIPPOSUPERM_61.66',date:'2026-02-07',desc:'HIPPO SUPERM-CT DO',val:61.66,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260207_LATAMAIR00_141.9',date:'2026-02-07',desc:'LATAM AIR*0000',val:141.9,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260207_LATAMAIR00_1727.82',date:'2026-02-07',desc:'LATAM AIR*0000',val:1727.82,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260207_SUPERMERCADO_833.7',date:'2026-02-07',desc:'SUPERMERCADOS IMPERATR',val:833.7,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260207_LATAMAIRYP_474.08',date:'2026-02-07',desc:'LATAM AIR*YPOAKG',val:474.08,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260206_SOLPARKINGE_8.0',date:'2026-02-06',desc:'SOLPARKING ESTACIONAME',val:8.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260206_HIPPOSUPERM_135.03',date:'2026-02-06',desc:'HIPPO SUPERMERCADO',val:135.03,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260206_FLORABEL_135.0',date:'2026-02-06',desc:'FLORABEL',val:135.0,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260206_GOTEMAKIBE_500.0',date:'2026-02-06',desc:'GO TEMAKI BEIRA MAR',val:500.0,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_HAIRADDRESS_70.0',date:'2026-02-05',desc:'HAIR ADDRESS',val:70.0,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'excel'},
    {id:'xl_20260205_NEMAPADARIA_22.0',date:'2026-02-05',desc:'NEMA PADARIA',val:22.0,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_UberUBERT_14.97',date:'2026-02-05',desc:'Uber UBER *TRIP HELP.U',val:14.97,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_COF_500.0',date:'2026-02-05',desc:'COF',val:500.0,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_MERCADOMERC_185.1',date:'2026-02-05',desc:'MERCADO*MERCADOLIVRE',val:185.1,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_RAIA433_208.98',date:'2026-02-05',desc:'RAIA433',val:208.98,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_HIPPOSUPERM_107.68',date:'2026-02-05',desc:'HIPPO SUPERMERCADO',val:107.68,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_MAISONDELA_981.54',date:'2026-02-05',desc:'MAISON DE LA SANTE',val:981.54,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_UberUBERT_13.99',date:'2026-02-05',desc:'Uber UBER *TRIP HELP.U',val:13.99,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260204_VERDUREIRAP_718.19',date:'2026-02-04',desc:'VERDUREIRA PAULI',val:718.19,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260204_UberUBERT_13.99',date:'2026-02-04',desc:'Uber UBER *TRIP HELP.U',val:13.99,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260204_RAIA3858_78.33',date:'2026-02-04',desc:'RAIA3858',val:78.33,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260204_YelumSegPar_494.37',date:'2026-02-04',desc:'YelumSeg Parc2',val:494.37,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260204_UberUBERT_13.68',date:'2026-02-04',desc:'Uber UBER *TRIP HELP.U',val:13.68,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260204_MILARESTAUR_425.5',date:'2026-02-04',desc:'MILA RESTAURANTE',val:425.5,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260203_PLANETCAP_45.0',date:'2026-02-03',desc:'PLANET CAP',val:45.0,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260203_00004SHBE_179.5',date:'2026-02-03',desc:'00004  SH BEIRAMAR',val:179.5,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260203_SUPERMERCADO_32.9',date:'2026-02-03',desc:'SUPERMERCADOS IMPERATR',val:32.9,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260203_SOLPARKINGE_8.0',date:'2026-02-03',desc:'SOLPARKING ESTACIONAME',val:8.0,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260203_ANUIDADEDIF_333.33',date:'2026-02-03',desc:'ANUIDADE DIFERENCI08/12',val:333.33,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_BALADEIRA_42.0',date:'2026-02-02',desc:'BALADEIRA',val:42.0,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_DMSpotify_31.9',date:'2026-02-02',desc:'DM*Spotify',val:31.9,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_HIPPOSUPERM_816.09',date:'2026-02-02',desc:'HIPPO SUPERMERCADO',val:816.09,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_RAIA2202_963.93',date:'2026-02-02',desc:'RAIA2202',val:963.93,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_HOTELDO_1080.29',date:'2026-01-13',desc:'HOTELDO           02/10',val:1080.29,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_HOTELDO_1126.19',date:'2026-01-13',desc:'HOTELDO           02/10',val:1126.19,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_HOTELDO_698.34',date:'2026-01-13',desc:'HOTELDO           02/10',val:698.34,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_MERCADOLIVRE_937.53',date:'2026-02-01',desc:'MERCADOLIVRE*MWBRA03/04',val:937.53,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_NIKE_266.94',date:'2026-02-01',desc:'NIKE              04/10',val:266.94,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_DECATHLON_283.87',date:'2026-02-01',desc:'DECATHLON         04/04',val:283.87,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_BODYHALL_282.0',date:'2026-02-01',desc:'BODY HALL         04/12',val:282.0,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_LECREUSETD_200.97',date:'2026-02-01',desc:'LE CREUSET DO BRAS05/10',val:200.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_BODYHALL_282.0',date:'2026-02-01',desc:'BODY HALL         05/12',val:282.0,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_HERMES-CIDAD_14158.35',date:'2026-02-01',desc:'HERMES-CIDADE JARD06/06',val:14158.35,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_ROYALCARIBB_4471.89',date:'2026-02-01',desc:'ROYAL CARIBBEAN CR07/10',val:4471.89,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_ICONINTERIO_1089.0',date:'2026-02-01',desc:'ICON INTERIORES   09/10',val:1089.0,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_PPGRUP_299.99',date:'2026-02-01',desc:'PP     *GRUPOKOHAL10/12',val:299.99,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260201_SPECIALIZED_4137.49',date:'2026-02-01',desc:'SPECIALIZED BRASIL12/12',val:4137.49,cat:'Variáveis',sub:'COMPRAS J',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260128_PIXQRSPaga_15.9',date:'2026-01-28',desc:'PIX QRS Pagar Me Pa28/01',val:15.9,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_PIXWHATSAn_30.0',date:'2026-01-23',desc:'PIX WHATS Anderso23/01',val:30.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260123_PIXWHATSQR_36.0',date:'2026-01-23',desc:'PIX WHATS QRCODE Liomar 23/01',val:36.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_PIXTRANSF3_490.0',date:'2026-01-21',desc:'PIX TRANSF 39.746.21/01',val:490.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260121_PAGBOLETOG_329.0',date:'2026-01-21',desc:'PAG BOLETO GALAX PAY PAGAMENTOS ELETRON',val:329.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260115_PIXWHATSLi_31.5',date:'2026-01-15',desc:'PIX WHATS Liomar 15/01',val:31.5,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260113_PIXTRANSF3_304.0',date:'2026-01-13',desc:'PIX TRANSF 39.746.13/01',val:304.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260112_PIXWHATSLO_16.0',date:'2026-01-12',desc:'PIX WHATS LORENA 10/01',val:16.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_PIXQRSVITO_6800.0',date:'2026-01-05',desc:'PIX QRS VITOR COELH05/01',val:6800.0,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'excel'},
    {id:'xl_20260105_PIXWHATSOs_13.0',date:'2026-01-05',desc:'PIX WHATS Osvaldo05/01',val:13.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260105_PIXTRANSFP_9000.0',date:'2026-01-05',desc:'PIX TRANSF PRISCIL04/01',val:9000.0,cat:'Fixa',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'⚠️ Desmembrar',source:'excel'},
    {id:'xl_20260102_PIXTRANSFE_1074.98',date:'2026-01-02',desc:'PIX TRANSF ELIZABE02/01',val:1074.98,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_PIXWHATSHe_20.0',date:'2026-01-02',desc:'PIX WHATS Heberth02/01',val:20.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260226_PIXQRSPARC_2583.22',date:'2026-02-26',desc:'PIX QRS PARCELADOUS26/02',val:2583.22,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260225_DATIMCELU_142.17',date:'2026-02-25',desc:'DA  TIM CELU 59077434010',val:142.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260223_PAGBOLETOG_329.0',date:'2026-02-23',desc:'PAG BOLETO GALAX PAY PAGAMENTOS ELETRON',val:329.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260220_INTDOCARRE_700.68',date:'2026-02-20',desc:'INT DOC ARREC E-SOCI 071',val:700.68,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260218_DACLAROBL_299.84',date:'2026-02-18',desc:'DA  CLARO BL/IT 19104556',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260211_PAGTITINT_2643.72',date:'2026-02-11',desc:'PAG TIT INT 328295769000',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260211_PIXWHATS39_141.0',date:'2026-02-11',desc:'PIX WHATS 39.746.11/02',val:141.0,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260209_PIXQRSPAGA_28.62',date:'2026-02-09',desc:'PIX QRS PAGAR.ME PA07/02',val:28.62,cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260206_PIXTRANSFB_7333.32',date:'2026-02-06',desc:'PIX TRANSF BETINA 06/02',val:7333.32,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260205_JUROSLIMITE_1288.7',date:'2026-02-05',desc:'JUROS LIMITE DA CONTA',val:1288.7,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260204_PIXTRANSFP_9500.0',date:'2026-02-04',desc:'PIX TRANSF PRISCIL04/02',val:9500.0,cat:'Fixa',sub:'NÃO CATEGORIZADO',pessoa:'',obs:'⚠️ Desmembrar',source:'excel'},
    {id:'xl_20260203_IOF_298.0',date:'2026-02-03',desc:'IOF',val:298.0,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260203_PAGTITINT_3922.85',date:'2026-02-03',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_DACELESC0_1421.07',date:'2026-02-02',desc:'DA  CELESC 000000900540',val:1421.07,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_PAGTITINT_3271.71',date:'2026-02-02',desc:'PAG TIT INT 104',val:3271.71,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_PIXTRANSFP_3200.0',date:'2026-02-02',desc:'PIX TRANSF PATRICI01/02',val:3200.0,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260202_PIXTRANSFN_1506.0',date:'2026-02-02',desc:'PIX TRANSF NARA EL01/02',val:1506.0,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'excel'},
    {id:'xl_20260102_TRANSFERENCI_200.0',date:'2026-01-02',desc:'TRANSFERENCIA TEF PIX ( Doc.: 4514807 / LUIGI FREIRE PEDROZO )',val:200.0,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260102_IOF(Doc.:_26.12',date:'2026-01-02',desc:'IOF ( Doc.: SALDO DEV )',val:26.12,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260114_ARRECADACAO_18.8',date:'2026-01-14',desc:'ARRECADACAO DE CONVENIOS ( Doc.: ConvÃªnio / CSLL JCRP )',val:18.8,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260115_DEBMENSALID_1040.03',date:'2026-01-15',desc:'DEB MENSALID QUANTA PREVID-CENTRALIZADO ( Doc.: 100069 )',val:1040.03,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260115_DEBMENSALID_1040.03',date:'2026-01-15',desc:'DEB MENSALID QUANTA PREVID-CENTRALIZADO ( Doc.: 131110 )',val:1040.03,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260115_DEBMENSALID_33.12',date:'2026-01-15',desc:'DEB MENSALID QUANTA PREVID-CENTRALIZADO ( Doc.: 124192 )',val:33.12,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260116_DEBITOTRANS_1000.0',date:'2026-01-16',desc:'DEBITO TRANSFERENCIA PIX ( Doc.: DEB PIX / GOMES  COSTA SERVICOS MEDICOS LTDA )',val:1000.0,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260116_DEBITOTRANS_11250.0',date:'2026-01-16',desc:'DEBITO TRANSFERENCIA PIX ( Doc.: DEB PIX / 49532511 JEHNNIFER DE MEDEIROS ROGERIO )',val:11250.0,cat:'Variáveis',sub:'MORADIA',pessoa:'P',obs:'Unicred',source:'excel'},
    {id:'xl_20260130_LIQUIDACAOD_7651.78',date:'2026-01-30',desc:'LIQUIDACAO DE PARCELA DE FINANCIAMENTO ( Doc.: 2020082743 )',val:7651.78,cat:'Fixa',sub:'APTO',pessoa:'',obs:'Financiamento apto Unicred',source:'excel'},
    {id:'xl_20260130_JUROSCHEQUE_665.65',date:'2026-01-30',desc:'JUROS CHEQUE ESPECIAL -  PF ( Doc.: 0 )',val:665.65,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260202_IOF(Doc.:_275.71',date:'2026-02-02',desc:'IOF ( Doc.: SALDO DEV )',val:275.71,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260206_DEBITOTRANS_500.0',date:'2026-02-06',desc:'DEBITO TRANSFERENCIA PIX ( Doc.: DEB PIX / ALEXANDRE BOTTARO VIEIRA )',val:500.0,cat:'Variáveis',sub:'DOAÇÕES',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260218_DEBMENSALID_1040.03',date:'2026-02-18',desc:'DEB MENSALID QUANTA PREVID-CENTRALIZADO ( Doc.: 100069 )',val:1040.03,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260218_DEBMENSALID_33.12',date:'2026-02-18',desc:'DEB MENSALID QUANTA PREVID-CENTRALIZADO ( Doc.: 124192 )',val:33.12,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260218_DEBMENSALID_1040.03',date:'2026-02-18',desc:'DEB MENSALID QUANTA PREVID-CENTRALIZADO ( Doc.: 131110 )',val:1040.03,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'Unicred',source:'excel'},
    {id:'xl_20260204_Anuidade-p_79.16',date:'2026-02-04',desc:'Anuidade - parcela',val:79.16,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260206_IOFTransaco_885.43',date:'2026-02-06',desc:'IOF Transacoes Exterior R$',val:885.43,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260206_BKGHOTELAT_25297.93',date:'2026-02-06',desc:'BKG*HOTEL AT BOOKING.C',val:25297.93,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260209_IOFTransaco_699.61',date:'2026-02-09',desc:'IOF Transacoes Exterior R$',val:699.61,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260209_BOOKING.COM_19988.73',date:'2026-02-09',desc:'BOOKING.COM* 1LGN2APKO',val:19988.73,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260214_IOFTransaco_570.98',date:'2026-02-14',desc:'IOF Transacoes Exterior R$',val:570.98,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260214_RIMOWADISTR_16313.6',date:'2026-02-14',desc:'RIMOWA DISTRIBUTION  INC',val:16313.6,cat:'Variáveis',sub:'COMPRAS P',pessoa:'J',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260217_IOFTransaco_231.54',date:'2026-02-17',desc:'IOF Transacoes Exterior R$',val:231.54,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260217_LUXURYCOLLE_6615.47',date:'2026-02-17',desc:'LUXURY COLLECTION',val:6615.47,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260226_IOFTransaco_112.04',date:'2026-02-26',desc:'IOF Transacoes Exterior R$',val:112.04,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'Unicred CC',source:'excel'},
    {id:'xl_20260226_ALAMORENT-A_3201.15',date:'2026-02-26',desc:'ALAMO RENT-A-CAR',val:3201.15,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'Unicred CC',source:'excel'},
  ]);
}

// ── BOOT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});

  // Modal backdrop close
  ['detail-modal','edittx-modal','review-threshold-modal','split-modal','search-modal','manual-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
  });

  loadData();
});
