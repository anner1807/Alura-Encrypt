function encriptar() {
    let parrafo = document.getElementById("texto").value;
let parrafo2 = "";

let inicio = 0;
let final = 0;



for (let i = 0; i < parrafo.length; i++) {
    let letra = parrafo.charAt(i);

    switch (letra) {
        case 'a':
            final = i;
            parrafo2 += parrafo.substring(inicio, final);
            parrafo2 += "ai";
            inicio = final+=1;
            break;
        case 'e':
            final = i;
            parrafo2 += parrafo.substring(inicio, final);
            parrafo2 += "enter";
            inicio = final += 1;
            break;
        case 'i':
            final = i;
            parrafo2 += parrafo.substring(inicio, final);
            parrafo2 += "imes";
            inicio = final += 1;
            break;
        case 'o':
            final = i;
            parrafo2 += parrafo.substring(inicio, final);
            parrafo2 += "ober";
            inicio = final += 1;
            break;
        case 'u':
            final = i;
            parrafo2 += parrafo.substring(inicio, final);
            parrafo2 += "ufat";
            inicio = final += 1;
            break;
    }
    
}

document.getElementById("texto2").value = parrafo2;
document.getElementById("muneco").style.display = "none";
document.getElementById("mensaje").style.display = "none";
document.getElementById("copiar").style.display = "flex";
}

function desencriptar() {
    let parrafo = document.getElementById("texto").value;

    for (let i = 0; i < parrafo.length; i++) {
        let letra = parrafo.charAt(i);

        switch (letra) {
            case 'a':
                parrafo = parrafo.replace("ai", "a");
                break;
            case 'e':
                parrafo = parrafo.replace("enter", "e");
                break;
            case 'i':
                parrafo = parrafo.replace("imes", "i");
                break;
            case 'o':
                parrafo = parrafo.replace("ober", "o");
                break;
            case 'u':
                parrafo = parrafo.replace("ufat", "u");
                break;
        }
    }

    document.getElementById("texto2").value = parrafo;
}

function copiar() {
    let parrafo = document.getElementById("texto2").value;
    document.getElementById("texto").value = parrafo;
}