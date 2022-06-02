navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      console.log("Write access ranted!");
    }
});

navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      console.log("Read access ranted!");
    }
});

// function copiar(){
//     var copiarTexto = document.getElementById("texto-saida");

//     copiarTexto.select();
//     copiarTexto.setSelectionRange(0,99999);

//     navigator.clipboard.writeText(copiarTexto.value);

//     alert("Texto Copiado");
// }

let getValue = (input) => input.value;
let clipboard = navigator.clipboard;

function copiar() {
    saidaTexto.focus();

    let copyText = getValue(saidaTexto);

    clipboard.writeText(copyText).then(() => {
        console.log("Texto Copiado!");
    });
}