
const anoAtual = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

const data = new Date();

anoAtual.textContent = data.getFullYear();

ultimaModificacao.textContent =
    `Última modificação: ${document.lastModified}`;

