
let textArea = document.querySelector('#decoder-text-input');
let hideImage = document.querySelector('.out-text-undefined');
let showText = document.querySelector('.out-text-defined');


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
}

function decoderText(){
    hideElement();
}

