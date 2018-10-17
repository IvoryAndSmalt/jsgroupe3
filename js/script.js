var texte = document.getElementById("textequigrandit");
texte.style.fontSize = "20px";

texte.addEventListener("keyup", function () {
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
