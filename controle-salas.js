// Sala 1:
var sala1Bandeira = 'br';
var sala1TituloMenu = 'Empresas Digitais GC como Alicerce da Transformação Digital';
//var sala1TituloDescricao = 'titulo Sala 1';
var sala1FormPerguntas = 'https://docs.google.com/forms/d/e/1FAIpQLScjdBmOfRUxxcWjhR-Ud6Z2K-s-t_zDA4J83aAGb_pEHgJILg/viewform?usp=sf_link';
var sala1FormPresenca = 'https://docs.google.com/forms/d/e/1FAIpQLSdbqhQo90TyBOYQmTFb_aIIsux2uPWkTCpdZTiMZIOYPPtt2A/viewform?usp=sf_link';
var sala1Descricao = 'Filipe';

// Sala 2:
var sala2Bandeira = 'us';
var sala2TituloMenu = sala1TituloMenu;
//var sala2TituloDescricao = 'titulo Sala 2';
var sala2FormPerguntas = sala1FormPerguntas;
var sala2FormPresenca = sala1FormPresenca;
var sala2Descricao = 'descrição Sala 2';

// Sala 3:
var sala3Bandeira = 'us';
var sala3TituloMenu = 'KM as a Supporting Tool for Urban Organizing';
//var sala3TituloDescricao = 'titulo Sala 3';
var sala3FormPerguntas = 'https://docs.google.com/forms/d/e/1FAIpQLSf_mZB6wM0oEDP-cCLQq5DgYLWjvns_LK8mOZ7Zcp45s66bkg/viewform?usp=sf_link';
var sala3FormPresenca = 'https://docs.google.com/forms/d/e/1FAIpQLSfI2L-UiSrfkxIeviyXSBCDpYnmoiD6KV8lPbgnkS-jhVKnoA/viewform?usp=sf_linka Sala 3';
var sala3Descricao = 'descrição Sala 3';

// Sala 4:
var sala4Bandeira = 'br';
var sala4TituloMenu = sala3TituloMenu;
//var sala4TituloDescricao = 'titulo Sala 4';
var sala4FormPerguntas = sala3FormPerguntas;
var sala4FormPresenca = sala3FormPresenca;
var sala4Descricao = 'descrição Sala 4';

// Sala 4:
var sala5Bandeira = 'us';
var sala5TituloMenu = 'VAZIA';
//var sala5TituloDescricao = 'titulo Sala 5';
var sala5FormPerguntas = '';
var sala5FormPresenca = '';
var sala5Descricao = '';


// -------------------------------------------------------------------------------------
// Montando Menu:
document.querySelector("#TituloMenu1").textContent = sala1TituloMenu;
document.querySelector("#TituloMenu2").textContent = sala1TituloMenu;
document.querySelector("#TituloMenu3").textContent = sala3TituloMenu;
document.querySelector("#TituloMenu4").textContent = sala4TituloMenu;
document.querySelector("#TituloMenu5").textContent = sala5TituloMenu;
  
// -------------------------------------------------------------------------------
// Montando bandeiras:
document.querySelector("#flag1").src = "https://disease.sh/assets/img/flags/" + sala1Bandeira + ".png";
document.querySelector("#flag2").src = "https://disease.sh/assets/img/flags/" + sala2Bandeira + ".png";
document.querySelector("#flag3").src = "https://disease.sh/assets/img/flags/" + sala3Bandeira + ".png";
document.querySelector("#flag4").src = "https://disease.sh/assets/img/flags/" + sala4Bandeira + ".png";
document.querySelector("#flag5").src = "https://disease.sh/assets/img/flags/" + sala5Bandeira + ".png";

// -------------------------------------------------------------------------------
// Montando Título da Descrição:
// document.querySelector("#tituloDescricao1").textContent = 'KM Brasil 2020 - ' + sala1TituloMenu;
// Script específico em cada página

// -------------------------------------------------------------------------------
// Montando descrição:





// Constructor bandeira
function constructOnFlag(bandeira) {
if (bandeira == 'us') {
    document.querySelector("#flag-sala-1").src = "https://disease.sh/assets/img/flags/us.png";
} else if (bandeira == 'br') {
    document.querySelector("#flag-sala-1").src = "https://disease.sh/assets/img/flags/br.png";
} else {
    console.log('ERRO NA BANDEIRA!!');
}
};

// Constructor Título da descrição
function constructOnTituloDescricao(text) {
document.querySelector("#tituloDescricao").textContent = text;
};

// Constructor da descrição
function constructOnDescricao(text) {
document.querySelector("#textDescricao").textContent = text;
};

// Constructor título da sala menu
function constructOnTituloMenu(text) {
document.querySelector("#tituloMenu").textContent = text;
};

// link de perguntas/link da presença
function linkPerguntas(link) {
//window.open(link,'_blank')
};

function linkPresenca(link) {
//window.open(link ,'_blank')
};

// -------------------------------------------------------------------------------

























  // Variáveis de tempo
  var horaAgora = new Date().getHours();
  var minutoAgora = new Date().getMinutes();





  // Declara variáveis para cada horário e executa os constructors
  function verifica() {
    // Pega hora:
    var getHora = new Date().getHours();
    var getMinuto = new Date().getMinutes();
    var horaAgora = '' + getHora + getMinuto;
    
    // Constroe:
    if (horaAgora >= 43 && horaAgora < 45){
      // SESSÃO 1
      console.log('Estamos na sessão 1');
      

    } else if ( horaAgora >= 45 && horaAgora < 46 ) {
      // SESSÃO 2
      console.log('Estamos na sessão 2');
   
      

    } else if ( horaAgora >= 46 && horaAgora < 47 ) {
      // SESSÃO 3
      console.log('Estamos na sessão 3');

      

    } else if ( horaAgora >= 101 && horaAgora < 1025 ) {
      // SESSÃO 4
      console.log('Estamos na sessão 4');
   
  
      

    } else {
      console.log('ERRO NA SESSÃO');

    }
  };
  //constructOnFlag(flagSala);
  //constructOnTituloDescricao(tituloDescricao);
  //constructOnDescricao(text)
  //constructOnTituloMenu(text)

  // Loop de verificação
  //setInterval(verifica, 4000);
