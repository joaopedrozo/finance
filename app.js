// ═══════════════════════════════════════════════════════
//  PEDROZO · FINANÇAS · PWA  v3
// ═══════════════════════════════════════════════════════

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz7fY0H-OV2_7vzb69KMVrXQ-AxdVKsHuNXDqA8eAzdTQUPjTBHiyD1dJIPc5vUVa88Bw/exec';

// ── RULES ─────────────────────────────────────────────
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

function categorize(desc, type) {
  const d = desc.toUpperCase();
  const rules = type==='itau'?RULES_ITAU:type==='unicred'?RULES_UNICRED:RULES_CARD;
  for (const [kw,cat,sub,pessoa] of rules) {
    if (new RegExp(kw.toUpperCase()).test(d)) return {cat,sub,pessoa};
  }
  return {cat:'Variáveis',sub:'NÃO CATEGORIZADO',pessoa:null};
}

const BUDGET = {
  'VIAGEM':25000,'COMPRAS P':5000,'CARRO':17000,'FUNCIONÁRIAS':8000,'COMPRAS J':5000,
  'CATARINA':6000,'SUPERMERCADO':7000,'IMPOSTOS':2200,'TRANSPORTE':1000,'ESPORTE':3000,
  'CONDOMÍNIO':3500,'FARMÁCIA':2500,'MORADIA':2000,'SEGUROS':1500,'RICARDO':1500,
  'COMPRAS CR':2000,'BELEZA ESTÉTICA BEM ESTAR':1500,'ALIMENTAÇÃO':3000,'SAÚDE':1000,
  'LAVANDERIA':1000,'LUZ':1000,'ASSINATURAS':600,'LAZER':1000,'PRESENTES':1000,
  'APTO':8000,'PREVIDENCIA /  VIDA':2500,
};


// ── CAT MAP — fonte da verdade ────────────────────────
const CAT_MAP = {
  'CATARINA':'Fixa','CARRO':'Fixa','FUNCIONÁRIAS':'Fixa','SEGUROS':'Fixa',
  'APTO':'Fixa','PREVIDENCIA /  VIDA':'Fixa','ASSINATURAS':'Fixa',
  'CONDOMÍNIO':'Fixa','LUZ':'Fixa',
};
function getCat(sub) { return CAT_MAP[sub] || 'Variáveis'; }

// ── SHEETS ────────────────────────────────────────────
const isConfigured = () => SHEETS_URL && !SHEETS_URL.includes('COLE_AQUI');
async function sheetsGet(action) {
  const r = await fetch(`${SHEETS_URL}?action=${action}`);
  const j = await r.json(); if (!j.ok) throw new Error(j.error); return j.data;
}
async function sheetsPost(body) {
  const r = await fetch(SHEETS_URL,{method:'POST',body:JSON.stringify(body)});
  const j = await r.json(); if (!j.ok) throw new Error(j.error); return j;
}

// ── CACHE ─────────────────────────────────────────────
const CACHE_KEY = 'pedrozo_txs_v3';
const REVIEW_KEY = 'pedrozo_reviewed';
const cache = {
  load() { try { return JSON.parse(localStorage.getItem(CACHE_KEY)||'[]'); } catch { return []; } },
  save(t) { localStorage.setItem(CACHE_KEY,JSON.stringify(t)); },
};
const THRESHOLD_KEY = 'pedrozo_review_threshold';
const threshold = {
  get() { return parseFloat(localStorage.getItem(THRESHOLD_KEY)||'1000'); },
  set(v) { localStorage.setItem(THRESHOLD_KEY, v); },
};
const reviewed = {
  load() { try { return JSON.parse(localStorage.getItem(REVIEW_KEY)||'{}'); } catch { return {}; } },
  save(r) { localStorage.setItem(REVIEW_KEY,JSON.stringify(r)); },
  approve(id) { const r=this.load(); r[id]='ok'; this.save(r); },
  reject(id,newSub) { const r=this.load(); r[id]='edit:'+newSub; this.save(r); },
};

// ── STATE ─────────────────────────────────────────────
let STATE = { txs:[], synced:false, error:null };

// ── LOAD ──────────────────────────────────────────────
async function loadData(silent=false) {
  if (!silent) showLoading(true);
  STATE.error = null;
  if (isConfigured()) {
    try {
      let remote = await sheetsGet('getTxs');
      if (!remote || remote.length===0) {
        seedData();
        await sheetsPost({action:'addTxs',txs:cache.load()});
        remote = await sheetsGet('getTxs');
        showToast('Dados históricos enviados ao Sheets!','ok');
      }
      STATE.txs = remote; STATE.synced = true; cache.save(remote);
    } catch(e) {
      STATE.error = 'Offline — cache local'; STATE.txs = cache.load(); STATE.synced = false;
      if (STATE.txs.length===0) { seedData(); STATE.txs = cache.load(); }
    }
  } else {
    STATE.txs = cache.load(); STATE.synced = false;
    if (STATE.txs.length===0) { seedData(); STATE.txs = cache.load(); }
  }
  if (!silent) showLoading(false);
  refreshAll();
}

function detectDuplicates(newTxs, existing) {
  const keys = new Set(existing.map(t=>t.id));
  const fresh=[], dupes=[], exact=[];
  newTxs.forEach(t=>{
    if (keys.has(t.id)) { exact.push(t); return; }
    // Fuzzy: same val + date within 3 days
    const fuzzy = existing.find(e=>{
      if (Math.abs(parseFloat(e.val)-parseFloat(t.val))>0.01) return false;
      const d1=new Date(e.date), d2=new Date(t.date);
      return Math.abs(d1-d2) <= 3*86400000;
    });
    if (fuzzy) dupes.push({tx:t, similar:fuzzy});
    else fresh.push(t);
  });
  return {fresh, dupes, exact};
}

async function syncTxs(newTxs) {
  const all = cache.load();
  const {fresh} = detectDuplicates(newTxs, all);
  cache.save([...all,...fresh]); STATE.txs = cache.load();
  if (isConfigured() && fresh.length>0) {
    try { const r = await sheetsPost({action:'addTxs',txs:fresh}); return r.added; }
    catch(e) { STATE.error='Salvo localmente'; }
  }
  return fresh.length;
}

// ── FORMAT ────────────────────────────────────────────
const fmt   = v => 'R$\u00A0'+Math.round(v).toLocaleString('pt-BR');
const fmtK  = v => v>=1e6?'R$\u00A0'+(v/1e6).toFixed(1)+'M':v>=1e3?'R$\u00A0'+(v/1e3).toFixed(0)+'k':fmt(v);
const pctOf = (a,b) => b?((a/b)*100).toFixed(0)+'%':'—';
const MNAMES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const COLORS = ['#A67C2E','#2F6FE0','#1E9E63','#C9943A','#7B5FD4','#D63E50',
                '#1EA8A8','#D4843A','#5D9E1E','#A83E7B','#A83E3E','#3E6FA8'];

// ── AGGREGATE ─────────────────────────────────────────
function aggregate(txs, month) {
  const filtered = month ? txs.filter(t=>t.date&&t.date.startsWith(`2026-${String(month).padStart(2,'0')}`)) : txs;
  const bySub={}, fixaM={}, varM={};
  filtered.forEach(t=>{
    if (!t.sub||t.sub==='nan') return;
    bySub[t.sub]=(bySub[t.sub]||0)+parseFloat(t.val)||0;
    const m=t.date?t.date.slice(5,7):'00';
    const tcat=getCat(t.sub); if (tcat==='Fixa') fixaM[m]=(fixaM[m]||0)+(parseFloat(t.val)||0);
    else varM[m]=(varM[m]||0)+(parseFloat(t.val)||0);
  });
  return {bySub, total:Object.values(bySub).reduce((a,b)=>a+b,0), fixaM, varM};
}

function byMonthTotals(txs) {
  const byM={};
  txs.forEach(t=>{ if (!t.date) return; const m=t.date.slice(5,7); byM[m]=(byM[m]||0)+(parseFloat(t.val)||0); });
  return byM;
}

// ── BAR CHART ─────────────────────────────────────────
function monthBarChart(byM, budgetMonthly) {
  const months=['01','02','03','04','05','06','07','08','09','10','11','12'];
  const maxVal=Math.max(...months.map(m=>byM[m]||0), budgetMonthly||0, 1);
  return `<div class="bar-chart">${months.map((m,i)=>{
    const v=byM[m]||0, h=v>0?Math.max((v/maxVal*100),3):0;
    const over=budgetMonthly&&v>budgetMonthly;
    const active=m==='01'||m==='02';
    return `<div class="bar-col">
      <div class="bar-wrap">
        ${budgetMonthly?`<div class="bar-budget-line" style="bottom:${(budgetMonthly/maxVal*100).toFixed(1)}%"></div>`:''}
        <div class="bar-fill ${over?'bar-over':active?'bar-active':'bar-future'}" style="height:${h.toFixed(1)}%"
          title="${MNAMES[i]}: ${fmt(v)}"></div>
      </div>
      <div class="bar-label">${MNAMES[i].slice(0,1)}</div>
    </div>`;
  }).join('')}</div>`;
}

