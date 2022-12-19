var button = document.querySelector("#tick");
var usertext = document.querySelector("#inner-text");
var textconverted = document.querySelector("#translatedtext");

var url = "https://api.funtranslations.com/translate/morse.json";

function createfetchlink(input) {
  return (url1 = url + "?text=" + input);
}

function callApi() {}

function translate() {
  var userinput = usertext.value;

  var errormsg = "Please enter the text inside field";

  if (userinput == "") {
    alert(errormsg);
  }

  fetch(createfetchlink(userinput))
    .then((anarchy) => anarchy.json())
    .then((json) => {
      var instant = json.contents.translated;
      textconverted.innerText = instant;
    });
}

button.addEventListener("click", translate);
