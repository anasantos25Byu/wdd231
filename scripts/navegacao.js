
const menuBotao = document.querySelector("#menuBotao");
const menuNavegacao = document.querySelector("#menuNavegacao");

menuBotao.addEventListener("click", () => {

    const aberto = menuNavegacao.classList.toggle("aberta");

    menuBotao.setAttribute("aria-expanded", aberto);

    menuBotao.textContent = aberto ? "✕" : "☰";

    menuBotao.setAttribute(
        "aria-label",
        aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
});

