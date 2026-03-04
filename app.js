// ═══════════════════════════════════════════════════════
//  PEDROZO · FINANÇAS · PWA
// ═══════════════════════════════════════════════════════

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
  // SKIP
  ['CARTAO ITAU THE ONE',   null, null, null],
  ['PIX TRANSF JOAO RI',    null, null, null],
  ['TED D INT209C64C6',     null, null, null],
  ['SALDO TOTAL',           null, null, null],
];

const RULES_UNICRED = [
  ['TRANSFERENCIA ENTRE CONTAS',     null, null, null],
  ['JOAO RICARDO DOZZA PEDROZO',     null, null, null],
  ['GENIAL INVESTIMENTOS',           null, null, null],
  ['LIQUIDACAO DE PARCELA DE FINANCIAMENTO', 'Fixa', 'APTO', null],
  ['JUROS CHEQUE ESPECIAL',          'Fixa', 'IMPOSTOS', null],
  ['DEB MENSALID QUANTA PREVID',     'Fixa', 'PREVIDENCIA /  VIDA', null],
  ['DEBITO FATURA.*CARTAO VISA',     null, null, null],
  ['ARRECADACAO DE CONVENIOS.*CSLL', 'Fixa', 'IMPOSTOS', null],
  ['IOF.*SALDO DEV',                 'Fixa', 'IMPOSTOS', null],
  ['LUIGI FREIRE PEDROZO',           'Variáveis', 'PRESENTES', null],
  ['JEHNNIFER',                      'Variáveis', 'MORADIA', null],
  ['GOMES.*COSTA.*MEDICOS',          'Variáveis', 'SAÚDE', null],
  ['ALEXANDRE BOTTARO',              'Variáveis', 'DOAÇÕES', null],
  ['LIQUIDACAO DE TITULO',           null, null, null],
];

