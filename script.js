function speak(message) {
  var msg = new SpeechSynthesisUtterance();
  msg.rate = 0.8;
  msg.text = message;
  window.speechSynthesis.speak(msg);
}

function getText() {
  var x = document.getElementById("textbox").value;
  speak(x);
}

function clearText() {
  document.getElementById("textbox").value = "";
}
