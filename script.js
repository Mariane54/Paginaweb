const botao = document.querySelector("button");
botao.addEventlistener("click",botaoclicado);
function botaoclicado(){
    console.log("Fui clicado");
    let texto = botao.querySelector("span");
    texto.textContent++;
}