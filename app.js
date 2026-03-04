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

async function syncTxs(newTxs) {
  const all = cache.load(); const keys = new Set(all.map(t=>t.id));
  const fresh = newTxs.filter(t=>!keys.has(t.id));
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
    if (t.cat==='Fixa') fixaM[m]=(fixaM[m]||0)+(parseFloat(t.val)||0);
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

  document.getElementById('home-kpis').innerHTML=[
    {label:'Jan 2026',val:fmtK(jan.total),cls:'red',foot:'Receita R$ 30k'},
    {label:'Fev 2026',val:fmtK(fev.total),cls:'red',foot:'Receita R$ 30k'},
    {label:'Acumulado',val:fmtK(acum),cls:'gold',foot:'2 meses · 2026'},
    {label:'Patrimônio',val:'R$ 27,4M',cls:'green',foot:'Posição Fev 2026'},
  ].map((k,i)=>`<div class="kpi-card ${i===0?'highlight':''}">
    <div class="kpi-label">${k.label}</div>
    <div class="kpi-val ${k.cls}">${k.val}</div>
    <div class="kpi-footer">${k.foot}</div>
  </div>`).join('');

  // Monthly evolution bar chart
  const byM=byMonthTotals(txs);
  document.getElementById('home-evolucao').innerHTML=monthBarChart(byM,null);

  // Top budget progress (annual)
  const allSubs={};
  txs.forEach(t=>{ if(t.sub&&t.sub!=='nan') allSubs[t.sub]=(allSubs[t.sub]||0)+(parseFloat(t.val)||0); });
  const topBudget=Object.entries(BUDGET).sort((a,b)=>b[1]-a[1]).slice(0,7);
  document.getElementById('home-budget').innerHTML=topBudget.map(([name,bud])=>{
    const spent=allSubs[name]||0, budA=bud*12, pct=Math.min((spent/budA)*100,100);
    const over=spent>budA*0.42; // >5 months pace
    return `<div class="budget-row" onclick="openDetail('${name}')">
      <div class="budget-name">${name}</div>
      <div class="budget-track"><div class="budget-fill ${over?'warn':''}" style="width:${pct.toFixed(1)}%"></div></div>
      <div class="budget-nums">
        <span class="${over?'prog-over':'prog-ok'}">${fmtK(spent)}</span>
        <span class="budget-of">de ${fmtK(budA)}</span>
      </div>
    </div>`;
  }).join('');

  // Alerts
  const alerts=[];
  if (pending>0) alerts.push({type:'warn',title:`${pending} lançamentos para revisar`,body:'Toque em Revisar para aprovar ou corrigir categorias'});
  if ((fev.bySub['COMPRAS P']||0)>10000) alerts.push({type:'danger',title:'Compras P elevadas em Fev',body:`${fmt(fev.bySub['COMPRAS P']||0)} — ${Math.round((fev.bySub['COMPRAS P']||0)/BUDGET['COMPRAS P'])}x o budget mensal`});
  if ((fev.bySub['VIAGEM']||0)>20000) alerts.push({type:'warn',title:'Viagem acima do budget em Fev',body:`${fmt(fev.bySub['VIAGEM']||0)} vs budget ${fmt(BUDGET['VIAGEM'])}`});
  alerts.push({type:'ok',title:'Patrimônio sólido',body:'R$ 27,4M — cobertura estimada de ~68 meses'});
  document.getElementById('home-alerts').innerHTML=alerts.map(a=>`
    <div class="alert-item ${a.type}">
      <div class="alert-title">${a.title}</div>
      <div class="alert-body">${a.body}</div>
    </div>`).join('');
}

