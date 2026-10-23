const lugares = [
  {
    nome: 'Jardim Botânico',
    categoria: 'Natureza',
    duracao: 90,
    descricao: 'Caminhe pelo jardim francês e conheça a estufa de estrutura metálica, um dos cartões-postais da cidade.',
    imagem: '/jardim-botanico.jpg',
    textoAlternativo: 'Estufa de vidro do Jardim Botânico de Curitiba vista de frente.',
    credito: 'Rodrigo.Argenton',
    licenca: 'CC BY-SA 4.0',
    fonte: 'https://commons.wikimedia.org/wiki/File:Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02.jpg',
    cor: 'bg-lime',
  },
  {
    nome: 'Museu Oscar Niemeyer',
    categoria: 'Cultura',
    duracao: 120,
    descricao: 'Reserve tempo para as exposições e para observar a arquitetura do museu, conhecido como Museu do Olho.',
    imagem: '/museu-oscar-niemeyer.jpg',
    textoAlternativo: 'Fachada do Museu Oscar Niemeyer em Curitiba.',
    credito: 'Morio',
    licenca: 'CC BY-SA 3.0',
    fonte: 'https://commons.wikimedia.org/wiki/File:Museu_Oscar_Niemeyer_7_Curitiba_Brasil.jpg',
    cor: 'bg-coral',
  },
  {
    nome: 'Parque Tanguá',
    categoria: 'Parque',
    duracao: 75,
    descricao: 'Explore os caminhos do parque e pare no mirante para apreciar a paisagem e o pôr do sol.',
    imagem: '/parque-tangua.jpg',
    textoAlternativo: 'Lago, jardins e mirante do Parque Tanguá.',
    credito: 'Marinelson Almeida',
    licenca: 'CC BY 2.0',
    fonte: 'https://commons.wikimedia.org/wiki/File:Parque_Tangu%C3%A1_-_Curitiba_-_Brasil_(10147372086).jpg',
    cor: 'bg-lime',
  },
  {
    nome: 'Ópera de Arame',
    categoria: 'Arquitetura',
    duracao: 60,
    descricao: 'Veja de perto a estrutura tubular e o cenário cercado por lago e vegetação no Parque das Pedreiras.',
    imagem: '/opera-de-arame.jpg',
    textoAlternativo: 'Estrutura metálica e cobertura transparente da Ópera de Arame.',
    credito: 'Domingos Bongestabs',
    licenca: 'CC BY-SA 4.0',
    fonte: 'https://commons.wikimedia.org/wiki/File:%C3%93pera_de_Arame_in_Curitiba_by_Domingos_Bongestabs_01.jpg',
    cor: 'bg-coral',
  },
  {
    nome: 'Largo da Ordem',
    categoria: 'Centro histórico',
    duracao: 60,
    descricao: 'Passeie pelas ruas históricas, observe os casarões e descubra cafés e espaços culturais pelo caminho.',
    imagem: '/largo-da-ordem.jpg',
    textoAlternativo: 'Movimento da feira de rua no Largo da Ordem, em Curitiba.',
    credito: 'Marcus Bezerra',
    licenca: 'Domínio público',
    fonte: 'https://commons.wikimedia.org/wiki/File:Curitiba_-_Feira_do_Largo_da_Ordem.jpg',
    cor: 'bg-lime',
  },
  {
    nome: 'Torre Panorâmica',
    categoria: 'Mirante',
    duracao: 45,
    descricao: 'Suba ao mirante para ter uma vista ampla de Curitiba e identificar diferentes regiões da cidade.',
    imagem: '/torre-panoramica.jpg',
    textoAlternativo: 'Torre Panorâmica de Curitiba vista de baixo.',
    credito: 'Paulo JC Nogueira',
    licenca: 'CC BY-SA 3.0',
    fonte: 'https://commons.wikimedia.org/wiki/File:Torre_Panor%C3%A2mica_-_Curitiba_PR_-_panoramio.jpg',
    cor: 'bg-coral',
  },
];

function formatarDuracao(minutos) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  if (horas === 0) {
    return `${minutosRestantes} min`;
  }

  if (minutosRestantes === 0) {
    return `${horas} h`;
  }

  return `${horas} h ${minutosRestantes} min`;
}

function classificarRoteiro(totalMinutos) {
  if (totalMinutos > 360) {
    return 'Dia completo';
  } else if (totalMinutos > 180) {
    return 'Meio período';
  } else {
    return 'Passeio rápido';
  }
}

