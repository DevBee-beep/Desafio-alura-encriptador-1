const textoDeEntrada = document.getElementById('entrada');
const textoDeSaida = document.getElementById('saida');

function Criptografar() {
    let matrizCodigo = [
        ["e" , "enter"],
        ["i" , "imes"],
        ["a" , "ai"],
        ["o" , "ober"],
        ["u" , ufat]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringEncriptada;


}

function Descriptografar() {
    let matrizCodigo = [
        ["e" , "enter"],
        ["i" , "imes"],
        ["a" , "ai"],
        ["o" , "ober"],
        ["u" , ufat]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][0]);
            }
        }

        return stringDesencriptada;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textoDeEntrada.value);
    textoDeSaida.value = textoEncriptado;
    textoDeEntrada.value = "";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textoDeEntrada.value);
    textoDeSaida.value = textoDesencriptado;
    textoDeEntrada.value = "";
}



//----

/*
const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function encriptar() {
    let matrizCodigo = [
        ["e" , "enter"],
        ["i" , "imes"],
        ["a" , "ai"],
        ["o" , "ober"],
        ["u" , ufat]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e" , "enter"],
        ["i" , "imes"],
        ["a" , "ai"],
        ["o" , "ober"],
        ["u" , ufat]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][0]);
            }
        }

        return stringDesencriptada;
}*/ 