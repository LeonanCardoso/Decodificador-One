
let textArea = document.querySelector('#decoder-text-input');
let hideImage = document.querySelector('.out-text-undefined');
let showText = document.querySelector('.out-text-defined');

let outText = document.querySelector('.out-text-decoder');


function hideElement (){
    if (textArea.value == ''){
        hideImage.style.display='';
        showText.style.display='none';
    } else {
        hideImage.style.display='none';
        showText.style.display='';
    }
}

function encryptText(){
    hideElement();
    let text = textArea.value;
    text = text.replaceAll("e", "enter");
    text = text.replaceAll("i", "imes");
    text = text.replaceAll("a", "ai");
    text = text.replaceAll("o", "ober");
    text = text.replaceAll("u", "ufat");
    console.log(text);
    outText.innerHTML = text;

}

function decoderText(){
    hideElement();
    let text = textArea.value;
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ai", "a");
    text = text.replaceAll("ober", "o");
    text = text.replaceAll("ufat", "u");
    outText.innerHTML = text;
}