// ── DESPESAS ──────────────────────────────────────────
let activeMonth='01';
function renderDespesas() {
  const txs=STATE.txs, m=parseInt(activeMonth), ag=aggregate(txs,m), total=ag.total;
  document.getElementById('month-pills').innerHTML=['01','02','03','04','05','06','07','08','09','10','11','12']
    .map(mo=>`<div class="pill ${mo===activeMonth?'active':''}" onclick="setMonth('${mo}')">${MNAMES[parseInt(mo)-1]}</div>`).join('');

  const sorted=Object.entries(ag.bySub).filter(([k])=>k!=='NÃO CATEGORIZADO').sort((a,b)=>b[1]-a[1]);
  const maxVal=sorted[0]?.[1]||1;
  document.getElementById('desp-table').innerHTML=sorted.length
    ? sorted.map(([name,val],i)=>{
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

  const top6=sorted.slice(0,6), others=sorted.slice(6).reduce((a,[,v])=>a+v,0);
  const segs=top6.map(([label,v],i)=>({label,v,c:COLORS[i]}));
  if (others>0) segs.push({label:'Outros',v:others,c:'#D0D0E0'});
  document.getElementById('desp-donut').innerHTML=segs.length
    ? donutSVG(segs)+`<div class="donut-legend-v">${segs.slice(0,5).map(s=>`
        <div class="donut-leg-item"><div class="donut-leg-dot" style="background:${s.c}"></div>
        <div class="donut-leg-name">${s.label}</div><div class="donut-leg-val">${fmtK(s.v)}</div>
        <div class="donut-leg-pct">${pctOf(s.v,total)}</div></div>`).join('')}</div>`:'' ;

  const fixa=ag.fixaM[activeMonth]||0, vari=ag.varM[activeMonth]||0;
  document.getElementById('desp-kpi-total').textContent=fmt(total);
  document.getElementById('desp-kpi-fixa').textContent=fmt(fixa)+' ('+pctOf(fixa,total)+')';
  document.getElementById('desp-kpi-var').textContent=fmt(vari)+' ('+pctOf(vari,total)+')';
}
function setMonth(m) { activeMonth=m; renderDespesas(); }

// ── COMPARATIVO ───────────────────────────────────────
function renderComparativo() {
  const txs=STATE.txs, jan=aggregate(txs,1), fev=aggregate(txs,2);
  const allKeys=new Set([...Object.keys(jan.bySub),...Object.keys(fev.bySub)]);
  allKeys.delete('NÃO CATEGORIZADO');
  const sorted=[...allKeys].sort((a,b)=>(jan.bySub[b]||0)-(jan.bySub[a]||0));

  // Monthly bar chart
  const byM=byMonthTotals(txs);
  document.getElementById('cmp-barchart').innerHTML=monthBarChart(byM,null);

  document.getElementById('cmp-rows').innerHTML=`
    <div class="cmp-row cmp-hdr">
      <div class="cmp-name">Categoria</div><div class="cmp-j">Jan</div><div class="cmp-f">Fev</div><div class="cmp-d">Δ</div>
    </div>`+sorted.map(k=>{
      const j=jan.bySub[k]||0,f=fev.bySub[k]||0,d=f-j;
      const dp=j?((d/j)*100).toFixed(0):null, cls=d>0?'cmp-up':'cmp-dn';
      return `<div class="cmp-row" onclick="openDetail('${k}')">
        <div class="cmp-name">${k}</div>
        <div class="cmp-j">${j?fmtK(j):'—'}</div>
        <div class="cmp-f">${f?fmtK(f):'—'}</div>
        <div class="cmp-d ${j&&f?cls:''}">${j&&f?(d>0?'↑':'↓')+Math.abs(dp)+'%':'—'}</div>
      </div>`;
    }).join('');

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

// ── PATRIMÔNIO ────────────────────────────────────────
function renderPatrimonio() {
  const patLiq={'Domazzi Dividendos':3600000,'Dom Holding':4000000,'BTG Aplicações':867215,
    'CDI':335584,'Adler Mont Blanc':338635,'XP Bolsa Americana':136445,'Avenue Dolarizado':202023};
  const patImob={'Ed. Trompowsky Apto':4000000,'Domhaus':7000000,'Cotas Domazzi':4900000,'Carros':2000000};
  const tL=Object.values(patLiq).reduce((a,b)=>a+b,0);
  const tI=Object.values(patImob).reduce((a,b)=>a+b,0);
  const tP=tL+tI;
  const segs=[{label:'Líquido',v:tL,c:'#1E9E63'},{label:'Imobilizado',v:tI,c:'#2F6FE0'}];
  document.getElementById('pat-donut').innerHTML=`<div class="donut-row">${donutSVG(segs)}
    <div class="donut-legend-v">${segs.map(s=>`
      <div class="donut-leg-item"><div class="donut-leg-dot" style="background:${s.c}"></div>
      <div class="donut-leg-name">${s.label}</div><div class="donut-leg-val">${fmtK(s.v)}</div>
      <div class="donut-leg-pct">${pctOf(s.v,tP)}</div></div>`).join('')}</div></div>`;
  document.getElementById('pat-items-liq').innerHTML=Object.entries(patLiq).map(([n,v])=>`
    <div class="pat-item"><div class="pat-item-dot" style="background:#1E9E63"></div>
    <div class="pat-item-name">${n}</div><div class="pat-item-val">${fmtK(v)}</div>
    <div class="pat-item-pct">${pctOf(v,tP)}</div></div>`).join('');
  document.getElementById('pat-items-imob').innerHTML=Object.entries(patImob).map(([n,v])=>`
    <div class="pat-item"><div class="pat-item-dot" style="background:#2F6FE0"></div>
    <div class="pat-item-name">${n}</div><div class="pat-item-val">${fmtK(v)}</div>
    <div class="pat-item-pct">${pctOf(v,tP)}</div></div>`).join('');
}

// ── REVISAR ───────────────────────────────────────────
let reviewQueue=[], reviewIdx=0, swipeStartX=0;

function renderRevisar() {
  const rev=reviewed.load();
  reviewQueue=STATE.txs.filter(t=>!rev[t.id]).sort((a,b)=>a.date.localeCompare(b.date));
  reviewIdx=0;
  showReviewCard();
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

function rejectCard() {
  if (reviewIdx>=reviewQueue.length) return;
  const newSub=document.getElementById('review-select').value;
  const t=reviewQueue[reviewIdx];
  STATE.txs=STATE.txs.map(tx=>tx.id===t.id?{...tx,sub:newSub}:tx);
  cache.save(STATE.txs);
  if (isConfigured()) sheetsPost({action:'updateTx',tx:{...t,sub:newSub}}).catch(()=>{});
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
    return `<div class="detail-row">
      <div style="color:${dotC};font-size:14px;width:16px;flex-shrink:0;margin-top:1px">${dot}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.desc}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px">${t.date}${t.obs?' · '+t.obs:''}</div>
      </div>
      <div style="font-size:12px;color:var(--text);font-feature-settings:'tnum';flex-shrink:0;margin-left:8px">${fmt(parseFloat(t.val)||0)}</div>
    </div>`;
  }).join('');
  document.getElementById('detail-modal').classList.add('open');
}
function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }

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

function handleFiles(files) {
  pendingTxs=[]; const logEl=document.getElementById('import-log'); logEl.innerHTML='';
  let processed=0;
  Array.from(files).forEach(file=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const fname=file.name.toLowerCase();
      let type='card';
      if (fname.includes('unicred')&&fname.includes('fatura')) type='card_unicred';
      else if (fname.includes('unicred')||fname.includes('extrato-')) type='unicred';
      else if (fname.includes('itau')||fname.includes('extrato_conta')) type='itau';
      pendingTxs.push(...parseCSV(e.target.result,type));
      if (++processed===files.length) {
        logEl.innerHTML=pendingTxs.map(t=>`
          <div class="log-item">
            <div class="log-dot" style="background:${t.sub==='NÃO CATEGORIZADO'?'#D63E50':'#1E9E63'}"></div>
            <div style="flex:1"><div class="log-desc">${t.desc.slice(0,42)}</div><div class="log-sub">${t.sub}</div></div>
            <div class="log-val">${fmt(t.val)}</div>
          </div>`).join('');
        document.getElementById('import-count').textContent=`${pendingTxs.length} lançamentos detectados`;
        document.getElementById('btn-confirm').disabled=pendingTxs.length===0;
      }
    };
    reader.readAsText(file,'latin-1');
  });
}

