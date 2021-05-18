const rawInput = document.querySelector("#raw-text");
const translateButton = document.querySelector(".trans-button")
const txtOutput = document.querySelector(".output-area")
const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function constructUrl(text) {
    return (url + "?text=" + text)
};
translateButton.addEventListener('click', () => {
    txtInput = rawInput.value;
    fetch(constructUrl(txtInput))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerHTML=translatedText;
    }
    );
})