// ── DONUT ─────────────────────────────────────────────
function donutSVG(segs, cx=60,cy=60,r=46,stroke=10) {
  const circ=2*Math.PI*r, tot=segs.reduce((a,s)=>a+s.v,0);
  let off=-circ/4, paths='';
  segs.forEach(s=>{
    const dash=tot?(s.v/tot)*circ:0;
    paths+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.c}" stroke-width="${stroke}" stroke-dasharray="${dash} ${circ-dash}" stroke-dashoffset="${off}" stroke-linecap="butt"/>`;
    off-=dash;
  });
  return `<svg width="${cx*2}" height="${cy*2}" viewBox="0 0 ${cx*2} ${cy*2}" style="flex-shrink:0">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#F0F0F5" stroke-width="${stroke}"/>${paths}</svg>`;
}

// ── UI HELPERS ────────────────────────────────────────
function showLoading(on) { document.getElementById('loading-bar').style.display=on?'block':'none'; }
function showToast(msg,type='info') {
  const t=document.getElementById('toast');
  t.textContent=msg; t.className=`toast toast-${type} show`;
  setTimeout(()=>t.classList.remove('show'),3200);
}
function setSyncBadge() {
  const el=document.getElementById('sync-badge');
  if (!isConfigured()) { el.textContent='○ Local'; el.className='sync-badge local'; }
  else if (STATE.synced) { el.textContent='● Sync'; el.className='sync-badge synced'; }
  else { el.textContent='◌ Offline'; el.className='sync-badge offline'; }
  if (STATE.error) showToast(STATE.error,'warn');
}
function updateReviewBadge() {
  const rev=reviewed.load(), pending=STATE.txs.filter(t=>!rev[t.id]).length;
  const el=document.getElementById('review-badge');
  if (el) { el.textContent=pending>0?pending:''; el.style.display=pending>0?'flex':'none'; }
}
function refreshAll() {
  setSyncBadge(); updateReviewBadge();
  const active=document.querySelector('.screen.active')?.id?.replace('screen-','');
  if (active==='home')        renderHome();
  if (active==='despesas')    renderDespesas();
  if (active==='comparativo') renderComparativo();
  if (active==='patrimonio')  renderPatrimonio();
  if (active==='revisar')     renderRevisar();
}

// ── HOME ──────────────────────────────────────────────
function renderHome() {
  const txs=STATE.txs, jan=aggregate(txs,1), fev=aggregate(txs,2), acum=jan.total+fev.total;
  const rev=reviewed.load(), pending=txs.filter(t=>!rev[t.id]).length;
  const months=txs.reduce((s,t)=>{ if(t.date)s.add(t.date.slice(0,7)); return s; },new Set()).size;

  // Hero block — big numbers + % orçado
  const budgetMensal = Object.values(BUDGET).reduce((a,b)=>a+b,0);
  const budgetAcum   = budgetMensal * months;
  const pctBudget    = budgetAcum ? ((acum/budgetAcum)*100).toFixed(0) : '—';
  const overBudget   = acum > budgetAcum;
  document.getElementById('home-hero').innerHTML=`
    <div class="hero-main">
      <div class="hero-label">Acumulado 2026</div>
      <div class="hero-value" onclick="openDetail('TOTAL')">${fmt(acum)}</div>
      <div style="display:flex;align-items:center;gap:12px;margin-top:8px">
        <div class="hero-sub">${months} ${months===1?'mês':'meses'} registrados</div>
        <div class="hero-budget-badge ${overBudget?'over':'ok'}" onclick="showScreen('comparativo')">
          ${pctBudget}% do orçado
        </div>
      </div>
    </div>
    <div class="hero-row">
      ${[...Array(months)].map((_,i)=>{
        const mo=String(i+1).padStart(2,'0');
        const ag=aggregate(STATE.txs,i+1);
        return `<div class="hero-mini" onclick="selectHomeMonth('${mo}')">
          <div class="hero-mini-label">${MNAMES[i]}</div>
          <div class="hero-mini-val">${fmt(ag.total)}</div>
        </div>${i<months-1?'<div class="hero-divider"></div>':''}`;
      }).join('')}
    </div>`;

  // Pizza acumulado Jan+Fev
  renderHomePizza(txs);

  // Evolução total vs orçado
  const byM = byMonthTotals(txs);
  const bMensal = Object.values(BUDGET).reduce((a,b)=>a+b,0);
  document.getElementById('home-evolucao').innerHTML = monthBarChart(byM, bMensal);

  // Month pills + summary
  renderHomeMonthPills();
  renderMonthSummary();

  // Compact alerts
  const alerts=[];
  if (pending>0) alerts.push({type:'warn',title:`${pending} para revisar`,body:'Toque em Revisar na barra inferior'});
  const ncat=(jan.bySub['NÃO CATEGORIZADO']||0)+(fev.bySub['NÃO CATEGORIZADO']||0);
  if (ncat>500) alerts.push({type:'warn',title:'Itens sem categoria',body:`${fmt(ncat)} aguardam classificação`});
  if ((fev.bySub['COMPRAS P']||0)>10000) alerts.push({type:'danger',title:'Compras P elevadas em Fev',body:`${fmt(fev.bySub['COMPRAS P']||0)}`});
  if (alerts.length===0) alerts.push({type:'ok',title:'Tudo em ordem',body:'Nenhum alerta no momento'});
  document.getElementById('home-alerts').innerHTML=alerts.map(a=>`
    <div class="alert-item ${a.type}">
      <div class="alert-title">${a.title}</div>
      <div class="alert-body">${a.body}</div>
    </div>`).join('');
}

// ── HOME MONTH SUMMARY ───────────────────────────────
let homeMonth = null;

function selectHomeMonth(m) {
  homeMonth = homeMonth === m ? null : m; // toggle
  renderHomeMonthPills();
  renderMonthSummary();
}

function renderHomeMonthPills() {
  const hasTxs = (m) => STATE.txs.some(t => t.date && t.date.startsWith(`2026-${m}`));
  document.getElementById('home-month-pills').innerHTML =
    ['01','02','03','04','05','06','07','08','09','10','11','12'].map(m => {
      const has = hasTxs(m);
      const active = m === homeMonth;
      return `<div class="pill ${active?'active':''} ${!has?'pill-empty':''}"
        onclick="selectHomeMonth('${m}')">${MNAMES[parseInt(m)-1]}</div>`;
    }).join('');
}