async function confirmImport() {
  const btn=document.getElementById('btn-confirm');
  btn.disabled=true; btn.textContent='Salvando...';
  const added=await syncTxs(pendingTxs);
  showToast(`✓ ${added} novos lançamentos!`,'ok');
  document.getElementById('import-count').textContent=`✓ ${added} adicionados — ${pendingTxs.length-added} já existiam`;
  btn.textContent='Confirmar Importação'; pendingTxs=[];
  refreshAll();
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
    {id:'jan01_cond',date:'2026-01-02',desc:'PAG TIT INT 104',val:3718.59,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {id:'jan02_celesc',date:'2026-01-02',desc:'DA  CELESC',val:858.89,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {id:'jan03_pat',date:'2026-01-02',desc:'PIX TRANSF PATRICI',val:3185.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan04_fra',date:'2026-01-02',desc:'PIX TRANSF Francis',val:3130.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan05_cat',date:'2026-01-05',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {id:'jan06_iof',date:'2026-01-05',desc:'IOF',val:81.49,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'jan07_jur',date:'2026-01-05',desc:'JUROS LIMITE',val:255.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'jan08_vit',date:'2026-01-05',desc:'PIX QRS VITOR COELH',val:6800.00,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'itau'},
    {id:'jan09_bmw1',date:'2026-01-08',desc:'PAG TIT INT 237',val:3094.61,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {id:'jan10_seg',date:'2026-01-12',desc:'PAG TIT INT 338',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {id:'jan11_cla',date:'2026-01-15',desc:'DA  CLARO',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan12_eso',date:'2026-01-20',desc:'INT DOC ARREC E-SOCI',val:982.23,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan13_ipt',date:'2026-01-20',desc:'PAG TIT INT 104 IPTU',val:7862.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'IPTU',source:'itau'},
    {id:'jan14_ted',date:'2026-01-22',desc:'TED D INT6d00ad26',val:2000.00,cat:'Variáveis',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan15_tim',date:'2026-01-26',desc:'DA  TIM CELU',val:132.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan16_bmw2',date:'2026-01-28',desc:'PAG TIT INT 237',val:13977.49,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {id:'jan17_pre',date:'2026-01-15',desc:'DEB MENSALID QUANTA PREVID',val:2113.18,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'',source:'unicred'},
    {id:'jan18_apt',date:'2026-01-30',desc:'LIQUIDACAO PARCELA FINANCIAMENTO',val:7651.78,cat:'Fixa',sub:'APTO',pessoa:'',obs:'Apto',source:'unicred'},
    {id:'jan19_jrc',date:'2026-01-30',desc:'JUROS CHEQUE ESPECIAL',val:665.65,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'unicred'},
    {id:'jan20_jeh',date:'2026-01-16',desc:'PIX JEHNNIFER DE MEDEIROS',val:11250.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Reforma quarto',source:'unicred'},
    {id:'jan21_via',date:'2026-01-15',desc:'Viagem Janeiro',val:35919.69,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'jan22_sup',date:'2026-01-15',desc:'Supermercados',val:11033.55,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'jan23_cp',date:'2026-01-10',desc:'Compras P Jan',val:19593.33,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'card'},
    {id:'jan24_cj',date:'2026-01-12',desc:'Compras J Jan',val:5486.32,cat:'Variáveis',sub:'COMPRAS J',pessoa:'J',obs:'',source:'card'},
    {id:'jan25_far',date:'2026-01-18',desc:'Farmácia Jan',val:3694.89,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {id:'jan26_esp',date:'2026-01-20',desc:'Esporte Jan',val:1763.68,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {id:'jan27_ali',date:'2026-01-22',desc:'Alimentação Jan',val:1405.13,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'jan28_bel',date:'2026-01-25',desc:'Beleza Jan',val:1487.01,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'card'},
    {id:'jan29_sau',date:'2026-01-15',desc:'Saúde Jan',val:2198.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'card'},
    {id:'jan30_mor',date:'2026-01-08',desc:'Moradia Jan',val:3685.67,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'card'},
    {id:'jan31_tra',date:'2026-01-20',desc:'Transporte Jan',val:3898.54,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {id:'jan32_laz',date:'2026-01-20',desc:'Lazer Jan',val:919.90,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'card'},
    {id:'jan33_cat2',date:'2026-01-05',desc:'Catarina escola',val:4087.35,cat:'Variáveis',sub:'CATARINA',pessoa:'',obs:'',source:'card'},
    {id:'jan34_ric',date:'2026-01-03',desc:'Ricardo Jan',val:3000.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'',source:'card'},
    {id:'jan35_pre2',date:'2026-01-10',desc:'Presentes Jan',val:837.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'card'},
    {id:'jan36_lav',date:'2026-01-08',desc:'Lavanderia Jan',val:1000.00,cat:'Variáveis',sub:'LAVANDERIA',pessoa:'',obs:'',source:'card'},
    {id:'jan37_ccr',date:'2026-01-08',desc:'Compras CR Jan',val:2641.03,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'card'},
    {id:'jan38_emp',date:'2026-01-02',desc:'Empórios',val:19.00,cat:'Variáveis',sub:'EMPÓRIOS',pessoa:'',obs:'',source:'card'},
    {id:'jan39_nar',date:'2026-01-21',desc:'PIX WHATS NARA EL',val:126.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev01_con',date:'2026-02-02',desc:'PAG TIT INT 104',val:3271.71,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {id:'fev02_cel',date:'2026-02-02',desc:'DA  CELESC',val:1421.07,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {id:'fev03_pat',date:'2026-02-02',desc:'PIX TRANSF PATRICI',val:3200.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev04_nar',date:'2026-02-02',desc:'PIX TRANSF NARA EL',val:1506.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev05_cat',date:'2026-02-03',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {id:'fev06_iof',date:'2026-02-03',desc:'IOF',val:298.00,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'fev07_jur',date:'2026-02-05',desc:'JUROS LIMITE',val:1288.70,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'fev08_bet',date:'2026-02-06',desc:'PIX TRANSF BETINA',val:7333.32,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'itau'},
    {id:'fev09_seg',date:'2026-02-11',desc:'PAG TIT INT 328',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {id:'fev10_cla',date:'2026-02-18',desc:'DA  CLARO',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev11_eso',date:'2026-02-20',desc:'INT DOC ARREC E-SOCI',val:700.68,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev12_tim',date:'2026-02-25',desc:'DA  TIM CELU',val:142.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev13_pre',date:'2026-02-18',desc:'DEB MENSALID QUANTA PREVID',val:2113.18,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'',source:'unicred'},
    {id:'fev14_bk1',date:'2026-02-06',desc:'BKG HOTEL BOOKING',val:25297.93,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev15_bk2',date:'2026-02-09',desc:'BOOKING.COM',val:19988.73,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev16_rim',date:'2026-02-14',desc:'RIMOWA DISTRIBUTION',val:16313.60,cat:'Variáveis',sub:'COMPRAS P',pessoa:'J',obs:'',source:'card'},
    {id:'fev17_lux',date:'2026-02-17',desc:'LUXURY COLLECTION',val:6615.47,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev18_ala',date:'2026-02-26',desc:'ALAMO RENT-A-CAR',val:3201.15,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev19_i1',date:'2026-02-14',desc:'IOF TRANSACOES EXTERIOR',val:570.98,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev20_i2',date:'2026-02-06',desc:'IOF TRANSACOES EXTERIOR',val:885.43,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev21_i3',date:'2026-02-09',desc:'IOF TRANSACOES EXTERIOR',val:699.61,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev22_i4',date:'2026-02-17',desc:'IOF TRANSACOES EXTERIOR',val:231.54,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev23_i5',date:'2026-02-26',desc:'IOF TRANSACOES EXTERIOR',val:112.04,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev24_anu',date:'2026-02-04',desc:'Anuidade parcela',val:79.16,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {id:'fev25_cp',date:'2026-02-15',desc:'Compras P Fev',val:9982.91,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'card'},
    {id:'fev26_cj',date:'2026-02-10',desc:'Compras J Fev',val:22298.41,cat:'Variáveis',sub:'COMPRAS J',pessoa:'J',obs:'',source:'card'},
    {id:'fev27_ccr',date:'2026-02-12',desc:'Compras CR Fev',val:3976.90,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'card'},
    {id:'fev28_sup',date:'2026-02-15',desc:'Supermercado Fev',val:3498.59,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'fev29_far',date:'2026-02-18',desc:'Farmácia Fev',val:2731.41,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {id:'fev30_esp',date:'2026-02-20',desc:'Esporte Fev',val:847.87,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {id:'fev31_ali',date:'2026-02-22',desc:'Alimentação Fev',val:1628.00,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'fev32_bel',date:'2026-02-24',desc:'Beleza Fev',val:1257.93,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'',obs:'',source:'card'},
    {id:'fev33_sau',date:'2026-02-14',desc:'Saúde Fev',val:2607.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'card'},
    {id:'fev34_mor',date:'2026-02-08',desc:'Moradia Fev',val:1089.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'card'},
    {id:'fev35_tra',date:'2026-02-25',desc:'Transporte Fev',val:72.63,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {id:'fev36_laz',date:'2026-02-10',desc:'Lazer Fev',val:542.00,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'card'},
    {id:'fev37_ric',date:'2026-02-05',desc:'Ricardo Fev',val:3030.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'',source:'card'},
    {id:'fev38_pre',date:'2026-02-07',desc:'Presentes Fev',val:200.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'card'},
    {id:'fev39_sg2',date:'2026-02-11',desc:'Seguros Fev',val:834.86,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'card'},
    {id:'fev40_doa',date:'2026-02-06',desc:'Doações Fev',val:500.00,cat:'Variáveis',sub:'DOAÇÕES',pessoa:'',obs:'',source:'card'},
    {id:'fev41_fon',date:'2026-02-04',desc:'Fonoaudióloga Catarina',val:1160.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev42_rms',date:'2026-02-04',desc:'Ricardo - mesada',val:1200.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev43_nat',date:'2026-02-04',desc:'Natação Ricardo',val:380.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev44_pia',date:'2026-02-04',desc:'Pia Lavabo',val:700.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev45_yog',date:'2026-02-04',desc:'Yoga Catarina',val:290.00,cat:'Variáveis',sub:'CATARINA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev46_sec',date:'2026-02-04',desc:'Máquina Secar',val:700.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev47_aca',date:'2026-02-04',desc:'Academia Priscila',val:847.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'P',obs:'Priscila',source:'manual'},
    {id:'fev48_mus',date:'2026-02-04',desc:'Aulas de Música Ricardo',val:450.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev49_hip',date:'2026-02-04',desc:'Hípica Catarina',val:1440.00,cat:'Variáveis',sub:'CATARINA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev50_eli',date:'2026-02-04',desc:'Eliane',val:1600.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'Priscila',source:'manual'},
  ]);
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
  loadData();
});
