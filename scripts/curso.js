
const cursos = [
    {
        code: "CSE 110",
        name: "Introdução à Programação",
        credits: 2,
        type: "CSE",
        completed: true
    },
    {
        code: "CSE 111",
        name: "Programação com Funções",
        credits: 2,
        type: "CSE",
        completed: true
    },
    {
        code: "WDD 130",
        name: "Fundamentos da Web",
        credits: 2,
        type: "WDD",
        completed: true
    },
    {
        code: "WDD 131",
        name: "Fundamentos da Web Dinâmica",
        credits: 2,
        type: "WDD",
        completed: true
    },
    {
        code: "WDD 231",
        name: "Desenvolvimento Frontend para Web I",
        credits: 2,
        type: "WDD",
        completed: false
    },
    {
        code: "CSE 210",
        name: "Programação com Classes",
        credits: 2,
        type: "CSE",
        completed: false
    }
];

const listaCursos = document.querySelector("#listaCursos");
const totalCreditos = document.querySelector("#totalCreditos");

const botaoTodos = document.querySelector("#todos");
const botaoWdd = document.querySelector("#wdd");
const botaoCse = document.querySelector("#cse");

function mostrarCursos(lista) {

    listaCursos.innerHTML = "";

    lista.forEach((curso) => {

        const cartao = document.createElement("article");

        cartao.classList.add("curso");

        if (curso.completed) {
            cartao.classList.add("concluido");
        }

        cartao.innerHTML = `
            <div class="curso-cabecalho">
                <h3>${curso.code}</h3>
                <span class="status">
                    ${curso.completed ? "✓ Concluído" : "Em andamento"}
                </span>
            </div>

            <p>${curso.name}</p>

            <strong>${curso.credits} créditos</strong>
        `;

        listaCursos.appendChild(cartao);
    });

    const creditos = lista.reduce(
        (total, curso) => total + curso.credits,
        0
    );

    totalCreditos.textContent = creditos;
}

function atualizarBotoes(botaoSelecionado) {

    document.querySelectorAll(".filtro").forEach((botao) => {
        botao.classList.remove("ativo");
    });

    botaoSelecionado.classList.add("ativo");
}

botaoTodos.addEventListener("click", () => {

    mostrarCursos(cursos);
    atualizarBotoes(botaoTodos);
});

botaoWdd.addEventListener("click", () => {

    const cursosWdd = cursos.filter(
        (curso) => curso.type === "WDD"
    );

    mostrarCursos(cursosWdd);
    atualizarBotoes(botaoWdd);
});

botaoCse.addEventListener("click", () => {

    const cursosCse = cursos.filter(
        (curso) => curso.type === "CSE"
    );

    mostrarCursos(cursosCse);
    atualizarBotoes(botaoCse);
});

mostrarCursos(cursos);
