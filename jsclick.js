console.info('Hello World !');

let compteur = 0;
let firstclick = true;
let play = true;
let chronos = 12;
let largeur = window.innerWidth;
let longeur = window.innerHeight;
console.log("largeur: " + largeur, "longeur: " + longeur);

let box2 = document.querySelector(".box2");
box2.style.background = "black";


let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.style.color = "blue";
});

box2.addEventListener('click', (event) => {
    if (play) {
        if (firstclick) {
            firstclick = false;
            setInterval(setTime, 1000);
        }
        
        compteur += 1;
        console.log('nombre de click: ', compteur);
        let x = 0;
        let y = 0;
        
        do {
            x = Math.floor(Math.random() * (largeur - 0) + 0);
            console.log(largeur, x);
        } while(x > largeur);

        do {
            y = Math.floor(Math.random() * (longeur - 0) + 0);
            console.log(longeur, y);
        } while(y > longeur);
        
        console.log("longeur:" + x, "largeur: " + y);

        event.target.style.top = y + "px";
        event.target.style.left = x + "px";
    }
});


function setTime () {
    if (play) {
        chronos--;

        if (chronos <= 10) {
            document.querySelector('.time').style.color = "black";
        }

        if (chronos <= 0) {
            play = false;
        }

        document.querySelector('.time').innerHTML = '' + chronos;
    } else {
        document.querySelector('.time').style.color = "blue";
        document.querySelector('.time').innerHTML = "Vous avez cliquez: " + compteur + " fois";
        box2.style.display = "none";
    }
}