const RULES_CARD = [
  ['HIPPO',       'Variáveis', 'SUPERMERCADO',  null],
  ['ANGELONI',    'Variáveis', 'SUPERMERCADO',  null],
  ['UBER',        'Variáveis', 'TRANSPORTE',    null],
  ['99APP',       'Variáveis', 'TRANSPORTE',    null],
  ['LATAM',       'Variáveis', 'VIAGEM',        null],
  ['BOOKING',     'Variáveis', 'VIAGEM',        null],
  ['ROYAL CARIBBEAN', 'Variáveis', 'VIAGEM',    null],
  ['HOTELDO',     'Variáveis', 'VIAGEM',        null],
  ['ALAMO RENT',  'Variáveis', 'VIAGEM',        null],
  ['LUXURY COLLECTION', 'Variáveis', 'VIAGEM',  null],
  ['APPLE',       'Fixa',      'ASSINATURAS',   null],
  ['NETFLIX',     'Fixa',      'ASSINATURAS',   null],
  ['SPOTIFY',     'Fixa',      'ASSINATURAS',   null],
  ['IFOOD CLUB',  'Fixa',      'ASSINATURAS',   null],
  ['ANUIDADE',    'Fixa',      'ASSINATURAS',   null],
  ['IOF TRANSACOES', 'Fixa',   'IMPOSTOS',      null],
  ['IOF COMPRA',  'Fixa',      'IMPOSTOS',      null],
  ['RAIA',        'Variáveis', 'FARMÁCIA',      null],
  ['DIMED',       'Variáveis', 'FARMÁCIA',      null],
  ['WALGREENS',   'Variáveis', 'FARMÁCIA',      null],
  ['CLINICA KOZM','Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'J'],
  ['DOUGLAS LUCAS','Variáveis','BELEZA ESTÉTICA BEM ESTAR', 'P'],
  ['HAIR ADDRESS','Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'P'],
  ['ADCOS',       'Variáveis', 'BELEZA ESTÉTICA BEM ESTAR', 'P'],
  ['BODY HALL',   'Variáveis', 'ESPORTE',       null],
  ['DECATHLON',   'Variáveis', 'ESPORTE',       null],
  ['FIT2RUN',     'Variáveis', 'COMPRAS J',     null],
  ['FITRUN',      'Variáveis', 'COMPRAS J',     null],
  ['BRUNELLO',    'Variáveis', 'COMPRAS J',     null],
  ['OLIVER PEOPLE','Variáveis','COMPRAS J',     null],
  ['DIESEL',      'Variáveis', 'COMPRAS J',     null],
  ['ZEGNA',       'Variáveis', 'COMPRAS J',     null],
  ['LULULEMON',   'Variáveis', 'COMPRAS CR',    null],
  ['ZALES',       'Variáveis', 'COMPRAS P',     null],
  ['HERMES',      'Variáveis', 'COMPRAS P',     null],
  ['RIMOWA',      'Variáveis', 'COMPRAS P',     'J'],
  ['PLANET CAP',  'Variáveis', 'COMPRAS P',     null],
  ['YELUMSEG',    'Fixa',      'SEGUROS',       null],
  ['SELESKI',     'Variáveis', 'SAÚDE',         null],
  ['FRANKJOSEDASILVA','Fixa',  'FUNCIONÁRIAS',  null],
  ['PAGAMENTO RECEBIDO', null, null, null],
  ['ESTORNO',     null, null,  null],
];

function categorize(desc, type) {
  const d = desc.toUpperCase();
  const rules = type === 'itau' ? RULES_ITAU : type === 'unicred' ? RULES_UNICRED : RULES_CARD;
  for (const [kw, cat, sub, pessoa] of rules) {
    if (new RegExp(kw.toUpperCase()).test(d)) return { cat, sub, pessoa };
  }
  return { cat: 'Variáveis', sub: 'NÃO CATEGORIZADO', pessoa: null };
}

// ── BUDGET ────────────────────────────────────────────
const BUDGET = {
  'VIAGEM':25000,'COMPRAS P':5000,'CARRO':17000,'FUNCIONÁRIAS':8000,
  'COMPRAS J':5000,'CATARINA':6000,'SUPERMERCADO':7000,'IMPOSTOS':2200,
  'TRANSPORTE':1000,'ESPORTE':3000,'CONDOMÍNIO':3500,'FARMÁCIA':2500,
  'MORADIA':2000,'SEGUROS':1500,'RICARDO':1500,'COMPRAS CR':2000,
  'BELEZA ESTÉTICA BEM ESTAR':1500,'ALIMENTAÇÃO':3000,'SAÚDE':1000,
  'LAVANDERIA':1000,'LUZ':1000,'ASSINATURAS':600,'LAZER':1000,
  'PRESENTES':1000,'APTO':8000,'PREVIDENCIA /  VIDA':2500,
};

// ── STORAGE ───────────────────────────────────────────
const DB = {
  key: 'pedrozo_txs',
  load() { try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch { return []; } },
  save(txs) { localStorage.setItem(this.key, JSON.stringify(txs)); },
  add(newTxs) {
    const all = this.load();
    // dedup by date+desc+val
    const keys = new Set(all.map(t => `${t.date}|${t.desc}|${t.val}`));
    const added = newTxs.filter(t => !keys.has(`${t.date}|${t.desc}|${t.val}`));
    this.save([...all, ...added]);
    return added.length;
  }
};

// ── PARSE CSV ─────────────────────────────────────────
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
      // Itaú/Unicred: ,date,desc,,val  or  date,desc,,val
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

// ── FORMAT HELPERS ────────────────────────────────────
const fmt   = v => 'R$\u00A0' + Math.round(v).toLocaleString('pt-BR');
const fmtK  = v => v >= 1e6 ? 'R$\u00A0'+(v/1e6).toFixed(1)+'M' : v >= 1e3 ? 'R$\u00A0'+(v/1e3).toFixed(0)+'k' : fmt(v);
const pctOf = (a,b) => b ? ((a/b)*100).toFixed(0)+'%' : '—';

const COLORS = ['#C9A84C','#5B9CF6','#4CAF82','#E8C97A','#9B7FE8',
                '#E05C6A','#4CC9C9','#E8A04C','#82C44C','#C44C82',
                '#A84C4C','#4C7AA8'];

// ── AGGREGATE DATA ────────────────────────────────────
function aggregate(txs, month) {
  const filtered = month ? txs.filter(t => t.date.startsWith(`2026-${String(month).padStart(2,'0')}`)) : txs;
  const bySub = {}, byMonth = {}, fixaM = {}, varM = {};

  filtered.forEach(t => {
    if (!t.sub || t.sub === 'nan') return;
    bySub[t.sub] = (bySub[t.sub] || 0) + t.val;
    const m = t.date.slice(5,7);
    byMonth[m]  = (byMonth[m] || 0) + t.val;
    if (t.cat === 'Fixa') fixaM[m] = (fixaM[m] || 0) + t.val;
    else                  varM[m]  = (varM[m]  || 0) + t.val;
  });

  const total = Object.values(bySub).reduce((a,b)=>a+b, 0);
  return { bySub, total, byMonth, fixaM, varM };
}

// ── DONUT SVG ─────────────────────────────────────────
function donutSVG(segments, cx=60, cy=60, r=46, stroke=10) {
  const circ = 2 * Math.PI * r;
  const total = segments.reduce((a,s) => a + s.v, 0);
  let offset = -circ / 4, paths = '';
  segments.forEach(s => {
    const dash = total ? (s.v / total) * circ : 0;
    paths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.c}"
      stroke-width="${stroke}" stroke-dasharray="${dash} ${circ - dash}"
      stroke-dashoffset="${offset}" stroke-linecap="butt"/>`;
    offset -= dash;
  });
  return `<svg width="${cx*2}" height="${cy*2}" viewBox="0 0 ${cx*2} ${cy*2}" style="flex-shrink:0">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1A1E28" stroke-width="${stroke}"/>
    ${paths}
  </svg>`;
}

// ── SCREEN: INÍCIO ────────────────────────────────────
function renderHome() {
  const txs = DB.load();
  const jan = aggregate(txs, 1);
  const fev = aggregate(txs, 2);
  const acum = jan.total + fev.total;

  // KPIs
  document.getElementById('home-kpis').innerHTML = [
    { label:'Total Jan', val:fmtK(jan.total), cls:'red', foot:'Receita R$ 30k' },
    { label:'Total Fev', val:fmtK(fev.total), cls:'red', foot:'Receita R$ 30k' },
    { label:'Acumulado', val:fmtK(acum),       cls:'gold', foot:'Jan + Fev 2026' },
    { label:'Patrimônio', val:'R$ 27,4M',      cls:'green', foot:'Posição Fev 2026' },
  ].map((k,i) => `<div class="kpi-card ${i===0?'highlight':''}">
    <div class="kpi-label">${k.label}</div>
    <div class="kpi-val ${k.cls}">${k.val}</div>
    <div class="kpi-footer">${k.foot}</div>
  </div>`).join('');

  // Alerts
  const alerts = [];
  const allSub = {...jan.bySub};
  Object.entries(fev.bySub).forEach(([k,v]) => allSub[k] = (allSub[k]||0) + v);

  if ((fev.bySub['COMPRAS P']||0) > 10000)
    alerts.push({type:'danger', title:'Compras P elevadas em Fev', body: `${fmt(fev.bySub['COMPRAS P']||0)} — ${((fev.bySub['COMPRAS P']||0)/BUDGET['COMPRAS P']).toFixed(0)}x o budget`});
  if ((fev.bySub['VIAGEM']||0) > 20000)
    alerts.push({type:'warn', title:'Viagem acima do budget em Fev', body: `${fmt(fev.bySub['VIAGEM']||0)} vs budget ${fmt(BUDGET['VIAGEM'])}`});
  if ((allSub['NÃO CATEGORIZADO']||0) > 5000)
    alerts.push({type:'warn', title:'Itens não categorizados', body: `${fmt(allSub['NÃO CATEGORIZADO']||0)} aguardam classificação`});
  alerts.push({type:'ok', title:'Patrimônio', body:'R$ 27,4M — cobertura ~68 meses no ritmo atual'});

  document.getElementById('home-alerts').innerHTML = alerts.map(a => `
    <div class="alert-item ${a.type}">
      <div class="alert-title">${a.title}</div>
      <div class="alert-body">${a.body}</div>
    </div>`).join('');

  // Fixo vs variável Jan
  const fixaJ = jan.fixaM['01']||0, varJ = jan.varM['01']||0;
  const fixaF = fev.fixaM['02']||0, varF = fev.varM['02']||0;
  const compSegs = [
    {label:'Jan Fixas',     v: fixaJ, c:'#5B9CF6'},
    {label:'Jan Variáveis', v: varJ,  c:'#C9A84C'},
    {label:'Fev Fixas',     v: fixaF, c:'#4C9BF6'},
    {label:'Fev Variáveis', v: varF,  c:'#E8C97A'},
  ];
  const maxComp = Math.max(fixaJ, varJ, fixaF, varF) || 1;
  document.getElementById('home-comp').innerHTML = compSegs.map(s => `
    <div class="prog-row">
      <div class="prog-name">${s.label}</div>
      <div class="prog-track"><div class="prog-fill" style="width:${(s.v/maxComp*100).toFixed(1)}%;background:${s.c}"></div></div>
      <div class="prog-val">${fmt(s.v)}</div>
    </div>`).join('');
}

// ── SCREEN: DESPESAS ──────────────────────────────────
let activeMonth = '01';
function renderDespesas() {
  const txs = DB.load();
  const m = parseInt(activeMonth);
  const ag = aggregate(txs, m);
  const total = ag.total;

  // Month pills
  document.getElementById('month-pills').innerHTML = ['01','02'].map(mo => `
    <div class="pill ${mo===activeMonth?'active':''}" onclick="setMonth('${mo}')">${mo==='01'?'Janeiro':'Fevereiro'}</div>
  `).join('');

  // Sorted categories
  const sorted = Object.entries(ag.bySub)
    .filter(([k]) => k !== 'NÃO CATEGORIZADO')
    .sort((a,b) => b[1]-a[1]);
  const maxVal = sorted[0]?.[1] || 1;

  document.getElementById('desp-table').innerHTML = sorted.map(([name, val], i) => {
    const bud = BUDGET[name];
    const over = bud && val > bud;
    const barColor = bud ? (over ? '#E05C6A' : '#4CAF82') : COLORS[i % COLORS.length];
    return `<div class="cat-row">
      <div class="cat-dot" style="background:${COLORS[i%COLORS.length]}"></div>
      <div class="cat-name">${name}</div>
      <div class="cat-right">
        <div class="cat-val ${bud?(over?'prog-over':'prog-ok'):''}">${fmt(val)}</div>
        <div class="cat-pct">${pctOf(val,total)}</div>
        <div class="cat-bar-wrap" style="width:70px"><div class="cat-bar" style="width:${(val/maxVal*100).toFixed(1)}%;background:${barColor}"></div></div>
      </div>
    </div>`;
  }).join('');

  // Donut
  const top6 = sorted.slice(0,6);
  const others = sorted.slice(6).reduce((a,[,v])=>a+v,0);
  const segs = top6.map(([label,v],i) => ({label, v, c:COLORS[i]}));
  if (others > 0) segs.push({label:'Outros', v:others, c:'#3A3E50'});

  document.getElementById('desp-donut').innerHTML = donutSVG(segs) +
    `<div class="donut-legend-v">${segs.slice(0,5).map(s => `
      <div class="donut-leg-item">
        <div class="donut-leg-dot" style="background:${s.c}"></div>
        <div class="donut-leg-name">${s.label}</div>
        <div class="donut-leg-val">${fmtK(s.v)}</div>
        <div class="donut-leg-pct">${pctOf(s.v,total)}</div>
      </div>`).join('')}</div>`;

  // Total KPI
  const fixa = ag.fixaM[activeMonth] || 0;
  const vari = ag.varM[activeMonth]  || 0;
  document.getElementById('desp-kpi-total').textContent = fmt(total);
  document.getElementById('desp-kpi-fixa').textContent  = fmt(fixa) + ' (' + pctOf(fixa,total) + ')';
  document.getElementById('desp-kpi-var').textContent   = fmt(vari) + ' (' + pctOf(vari,total) + ')';
}

function setMonth(m) {
  activeMonth = m;
  renderDespesas();
}

// ── SCREEN: COMPARATIVO ───────────────────────────────
function renderComparativo() {
  const txs = DB.load();
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
      const j = jan.bySub[k]||0, f = fev.bySub[k]||0, d = f - j;
      const dp = j ? ((d/j)*100).toFixed(0) : null;
      const cls = d>0 ? 'cmp-up' : 'cmp-dn';
      const sign = d>0 ? '↑' : '↓';
      return `<div class="cmp-row">
        <div class="cmp-name">${k}</div>
        <div class="cmp-j">${j?fmtK(j):'—'}</div>
        <div class="cmp-f">${f?fmtK(f):'—'}</div>
        <div class="cmp-d ${j&&f?cls:''}">${j&&f ? sign+Math.abs(dp)+'%' : '—'}</div>
      </div>`;
    }).join('');

  // Donut acumulado
  const fixaAcum = (jan.fixaM['01']||0) + (fev.fixaM['02']||0);
  const varAcum  = (jan.varM['01']||0)  + (fev.varM['02']||0);
  const totAcum  = fixaAcum + varAcum;
  const segs = [{label:'Fixas',v:fixaAcum,c:'#5B9CF6'},{label:'Variáveis',v:varAcum,c:'#C9A84C'}];

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

  const segs = [{label:'Líquido',v:totalLiq,c:'#4CAF82'},{label:'Imobilizado',v:totalImob,c:'#5B9CF6'}];
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

  const allPat = {...patLiq,...patImob};
  const maxP = Math.max(...Object.values(allPat));
  const PCOLS = ['#4CAF82','#4CAF82','#4CAF82','#4CAF82','#4CAF82','#4CAF82','#4CAF82','#5B9CF6','#5B9CF6','#5B9CF6','#5B9CF6'];
  document.getElementById('pat-items-liq').innerHTML =
    Object.entries(patLiq).map(([name,val],i) => `
      <div class="pat-item">
        <div class="pat-item-dot" style="background:${PCOLS[i]}"></div>
        <div class="pat-item-name">${name}</div>
        <div class="pat-item-val">${fmtK(val)}</div>
        <div class="pat-item-pct">${pctOf(val,totalPat)}</div>
      </div>`).join('');

  document.getElementById('pat-items-imob').innerHTML =
    Object.entries(patImob).map(([name,val],i) => `
      <div class="pat-item">
        <div class="pat-item-dot" style="background:#5B9CF6"></div>
        <div class="pat-item-name">${name}</div>
        <div class="pat-item-val">${fmtK(val)}</div>
        <div class="pat-item-pct">${pctOf(val,totalPat)}</div>
      </div>`).join('');
}

// ── SCREEN: IMPORTAR ──────────────────────────────────
let pendingTxs = [];

function renderImport() {
  document.getElementById('import-preview').innerHTML = '';
  document.getElementById('btn-confirm').disabled = true;
}

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
          <div class="log-dot" style="background:${t.sub==='NÃO CATEGORIZADO'?'#E05C6A':'#4CAF82'}"></div>
          <div style="flex:1">
            <div class="log-desc">${t.desc.slice(0,40)}</div>
            <div class="log-sub">${t.sub}</div>
          </div>
          <div class="log-val">${fmt(t.val)}</div>
        </div>`).join('');

      document.getElementById('import-count').textContent = `${pendingTxs.length} lançamentos detectados`;
      document.getElementById('btn-confirm').disabled = pendingTxs.length === 0;
    };
    reader.readAsText(file, 'latin-1');
  });
}

