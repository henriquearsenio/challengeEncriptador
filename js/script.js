let entradaTexto = document.querySelector("#texto-entrada");
let saidaTexto = document.querySelector("#texto-saida");

entradaTexto.addEventListener("input", function(){
    if(this.value.length == 0){
        document.getElementById("texto-saida").style.height = "100%";
        document.querySelector(".banner").classList.remove('esconder');
        document.querySelector(".informacao").classList.remove('esconder');
        document.querySelector("#botao-copiar").classList.add('esconder')
        saidaTexto.value = "";
    }
})

saidaTexto.addEventListener("input", function(){
    if(this.value.length > 0){
        document.querySelector("#botao-copiar").classList.remove('esconder');
    }
})

function btnCriptografar(){
    if(entradaTexto.value.length == 0){
        alert("Você deve digitar um texto antes de Criptografar!");
    } else {
        document.getElementById("texto-saida").style.height = "200px";
        saidaTexto.value = criptografar(entradaTexto.value);
        document.querySelector(".banner").classList.add('esconder');
        document.querySelector(".informacao").classList.add('esconder');
        document.querySelector("#botao-copiar").classList.remove('esconder')
    }
}

function btnDescriptografar(){
    if(entradaTexto.value.length == 0){
        alert("Você deve digitar um texto antes de Descriptografar!");
    } else {
        document.getElementById("texto-saida").style.height = "200px";
        saidaTexto.value = descriptografar(entradaTexto.value);
        document.querySelector(".banner").classList.add('esconder');
        document.querySelector(".informacao").classList.add('esconder');
        document.querySelector("#botao-copiar").classList.remove('esconder')
    }
}

function criptografar(stringEncriptada){
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }     
    }

    return stringEncriptada;
}

function descriptografar(stringEncriptada){
    let matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }     
    }

    return stringEncriptada;
}