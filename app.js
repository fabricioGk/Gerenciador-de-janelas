let novaJanela;

function abrirJanela(){
    novaJanela = window.open("", "Novajanela", "width=450, height=150");
    novaJanela.document.write("<h1>Uma nova pagina foi criada! </h1>");
}
function fecharJanela(){
    novaJanela.close();
}
function nomeNavegador(){
    alert(navigator.appName);
}