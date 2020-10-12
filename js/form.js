//form script

var inputName = document.getElementById("input-name");
var inputMail = document.getElementById("input-email");
var inputSubject = document.getElementById("input-subject");
var inputMessage = document.getElementById("input-message");
var button = document.querySelector(".submit-button");
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector(".form");

function checkInput() {
  if (
    inputName.value.trim() !== "" &&
    regEx.test(inputMail.value) &&
    inputSubject.value.trim() !== "" &&
    inputMessage.value.trim() !== ""
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
form.addEventListener("submit", function (event) {
  form.submit();
});

// /form script
