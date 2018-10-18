var pacman = document.getElementById("pacman");
var jouer = document.getElementById("jouer");
pacman.style.top = "350px";
pacman.style.right = "400px";
var montimer;
var upstarted = 0;
var leftstarted = 0;
var rightstarted = 0;
var downstarted = 0;

setInterval(function () {
    // console.log(pacman.style.top)
    // console.log(pacman.style.right)
}, 200)

jouer.addEventListener("click", function () {
    jouer.style.display = "none";
    lancerLeJeu();
});

// lancerLeJeu();

function lancerLeJeu() {

    document.addEventListener("keydown", function (event) {
        clearInterval(montimer);
        pacman.style.display = "block";
        if (event.keyCode == "38") {
            if (upstarted == 1) { return; }
            upstarted = 1;
            leftstarted = 0;
            rightstarted = 0;
            downstarted = 0;
            pacman.style.transform = "rotate(-90deg)";
            montimer = setInterval(function () {
                if (parseInt(pacman.style.top) <= 1){
                    clearInterval(montimer);
                    console.log("STOP");
                }
                else {
                    pacman.style.top = parseFloat(pacman.style.top) - 3 + "px";
                }
            }, 10);
        }
        else if (event.keyCode == "40") {
            if (downstarted == 1) { return; }
            downstarted = 1;
            leftstarted = 0;
            rightstarted = 0;
            upstarted = 0;
            pacman.style.transform = "rotate(90deg)";

            montimer = setInterval(function () {
                pacman.style.top = parseFloat(pacman.style.top) + 3 + "px";
                if (parseInt(pacman.style.top) >= 469){
                    clearInterval(montimer);
                    console.log("STOP");
                }
            }, 10);
        }
        else if (event.keyCode == "37") {
            if (leftstarted == 1) { return; }
            leftstarted = 1;
            rightstarted = 0;
            downstarted = 0;
            upstarted = 0;
            pacman.style.transform = "rotate(180deg)";

            montimer = setInterval(function () {
                pacman.style.right = parseFloat(pacman.style.right) + 3 + "px";
                if (parseInt(pacman.style.right) >= 969) {
                    clearInterval(montimer);
                    console.log("STOP");
                }
            }, 10);
        }
        else if (event.keyCode == "39") {
            if (rightstarted == 1) { return; }
            rightstarted = 1;
            leftstarted = 0;
            downstarted = 0;
            upstarted = 0;
            pacman.style.transform = "rotate(0)";

            montimer = setInterval(function () {
                pacman.style.right = parseFloat(pacman.style.right) - 3 + "px";
                if (parseInt(pacman.style.right) <= 1) {
                    clearInterval(montimer);
                    console.log("STOP");
                }
            }, 10);
        }
    });

}




// transform: rotate(20deg);
// left: 37
// down: 40
// right: 39

// pacman.style.top = "0px";
// pacman.style.right = "0px";