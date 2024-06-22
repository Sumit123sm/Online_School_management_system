// alert("Welcome to prasad english high school");
document.getElementById("mybutton").addEventListener("click", function(){
    let demoElement = document.getElementById("Demo");
    let buttonElement = document.getElementById("mybutton");
    
    if (demoElement.innerHTML === "") {
        demoElement.innerHTML = "A Flower Does not Think of Competing with the Flower Next to it. It just Blooms.";
        buttonElement.innerHTML = "Show Less";
    } else {
        demoElement.innerHTML = "";
        buttonElement.innerHTML = "Read More";
    }
});