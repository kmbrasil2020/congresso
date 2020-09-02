// Link da transmissão
//<iframe
//    src="https://www.youtube.com/embed/60RET2EBxvo?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&//amp;rel=0&amp;enablejsapi=1&amp;autoplay=1"
//    allowfullscreen
//    allowtransparency
//    allow="autoplay; fullscreen"
//></iframe>


// Link de perguntas
// Link da presença
//<a class="btn btn-info" onclick=" window.open('https://docs.google.com/forms/d/e/1FAIpQLScAJjqwb9P12lGHW30ainU4gKocm3N--T5xelipynm3Jr_9tA/viewform?usp=sf_link','_blank')">Envie sua pergunta</a>

// Título da sala menu
//<h5 class="menu-lateral-item-title"> Apresentação de Trabalhos</h5>

// Título da sala descrição
//<h2>KM Brasil 2020 - PAINEL: Destino do Trabalho</h2>


// definido as sessões:
var sessao1Min = 50;
var sessao1Hora = 18;
var sessao1Titulo = 'titulo 1';
var sessao1Descricao = 'descrição 1';
var sessao1FormPerguntas = 'perguntas 1';
var sessao1FormPresenca = 'presença 1';


// Sessão 2:
var sessao2Min = 52;
var sessao2Hora = 18;
var sessao2Titulo = 'titulo 2';
var sessao2Descricao = 'descrição 2';
var sessao2FormPerguntas = 'perguntas 2';
var sessao2FormPresenca = 'presença 2';

// Sessão 3:
var sessao3Min = 53;
var sessao3Hora = 18;
var sessao3Titulo = 'titulo 2';
var sessao3Descricao = 'descrição 2';
var sessao3FormPerguntas = 'perguntas 2';
var sessao3FormPresenca = 'presença 2';

//----------------------------------------------------------------
var sessaoAtual = '';

function verifica() {
  // Pega hora:
  var horaAgora = new Date().getHours();
  var minutoAgora = new Date().getMinutes();

  
  // Valida a hora
  if ( minutoAgora >= sessao1Min && minutoAgora < sessao2Min){
    console.log('Estamos na sessão 1');
    sessaoAtual = 1;
  } else if ( minutoAgora >= sessao2Min && minutoAgora < sessao3Min) {
    console.log('Estamos na sessão 2')
    sessaoAtual = 2;
  } else if ( minutoAgora >= sessao2Min) {
    console.log('Estamos na sessão 3')
    sessaoAtual = 3;
  } else {
    sessaoAtual = 0;
    console.log('Você está na sessão: ' + sessaoAtual);
  }
};

verifica();
console.log('Você está na sessão: ' + sessaoAtual);

//setInterval(verifica, 4000);