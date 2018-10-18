var rectangle = document.getElementById("rectangle");
rectangle.style.width = "100px";
rectangle.style.height = "100px";
rectangle.style.backgroundColor = "blue";

document.addEventListener("keydown", function (event) {
    if (event.keyCode == "38") {
        rectangle.style.marginBottom = "100px";
        Timer = setTimeout(function(){
            rectangle.style.marginBottom = "0px";
         }, 500);
    }
});

// document.addEventListener("keyup", function (event) {
//     if (event.keyCode == "38") {
//         rectangle.style.marginBottom = "0";
//     }
// });

