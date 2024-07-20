let textArea = document.querySelector("#decoder-text-input");
let hideImage = document.querySelector(".out-text-undefined");
let showText = document.querySelector(".out-text-defined");
let outText = document.querySelector(".out-text-decoder");

function hideElement() {
  if (textArea.value == "" && verifyText(text)) {
    hideImage.style.display = "";
    showText.style.display = "none";
  } else {
    hideImage.style.display = "none";
    showText.style.display = "";
  }
}

function showPopoutError() {
  var popout = document.querySelector(".popout");
  var buttons = document.querySelectorAll(".buttons-section .btn");
  popout.style.display = "block";
  
  buttons.forEach(function(button) {
    button.style.background = "red";
    button.style.color = "white";
    button.style.border = "none";
  });
  setTimeout(function () {
    popout.style.display = "none";
    buttons.forEach(function(button) {
      button.style.background = "";
      button.style.color = "";
    button.style.border = "";
    });
  }, 3000);
}

function showElementError() {
  hideImage.style.display = "";
  showText.style.display = "none";
}

function verifyText(text) {
  return !/[A-ZÀ-ü0-9/;!@#$%^&*()_+[\]{}|\\,.<>?`~:='"-]/.test(text);
}

function encryptText() {
  let text = textArea.value;
  if (verifyText(text)) {
    text = text.replaceAll("e", "enter");
    text = text.replaceAll("i", "imes");
    text = text.replaceAll("a", "ai");
    text = text.replaceAll("o", "ober");
    text = text.replaceAll("u", "ufat");
    outText.innerHTML = text;
    hideElement();
  } else {
    showElementError();
    showPopoutError();
  }
}

function decoderText() {
  let text = textArea.value;
  if (verifyText(text) && text != "") {
    hideElement();
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ai", "a");
    text = text.replaceAll("ober", "o");
    text = text.replaceAll("ufat", "u");
    outText.innerHTML = text;
  } else {
    showElementError();
    showPopoutError();
  }
}

function copyText() {
  let copy = document.querySelector(".out-text-decoder").innerHTML;
  navigator.clipboard.writeText(copy);
}
