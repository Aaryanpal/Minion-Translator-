var btnTranslate  = document.querySelector("#btn-translate");
var textArea = document.querySelector("#text-area");
var outputDiv=document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// outputDiv.innerText='Input HTML';

function getranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("Error Occured",error);
    alert("Something wrong with the server")
}

function clickHandler(){
    
    var inputText = textArea.value;
    fetch(getranslationURL(inputText))
    .then(response => response.json())
    .then(json=>{
       var translatedText = json.contents.translated;
       outputDiv.innerText= translatedText;
    })
        .catch(errorHandler)
    };

btnTranslate.addEventListener("click", clickHandler)

