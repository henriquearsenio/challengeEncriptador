let getValue = (input) => input.value;
let clipboard = navigator.clipboard;

function copiar() {
    saidaTexto.focus();

    let copyText = getValue(saidaTexto);

    clipboard.writeText(copyText).then(() => {
        document.getElementById("sucesso").classList.remove("esconder-animado");
        setTimeout(() => {
            document.querySelector("#sucesso").classList.add('esconder-animado');
        }, 2000); 
    });
}