function criarCardLugar(lugar, indice) {
  const card = document.createElement('article');
  card.className = 'group flex min-h-64 flex-col justify-between border border-forest/15 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg sm:p-6';

  const figura = document.createElement('figure');
  figura.className = '-mx-5 -mt-5 mb-5 overflow-hidden sm:-mx-6 sm:-mt-6';

  const imagem = document.createElement('img');
  imagem.className = 'aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-[1.03]';
  imagem.src = lugar.imagem;
  imagem.alt = lugar.textoAlternativo;
  imagem.loading = 'lazy';
  imagem.decoding = 'async';

  const credito = document.createElement('figcaption');
  credito.className = 'px-3 py-2 text-right text-[10px] leading-4 text-forest/60';
  credito.append(document.createTextNode(`Foto: ${lugar.credito} · `));

  const linkFonte = document.createElement('a');
  linkFonte.className = 'underline decoration-forest/30 underline-offset-2 hover:text-coral';
  linkFonte.href = lugar.fonte;
  linkFonte.target = '_blank';
  linkFonte.rel = 'noreferrer';
  linkFonte.textContent = lugar.licenca;
  credito.append(linkFonte);
  figura.append(imagem, credito);

  const topo = document.createElement('div');
  topo.className = 'flex items-start justify-between gap-4';

  const numero = document.createElement('span');
  numero.className = `grid h-10 w-10 shrink-0 place-items-center rounded-full ${lugar.cor} text-sm font-extrabold text-forest`;
  numero.textContent = String(indice + 1).padStart(2, '0');

  const categoria = document.createElement('p');
  categoria.className = 'pt-2 text-xs font-extrabold uppercase tracking-wider text-forest/55';
  categoria.textContent = lugar.categoria;
  topo.append(numero, categoria);

  const titulo = document.createElement('h3');
  titulo.className = 'mt-8 font-display text-2xl leading-tight';
  titulo.textContent = lugar.nome;

  const descricao = document.createElement('p');
  descricao.className = 'mt-3 text-sm leading-6 text-forest/70';
  descricao.textContent = lugar.descricao;

  const rodape = document.createElement('div');
  rodape.className = 'mt-6 flex items-center justify-between border-t border-forest/10 pt-4';

  const rotulo = document.createElement('span');
  rotulo.className = 'text-xs font-semibold text-forest/55';
  rotulo.textContent = 'Tempo estimado';

  const duracao = document.createElement('span');
  duracao.className = 'text-sm font-extrabold';
  duracao.textContent = formatarDuracao(lugar.duracao);
  rodape.append(rotulo, duracao);

  card.append(figura, topo, titulo, descricao, rodape);
  return card;
}

let totalMinutos = 0;
let locaisAcimaDaReferencia = 0;
const referenciaMinutos = 60;
const listaLugares = document.querySelector('#lista-lugares');

for (const [indice, lugar] of lugares.entries()) {
  totalMinutos += lugar.duracao;

  if (lugar.duracao > referenciaMinutos) {
    locaisAcimaDaReferencia += 1;
  }

  listaLugares.append(criarCardLugar(lugar, indice));
}

const mediaMinutos = Math.round(totalMinutos / lugares.length);
const temSeisLocais = lugares.length === 6;
const resultadoTotal = document.querySelector('#tempo-total');
const resultadoMedia = document.querySelector('#tempo-medio');
const resultadoLocais = document.querySelector('#locais-longos');
const resultadoClassificacao = document.querySelector('#classificacao');

resultadoTotal.textContent = formatarDuracao(totalMinutos);
resultadoMedia.textContent = `${formatarDuracao(mediaMinutos)} por parada`;
resultadoLocais.textContent = `${locaisAcimaDaReferencia} de ${lugares.length} locais`;

if (temSeisLocais && totalMinutos >= 0) {
  resultadoClassificacao.textContent = classificarRoteiro(totalMinutos);
} else {
  resultadoClassificacao.textContent = 'Dados incompletos';
}

console.log(`Tempo total do roteiro: ${formatarDuracao(totalMinutos)}`);
console.log(`Média por local: ${formatarDuracao(mediaMinutos)}`);
console.log(`Locais acima de ${referenciaMinutos} minutos: ${locaisAcimaDaReferencia}`);
console.log(`Classificação: ${resultadoClassificacao.textContent}`);