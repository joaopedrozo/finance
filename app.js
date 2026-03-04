// ═══════════════════════════════════════════════════════
//  PEDROZO · FINANÇAS · PWA
//  v2 — Google Sheets sync
// ═══════════════════════════════════════════════════════

// ── CONFIG — cole aqui a URL do Apps Script ───────────
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz7fY0H-OV2_7vzb69KMVrXQ-AxdVKsHuNXDqA8eAzdTQUPjTBHiyD1dJIPc5vUVa88Bw/exec';
// ─────────────────────────────────────────────────────

// ── CATEGORIZATION RULES ─────────────────────────────
const RULES_ITAU = [
  ['JUROS LIMITE',          'Fixa',      'IMPOSTOS',       null],
  ['IOF',                   'Fixa',      'IMPOSTOS',       null],
  ['INT DOC ARREC E-SOCI',  'Fixa',      'FUNCIONÁRIAS',   null],
  ['BKI DOC ARREC E-SOCI',  'Fixa',      'FUNCIONÁRIAS',   null],
  ['PAG TIT INT 104',       'Fixa',      'CONDOMÍNIO',     null],
  ['PAG TIT BANCO 104',     'Fixa',      'CONDOMÍNIO',     null],
  ['PAG TIT INT 197',       'Fixa',      'CATARINA',       null],
  ['PAG TIT BANCO 197',     'Fixa',      'CATARINA',       null],
  ['PAG TIT INT 237',       'Fixa',      'CARRO',          null],
  ['PAG TIT BANCO 237',     'Fixa',      'CARRO',          null],
  ['PAG TIT INT 338',       'Fixa',      'SEGUROS',        null],
  ['PAG TIT INT 328',       'Fixa',      'SEGUROS',        null],
  ['PAG TIT BANCO 328',     'Fixa',      'SEGUROS',        null],
  ['DA  CELESC',            'Fixa',      'LUZ',            null],
  ['DA  CLARO',             'Fixa',      'ASSINATURAS',    null],
  ['DA  TIM CELU',          'Fixa',      'ASSINATURAS',    null],
  ['PIX TRANSF PRISCIL',    'Variáveis', 'NÃO CATEGORIZADO', null],
  ['PIX TRANSF PATRICI',    'Fixa',      'FUNCIONÁRIAS',   null],
  ['PIX TRANSF NARA',       'Fixa',      'FUNCIONÁRIAS',   null],
  ['PIX WHATS NARA',        'Fixa',      'FUNCIONÁRIAS',   null],
  ['PIX TRANSF FRANCIS',    'Fixa',      'FUNCIONÁRIAS',   null],
  ['TED D INT6D00AD26',     'Variáveis', 'FUNCIONÁRIAS',   null],
  ['PIX TRANSF BETINA',     'Variáveis', 'COMPRAS P',      null],
  ['PIX QRS VITOR COELH',   'Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'J'],
  ['PIX TRANSF ELIZABE',    'Variáveis', 'SUPERMERCADO',   null],
  ['PIX QRS PARCELADOUS',   'Variáveis', 'VIAGEM',         null],
  ['PIX TRANSF LUIGI',      'Variáveis', 'PRESENTES',      null],
  ['ALEXANDRE BOTTARO',     'Variáveis', 'DOAÇÕES',        null],
  ['CARTAO ITAU THE ONE',   null, null, null],
  ['PIX TRANSF JOAO RI',    null, null, null],
  ['TED D INT209C64C6',     null, null, null],
  ['SALDO TOTAL',           null, null, null],
];

const RULES_UNICRED = [
  ['TRANSFERENCIA ENTRE CONTAS',              null, null, null],
  ['JOAO RICARDO DOZZA PEDROZO',              null, null, null],
  ['GENIAL INVESTIMENTOS',                    null, null, null],
  ['LIQUIDACAO DE PARCELA DE FINANCIAMENTO',  'Fixa', 'APTO', null],
  ['JUROS CHEQUE ESPECIAL',                   'Fixa', 'IMPOSTOS', null],
  ['DEB MENSALID QUANTA PREVID',              'Fixa', 'PREVIDENCIA /  VIDA', null],
  ['DEBITO FATURA.*CARTAO VISA',              null, null, null],
  ['ARRECADACAO DE CONVENIOS.*CSLL',          'Fixa', 'IMPOSTOS', null],
  ['IOF.*SALDO DEV',                          'Fixa', 'IMPOSTOS', null],
  ['LUIGI FREIRE PEDROZO',                    'Variáveis', 'PRESENTES', null],
  ['JEHNNIFER',                               'Variáveis', 'MORADIA', null],
  ['GOMES.*COSTA.*MEDICOS',                   'Variáveis', 'SAÚDE', null],
  ['ALEXANDRE BOTTARO',                       'Variáveis', 'DOAÇÕES', null],
  ['LIQUIDACAO DE TITULO',                    null, null, null],
];

const RULES_CARD = [
  ['HIPPO',             'Variáveis', 'SUPERMERCADO', null],
  ['ANGELONI',          'Variáveis', 'SUPERMERCADO', null],
  ['UBER',              'Variáveis', 'TRANSPORTE',   null],
  ['99APP',             'Variáveis', 'TRANSPORTE',   null],
  ['LATAM',             'Variáveis', 'VIAGEM',       null],
  ['BOOKING',           'Variáveis', 'VIAGEM',       null],
  ['ROYAL CARIBBEAN',   'Variáveis', 'VIAGEM',       null],
  ['HOTELDO',           'Variáveis', 'VIAGEM',       null],
  ['ALAMO RENT',        'Variáveis', 'VIAGEM',       null],
  ['LUXURY COLLECTION', 'Variáveis', 'VIAGEM',       null],
  ['APPLE',             'Fixa',      'ASSINATURAS',  null],
  ['NETFLIX',           'Fixa',      'ASSINATURAS',  null],
  ['SPOTIFY',           'Fixa',      'ASSINATURAS',  null],
  ['IFOOD CLUB',        'Fixa',      'ASSINATURAS',  null],
  ['ANUIDADE',          'Fixa',      'ASSINATURAS',  null],
  ['IOF TRANSACOES',    'Fixa',      'IMPOSTOS',     null],
  ['IOF COMPRA',        'Fixa',      'IMPOSTOS',     null],
  ['RAIA',              'Variáveis', 'FARMÁCIA',     null],
  ['DIMED',             'Variáveis', 'FARMÁCIA',     null],
  ['WALGREENS',         'Variáveis', 'FARMÁCIA',     null],
  ['CLINICA KOZM',      'Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'J'],
  ['DOUGLAS LUCAS',     'Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'P'],
  ['HAIR ADDRESS',      'Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'P'],
  ['ADCOS',             'Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'P'],
  ['BODY HALL',         'Variáveis', 'ESPORTE',      null],
  ['DECATHLON',         'Variáveis', 'ESPORTE',      null],
  ['FIT2RUN',           'Variáveis', 'COMPRAS J',    null],
  ['FITRUN',            'Variáveis', 'COMPRAS J',    null],
  ['BRUNELLO',          'Variáveis', 'COMPRAS J',    null],
  ['OLIVER PEOPLE',     'Variáveis', 'COMPRAS J',    null],
  ['DIESEL',            'Variáveis', 'COMPRAS J',    null],
  ['ZEGNA',             'Variáveis', 'COMPRAS J',    null],
  ['LULULEMON',         'Variáveis', 'COMPRAS CR',   null],
  ['ZALES',             'Variáveis', 'COMPRAS P',    null],
  ['HERMES',            'Variáveis', 'COMPRAS P',    null],
  ['RIMOWA',            'Variáveis', 'COMPRAS P',    'J'],
  ['PLANET CAP',        'Variáveis', 'COMPRAS P',    null],
  ['YELUMSEG',          'Fixa',      'SEGUROS',      null],
  ['FRANKJOSEDASILVA',  'Fixa',      'FUNCIONÁRIAS', null],
  ['PAGAMENTO RECEBIDO',null, null, null],
  ['ESTORNO',           null, null, null],
];

function categorize(desc, type) {
  const d = desc.toUpperCase();
  const rules = type === 'itau' ? RULES_ITAU : type === 'unicred' ? RULES_UNICRED : RULES_CARD;
  for (const [kw, cat, sub, pessoa] of rules) {
    if (new RegExp(kw.toUpperCase()).test(d)) return { cat, sub, pessoa };
  }
  return { cat: 'Variáveis', sub: 'NÃO CATEGORIZADO', pessoa: null };
}

const BUDGET = {
  'VIAGEM':25000,'COMPRAS P':5000,'CARRO':17000,'FUNCIONÁRIAS':8000,
  'COMPRAS J':5000,'CATARINA':6000,'SUPERMERCADO':7000,'IMPOSTOS':2200,
  'TRANSPORTE':1000,'ESPORTE':3000,'CONDOMÍNIO':3500,'FARMÁCIA':2500,
  'MORADIA':2000,'SEGUROS':1500,'RICARDO':1500,'COMPRAS CR':2000,
  'BELEZA ESTÉTICA BEM ESTAR':1500,'ALIMENTAÇÃO':3000,'SAÚDE':1000,
  'LAVANDERIA':1000,'LUZ':1000,'ASSINATURAS':600,'LAZER':1000,
  'PRESENTES':1000,'APTO':8000,'PREVIDENCIA /  VIDA':2500,
};

// ── GOOGLE SHEETS SYNC ────────────────────────────────
const isConfigured = () => SHEETS_URL && SHEETS_URL !== 'COLE_AQUI_A_URL_DO_APPS_SCRIPT';

async function sheetsGet(action) {
  const res  = await fetch(`${SHEETS_URL}?action=${action}`);
  const json = await res.json();
  if (!json.ok) throw new Error(json.error);
  return json.data;
}

async function sheetsPost(body) {
  const res  = await fetch(SHEETS_URL, {
    method: 'POST',
    body: JSON.stringify(body)
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error);
  return json;
}

// ── LOCAL CACHE (fallback offline) ───────────────────
const CACHE_KEY = 'pedrozo_txs_v2';
const cache = {
  load()      { try { return JSON.parse(localStorage.getItem(CACHE_KEY) || '[]'); } catch { return []; } },
  save(txs)   { localStorage.setItem(CACHE_KEY, JSON.stringify(txs)); },
};

// ── STATE ─────────────────────────────────────────────
let STATE = {
  txs:     [],
  loading: false,
  synced:  false,
  error:   null,
};

// ── LOAD DATA ─────────────────────────────────────────
async function loadData(silent = false) {
  if (!silent) showLoading(true);
  STATE.error = null;

  if (isConfigured()) {
    try {
      STATE.txs   = await sheetsGet('getTxs');
      STATE.synced = true;
      cache.save(STATE.txs);
    } catch(e) {
      STATE.error  = 'Offline — usando cache local';
      STATE.txs    = cache.load();
      STATE.synced = false;
    }
  } else {
    STATE.txs    = cache.load();
    STATE.synced = false;
    if (STATE.txs.length === 0) seedData();
    STATE.txs    = cache.load();
  }

  if (!silent) showLoading(false);
  refreshAll();
}

async function syncTxs(newTxs) {
  // Always save locally first
  const all  = cache.load();
  const keys  = new Set(all.map(t => t.id));
  const fresh = newTxs.filter(t => !keys.has(t.id));
  cache.save([...all, ...fresh]);
  STATE.txs = cache.load();

  // Then push to Sheets if configured
  if (isConfigured() && fresh.length > 0) {
    try {
      const r = await sheetsPost({ action: 'addTxs', txs: fresh });
      return r.added;
    } catch(e) {
      STATE.error = 'Salvo localmente — sincronizará quando online';
    }
  }
  return fresh.length;
}

// ── PARSE CSV ─────────────────────────────────────────
function parseCSV(text, type) {
  const lines   = text.split('\n');
  const results = [];
  const TODAY   = new Date();
  const DATE_RE = /^\d{2}\/\d{2}\/\d{4}$/;
  let futureLine = lines.findIndex(l => /futuros/i.test(l));
  if (futureLine === -1) futureLine = Infinity;
  const sep = lines.find(l => l.includes(';')) ? ';' : ',';

  lines.forEach((line, i) => {
    if (i >= futureLine) return;
    const parts = line.trim().split(sep);
    if (parts.length < 4) return;

    let dateStr, desc, valStr;
    if (type === 'card_unicred') {
      dateStr = parts[0].trim(); desc = parts[2].trim(); valStr = parts[3].trim();
    } else {
      const offset = parts[0].trim() === '' ? 1 : 0;
      dateStr = parts[offset].trim(); desc = parts[offset+1].trim(); valStr = parts[offset+3].trim();
    }

    if (!DATE_RE.test(dateStr)) return;
    const [d,m,y] = dateStr.split('/');
    const date = new Date(`${y}-${m}-${d}`);
    if (date > TODAY) return;

    const rawVal = parseFloat(valStr.replace(',','.'));
    if (isNaN(rawVal) || rawVal === 0) return;
    if (type === 'card_unicred' && rawVal < 0) return;
    if (type !== 'card_unicred' && rawVal > 0) return;

    const val = Math.abs(rawVal);
    const { cat, sub, pessoa } = categorize(desc, type === 'card_unicred' ? 'card' : type);
    if (!cat) return;

    results.push({
      id: `${y}${m}${d}_${desc.slice(0,10).replace(/\s/g,'')}_${val}`,
      date: `${y}-${m}-${d}`, desc, val, cat, sub,
      pessoa: pessoa || '', obs: '', source: type
    });
  });
  return results;
}

// ── FORMAT ────────────────────────────────────────────
const fmt   = v => 'R$\u00A0' + Math.round(v).toLocaleString('pt-BR');
const fmtK  = v => v >= 1e6 ? 'R$\u00A0'+(v/1e6).toFixed(1)+'M' : v >= 1e3 ? 'R$\u00A0'+(v/1e3).toFixed(0)+'k' : fmt(v);
const pctOf = (a,b) => b ? ((a/b)*100).toFixed(0)+'%' : '—';

const COLORS = ['#A67C2E','#2F6FE0','#1E9E63','#C9943A','#7B5FD4',
                '#D63E50','#1EA8A8','#D4843A','#5D9E1E','#A83E7B',
                '#A83E3E','#3E6FA8'];

// ── AGGREGATE ─────────────────────────────────────────
function aggregate(txs, month) {
  const filtered = month
    ? txs.filter(t => t.date && t.date.startsWith(`2026-${String(month).padStart(2,'0')}`))
    : txs;

  const bySub = {}, fixaM = {}, varM = {};
  filtered.forEach(t => {
    if (!t.sub || t.sub === 'nan') return;
    bySub[t.sub] = (bySub[t.sub] || 0) + t.val;
    const m = t.date ? t.date.slice(5,7) : '00';
    if (t.cat === 'Fixa') fixaM[m] = (fixaM[m]||0) + t.val;
    else                  varM[m]  = (varM[m] ||0) + t.val;
  });

  const total = Object.values(bySub).reduce((a,b)=>a+b, 0);
  return { bySub, total, fixaM, varM };
}

// ── DONUT SVG ─────────────────────────────────────────
function donutSVG(segments, cx=60, cy=60, r=46, stroke=10) {
  const circ  = 2 * Math.PI * r;
  const total = segments.reduce((a,s) => a + s.v, 0);
  let offset  = -circ / 4, paths = '';
  segments.forEach(s => {
    const dash = total ? (s.v/total)*circ : 0;
    paths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.c}"
      stroke-width="${stroke}" stroke-dasharray="${dash} ${circ-dash}"
      stroke-dashoffset="${offset}" stroke-linecap="butt"/>`;
    offset -= dash;
  });
  return `<svg width="${cx*2}" height="${cy*2}" viewBox="0 0 ${cx*2} ${cy*2}" style="flex-shrink:0">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#F0F0F5" stroke-width="${stroke}"/>
    ${paths}
  </svg>`;
}

// ── UI HELPERS ────────────────────────────────────────
function showLoading(on) {
  document.getElementById('loading-bar').style.display = on ? 'block' : 'none';
}

function showToast(msg, type='info') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className   = `toast toast-${type} show`;
  setTimeout(() => t.classList.remove('show'), 3000);
}

function setSyncBadge() {
  const el = document.getElementById('sync-badge');
  if (!isConfigured()) {
    el.textContent = '○ Local'; el.className = 'sync-badge local';
  } else if (STATE.synced) {
    el.textContent = '● Sincronizado'; el.className = 'sync-badge synced';
  } else {
    el.textContent = '◌ Offline'; el.className = 'sync-badge offline';
  }
  if (STATE.error) showToast(STATE.error, 'warn');
}

function refreshAll() {
  setSyncBadge();
  const active = document.querySelector('.screen.active')?.id?.replace('screen-','');
  if (active === 'home')        renderHome();
  if (active === 'despesas')    renderDespesas();
  if (active === 'comparativo') renderComparativo();
  if (active === 'patrimonio')  renderPatrimonio();
}

// ── SCREEN: INÍCIO ────────────────────────────────────
function renderHome() {
  const txs = STATE.txs;
  const jan = aggregate(txs, 1);
  const fev = aggregate(txs, 2);
  const acum = jan.total + fev.total;

  document.getElementById('home-kpis').innerHTML = [
    { label:'Total Jan',   val:fmtK(jan.total), cls:'red',   foot:'Receita R$ 30k' },
    { label:'Total Fev',   val:fmtK(fev.total), cls:'red',   foot:'Receita R$ 30k' },
    { label:'Acumulado',   val:fmtK(acum),       cls:'gold',  foot:'Jan + Fev 2026' },
    { label:'Patrimônio',  val:'R$ 27,4M',       cls:'green', foot:'Posição Fev 2026' },
  ].map((k,i) => `<div class="kpi-card ${i===0?'highlight':''}">
    <div class="kpi-label">${k.label}</div>
    <div class="kpi-val ${k.cls}">${k.val}</div>
    <div class="kpi-footer">${k.foot}</div>
  </div>`).join('');

  const alerts = [];
  if ((fev.bySub['COMPRAS P']||0) > 10000)
    alerts.push({type:'danger', title:'Compras P elevadas em Fev',
      body:`${fmt(fev.bySub['COMPRAS P']||0)} — ${Math.round((fev.bySub['COMPRAS P']||0)/BUDGET['COMPRAS P'])}x o budget`});
  if ((fev.bySub['VIAGEM']||0) > 20000)
    alerts.push({type:'warn', title:'Viagem acima do budget em Fev',
      body:`${fmt(fev.bySub['VIAGEM']||0)} vs budget ${fmt(BUDGET['VIAGEM'])}`});
  const ncat = (jan.bySub['NÃO CATEGORIZADO']||0) + (fev.bySub['NÃO CATEGORIZADO']||0);
  if (ncat > 2000)
    alerts.push({type:'warn', title:'Itens não categorizados',
      body:`${fmt(ncat)} aguardam classificação`});
  alerts.push({type:'ok', title:'Patrimônio sólido',
    body:'R$ 27,4M — cobertura ~68 meses no ritmo atual'});

  document.getElementById('home-alerts').innerHTML = alerts.map(a => `
    <div class="alert-item ${a.type}">
      <div class="alert-title">${a.title}</div>
      <div class="alert-body">${a.body}</div>
    </div>`).join('');

  const fixaJ = jan.fixaM['01']||0, varJ = jan.varM['01']||0;
  const fixaF = fev.fixaM['02']||0, varF = fev.varM['02']||0;
  const rows  = [
    {label:'Jan — Fixas',     v:fixaJ, total:jan.total, c:'#2F6FE0'},
    {label:'Jan — Variáveis', v:varJ,  total:jan.total, c:'#A67C2E'},
    {label:'Fev — Fixas',     v:fixaF, total:fev.total, c:'#2F6FE0'},
    {label:'Fev — Variáveis', v:varF,  total:fev.total, c:'#A67C2E'},
  ];
  const maxComp = Math.max(fixaJ, varJ, fixaF, varF) || 1;
  document.getElementById('home-comp').innerHTML = rows.map(s => `
    <div class="prog-row">
      <div class="prog-name">${s.label}</div>
      <div class="prog-track"><div class="prog-fill" style="width:${(s.v/maxComp*100).toFixed(1)}%;background:${s.c}"></div></div>
      <div class="prog-val">${fmt(s.v)} <span style="color:var(--muted);font-size:10px">${pctOf(s.v,s.total)}</span></div>
    </div>`).join('');
}

// ── SCREEN: DESPESAS ──────────────────────────────────
let activeMonth = '01';
function renderDespesas() {
  const txs  = STATE.txs;
  const m    = parseInt(activeMonth);
  const ag   = aggregate(txs, m);
  const total = ag.total;

  document.getElementById('month-pills').innerHTML = ['01','02','03','04','05','06','07','08','09','10','11','12']
    .map(mo => `<div class="pill ${mo===activeMonth?'active':''}" onclick="setMonth('${mo}')">${
      ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][parseInt(mo)-1]
    }</div>`).join('');

  const sorted = Object.entries(ag.bySub)
    .filter(([k]) => k !== 'NÃO CATEGORIZADO')
    .sort((a,b) => b[1]-a[1]);
  const maxVal = sorted[0]?.[1] || 1;

  document.getElementById('desp-table').innerHTML = sorted.length
    ? sorted.map(([name, val], i) => {
        const bud  = BUDGET[name];
        const over = bud && val > bud;
        const barC = bud ? (over ? '#D63E50' : '#1E9E63') : COLORS[i%COLORS.length];
        return `<div class="cat-row">
          <div class="cat-dot" style="background:${COLORS[i%COLORS.length]}"></div>
          <div class="cat-name">${name}</div>
          <div class="cat-right">
            <div class="cat-val ${bud?(over?'prog-over':'prog-ok'):''}">${fmt(val)}</div>
            <div class="cat-pct">${pctOf(val,total)}${bud ? ' · bud '+fmtK(bud) : ''}</div>
            <div class="cat-bar-wrap" style="width:70px"><div class="cat-bar" style="width:${(val/maxVal*100).toFixed(1)}%;background:${barC}"></div></div>
          </div>
        </div>`;
      }).join('')
    : '<div style="padding:20px;text-align:center;color:var(--muted)">Sem dados para este mês</div>';

  // Donut
  const top6   = sorted.slice(0,6);
  const others = sorted.slice(6).reduce((a,[,v])=>a+v,0);
  const segs   = top6.map(([label,v],i) => ({label, v, c:COLORS[i]}));
  if (others > 0) segs.push({label:'Outros', v:others, c:'#D0D0E0'});

  document.getElementById('desp-donut').innerHTML = segs.length
    ? donutSVG(segs) + `<div class="donut-legend-v">${segs.slice(0,5).map(s=>`
        <div class="donut-leg-item">
          <div class="donut-leg-dot" style="background:${s.c}"></div>
          <div class="donut-leg-name">${s.label}</div>
          <div class="donut-leg-val">${fmtK(s.v)}</div>
          <div class="donut-leg-pct">${pctOf(s.v,total)}</div>
        </div>`).join('')}</div>`
    : '';

  const fixa = ag.fixaM[activeMonth] || 0;
  const vari = ag.varM[activeMonth]  || 0;
  document.getElementById('desp-kpi-total').textContent = fmt(total);
  document.getElementById('desp-kpi-fixa').textContent  = fmt(fixa) + ' (' + pctOf(fixa,total) + ')';
  document.getElementById('desp-kpi-var').textContent   = fmt(vari) + ' (' + pctOf(vari,total) + ')';
}

function setMonth(m) { activeMonth = m; renderDespesas(); }

// ── SCREEN: COMPARATIVO ───────────────────────────────
function renderComparativo() {
  const txs = STATE.txs;
  const jan = aggregate(txs, 1);
  const fev = aggregate(txs, 2);

  const allKeys = new Set([...Object.keys(jan.bySub), ...Object.keys(fev.bySub)]);
  allKeys.delete('NÃO CATEGORIZADO');
  const sorted = [...allKeys].sort((a,b) => (jan.bySub[b]||0)-(jan.bySub[a]||0));

  document.getElementById('cmp-rows').innerHTML = `
    <div class="cmp-row cmp-hdr">
      <div class="cmp-name">Categoria</div>
      <div class="cmp-j">Jan</div>
      <div class="cmp-f">Fev</div>
      <div class="cmp-d">Δ%</div>
    </div>` +
    sorted.map(k => {
      const j = jan.bySub[k]||0, f = fev.bySub[k]||0, d = f-j;
      const dp  = j ? ((d/j)*100).toFixed(0) : null;
      const cls = d>0 ? 'cmp-up':'cmp-dn';
      return `<div class="cmp-row">
        <div class="cmp-name">${k}</div>
        <div class="cmp-j">${j?fmtK(j):'—'}</div>
        <div class="cmp-f">${f?fmtK(f):'—'}</div>
        <div class="cmp-d ${j&&f?cls:''}">${j&&f ? (d>0?'↑':'↓')+Math.abs(dp)+'%' : '—'}</div>
      </div>`;
    }).join('');

  const fixaAcum = (jan.fixaM['01']||0) + (fev.fixaM['02']||0);
  const varAcum  = (jan.varM['01']||0)  + (fev.varM['02']||0);
  const totAcum  = fixaAcum + varAcum;
  const segs = [{label:'Fixas',v:fixaAcum,c:'#2F6FE0'},{label:'Variáveis',v:varAcum,c:'#A67C2E'}];

  document.getElementById('cmp-donut').innerHTML =
    `<div class="donut-row">${donutSVG(segs)}
      <div class="donut-legend-v">${segs.map(s=>`
        <div class="donut-leg-item">
          <div class="donut-leg-dot" style="background:${s.c}"></div>
          <div class="donut-leg-name">${s.label}</div>
          <div class="donut-leg-val">${fmt(s.v)}</div>
          <div class="donut-leg-pct">${pctOf(s.v,totAcum)}</div>
        </div>`).join('')}
      </div>
    </div>`;
}

// ── SCREEN: PATRIMÔNIO ────────────────────────────────
function renderPatrimonio() {
  const patLiq = {
    'Domazzi Dividendos':3600000,'Dom Holding':4000000,'BTG Aplicações':867215,
    'CDI':335584,'Adler Mont Blanc':338635,'XP Bolsa Americana':136445,'Avenue Dolarizado':202023
  };
  const patImob = {
    'Ed. Trompowsky Apto':4000000,'Domhaus':7000000,'Cotas Domazzi':4900000,'Carros':2000000
  };
  const totalLiq  = Object.values(patLiq).reduce((a,b)=>a+b,0);
  const totalImob = Object.values(patImob).reduce((a,b)=>a+b,0);
  const totalPat  = totalLiq + totalImob;

  const segs = [{label:'Líquido',v:totalLiq,c:'#1E9E63'},{label:'Imobilizado',v:totalImob,c:'#2F6FE0'}];
  document.getElementById('pat-donut').innerHTML =
    `<div class="donut-row">${donutSVG(segs)}
      <div class="donut-legend-v">${segs.map(s=>`
        <div class="donut-leg-item">
          <div class="donut-leg-dot" style="background:${s.c}"></div>
          <div class="donut-leg-name">${s.label}</div>
          <div class="donut-leg-val">${fmtK(s.v)}</div>
          <div class="donut-leg-pct">${pctOf(s.v,totalPat)}</div>
        </div>`).join('')}
      </div>
    </div>`;

  document.getElementById('pat-items-liq').innerHTML =
    Object.entries(patLiq).map(([name,val],i) => `
      <div class="pat-item">
        <div class="pat-item-dot" style="background:#1E9E63"></div>
        <div class="pat-item-name">${name}</div>
        <div class="pat-item-val">${fmtK(val)}</div>
        <div class="pat-item-pct">${pctOf(val,totalPat)}</div>
      </div>`).join('');

  document.getElementById('pat-items-imob').innerHTML =
    Object.entries(patImob).map(([name,val]) => `
      <div class="pat-item">
        <div class="pat-item-dot" style="background:#2F6FE0"></div>
        <div class="pat-item-name">${name}</div>
        <div class="pat-item-val">${fmtK(val)}</div>
        <div class="pat-item-pct">${pctOf(val,totalPat)}</div>
      </div>`).join('');
}

// ── SCREEN: IMPORTAR ──────────────────────────────────
let pendingTxs = [];

function renderImport() {
  document.getElementById('import-log').innerHTML = '';
  document.getElementById('import-count').textContent = '';
  document.getElementById('btn-confirm').disabled = true;
  pendingTxs = [];
}

function handleFiles(files) {
  pendingTxs = [];
  const logEl = document.getElementById('import-log');
  logEl.innerHTML = '';

  let processed = 0;
  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const fname = file.name.toLowerCase();
      let type = 'card';
      if (fname.includes('unicred') && fname.includes('fatura')) type = 'card_unicred';
      else if (fname.includes('unicred') || fname.includes('extrato-')) type = 'unicred';
      else if (fname.includes('itau') || fname.includes('extrato_conta')) type = 'itau';

      const txs = parseCSV(e.target.result, type);
      pendingTxs.push(...txs);
      processed++;

      if (processed === files.length) {
        logEl.innerHTML = pendingTxs.map(t => `
          <div class="log-item">
            <div class="log-dot" style="background:${t.sub==='NÃO CATEGORIZADO'?'#D63E50':'#1E9E63'}"></div>
            <div style="flex:1">
              <div class="log-desc">${t.desc.slice(0,42)}</div>
              <div class="log-sub">${t.sub}</div>
            </div>
            <div class="log-val">${fmt(t.val)}</div>
          </div>`).join('');
        document.getElementById('import-count').textContent = `${pendingTxs.length} lançamentos detectados`;
        document.getElementById('btn-confirm').disabled = pendingTxs.length === 0;
      }
    };
    reader.readAsText(file, 'latin-1');
  });
}

async function confirmImport() {
  const btn = document.getElementById('btn-confirm');
  btn.disabled = true;
  btn.textContent = 'Salvando...';

  const added = await syncTxs(pendingTxs);
  showToast(`✓ ${added} novos lançamentos adicionados!`, 'ok');
  document.getElementById('import-count').textContent = `✓ ${added} adicionados — ${pendingTxs.length - added} já existiam`;
  btn.textContent = 'Confirmar Importação';
  pendingTxs = [];
  refreshAll();
}

// ── NAV ───────────────────────────────────────────────
const SCREENS = ['home','despesas','comparativo','patrimonio','import'];
function showScreen(id) {
  SCREENS.forEach(s => {
    document.getElementById('screen-'+s).classList.toggle('active', s===id);
    document.getElementById('nav-'+s).classList.toggle('active', s===id);
  });
  if (id==='import') renderImport();
  document.querySelector('.scroll-area').scrollTop = 0;
  refreshAll();
}

// ── SEED ──────────────────────────────────────────────
function seedData() {
  const seed = [
    {id:'jan01_condominiojan',date:'2026-01-02',desc:'PAG TIT INT 104',val:3718.59,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {id:'jan02_celescjan',date:'2026-01-02',desc:'DA  CELESC',val:858.89,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {id:'jan03_patriciajanf',date:'2026-01-02',desc:'PIX TRANSF PATRICI',val:3185.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan04_francisjan',date:'2026-01-02',desc:'PIX TRANSF Francis',val:3130.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan05_catarinaesc',date:'2026-01-05',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {id:'jan06_iof1',date:'2026-01-05',desc:'IOF',val:81.49,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'jan07_juros',date:'2026-01-05',desc:'JUROS LIMITE',val:255.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'jan08_vitorcoelho',date:'2026-01-05',desc:'PIX QRS VITOR COELH',val:6800.00,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'itau'},
    {id:'jan09_bmw1',date:'2026-01-08',desc:'PAG TIT INT 237',val:3094.61,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {id:'jan10_seguros1',date:'2026-01-12',desc:'PAG TIT INT 338',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {id:'jan11_claro1',date:'2026-01-15',desc:'DA  CLARO',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan12_esocial1',date:'2026-01-20',desc:'INT DOC ARREC E-SOCI',val:982.23,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan13_iptu',date:'2026-01-20',desc:'PAG TIT INT 104 IPTU',val:7862.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'IPTU Jan',source:'itau'},
    {id:'jan14_ted',date:'2026-01-22',desc:'TED D INT6d00ad26',val:2000.00,cat:'Variáveis',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan15_tim1',date:'2026-01-26',desc:'DA  TIM CELU',val:132.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'jan16_bmw2',date:'2026-01-28',desc:'PAG TIT INT 237',val:13977.49,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {id:'jan17_previd1',date:'2026-01-15',desc:'DEB MENSALID QUANTA PREVID',val:2113.18,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'',source:'unicred'},
    {id:'jan18_apto1',date:'2026-01-30',desc:'LIQUIDACAO DE PARCELA FINANCIAMENTO',val:7651.78,cat:'Fixa',sub:'APTO',pessoa:'',obs:'Financ. apto',source:'unicred'},
    {id:'jan19_juroscc',date:'2026-01-30',desc:'JUROS CHEQUE ESPECIAL',val:665.65,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'unicred'},
    {id:'jan20_jehnnifer',date:'2026-01-16',desc:'PIX JEHNNIFER DE MEDEIROS',val:11250.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Reforma quarto',source:'unicred'},
    {id:'jan21_viagem',date:'2026-01-15',desc:'Viagem Janeiro',val:35919.69,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'jan22_superm',date:'2026-01-15',desc:'Supermercados',val:11033.55,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'jan23_comprasp',date:'2026-01-10',desc:'Compras Pessoais Jan',val:19593.33,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'card'},
    {id:'jan24_comprasj',date:'2026-01-12',desc:'Compras João Jan',val:5486.32,cat:'Variáveis',sub:'COMPRAS J',pessoa:'J',obs:'',source:'card'},
    {id:'jan25_farmacia',date:'2026-01-18',desc:'Farmácia Jan',val:3694.89,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {id:'jan26_esporte',date:'2026-01-20',desc:'Esporte Jan',val:1763.68,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {id:'jan27_alim',date:'2026-01-22',desc:'Alimentação Jan',val:1405.13,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'jan28_beleza',date:'2026-01-25',desc:'Beleza Jan',val:1487.01,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'card'},
    {id:'jan29_saude',date:'2026-01-15',desc:'Saúde Jan',val:2198.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'card'},
    {id:'jan30_moradia',date:'2026-01-08',desc:'Moradia Jan',val:3685.67,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'card'},
    {id:'jan31_transp',date:'2026-01-20',desc:'Transporte Jan',val:3898.54,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {id:'jan32_lazer',date:'2026-01-20',desc:'Lazer Jan',val:919.90,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'card'},
    {id:'jan33_catcd',date:'2026-01-05',desc:'Catarina escola+ativ',val:4087.35,cat:'Variáveis',sub:'CATARINA',pessoa:'',obs:'',source:'card'},
    {id:'jan34_ricardo',date:'2026-01-03',desc:'Ricardo Jan',val:3000.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'',source:'card'},
    {id:'jan35_present',date:'2026-01-10',desc:'Presentes Jan',val:837.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'card'},
    {id:'jan36_lavand',date:'2026-01-08',desc:'Lavanderia Jan',val:1000.00,cat:'Variáveis',sub:'LAVANDERIA',pessoa:'',obs:'',source:'card'},
    {id:'jan37_comprcr',date:'2026-01-08',desc:'Compras CR Jan',val:2641.03,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'card'},
    {id:'jan38_emporios',date:'2026-01-02',desc:'Empórios',val:19.00,cat:'Variáveis',sub:'EMPÓRIOS',pessoa:'',obs:'',source:'card'},
    {id:'jan39_nara',date:'2026-01-21',desc:'PIX WHATS NARA EL',val:126.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    // Fevereiro
    {id:'fev01_cond',date:'2026-02-02',desc:'PAG TIT INT 104',val:3271.71,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {id:'fev02_celesc',date:'2026-02-02',desc:'DA  CELESC',val:1421.07,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {id:'fev03_patricia',date:'2026-02-02',desc:'PIX TRANSF PATRICI',val:3200.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev04_nara',date:'2026-02-02',desc:'PIX TRANSF NARA EL',val:1506.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev05_catarina',date:'2026-02-03',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {id:'fev06_iof',date:'2026-02-03',desc:'IOF',val:298.00,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'fev07_juros',date:'2026-02-05',desc:'JUROS LIMITE',val:1288.70,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {id:'fev08_betina',date:'2026-02-06',desc:'PIX TRANSF BETINA',val:7333.32,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'itau'},
    {id:'fev09_seguros',date:'2026-02-11',desc:'PAG TIT INT 328',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {id:'fev10_claro',date:'2026-02-18',desc:'DA  CLARO',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev11_esocial',date:'2026-02-20',desc:'INT DOC ARREC E-SOCI',val:700.68,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev12_tim',date:'2026-02-25',desc:'DA  TIM CELU',val:142.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {id:'fev13_previd',date:'2026-02-18',desc:'DEB MENSALID QUANTA PREVID',val:2113.18,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'',source:'unicred'},
    {id:'fev14_booking1',date:'2026-02-06',desc:'BKG HOTEL BOOKING',val:25297.93,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev15_booking2',date:'2026-02-09',desc:'BOOKING.COM',val:19988.73,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev16_rimowa',date:'2026-02-14',desc:'RIMOWA DISTRIBUTION',val:16313.60,cat:'Variáveis',sub:'COMPRAS P',pessoa:'J',obs:'',source:'card'},
    {id:'fev17_luxury',date:'2026-02-17',desc:'LUXURY COLLECTION',val:6615.47,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev18_alamo',date:'2026-02-26',desc:'ALAMO RENT-A-CAR',val:3201.15,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {id:'fev19_iof1',date:'2026-02-14',desc:'IOF TRANSACOES EXTERIOR',val:570.98,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev20_iof2',date:'2026-02-06',desc:'IOF TRANSACOES EXTERIOR',val:885.43,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev21_iof3',date:'2026-02-09',desc:'IOF TRANSACOES EXTERIOR',val:699.61,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev22_iof4',date:'2026-02-17',desc:'IOF TRANSACOES EXTERIOR',val:231.54,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev23_iof5',date:'2026-02-26',desc:'IOF TRANSACOES EXTERIOR',val:112.04,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {id:'fev24_anuidade',date:'2026-02-04',desc:'Anuidade parcela',val:79.16,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {id:'fev25_comprasp',date:'2026-02-15',desc:'Compras P Fev',val:9982.91,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'card'},
    {id:'fev26_comprasj',date:'2026-02-10',desc:'Compras J Fev',val:22298.41,cat:'Variáveis',sub:'COMPRAS J',pessoa:'J',obs:'',source:'card'},
    {id:'fev27_comprcr',date:'2026-02-12',desc:'Compras CR Fev',val:3976.90,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'card'},
    {id:'fev28_superm',date:'2026-02-15',desc:'Supermercado Fev',val:3498.59,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {id:'fev29_farmacia',date:'2026-02-18',desc:'Farmácia Fev',val:2731.41,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {id:'fev30_esporte',date:'2026-02-20',desc:'Esporte Fev',val:847.87,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {id:'fev31_alim',date:'2026-02-22',desc:'Alimentação Fev',val:1628.00,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {id:'fev32_beleza',date:'2026-02-24',desc:'Beleza Fev',val:1257.93,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'',obs:'',source:'card'},
    {id:'fev33_saude',date:'2026-02-14',desc:'Saúde Fev',val:2607.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'card'},
    {id:'fev34_moradia',date:'2026-02-08',desc:'Moradia Fev',val:1089.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'card'},
    {id:'fev35_transp',date:'2026-02-25',desc:'Transporte Fev',val:72.63,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {id:'fev36_lazer',date:'2026-02-10',desc:'Lazer Fev',val:542.00,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'card'},
    {id:'fev37_ricardo',date:'2026-02-05',desc:'Ricardo Fev',val:3030.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'',source:'card'},
    {id:'fev38_present',date:'2026-02-07',desc:'Presentes Fev',val:200.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'card'},
    {id:'fev39_seguros2',date:'2026-02-11',desc:'Seguros Fev',val:834.86,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'card'},
    {id:'fev40_doacoes',date:'2026-02-06',desc:'Doações Fev',val:500.00,cat:'Variáveis',sub:'DOAÇÕES',pessoa:'',obs:'',source:'card'},
    // Priscila desmembrado Fev
    {id:'fev41_fono',date:'2026-02-04',desc:'Fonoaudióloga Catarina',val:1160.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev42_ricardomes',date:'2026-02-04',desc:'Ricardo - mesada',val:1200.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev43_natacao',date:'2026-02-04',desc:'Natação Ricardo',val:380.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev44_pialavabo',date:'2026-02-04',desc:'Pia Lavabo',val:700.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev45_yoga',date:'2026-02-04',desc:'Yoga Catarina',val:290.00,cat:'Variáveis',sub:'CATARINA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev46_secadora',date:'2026-02-04',desc:'Máquina Secar - Assistência',val:700.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev47_academia',date:'2026-02-04',desc:'Academia Priscila',val:847.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'P',obs:'Priscila',source:'manual'},
    {id:'fev48_musicaric',date:'2026-02-04',desc:'Aulas de Música Ricardo',val:450.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev49_hipica',date:'2026-02-04',desc:'Hípica Catarina',val:1440.00,cat:'Variáveis',sub:'CATARINA',pessoa:'',obs:'Priscila',source:'manual'},
    {id:'fev50_eliane',date:'2026-02-04',desc:'Eliane',val:1600.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'Priscila',source:'manual'},
  ];
  cache.save(seed);
}

// ── BOOT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});

  const zone      = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  zone.addEventListener('click',    ()  => fileInput.click());
  fileInput.addEventListener('change', e => handleFiles(e.target.files));
  zone.addEventListener('dragover',  e  => { e.preventDefault(); zone.classList.add('drag'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag'));
  zone.addEventListener('drop', e => { e.preventDefault(); zone.classList.remove('drag'); handleFiles(e.dataTransfer.files); });

  loadData();
});
