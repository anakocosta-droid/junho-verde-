var nome = "";
var capitulo = 0;
var escolha1 = "";
var escolha2 = "";
var escolha3 = "";

function entrar() {
  nome = document.getElementById("nome").value;
  if (nome.trim() === "") {
    alert("Digite seu nome para começar!");
    return;
  }
  document.getElementById("login").style.display = "none";
  document.getElementById("historia").style.display = "block";
  mostrarCapitulo();
}

function mostrarCapitulo() {
  var titulo = document.getElementById("titulo");
  var texto = document.getElementById("texto");
  var imagem = document.getElementById("imagem");
  var botoes = document.querySelector(".buttons");

  botoes.innerHTML = ""; 

  if (capitulo === 0) {
    titulo.innerText = "Capítulo 1 – O Início";
    texto.innerText = "Na escola, a professora fala sobre o Junho Verde. Clara, estudante de TI, fica empolgada e decide fazer algo para ajudar. Ela conta sua ideia para Leo, seu colega de sala.\n\n👉 O que Clara deve propor?";
    imagem.src = "image (1).png";
  
    botoes.innerHTML = `
      <button onclick="responder('reciclagem')">Criar uma campanha de reciclagem</button>
      <button onclick="responder('palestra')">Montar uma palestra interativa</button>
    `;
  } 
  else if (capitulo === 1) {
    titulo.innerText = "Capítulo 2 – O Convite";
    texto.innerText = "Leo gosta da ideia e resolve apoiar Clara. Mas agora eles precisam de mais gente para ajudar.\n\n👉 O que eles fazem?";
    imagem.src = "verde junho .png ";

    botoes.innerHTML = `
      <button onclick="responder('grupo')">Criar um grupo no WhatsApp</button>
      <button onclick="responder('professores')">Falar diretamente com os professores</button>
    `;
  } 
  else if (capitulo === 2) {
    titulo.innerText = "Capítulo 3 – A Ação";
    if (escolha1 === "reciclagem") {
      texto.innerText = "Vocês organizaram uma campanha de reciclagem. Agora precisam preparar as lixeiras e os pontos de coleta.\n\n👉 Como vocês apresentam o projeto?";
    } else {
      texto.innerText = "Vocês prepararam uma palestra sobre sustentabilidade. Agora precisam criar slides e atividades.\n\n👉 Como vocês apresentam o projeto?";
    }
    imagem.src = "decisao.png";

    botoes.innerHTML = `
      <button onclick="responder('divertida')">De forma divertida, com jogos e desafios</button>
      <button onclick="responder('seria')">De forma séria, com dados e gráficos</button>
    `;
  } 
  else if (capitulo === 3) {
  titulo.innerText = "Capítulo 4 – O Resultado";

  if (escolha3 === "seria") {
    texto.innerText = "Clara e Leo recebem um prêmio de reconhecimento pelo esforço. 🎉\n\nParabéns, " + nome + "!";
    imagem.src = "premio .png";
  } else {
    texto.innerText = "Depois do evento, a escola decide manter o projeto como tradição anual. 🌱\n\nParabéns, " + nome + "!";
    imagem.src = "anual.png";
  }

  botoes.style.display = "none";
}
}
  
function responder(opcao) {
  if (capitulo === 0) {
    escolha1 = opcao;
    capitulo = 1;
  } 
  else if (capitulo === 1) {
    escolha2 = opcao;
    capitulo = 2;
  } 
  else if (capitulo === 2) {
    escolha3 = opcao;
    capitulo = 3;
  }
  mostrarCapitulo();
}