function renderMonthSummary() {
  const el = document.getElementById('home-month-summary');
  if (!homeMonth) { el.innerHTML=''; return; }

  const txs = STATE.txs;
  const ag  = aggregate(txs, parseInt(homeMonth));
  const fixa = ag.fixaM[homeMonth]||0;
  const vari = ag.varM[homeMonth]||0;
  const top3 = Object.entries(ag.bySub)
    .filter(([k])=>k!=='NÃO CATEGORIZADO')
    .sort((a,b)=>b[1]-a[1]).slice(0,3);
  const mName = MNAMES[parseInt(homeMonth)-1];

  if (ag.total === 0) {
    el.innerHTML=`<div class="month-summary-card">
      <div style="text-align:center;padding:16px;color:var(--muted);font-size:12px">Sem dados para ${mName}</div>
    </div>`;
    return;
  }

  el.innerHTML=`<div class="month-summary-card">
    <div class="msm-header">
      <div>
        <div class="msm-month">${mName} 2026</div>
        <div class="msm-total">${fmt(ag.total)}</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn" style="margin:0;padding:8px 14px;font-size:12px;flex:1"
          onclick="goToMonth('${homeMonth}')">Ver detalhes →</button>
        <button class="btn" style="margin:0;padding:8px 14px;font-size:12px;flex:1;background:#1A2F5A"
          onclick="gerarResumoPNG('${homeMonth}')">📤 Compartilhar</button>
      </div>
    </div>
    <div class="msm-row">
      <div class="msm-kpi">
        <div class="msm-kpi-label">Fixas</div>
        <div class="msm-kpi-val" style="color:var(--blue)">${fmt(fixa)}</div>
        <div class="msm-kpi-pct">${pctOf(fixa,ag.total)}</div>
      </div>
      <div class="msm-kpi">
        <div class="msm-kpi-label">Variáveis</div>
        <div class="msm-kpi-val" style="color:var(--gold)">${fmt(vari)}</div>
        <div class="msm-kpi-pct">${pctOf(vari,ag.total)}</div>
      </div>
    </div>
    <div class="msm-top">
      <div class="msm-top-label">Top categorias</div>
      ${top3.map(([name,val],i)=>`
        <div class="msm-top-row">
          <div class="msm-top-dot" style="background:${COLORS[i]}"></div>
          <div class="msm-top-name">${name}</div>
          <div class="msm-top-val">${fmt(val)}</div>
          <div class="msm-top-pct">${pctOf(val,ag.total)}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

function goToMonth(m) {
  activeMonth = m;
  showScreen('despesas');
}

// ── DESPESAS ──────────────────────────────────────────
let activeMonth='01';
let despSort = 'valor_desc';

function openDetailCat(tipo) {
  const txs = STATE.txs, m = parseInt(activeMonth);
  const filtered = txs.filter(t => {
    if (!t.date || !t.date.startsWith(`2026-${activeMonth}`)) return false;
    if (tipo==='fixa') return getCat(t.sub)==='Fixa';
    return getCat(t.sub)!=='Fixa';
  });
  const total = filtered.reduce((a,t)=>a+(parseFloat(t.val)||0),0);
  const label = tipo==='fixa'?'Despesas Fixas':'Despesas Variáveis';
  // Reuse detail modal
  document.getElementById('detail-title').textContent = label;
  document.getElementById('detail-total').textContent = fmt(total)+' · '+filtered.length+' lançamentos';
  document.getElementById('detail-chart').innerHTML = '';
  const rev = reviewed.load();
  document.getElementById('detail-list').innerHTML = filtered
    .sort((a,b)=>b.val-a.val)
    .map(t=>{
      const st=rev[t.id], dot=st==='ok'?'✓':st?'✎':'·', dotC=st==='ok'?'#1A8C5B':st?'#A67C2E':'#ccc';
      return `<div class="detail-row" onclick="openEditTx('${t.id}')" style="cursor:pointer">
        <div style="color:${dotC};font-size:14px;width:16px;flex-shrink:0">${dot}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.desc}</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${t.date} · ${t.sub}</div>
        </div>
        <div style="font-size:12px;font-feature-settings:'tnum';flex-shrink:0;margin-left:8px">${fmt(parseFloat(t.val)||0)}</div>
      </div>`;
    }).join('');
  document.getElementById('detail-modal').classList.add('open');
}

function renderDespesas() {
  const txs=STATE.txs, m=parseInt(activeMonth), ag=aggregate(txs,m), total=ag.total;
  document.getElementById('month-pills').innerHTML=['01','02','03','04','05','06','07','08','09','10','11','12']
    .map(mo=>`<div class="pill ${mo===activeMonth?'active':''}" onclick="setMonth('${mo}')">${MNAMES[parseInt(mo)-1]}</div>`).join('');

  const entries=Object.entries(ag.bySub).filter(([k])=>k!=='NÃO CATEGORIZADO');
  let sorted;
  if      (despSort==='valor_desc') sorted=[...entries].sort((a,b)=>b[1]-a[1]);
  else if (despSort==='valor_asc')  sorted=[...entries].sort((a,b)=>a[1]-b[1]);
  else if (despSort==='alpha')      sorted=[...entries].sort((a,b)=>a[0].localeCompare(b[0]));
  else if (despSort==='budget_pct') sorted=[...entries].sort((a,b)=>{
    const pa=BUDGET[a[0]]?a[1]/BUDGET[a[0]]:0;
    const pb=BUDGET[b[0]]?b[1]/BUDGET[b[0]]:0;
    return pb-pa;
  });
  const maxVal=sorted[0]?.[1]||1;
  // Sort header icons
  const si = (col) => despSort===col+`_desc`?'↓':despSort===col+`_asc`?'↑':despSort===col?'↓':'↕';
  const hdr = `<div class="desp-hdr">
    <div class="desp-hdr-col desp-hdr-name" onclick="setDespSort('alpha')">Categoria ${despSort==='alpha'?'↓':'↕'}</div>
    <div class="desp-hdr-col desp-hdr-val"  onclick="setDespSort('valor')">Valor ${despSort==='valor_desc'?'↓':despSort==='valor_asc'?'↑':'↕'}</div>
    <div class="desp-hdr-col desp-hdr-pct"  onclick="setDespSort('budget_pct')">% Orç ${despSort==='budget_pct'?'↓':'↕'}</div>
  </div>`;

  document.getElementById('desp-table').innerHTML=sorted.length
    ? hdr + sorted.slice(0,10).map(([name,val],i)=>{
        const bud=BUDGET[name], over=bud&&val>bud;
        const barC=bud?(over?'#D63E50':'#1E9E63'):COLORS[i%COLORS.length];
        return `<div class="cat-row" onclick="openDetail('${name}')">
          <div class="cat-dot" style="background:${COLORS[i%COLORS.length]}"></div>
          <div class="cat-name">${name}</div>
          <div class="cat-right">
            <div class="cat-val ${bud?(over?'prog-over':'prog-ok'):''}">${fmt(val)}</div>
            <div class="cat-pct">${pctOf(val,total)}${bud?' · bud '+fmtK(bud):''}</div>
            <div class="cat-bar-wrap" style="width:70px"><div class="cat-bar" style="width:${(val/maxVal*100).toFixed(1)}%;background:${barC}"></div></div>
          </div>
        </div>`;
      }).join('')
    : '<div style="padding:24px;text-align:center;color:var(--muted)">Sem dados para este mês</div>';

  // 80% pizza — categorias que somam 80% das despesas
  let cumul=0, segs80=[], others80=0;
  sorted.forEach(([label,v],i)=>{
    if(cumul/total<0.80){ segs80.push({label,v,c:COLORS[i%COLORS.length]}); cumul+=v; }
    else others80+=v;
  });
  if(others80>0) segs80.push({label:'Demais',v:others80,c:'#C8D8E8'});
  document.getElementById('desp-donut').innerHTML=segs80.length
    ? donutSVG(segs80)+`<div class="donut-legend-v">${segs80.map(s=>`
        <div class="donut-leg-item" onclick="openDetail('${s.label}')" style="cursor:pointer">
          <div class="donut-leg-dot" style="background:${s.c}"></div>
          <div class="donut-leg-name">${s.label}</div>
          <div class="donut-leg-val">${fmtK(s.v)}</div>
          <div class="donut-leg-pct">${pctOf(s.v,total)}</div>
        </div>`).join('')}</div>`:'' ;

  // Top 10 lançamentos individuais
  const monthTxs = txs.filter(t=>t.date&&t.date.startsWith(`2026-${activeMonth}`)&&t.sub!=='NÃO CATEGORIZADO');
  const top10txs = [...monthTxs].sort((a,b)=>parseFloat(b.val)-parseFloat(a.val)).slice(0,10);
  document.getElementById('desp-top10-txs').innerHTML = top10txs.map((t,i)=>`
    <div class="cat-row" onclick="openEditTx('${t.id}')" style="cursor:pointer">
      <div style="font-size:11px;color:var(--muted);width:18px;flex-shrink:0;font-weight:600">#${i+1}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.desc}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${t.date} · <span style="color:var(--blue)">${t.sub}</span></div>
      </div>
      <div style="font-size:13px;font-weight:600;color:var(--red);font-feature-settings:'tnum';flex-shrink:0;margin-left:8px">${fmt(parseFloat(t.val)||0)}</div>
    </div>`).join('');

  const fixa=ag.fixaM[activeMonth]||0, vari=ag.varM[activeMonth]||0;
  document.getElementById('desp-kpi-total').textContent=fmt(total);
  document.getElementById('desp-kpi-fixa').textContent=fmt(fixa)+' ('+pctOf(fixa,total)+')';
  document.getElementById('desp-kpi-var').textContent=fmt(vari)+' ('+pctOf(vari,total)+')';
}
function setMonth(m) { activeMonth=m; renderDespesas(); }
function setDespSort(col) {
  if (col==='valor') {
    despSort = despSort==='valor_desc' ? 'valor_asc' : 'valor_desc';
  } else {
    despSort = col;
  }
  renderDespesas();
}

// ── COMPARATIVO ───────────────────────────────────────
let cmpView = 'mensal'; // 'mensal' | 'anual'

function renderComparativo() {
  const txs=STATE.txs;
  const byM=byMonthTotals(txs);
  document.getElementById('cmp-barchart').innerHTML=monthBarChart(byM,null);

  // Toggle buttons
  document.getElementById('cmp-toggle-mensal').classList.toggle('active', cmpView==='mensal');
  document.getElementById('cmp-toggle-anual').classList.toggle('active',  cmpView==='anual');

  if (cmpView==='mensal') renderCmpMensal(txs);
  else                    renderCmpAnual(txs);

  const jan=aggregate(txs,1), fev=aggregate(txs,2);
  const fixaA=(jan.fixaM['01']||0)+(fev.fixaM['02']||0);
  const varA=(jan.varM['01']||0)+(fev.varM['02']||0);
  const totA=fixaA+varA;
  const segs=[{label:'Fixas',v:fixaA,c:'#2F6FE0'},{label:'Variáveis',v:varA,c:'#A67C2E'}];
  document.getElementById('cmp-donut').innerHTML=`<div class="donut-row">${donutSVG(segs)}
    <div class="donut-legend-v">${segs.map(s=>`
      <div class="donut-leg-item"><div class="donut-leg-dot" style="background:${s.c}"></div>
      <div class="donut-leg-name">${s.label}</div><div class="donut-leg-val">${fmt(s.v)}</div>
      <div class="donut-leg-pct">${pctOf(s.v,totA)}</div></div>`).join('')}
    </div></div>`;
}

function setCmpView(v) { cmpView=v; renderComparativo(); }

function renderCmpMensal(txs) {
  // Categoria | Orç/mês | Jan | Fev | Mar | ... | Total
  const months=['01','02','03','04','05','06','07','08','09','10','11','12'];
  const allSubs={};
  txs.forEach(t=>{ if(t.sub&&t.sub!=='NÃO CATEGORIZADO') {
    if (!allSubs[t.sub]) allSubs[t.sub]={};
    const m=t.date?t.date.slice(5,7):'00';
    allSubs[t.sub][m]=(allSubs[t.sub][m]||0)+(parseFloat(t.val)||0);
  }});
  const sorted=Object.entries(allSubs).sort((a,b)=>{
    const ta=Object.values(a[1]).reduce((x,y)=>x+y,0);
    const tb=Object.values(b[1]).reduce((x,y)=>x+y,0);
    return tb-ta;
  });

  const activeMths=months.filter(m=>sorted.some(([,mv])=>mv[m]));

  let html=`<div class="cmp-scroll-wrap"><table class="bud-table">
    <thead><tr>
      <th class="bud-cat">Categoria</th>
      <th class="bud-bud">Orç/mês</th>
      ${activeMths.map(m=>`<th class="bud-m">${['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][parseInt(m)-1]}</th>`).join('')}
      <th class="bud-tot">Total</th>
    </tr></thead><tbody>`;

  sorted.forEach(([sub,byMonth])=>{
    const bud=BUDGET[sub]||0;
    const total=Object.values(byMonth).reduce((a,b)=>a+b,0);
    html+=`<tr onclick="openDetail('${sub}')">
      <td class="bud-cat">${sub}</td>
      <td class="bud-bud">${bud?fmtK(bud):'—'}</td>
      ${activeMths.map(m=>{
        const v=byMonth[m]||0;
        const over=bud&&v>bud;
        return `<td class="bud-m ${over?'cell-over':v>0?'cell-ok':'cell-empty'}">${v>0?fmtK(v):'—'}</td>`;
      }).join('')}
      <td class="bud-tot">${fmtK(total)}</td>
    </tr>`;
  });

  html+=`</tbody></table></div>`;
  document.getElementById('cmp-rows').innerHTML=html;
}

function renderCmpAnual(txs) {
  // Categoria | Orçado anual | Gasto acum. | Saldo | % usado
  const allSubs={};
  txs.forEach(t=>{ if(t.sub&&t.sub!=='NÃO CATEGORIZADO')
    allSubs[t.sub]=(allSubs[t.sub]||0)+(parseFloat(t.val)||0);
  });
  const sorted=Object.entries(allSubs).sort((a,b)=>b[1]-a[1]);

  let html=`<table class="bud-table" style="width:100%">
    <thead><tr>
      <th class="bud-cat">Categoria</th>
      <th class="bud-bud" style="text-align:right">Anual</th>
      <th class="bud-bud" style="text-align:right">Gasto</th>
      <th class="bud-bud" style="text-align:right">Saldo</th>
      <th class="bud-m" style="text-align:right">%</th>
    </tr></thead><tbody>`;

  sorted.forEach(([sub,spent])=>{
    const budA=(BUDGET[sub]||0)*12;
    const saldo=budA-spent;
    const pct=budA?Math.min((spent/budA*100),999):null;
    const over=budA&&spent>budA;
    html+=`<tr onclick="openDetail('${sub}')">
      <td class="bud-cat">${sub}</td>
      <td class="bud-bud" style="text-align:right;color:var(--muted)">${budA?fmtK(budA):'—'}</td>
      <td class="bud-bud" style="text-align:right;color:var(--text)">${fmtK(spent)}</td>
      <td class="bud-bud" style="text-align:right;color:${over?'var(--red)':'var(--green)'}">${budA?(over?'-':'')+fmtK(Math.abs(saldo)):'—'}</td>
      <td class="bud-m" style="text-align:right">
        ${pct!==null?`<span class="${over?'prog-over':'prog-ok'}">${pct.toFixed(0)}%</span>`:'—'}
      </td>
    </tr>`;
  });

  html+=`</tbody></table>`;
  document.getElementById('cmp-rows').innerHTML=html;
}

// ── PATRIMÔNIO ────────────────────────────────────────
async function renderPatrimonio() {
  document.getElementById('pat-donut').innerHTML='<div style="padding:24px;text-align:center;color:var(--muted);font-size:12px">Carregando...</div>';
  document.getElementById('pat-items-liq').innerHTML='';
  document.getElementById('pat-items-imob').innerHTML='';

  let pat = null;
  if (isConfigured()) {
    try { pat = await sheetsGet('getPat'); } catch(e) {}
  }

  // Fallback vazio — instrui usuário a preencher no Sheets
  if (!pat || Object.keys(pat).length===0) {
    document.getElementById('pat-donut').innerHTML=`
      <div style="padding:24px;text-align:center;color:var(--muted);font-size:12px;line-height:1.6">
        Patrimônio não configurado.<br>
        Preencha a aba <b>Patrimonio</b> no Google Sheets<br>com colunas: <b>grupo · nome · valor</b>
      </div>`;
    return;
  }

  const grupos = Object.keys(pat);
  const totByGrupo = {};
  grupos.forEach(g=>{ totByGrupo[g]=Object.values(pat[g]).reduce((a,b)=>a+b,0); });
  const tP = Object.values(totByGrupo).reduce((a,b)=>a+b,0);

  const COLORS_PAT = ['#1E9E63','#2F6FE0','#A67C2E','#7B5FD4','#D63E50'];
  const segs = grupos.map((g,i)=>({label:g, v:totByGrupo[g], c:COLORS_PAT[i%COLORS_PAT.length]}));

  document.getElementById('pat-donut').innerHTML=`<div class="donut-row">${donutSVG(segs)}
    <div class="donut-legend-v">${segs.map(s=>`
      <div class="donut-leg-item"><div class="donut-leg-dot" style="background:${s.c}"></div>
      <div class="donut-leg-name">${s.label}</div><div class="donut-leg-val">${fmtK(s.v)}</div>
      <div class="donut-leg-pct">${pctOf(s.v,tP)}</div></div>`).join('')}
    </div></div>`;

  // Render each group
  const liqEl=document.getElementById('pat-items-liq');
  const imobEl=document.getElementById('pat-items-imob');
  liqEl.innerHTML=''; imobEl.innerHTML='';

  grupos.forEach((g,i)=>{
    const color=COLORS_PAT[i%COLORS_PAT.length];
    const el=i===0?liqEl:imobEl;
    el.innerHTML+=`<div class="pat-group-title" style="border-top:${i>0?'':'none'};margin-top:${i>0?'':'0'}">${g} · ${fmtK(totByGrupo[g])}</div>`;
    Object.entries(pat[g]).forEach(([n,v])=>{
      el.innerHTML+=`<div class="pat-item">
        <div class="pat-item-dot" style="background:${color}"></div>
        <div class="pat-item-name">${n}</div>
        <div class="pat-item-val">${fmtK(v)}</div>
        <div class="pat-item-pct">${pctOf(v,tP)}</div>
      </div>`;
    });
  });
}

// ── REVISAR ───────────────────────────────────────────
let reviewQueue=[], reviewIdx=0, swipeStartX=0;

function renderRevisar() {
  const rev=reviewed.load();
  const minVal=threshold.get();
  // Show threshold config at top
  document.getElementById('review-threshold-val').textContent=fmt(minVal);
  // Filter: not reviewed AND above threshold
  reviewQueue=STATE.txs
    .filter(t=>!rev[t.id] && (parseFloat(t.val)||0)>=minVal)
    .sort((a,b)=>parseFloat(b.val)-parseFloat(a.val)); // highest first
  reviewIdx=0;
  const skipped=STATE.txs.filter(t=>!rev[t.id]&&(parseFloat(t.val)||0)<minVal).length;
  document.getElementById('review-skipped').textContent=
    skipped>0?`${skipped} lançamento${skipped>1?'s':''} abaixo do limite ignorado${skipped>1?'s':''}. Edite na aba Mensal se necessário.`:'';
  showReviewCard();
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
function openThresholdModal() {
  document.getElementById('review-threshold-input').value=threshold.get();
  document.getElementById('review-threshold-modal').classList.add('open');
}
function closeThresholdModal() {
  document.getElementById('review-threshold-modal').classList.remove('open');
}

function showReviewCard() {
  const wrap=document.getElementById('review-card-wrap');
  const done=document.getElementById('review-done');
  if (reviewIdx>=reviewQueue.length) {
    wrap.style.display='none'; done.style.display='flex';
    updateReviewBadge(); return;
  }
  wrap.style.display='block'; done.style.display='none';
  const t=reviewQueue[reviewIdx];
  const total=reviewQueue.length;
  document.getElementById('review-progress').textContent=`${reviewIdx+1} de ${total}`;
  document.getElementById('review-prog-fill').style.width=`${(reviewIdx/Math.max(total,1)*100).toFixed(0)}%`;

  const selEl=document.getElementById('review-select');
  selEl.innerHTML=ALL_SUBS.map(s=>`<option value="${s}" ${s===t.sub?'selected':''}>${s}</option>`).join('');
  const catEl=document.getElementById('review-cat');
  if (catEl) catEl.value = t.cat||getCat(t.sub);

  document.getElementById('review-card').innerHTML=`
    <div class="rv-date">${t.date} · <span style="color:var(--muted);font-size:10px">${t.source||''}</span></div>
    <div class="rv-desc">${t.desc}</div>
    <div class="rv-val">${fmt(parseFloat(t.val)||0)}</div>
    <div class="rv-sub-row">
      <span class="rv-cat-badge ${t.cat==='Fixa'?'badge-blue':'badge-gold'}">${t.cat}</span>
      <span class="rv-sub">${t.sub}</span>
      ${t.pessoa?`<span class="rv-pessoa">${t.pessoa}</span>`:''}
    </div>`;
}

function approveCard() {
  if (reviewIdx>=reviewQueue.length) return;
  reviewed.approve(reviewQueue[reviewIdx].id);
  animateCard('right',()=>{ reviewIdx++; showReviewCard(); });
}

function onReviewSubChange() {
  const sub = document.getElementById('review-select').value;
  document.getElementById('review-cat').value = getCat(sub);
}

function rejectCard() {
  if (reviewIdx>=reviewQueue.length) return;
  const newSub = document.getElementById('review-select').value;
  const newCat = document.getElementById('review-cat').value;
  const t = reviewQueue[reviewIdx];
  STATE.txs = STATE.txs.map(tx=>tx.id===t.id?{...tx,sub:newSub,cat:newCat}:tx);
  cache.save(STATE.txs);
  if (isConfigured()) sheetsPost({action:'updateTx',tx:{...t,sub:newSub,cat:newCat}}).catch(()=>{});
  reviewed.reject(t.id,newSub);
  animateCard('left',()=>{ reviewIdx++; showReviewCard(); });
}

function skipCard() { reviewIdx++; showReviewCard(); }

function animateCard(dir,cb) {
  const card=document.getElementById('review-card');
  card.style.transition='transform .28s ease, opacity .28s ease';
  card.style.transform=dir==='right'?'translateX(110%) rotate(6deg)':'translateX(-110%) rotate(-6deg)';
  card.style.opacity='0';
  setTimeout(()=>{ card.style.transition='none'; card.style.transform=''; card.style.opacity='1'; cb(); },300);
}

function initSwipe() {
  const card=document.getElementById('review-card-wrap');
  if (!card) return;
  card.addEventListener('touchstart',e=>{ swipeStartX=e.touches[0].clientX; },{passive:true});
  card.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-swipeStartX;
    if (dx>70) approveCard(); else if (dx<-70) rejectCard();
  },{passive:true});
}

// ── DETAIL MODAL ──────────────────────────────────────
function openDetail(subName) {
  const txs=STATE.txs.filter(t=>t.sub===subName).sort((a,b)=>b.date.localeCompare(a.date));
  const total=txs.reduce((a,t)=>a+(parseFloat(t.val)||0),0);
  document.getElementById('detail-title').textContent=subName;
  document.getElementById('detail-total').textContent=fmt(total)+' · '+txs.length+' lançamentos';
  const byM=byMonthTotals(txs);
  document.getElementById('detail-chart').innerHTML=monthBarChart(byM, BUDGET[subName]);
  const rev=reviewed.load();
  document.getElementById('detail-list').innerHTML=txs.map(t=>{
    const st=rev[t.id];
    const dot=st==='ok'?'✓':st?'✎':'·';
    const dotC=st==='ok'?'#1E9E63':st?'#A67C2E':'#ccc';
    const catColor = getCat(t.sub)==='Fixa'?'var(--blue)':'var(--gold)';
    return `<div class="detail-row" onclick="openEditTx('${t.id}')" style="cursor:pointer">
      <div style="color:${dotC};font-size:14px;width:16px;flex-shrink:0;margin-top:1px">${dot}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.desc}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${t.date}
          <span style="color:${catColor};margin-left:4px">${getCat(t.sub)}</span>
          ${t.obs?' · '+t.obs:''}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;margin-left:8px">
        <div style="font-size:12px;color:var(--text);font-feature-settings:'tnum'">${fmt(parseFloat(t.val)||0)}</div>
        <div style="font-size:10px;color:var(--muted)">✎</div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('detail-modal').classList.add('open');
}
function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }



// ── RESUMO PNG ────────────────────────────────────────
async function gerarResumoPNG(mes) {
  const txs   = STATE.txs;
  const m     = parseInt(mes);
  const mPrev = m > 1 ? m - 1 : null;
  const ag    = aggregate(txs, m);
  const agPrev= mPrev ? aggregate(txs, mPrev) : null;
  const agAcum= aggregate(txs, null);
  const mName = MNAMES[m - 1];
  const mPrevName = mPrev ? MNAMES[mPrev-1] : null;

  const fixa  = ag.fixaM[String(m).padStart(2,'0')]||0;
  const vari  = ag.varM[String(m).padStart(2,'0')]||0;
  const top5  = Object.entries(ag.bySub)
    .filter(([k])=>k!=='NÃO CATEGORIZADO').sort((a,b)=>b[1]-a[1]).slice(0,5);
  const top5acum = Object.entries(agAcum.bySub)
    .filter(([k])=>k!=='NÃO CATEGORIZADO').sort((a,b)=>b[1]-a[1]).slice(0,5);
  const maxTop = top5[0]?.[1]||1;
  const maxAcum= top5acum[0]?.[1]||1;

  // Canvas size
  const W=800, H=1380;
  const canvas=document.createElement('canvas');
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d');

  // ── Background ──
  const bgGrad=ctx.createLinearGradient(0,0,0,H);
  bgGrad.addColorStop(0,'#1A2F5A'); bgGrad.addColorStop(0.08,'#2C6FAC');
  bgGrad.addColorStop(0.12,'#F0F4F8'); bgGrad.addColorStop(1,'#F0F4F8');
  ctx.fillStyle=bgGrad; ctx.fillRect(0,0,W,H);

  // ── Header ──
  ctx.fillStyle='rgba(255,255,255,.5)';
  ctx.font='500 12px DM Sans,sans-serif'; ctx.textAlign='left';
  ctx.fillText('PEDROZO · GESTÃO FINANCEIRA · 2026',48,46);
  ctx.fillStyle='#fff';
  ctx.font='300 40px Cormorant Garamond,serif';
  ctx.fillText(`Resumo ${mName} 2026`,48,90);

  const pad=48;
  const cardX=pad-8, cardW=W-cardX*2;

  // ── helper: white card ──
  function card(y,h,radius=16){
    ctx.fillStyle='#fff';
    ctx.shadowColor='rgba(28,47,90,.08)'; ctx.shadowBlur=16; ctx.shadowOffsetY=4;
    rr(ctx,cardX,y,cardW,h,radius); ctx.fill();
    ctx.shadowColor='transparent'; ctx.shadowBlur=0; ctx.shadowOffsetY=0;
  }

  // ── helper: section label ──
  function label(text,y){
    ctx.fillStyle='#7A95AA'; ctx.font='600 10px DM Sans,sans-serif';
    ctx.textAlign='left'; ctx.letterSpacing='0.12em';
    ctx.fillText(text.toUpperCase(),pad,y);
  }

  // ── helper: bar ──
  function bar(x,y,w,h,fill,track='#EBF1F7',r=4){
    ctx.fillStyle=track; rr(ctx,x,y,w,h,r); ctx.fill();
    ctx.fillStyle=fill;  rr(ctx,x,y,Math.max(w*fill.pct||fill,6),h,r); ctx.fill();
  }

  // ═══ SECTION 1 — MÊS ═══
  let y=118;
  label('Resumo do Mês',y); y+=20;
  card(y,300);

  // Total
  ctx.fillStyle='#7A95AA'; ctx.font='500 10px DM Sans,sans-serif'; ctx.textAlign='left';
  ctx.fillText('TOTAL GASTO',pad+8,y+24);
  ctx.fillStyle='#0D1B2A'; ctx.font='300 50px Cormorant Garamond,serif';
  ctx.fillText(fmt(ag.total),pad+8,y+68);

  // vs anterior
  if(agPrev&&agPrev.total>0){
    const diff=ag.total-agPrev.total, dp=((diff/agPrev.total)*100).toFixed(0);
    ctx.fillStyle=diff>0?'#C0392B':'#1A8C5B';
    ctx.font='400 12px DM Sans,sans-serif';
    ctx.fillText(`${diff>0?'▲':'▼'} ${Math.abs(dp)}% vs ${mPrevName} (${fmt(agPrev.total)})`,pad+8,y+88);
  }

  // Fixas / Variáveis bars
  const bw=cardW-32;
  const fixaPct=ag.total?fixa/ag.total:0, variPct=ag.total?vari/ag.total:0;
  let by=y+108;
  ctx.fillStyle='#EBF1F7'; rr(ctx,pad+8,by,bw,24,5); ctx.fill();
  ctx.fillStyle='#2C6FAC'; rr(ctx,pad+8,by,Math.max(bw*fixaPct,6),24,5); ctx.fill();
  ctx.fillStyle='#fff'; ctx.font='600 11px DM Sans,sans-serif';
  ctx.fillText(`Fixas  ${fmt(fixa)}  (${pctOf(fixa,ag.total)})`,pad+16,by+16); by+=34;

  ctx.fillStyle='#EBF1F7'; rr(ctx,pad+8,by,bw,24,5); ctx.fill();
  ctx.fillStyle='#A67C2E'; rr(ctx,pad+8,by,Math.max(bw*variPct,6),24,5); ctx.fill();
  ctx.fillStyle='#fff'; ctx.font='600 11px DM Sans,sans-serif';
  ctx.fillText(`Variáveis  ${fmt(vari)}  (${pctOf(vari,ag.total)})`,pad+16,by+16); by+=44;

  // Top 5 categorias
  ctx.fillStyle='#7A95AA'; ctx.font='500 10px DM Sans,sans-serif';
  ctx.fillText('TOP 5 CATEGORIAS',pad+8,by); by+=18;
  top5.forEach(([name,val],i)=>{
    const frac=val/maxTop;
    ctx.fillStyle='#EBF1F7'; rr(ctx,pad+8,by,bw,22,4); ctx.fill();
    ctx.fillStyle=COLORS[i]; rr(ctx,pad+8,by,Math.max(bw*frac,6),22,4); ctx.fill();
    ctx.fillStyle='#fff'; ctx.font='500 11px DM Sans,sans-serif'; ctx.textAlign='left';
    ctx.fillText(name,pad+16,by+15);
    ctx.textAlign='right';
    const bud=BUDGET[name];
    ctx.fillText(fmt(val)+(bud?`  /  ${fmtK(bud)}`:''),W-pad-16,by+15);
    ctx.textAlign='left'; by+=30;
  });

  // ═══ DIVIDER ═══
  y+=320; 
  ctx.strokeStyle='#D8E4EF'; ctx.lineWidth=1;
  ctx.setLineDash([6,4]);
  ctx.beginPath(); ctx.moveTo(pad,y); ctx.lineTo(W-pad,y); ctx.stroke();
  ctx.setLineDash([]);
  y+=20;

  // ═══ SECTION 2 — ACUMULADO ═══
  label('Acumulado 2026',y); y+=20;
  card(y,320);

  // Total acum
  const meses=[...new Set(txs.map(t=>t.date?.slice(5,7)).filter(Boolean))];
  ctx.fillStyle='#7A95AA'; ctx.font='500 10px DM Sans,sans-serif'; ctx.textAlign='left';
  ctx.fillText(`${meses.length} MESES REGISTRADOS`,pad+8,y+24);
  ctx.fillStyle='#0D1B2A'; ctx.font='300 50px Cormorant Garamond,serif';
  ctx.fillText(fmt(agAcum.total),pad+8,y+68);

  // Budget anual progress
  const budA=Object.values(BUDGET).reduce((a,b)=>a+b,0)*12;
  const budPct=Math.min(agAcum.total/budA,1);
  by=y+84;
  ctx.fillStyle='#7A95AA'; ctx.font='500 10px DM Sans,sans-serif';
  ctx.fillText(`Budget Anual: ${fmt(budA)}`,pad+8,by); by+=16;
  ctx.fillStyle='#EBF1F7'; rr(ctx,pad+8,by,bw,12,4); ctx.fill();
  ctx.fillStyle=budPct>0.8?'#C0392B':'#2C6FAC';
  rr(ctx,pad+8,by,Math.max(bw*budPct,6),12,4); ctx.fill();
  ctx.fillStyle='#0D1B2A'; ctx.font='500 11px DM Sans,sans-serif';
  ctx.textAlign='right';
  ctx.fillText(`${(budPct*100).toFixed(0)}% utilizado`,W-pad-8,by+10);
  ctx.textAlign='left'; by+=30;

  // Top 5 acumulado
  ctx.fillStyle='#7A95AA'; ctx.font='500 10px DM Sans,sans-serif';
  ctx.fillText('TOP 5 CATEGORIAS — ACUMULADO',pad+8,by); by+=18;
  top5acum.forEach(([name,val],i)=>{
    const frac=val/maxAcum;
    const bud=(BUDGET[name]||0)*meses.length;
    const over=bud&&val>bud;
    ctx.fillStyle='#EBF1F7'; rr(ctx,pad+8,by,bw,22,4); ctx.fill();
    ctx.fillStyle=over?'#C0392B':COLORS[i];
    rr(ctx,pad+8,by,Math.max(bw*frac,6),22,4); ctx.fill();
    ctx.fillStyle='#fff'; ctx.font='500 11px DM Sans,sans-serif'; ctx.textAlign='left';
    ctx.fillText(name,pad+16,by+15);
    ctx.textAlign='right';
    ctx.fillText(fmt(val)+(bud?`  /  ${fmtK(bud)}`:''),W-pad-16,by+15);
    ctx.textAlign='left'; by+=30;
  });

  // ═══ FOOTER ═══
  const now=new Date();
  ctx.fillStyle='rgba(10,30,70,.3)'; ctx.font='400 11px DM Sans,sans-serif';
  ctx.textAlign='center';
  ctx.fillText(`Gerado em ${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}`,W/2,H-20);

  // ── Share ──
  canvas.toBlob(blob=>{
    const fname=`pedrozo-resumo-${mName.toLowerCase()}-2026.png`;
    if(navigator.share&&navigator.canShare({files:[new File([blob],fname,{type:'image/png'})]})){
      navigator.share({files:[new File([blob],fname,{type:'image/png'})],title:`Resumo ${mName} 2026`});
    } else {
      const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=fname; a.click();
    }
  },'image/png');
}

function rr(ctx,x,y,w,h,r=8){
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}


// ── LANÇAMENTO MANUAL ─────────────────────────────────
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
  if (!date||!desc||!val) { showToast('Preencha data, descrição e valor','warn'); return; }
  const cat   = getCat(sub);
  const id    = `manual_${date.replace(/-/g,'')}_${desc.slice(0,8).replace(/\s/g,'')}_${val}`;
  const tx    = {id, date, desc, val, cat, sub, pessoa:'', obs, source:'manual'};
  const added = await syncTxs([tx]);
  showToast(added>0?`✓ Lançamento adicionado!`:'Lançamento já existe','ok');
  closeManual();
  refreshAll();
}

