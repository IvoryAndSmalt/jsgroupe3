var rectangle = document.getElementById("rectangle");
rectangle.style.width = "100px";
rectangle.style.height = "100px";
rectangle.style.backgroundColor = "blue";

// var event = new MouseEvent('click');

// var cancelled = !cb.dispatchEvent(event);   

document.addEventListener("keydown", function(){
    rectangle.style.marginBottom="100px";
    console.log(rectangle.style.marginBottom);
});

document.addEventListener("keyup", function(){
    rectangle.style.marginBottom="0";
    console.log(rectangle.style.marginBottom);
});