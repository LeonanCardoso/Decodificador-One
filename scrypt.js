
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
    const text = textArea.value;
}

function decoderText(){
    hideElement();
}