// ── EDIT TRANSACTION ─────────────────────────────────
function openEditTx(txId) {
  const t = STATE.txs.find(x => x.id === txId);
  if (!t) return;
  document.getElementById('edittx-id').value   = txId;
  document.getElementById('edittx-desc').textContent = t.desc;
  document.getElementById('edittx-date').textContent = t.date;
  document.getElementById('edittx-val').textContent  = fmt(parseFloat(t.val)||0);

  const subEl = document.getElementById('edittx-sub');
  subEl.innerHTML = ALL_SUBS.map(s=>`<option value="${s}" ${s===t.sub?'selected':''}>${s}</option>`).join('');

  const catEl = document.getElementById('edittx-cat');
  catEl.value = getCat(t.sub); // auto from map, but allow override

  document.getElementById('edittx-modal').classList.add('open');
}

// Auto-update cat when sub changes
function onEditSubChange() {
  const sub = document.getElementById('edittx-sub').value;
  document.getElementById('edittx-cat').value = getCat(sub);
}

async function saveEditTx() {
  const txId  = document.getElementById('edittx-id').value;
  const newSub = document.getElementById('edittx-sub').value;
  const newCat = document.getElementById('edittx-cat').value;

  // Update CAT_MAP override for this session
  // (permanent fix: update the tx itself)
  STATE.txs = STATE.txs.map(tx => tx.id===txId ? {...tx, sub:newSub, cat:newCat} : tx);
  cache.save(STATE.txs);

  if (isConfigured()) {
    const t = STATE.txs.find(x=>x.id===txId);
    sheetsPost({action:'updateTx', tx:t}).catch(()=>{});
  }
  reviewed.approve(txId);

  closeEditTx();
  // Refresh detail modal if open
  const detailTitle = document.getElementById('detail-title').textContent;
  if (detailTitle) openDetail(detailTitle);
  refreshAll();
  showToast('Lançamento atualizado ✓', 'ok');
}