function confirmImport() {
  const added = DB.add(pendingTxs);
  document.getElementById('import-count').textContent = `✓ ${added} novos lançamentos adicionados!`;
  document.getElementById('btn-confirm').disabled = true;
  pendingTxs = [];
  renderHome();
  renderDespesas();
  renderComparativo();
}

// ── NAV ───────────────────────────────────────────────
const SCREENS = ['home','despesas','comparativo','patrimonio','import'];
function showScreen(id) {
  SCREENS.forEach(s => {
    document.getElementById('screen-'+s).classList.toggle('active', s===id);
    document.getElementById('nav-'+s).classList.toggle('active', s===id);
  });
  if (id==='despesas')    renderDespesas();
  if (id==='comparativo') renderComparativo();
  if (id==='patrimonio')  renderPatrimonio();
  if (id==='import')      renderImport();
  document.querySelector('.scroll-area').scrollTop = 0;
}

// ── SEED HISTORICAL DATA ──────────────────────────────
function seedData() {
  if (DB.load().length > 0) return;
  const seed = [
    // Janeiro — amostra representativa
    {date:'2026-01-02',desc:'PAG TIT INT 104',val:3718.59,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-02',desc:'DA  CELESC 000000900540',val:858.89,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-02',desc:'PIX TRANSF Francis02/01',val:3130.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-02',desc:'PIX TRANSF PATRICI02/01',val:3185.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-05',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-05',desc:'JUROS LIMITE DA CONTA',val:255.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-05',desc:'IOF',val:81.49,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-05',desc:'PIX QRS VITOR COELH05/01',val:6800.00,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'J',obs:'',source:'itau'},
    {date:'2026-01-08',desc:'PAG TIT INT 237',val:3094.61,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-12',desc:'PAG TIT INT 338295769000',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-15',desc:'DA  CLARO BL/IT 19104556',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-20',desc:'INT DOC ARREC E-SOCI 071',val:982.23,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-20',desc:'PAG TIT INT 104 IPTU',val:7862.05,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'IPTU Jan',source:'itau'},
    {date:'2026-01-22',desc:'TED D INT6d00ad26',val:2000.00,cat:'Variáveis',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-26',desc:'DA  TIM CELU 59077434010',val:132.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-28',desc:'PAG TIT INT 237',val:13977.49,cat:'Fixa',sub:'CARRO',pessoa:'',obs:'',source:'itau'},
    {date:'2026-01-15',desc:'DEB MENSALID QUANTA PREVID',val:2113.18,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'',source:'unicred'},
    {date:'2026-01-30',desc:'LIQUIDACAO DE PARCELA DE FINANCIAMENTO',val:7651.78,cat:'Fixa',sub:'APTO',pessoa:'',obs:'Financ. apto',source:'unicred'},
    {date:'2026-01-30',desc:'JUROS CHEQUE ESPECIAL - PF',val:665.65,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'unicred'},
    {date:'2026-01-16',desc:'DEBITO TRANSFERENCIA PIX JEHNNIFER',val:11250.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'Reforma quarto',source:'unicred'},
    // Cartão Jan
    {date:'2026-01-05',desc:'Viagem',val:35919.69,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-15',desc:'SUPERMERCADO',val:11033.55,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-10',desc:'COMPRAS P',val:19593.33,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-12',desc:'COMPRAS J',val:5486.32,cat:'Variáveis',sub:'COMPRAS J',pessoa:'J',obs:'',source:'card'},
    {date:'2026-01-18',desc:'FARMÁCIA',val:3694.89,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-20',desc:'ESPORTE',val:1763.68,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-22',desc:'ALIMENTAÇÃO',val:1405.13,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-25',desc:'BELEZA',val:1487.01,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'P',obs:'',source:'card'},
    {date:'2026-01-15',desc:'SAÚDE',val:2198.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-10',desc:'MORADIA',val:3685.67,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-08',desc:'TRANSPORTE',val:3898.54,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-20',desc:'LAZER',val:919.90,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-05',desc:'CATARINA escola',val:4087.35,cat:'Variáveis',sub:'CATARINA',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-03',desc:'Ricardo',val:3000.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-05',desc:'PRESENTES',val:837.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-10',desc:'LAVANDERIA',val:1000.00,cat:'Variáveis',sub:'LAVANDERIA',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-08',desc:'COMPRAS CR Lululemon',val:2641.03,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'card'},
    {date:'2026-01-02',desc:'EMPÓRIOS',val:19.00,cat:'Variáveis',sub:'EMPÓRIOS',pessoa:'',obs:'',source:'card'},
    // Fevereiro
    {date:'2026-02-02',desc:'PAG TIT INT 104',val:3271.71,cat:'Fixa',sub:'CONDOMÍNIO',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-02',desc:'DA  CELESC',val:1421.07,cat:'Fixa',sub:'LUZ',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-02',desc:'PIX TRANSF PATRICI01/02',val:3200.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-02',desc:'PIX TRANSF NARA EL01/02',val:1506.00,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-03',desc:'PAG TIT INT 197',val:3922.85,cat:'Fixa',sub:'CATARINA',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-03',desc:'IOF',val:298.00,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-04',desc:'PIX TRANSF PRISCIL04/02',val:9500.00,cat:'Variáveis',sub:'FUNCIONÁRIAS',pessoa:'',obs:'Desmembrado',source:'itau'},
    {date:'2026-02-05',desc:'JUROS LIMITE DA CONTA',val:1288.70,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-06',desc:'PIX TRANSF BETINA 06/02',val:7333.32,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-11',desc:'PAG TIT INT 328',val:2643.72,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-18',desc:'DA  CLARO BL/IT',val:299.84,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-20',desc:'INT DOC ARREC E-SOCI 071',val:700.68,cat:'Fixa',sub:'FUNCIONÁRIAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-25',desc:'DA  TIM CELU',val:142.17,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'itau'},
    {date:'2026-02-18',desc:'DEB MENSALID QUANTA PREVID',val:2113.18,cat:'Fixa',sub:'PREVIDENCIA /  VIDA',pessoa:'',obs:'',source:'unicred'},
    // Cartão Fev
    {date:'2026-02-06',desc:'BKG HOTEL BOOKING',val:25297.93,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-09',desc:'BOOKING.COM',val:19988.73,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-14',desc:'RIMOWA DISTRIBUTION',val:16313.60,cat:'Variáveis',sub:'COMPRAS P',pessoa:'J',obs:'',source:'card'},
    {date:'2026-02-17',desc:'LUXURY COLLECTION',val:6615.47,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-26',desc:'ALAMO RENT-A-CAR',val:3201.15,cat:'Variáveis',sub:'VIAGEM',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-14',desc:'IOF TRANSACOES EXTERIOR',val:570.98,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-06',desc:'IOF TRANSACOES EXTERIOR',val:885.43,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-09',desc:'IOF TRANSACOES EXTERIOR',val:699.61,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-17',desc:'IOF TRANSACOES EXTERIOR',val:231.54,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-26',desc:'IOF TRANSACOES EXTERIOR',val:112.04,cat:'Fixa',sub:'IMPOSTOS',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-04',desc:'Anuidade parcela',val:79.16,cat:'Fixa',sub:'ASSINATURAS',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-15',desc:'COMPRAS P restante',val:9982.91,cat:'Variáveis',sub:'COMPRAS P',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-10',desc:'COMPRAS J fevereiro',val:22298.41,cat:'Variáveis',sub:'COMPRAS J',pessoa:'J',obs:'',source:'card'},
    {date:'2026-02-12',desc:'COMPRAS CR fevereiro',val:3976.90,cat:'Variáveis',sub:'COMPRAS CR',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-15',desc:'SUPERMERCADO fev',val:3498.59,cat:'Variáveis',sub:'SUPERMERCADO',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-18',desc:'FARMÁCIA fev',val:2731.41,cat:'Variáveis',sub:'FARMÁCIA',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-20',desc:'ESPORTE fev',val:847.87,cat:'Variáveis',sub:'ESPORTE',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-22',desc:'ALIMENTAÇÃO fev',val:1628.00,cat:'Variáveis',sub:'ALIMENTAÇÃO',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-24',desc:'BELEZA fev',val:1257.93,cat:'Variáveis',sub:'BELEZA ESTÉTICA BEM ESTAR',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-14',desc:'SAÚDE fev',val:2607.00,cat:'Variáveis',sub:'SAÚDE',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-08',desc:'MORADIA fev',val:1089.00,cat:'Variáveis',sub:'MORADIA',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-25',desc:'TRANSPORTE fev',val:72.63,cat:'Variáveis',sub:'TRANSPORTE',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-10',desc:'LAZER fev',val:542.00,cat:'Variáveis',sub:'LAZER',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-05',desc:'Ricardo fev',val:3030.00,cat:'Variáveis',sub:'RICARDO',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-07',desc:'PRESENTES fev',val:200.97,cat:'Variáveis',sub:'PRESENTES',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-11',desc:'SEGUROS fev',val:834.86,cat:'Fixa',sub:'SEGUROS',pessoa:'',obs:'',source:'card'},
    {date:'2026-02-06',desc:'DOAÇÕES fev',val:500.00,cat:'Variáveis',sub:'DOAÇÕES',pessoa:'',obs:'',source:'card'},
  ];
  DB.save(seed);
}

// ── BOOT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Register SW
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // Seed historical data
  seedData();

  // File drop zone
  const zone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');

  zone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', e => handleFiles(e.target.files));
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag'));
  zone.addEventListener('drop', e => { e.preventDefault(); zone.classList.remove('drag'); handleFiles(e.dataTransfer.files); });

  // Initial render
  renderHome();
  showScreen('home');
});
