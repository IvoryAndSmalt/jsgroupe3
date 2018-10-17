var texte = document.getElementById("textequigrandit");
<<<<<<< HEAD

function grossitLeTexte(){
texte.style.fontSize ="30px";
}

document.addEventListener("click", grossitLeTexte);{
console.log(texte);
}
=======
texte.style.fontSize = "20px";

texte.addEventListener("click", function () {
    if (texte.style.fontSize === "20px"){
        texte.style.fontSize = "30px";
        console.log(texte.style.fontSize);
    }
    else {
        texte.style.fontSize = "20px";
        console.log(texte.style.fontSize);
    }
    console.log(texte.style.fontSize);
});
>>>>>>> 802039afbbc2c8a7ac8f6a1752e44522d4351fb0