function closeEditTx() {
  document.getElementById('edittx-modal').classList.remove('open');
}

// ── IMPORT ────────────────────────────────────────────
let pendingTxs=[];
function renderImport() {
  document.getElementById('import-log').innerHTML='';
  document.getElementById('import-count').textContent='';
  document.getElementById('btn-confirm').disabled=true;
  pendingTxs=[];
}

function parseCSV(text,type) {
  const lines=text.split('\n'), results=[], TODAY=new Date(), DATE_RE=/^\d{2}\/\d{2}\/\d{4}$/;
  let futureLine=lines.findIndex(l=>/futuros/i.test(l)); if (futureLine===-1) futureLine=Infinity;
  const sep=lines.find(l=>l.includes(';'))?';':',';
  lines.forEach((line,i)=>{
    if (i>=futureLine) return;
    const parts=line.trim().split(sep); if (parts.length<4) return;
    let dateStr,desc,valStr;
    if (type==='card_unicred') { dateStr=parts[0].trim(); desc=parts[2].trim(); valStr=parts[3].trim(); }
    else { const o=parts[0].trim()===''?1:0; dateStr=parts[o].trim(); desc=parts[o+1].trim(); valStr=parts[o+3].trim(); }
    if (!DATE_RE.test(dateStr)) return;
    const [d,m,y]=dateStr.split('/'), date=new Date(`${y}-${m}-${d}`);
    if (date>TODAY) return;
    const rawVal=parseFloat(valStr.replace(',','.')); if (isNaN(rawVal)||rawVal===0) return;
    if (type==='card_unicred'&&rawVal<0) return;
    if (type!=='card_unicred'&&rawVal>0) return;
    const val=Math.abs(rawVal);
    const {cat,sub,pessoa}=categorize(desc,type==='card_unicred'?'card':type);
    if (!cat) return;
    results.push({id:`${y}${m}${d}_${desc.slice(0,10).replace(/\s/g,'')}_${val}`,
      date:`${y}-${m}-${d}`,desc,val,cat,sub,pessoa:pessoa||'',obs:'',source:type});
  });
  return results;
}

