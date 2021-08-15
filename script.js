var textarea = document.querySelector("#textarea");
var translateBtn = document.querySelector("#translateBtn");
var outputArea = document.querySelector(".output-box");
// outputArea.innerHTML = "hello world"
function convertToBanana() {
    console.log(textarea.value)
    if(textarea.value.length > 0){
    fetch(`https://api.funtranslations.com/translate/ferb-latin.json?text=${textarea.value}`)
    .then((response) => response.json())
    .then(data => {outputArea.innerHTML= data.contents.translated;
        console.log(data.contents.translated)})
    .catch(() => alert("could not able to fetch the result try after some time"));
    }else{
        alert("Enter some text before pressing the translate button");
    }

    

}
translateBtn.addEventListener("click", convertToBanana);
// console.log(textarea.value);
