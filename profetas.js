// URL do recurso JSON com os dados dos profetas
const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';

// Seleção do elemento container div#cartoes
const cartoes = document.querySelector('#cartoes');

// Função assíncrona para buscar os dados JSON
async function obterDadosDeProfetas() {
  const resposta = await fetch(url);
  const dados = await resposta.json();
  // console.table(dados.profetas); // Descomente para inspecionar a tabela no console
  exibirProfetas(dados.profetas);
}

// Arrow function para iterar sobre o array e construir a interface dinamicamente
const exibirProfetas = (profetas) => {
  profetas.forEach((profeta) => {
    // Criação dos elementos HTML do cartão
    let cartao = document.createElement('section');
    let nomeCompleto = document.createElement('h2');
    let dataNascimento = document.createElement('p');
    let localNascimento = document.createElement('p');
    let retrato = document.createElement('img');

    // Preenchimento do nome completo
    nomeCompleto.textContent = `${profeta.nome} ${profeta.sobrenome}`;

    // Preenchimento das informações adicionais (Data e Local de Nascimento)
    dataNascimento.textContent = `Data de Nascimento: ${profeta.dataNascimento}`;
    localNascimento.textContent = `Lugar de Nascimento: ${profeta.lugarNascimento}`;

    // Configuração dos atributos da imagem do retrato
    retrato.setAttribute('src', profeta.urlImagem);
    retrato.setAttribute('alt', `Retrato de ${profeta.nome} ${profeta.sobrenome}`);
    retrato.setAttribute('loading', 'lazy');
    retrato.setAttribute('width', '340');
    retrato.setAttribute('height', '440');

    // Inserção dos elementos no elemento de seção (cartao)
    cartao.appendChild(nomeCompleto);
    cartao.appendChild(dataNascimento);
    cartao.appendChild(localNascimento);
    cartao.appendChild(retrato);

    // Inserção do cartão final na div container
    cartoes.appendChild(cartao);
  });
};

// Chamada inicial da função principal
obterDadosDeProfetas();