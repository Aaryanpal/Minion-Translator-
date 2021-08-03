var btnTranslate  = document.querySelector("#btn-translate");
var textArea = document.querySelector("#text-area");
var outputDiv=document.querySelector("#output");

// outputDiv.innerText='Input HTML';
console.log(outputDiv);
function clickHandler(){
    console.log("clicked");
    console.log("input",textArea.value)
    }

btnTranslate.addEventListener("click", clickHandler)

