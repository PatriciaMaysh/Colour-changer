const colours = ["orange","lightblue", "lightgreen", "violet", "pink", "yellow"];
const btn = document.getElementById ("btn");
const colourText = document.getElementById("colour");
btn.addEventListener ("click", function (){
    const j= Math.floor (Math.random () * (colours.length));
    const randomColour = colours[j];
    document.body.style.backgroundColor = randomColour;
    colourText.textContent = randomColour;
}); 


       
       