// Expand parcelas: if desc has "XX/YY", create future installments
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

function handleFiles(files) {
  pendingTxs=[]; const logEl=document.getElementById('import-log'); logEl.innerHTML='';
  document.getElementById('import-count').textContent='Lendo arquivos...';
  document.getElementById('btn-confirm').disabled=true;
  let processed=0;
  Array.from(files).forEach(file=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const fname=file.name.toLowerCase();
      let type='card';
      if (fname.includes('unicred')&&fname.includes('fatura')) type='card_unicred';
      else if (fname.includes('unicred')||fname.includes('extrato-')) type='unicred';
      else if (fname.includes('itau')||fname.includes('extrato_conta')) type='itau';
      pendingTxs.push(...expandParcelas(parseCSV(e.target.result,type)));
      if (++processed===files.length) showImportPreview();
    };
    reader.readAsText(file,'latin-1');
  });
}

function showImportPreview() {
  const existing = cache.load();
  const {fresh, dupes, exact} = detectDuplicates(pendingTxs, existing);
  const logEl = document.getElementById('import-log');

  let html='';

  if (fresh.length>0) {
    html+=`<div class="import-section-label import-ok">✓ ${fresh.length} novos — serão adicionados</div>`;
    html+=fresh.map(t=>`<div class="log-item">
      <div class="log-dot" style="background:${t.sub==='NÃO CATEGORIZADO'?'#C0392B':'#1A8C5B'}"></div>
      <div style="flex:1"><div class="log-desc">${t.desc.slice(0,40)}</div>
      <div class="log-sub">${t.date} · ${t.sub}</div></div>
      <div class="log-val">${fmt(t.val)}</div></div>`).join('');
  }

  if (dupes.length>0) {
    html+=`<div class="import-section-label import-warn">⚠ ${dupes.length} possíveis duplicatas — verifique</div>`;
    html+=dupes.map(({tx,similar})=>`<div class="log-item" style="border-left:3px solid #E8A020">
      <div class="log-dot" style="background:#E8A020"></div>
      <div style="flex:1">
        <div class="log-desc">${tx.desc.slice(0,38)}</div>
        <div class="log-sub">${tx.date} · similar a: ${similar.date} ${similar.desc.slice(0,20)}</div>
      </div>
      <div style="text-align:right">
        <div class="log-val">${fmt(tx.val)}</div>
        <label style="font-size:9px;color:var(--muted);display:flex;align-items:center;gap:4px;cursor:pointer;margin-top:2px">
          <input type="checkbox" class="dupe-include" data-id="${tx.id}" style="width:12px;height:12px"> incluir
        </label>
      </div></div>`).join('');
  }

  if (exact.length>0) {
    html+=`<div class="import-section-label import-muted">✗ ${exact.length} já existentes — ignorados</div>`;
  }

  logEl.innerHTML=html;
  document.getElementById('import-count').textContent=
    `${fresh.length} novos · ${dupes.length} a verificar · ${exact.length} ignorados`;
  document.getElementById('btn-confirm').disabled=(fresh.length===0&&dupes.length===0);
}

