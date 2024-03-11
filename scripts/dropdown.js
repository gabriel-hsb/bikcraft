// seleciona os button dentro do .perguntas
const perguntas = document.querySelectorAll(".perguntas button");

// principal função: pega a pergunta que foi clicada,
// pega o aria-controls e qqr elemento (nesse caso a resposta)
// que tem o ID igual ao aria-controls (isso foi feito no html)
// se a resposta tiver a class active, tira, e se nao tiver, aidiciona
// também deixa o aria-expanded = true (para acessibilidade)
function perguntaActive(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  const active = resposta.classList.contains("active");

  resposta.classList.toggle("active");
  pergunta.setAttribute("aria-expanded", active);
}

// eventListener para quando o user clicar na pergunta, adicionar
// o resultado da função perguntaActive
function eventoPergunta(pergunta) {
  pergunta.addEventListener("click", perguntaActive);
}

//para cada button dentro do .perguntas, adiciona o eventListener
perguntas.forEach(eventoPergunta);