async function confirmImport() {
  const btn=document.getElementById('btn-confirm');
  btn.disabled=true; btn.textContent='Salvando...';

  // Get checked dupes
  const checkedDupes=[];
  document.querySelectorAll('.dupe-include:checked').forEach(cb=>{
    const tx=pendingTxs.find(t=>t.id===cb.dataset.id);
    if(tx) checkedDupes.push(tx);
  });

  const existing=cache.load();
  const {fresh}=detectDuplicates(pendingTxs,existing);
  const toAdd=[...fresh,...checkedDupes];

  const all=cache.load(); const keys=new Set(all.map(t=>t.id));
  const realFresh=toAdd.filter(t=>!keys.has(t.id));
  cache.save([...all,...realFresh]); STATE.txs=cache.load();

  let added=realFresh.length;
  if(isConfigured()&&realFresh.length>0){
    try { await sheetsPost({action:'addTxs',txs:realFresh}); }
    catch(e){ STATE.error='Salvo localmente'; }
  }

  showToast(`✓ ${added} novos lançamentos adicionados!`,'ok');
  document.getElementById('import-count').textContent=`✓ ${added} adicionados`;
  btn.textContent='Confirmar Importação'; pendingTxs=[];
  refreshAll();
}

// ── HOME PIZZA ────────────────────────────────────────
function renderHomePizza(txs) {
  const ag = aggregate(txs, null); // all months
  const top8 = Object.entries(ag.bySub)
    .filter(([k]) => k !== 'NÃO CATEGORIZADO')
    .sort((a,b) => b[1]-a[1]).slice(0, 8);
  const others = Object.entries(ag.bySub)
    .filter(([k]) => k !== 'NÃO CATEGORIZADO')
    .sort((a,b) => b[1]-a[1]).slice(8)
    .reduce((s,[,v]) => s+v, 0);
  const segs = top8.map(([label,v],i) => ({label, v, c:COLORS[i]}));
  if (others > 0) segs.push({label:'Outros', v:others, c:'#C8D8E8'});
  const total = segs.reduce((s,x)=>s+x.v, 0);

  const el = document.getElementById('home-pizza');
  if (!el) return;
  el.innerHTML = `<div class="pizza-wrap">
    ${donutSVG(segs, 72, 72, 58, 28)}
    <div style="position:absolute;top:50%;left:72px;transform:translate(-50%,-50%);text-align:center;pointer-events:none">
      <div style="font-size:9px;color:var(--muted);letter-spacing:.08em">TOTAL</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:400;color:var(--text)">${fmtK(total)}</div>
    </div>
    <div class="pizza-legend">
      ${segs.map(s=>`<div class="pizza-leg-row">
        <div class="pizza-leg-dot" style="background:${s.c}"></div>
        <div class="pizza-leg-name">${s.label}</div>
        <div class="pizza-leg-val">${fmtK(s.v)}</div>
        <div class="pizza-leg-pct">${pctOf(s.v,total)}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ── DESVIOS ───────────────────────────────────────────
  const txs = STATE.txs;
  const months = [...new Set(txs.map(t=>t.date?.slice(5,7)).filter(Boolean))].sort();
  const lastM  = months[months.length-1];
  const prevM  = months[months.length-2];
  if (!lastM) { document.getElementById('desvios-content').innerHTML='<div style="padding:24px;text-align:center;color:var(--muted)">Sem dados</div>'; return; }

  const agLast = aggregate(txs, parseInt(lastM));
  const agPrev = prevM ? aggregate(txs, parseInt(prevM)) : null;
  const mName  = MNAMES[parseInt(lastM)-1];
  const mPrev  = prevM ? MNAMES[parseInt(prevM)-1] : null;

  let html = '';

  // ── 1. Acima do budget ──
  const acimaBudget = Object.entries(agLast.bySub)
    .filter(([k,v]) => BUDGET[k] && v > BUDGET[k])
    .sort((a,b) => (b[1]/BUDGET[b[0]]) - (a[1]/BUDGET[a[0]]));

  html += `<div class="dev-section-title">🔴 Acima do Budget — ${mName}</div>`;
  if (acimaBudget.length === 0) {
    html += `<div class="dev-empty">Nenhuma categoria acima do budget em ${mName}</div>`;
  } else {
    html += acimaBudget.map(([name,val]) => {
      const bud = BUDGET[name];
      const excesso = val - bud;
      const pct = ((val/bud)*100).toFixed(0);
      const barPct = Math.min((val/bud)*100, 200);
      return `<div class="dev-card dev-danger" onclick="openDetail('${name}')">
        <div class="dev-card-header">
          <div class="dev-cat">${name}</div>
          <div class="dev-badge-over">${pct}% do budget</div>
        </div>
        <div class="dev-nums">
          <span class="dev-val-over">${fmt(val)}</span>
          <span class="dev-sep">vs budget</span>
          <span class="dev-bud">${fmt(bud)}</span>
        </div>
        <div class="dev-bar-track">
          <div class="dev-bar-bud"></div>
          <div class="dev-bar-fill dev-bar-over" style="width:${Math.min(barPct,100).toFixed(1)}%"></div>
        </div>
        <div class="dev-excesso">Excesso: +${fmt(excesso)}</div>
      </div>`;
    }).join('');
  }

  // ── 2. Maior crescimento vs mês anterior ──
  if (agPrev) {
    const crescimento = Object.entries(agLast.bySub)
      .filter(([k]) => k !== 'NÃO CATEGORIZADO' && agPrev.bySub[k])
      .map(([k,v]) => {
        const prev = agPrev.bySub[k]||0;
        const delta = v - prev;
        const deltaPct = prev ? ((delta/prev)*100) : 0;
        return [k, v, prev, delta, deltaPct];
      })
      .filter(([,,,delta]) => delta > 0)
      .sort((a,b) => b[4]-a[4])
      .slice(0, 5);

    html += `<div class="dev-section-title">📈 Maior Crescimento — ${mPrev} → ${mName}</div>`;
    if (crescimento.length === 0) {
      html += `<div class="dev-empty">Sem crescimentos significativos</div>`;
    } else {
      html += crescimento.map(([name,val,prev,delta,deltaPct]) =>
        `<div class="dev-card dev-warn" onclick="openDetail('${name}')">
          <div class="dev-card-header">
            <div class="dev-cat">${name}</div>
            <div class="dev-badge-warn">+${deltaPct.toFixed(0)}%</div>
          </div>
          <div class="dev-nums">
            <span style="color:var(--muted);font-size:11px">${mPrev}: ${fmt(prev)}</span>
            <span class="dev-sep">→</span>
            <span class="dev-val-over">${fmt(val)}</span>
          </div>
          <div class="dev-excesso" style="color:var(--red)">+${fmt(delta)} a mais</div>
        </div>`
      ).join('');
    }
  }

  // ── 3. Top 3 maiores desvios absolutos ──
  const top3abs = Object.entries(agLast.bySub)
    .filter(([k]) => BUDGET[k])
    .map(([k,v]) => [k, v, v - BUDGET[k]])
    .filter(([,,d]) => d > 0)
    .sort((a,b) => b[2]-a[2])
    .slice(0, 3);

  html += `<div class="dev-section-title">💰 Top 3 Desvios em Valor — ${mName}</div>`;
  if (top3abs.length === 0) {
    html += `<div class="dev-empty">Sem desvios em valor absoluto</div>`;
  } else {
    html += top3abs.map(([name,val,delta],i) =>
      `<div class="dev-card" onclick="openDetail('${name}')">
        <div class="dev-rank">#${i+1}</div>
        <div style="flex:1">
          <div class="dev-cat">${name}</div>
          <div class="dev-nums" style="margin-top:4px">
            <span class="dev-val-over">${fmt(val)}</span>
            <span class="dev-sep">budget</span>
            <span class="dev-bud">${fmt(BUDGET[name])}</span>
          </div>
        </div>
        <div class="dev-delta">+${fmt(delta)}</div>
      </div>`
    ).join('');
  }

  document.getElementById('desvios-content').innerHTML = html;
}

// ── NAV ───────────────────────────────────────────────
const SCREENS=['home','despesas','comparativo','patrimonio','revisar','import'];
function showScreen(id) {
  SCREENS.forEach(s=>{
    document.getElementById('screen-'+s).classList.toggle('active',s===id);
    const n=document.getElementById('nav-'+s); if(n) n.classList.toggle('active',s===id);
  });
  if (id==='import') renderImport();
  if (id==='revisar') { renderRevisar(); setTimeout(initSwipe,100); }
  document.querySelector('.scroll-area').scrollTop=0;
  refreshAll();
}

// ── SEED ──────────────────────────────────────────────
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

// ── PIN ───────────────────────────────────────────────
const PIN_HASH = '3003'; // PIN: 3003
const SESSION_KEY = 'pedrozo_unlocked';
let pinBuffer = '';

function checkPinSession() {
  // Session valid for 8 hours
  const t = parseInt(sessionStorage.getItem(SESSION_KEY)||'0');
  return Date.now() - t < 8 * 60 * 60 * 1000;
}

function unlockApp() {
  sessionStorage.setItem(SESSION_KEY, Date.now().toString());
  document.getElementById('pin-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  loadData();
}

function pinKey(digit) {
  if (pinBuffer.length >= 4) return;
  pinBuffer += digit;
  updatePinDots();
  if (pinBuffer.length === 4) {
    setTimeout(() => {
      if (pinBuffer === PIN_HASH) {
        unlockApp();
      } else {
        pinBuffer = '';
        updatePinDots();
        const err = document.getElementById('pin-error');
        err.textContent = 'PIN incorreto';
        setTimeout(() => { err.textContent = ''; }, 1500);
        // Shake dots
        document.getElementById('pin-dots').classList.add('shake');
        setTimeout(() => document.getElementById('pin-dots').classList.remove('shake'), 400);
      }
    }, 120);
  }
}

function pinDel() {
  pinBuffer = pinBuffer.slice(0, -1);
  updatePinDots();
}

function updatePinDots() {
  for (let i = 0; i < 4; i++) {
    document.getElementById('pd'+i).classList.toggle('filled', i < pinBuffer.length);
  }
}

// ── BOOT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
  const zone=document.getElementById('drop-zone'), fi=document.getElementById('file-input');
  zone.addEventListener('click',()=>fi.click());
  fi.addEventListener('change',e=>handleFiles(e.target.files));
  zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('drag');});
  zone.addEventListener('dragleave',()=>zone.classList.remove('drag'));
  zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('drag');handleFiles(e.dataTransfer.files);});
  document.getElementById('detail-modal').addEventListener('click',e=>{
    if (e.target===document.getElementById('detail-modal')) closeDetail();
  });
  document.getElementById('edittx-modal').addEventListener('click',e=>{
    if (e.target===document.getElementById('edittx-modal')) closeEditTx();
  });
  document.getElementById('review-threshold-modal').addEventListener('click',e=>{
    if (e.target===document.getElementById('review-threshold-modal')) closeThresholdModal();
  });
  // PIN check
  if (checkPinSession()) {
    unlockApp();
  }
  // else PIN screen stays visible
});
