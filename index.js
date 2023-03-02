

// todo -------------------------- IMPORTS -----------------------------------

import { changerpage, } from "./modules/fonctions.js"
import { recits, imagespixelart, son } from "./modules/variables.js"
export const genius = $

// todo -------------------------- MAIN -----------------------------------

export let pageactuelle = "acceuil"
export let contenupagehtml = document.querySelector("#contenupagehtml")
let blockpixelactif = false
export let countfleche = 1
let copie = 0
// todo -------------------------- EVENTS -----------------------------------

// todo--------- events menu
genius.event("#acceuil", "click", () => {
    changerpage("acceuil", contenupagehtml)
    countfleche = 1
})

genius.event("#articles", "click", () => {
    pageactuelle = "articles"
    changerpage("articles", contenupagehtml)
    countfleche = 1
})
genius.event("#contact", "click", () => {
    pageactuelle = "contact"
    changerpage("contact", contenupagehtml)
    countfleche = 1
    // todo-------- copie contact
    genius.event("#mailcopie", "click", (e) => {

        let p = genius.element("p", "#textecopie")
        genius.textContent("copié", "#textecopie")
        p.style.left = e.clientX + 20 + "px"
        p.style.top = e.clientY - 20 + "px"
        genius.timeursecondes(0.5, () => {
            p.remove()
        })
        document.querySelector("#telcopie").src = "./ressources/img/copie.png"
        e.target.src = "./ressources/img/copie2.png";
        navigator.clipboard.writeText("romain.gavin@outlook.fr");
    })
    genius.event("#telcopie", "click", (e) => {
        let p = genius.element("p", "#textecopie")
        genius.textContent("copié", "#textecopie")
        p.style.left = e.clientX + 20 + "px"
        p.style.top = e.clientY - 20 + "px"
        genius.timeursecondes(0.5, () => {
            p.remove()
        })
        document.querySelector("#mailcopie").src = "./ressources/img/copie.png"
        e.target.src = "./ressources/img/copie2.png";
        navigator.clipboard.writeText("0751133562");

    })
})

genius.event("#creations", "click", () => {
    pageactuelle = "creations"
    changerpage("creations", contenupagehtml)
    countfleche = 1
    // todo-------- events blockpixelart
    genius.event("#blockpixelart", "click", () => {
        let img = genius.element("img", ".imgpixel")
        contenupagehtml.appendChild(img)
        img.src = `./ressources/img/pixelart/${[countfleche]}.png`
        document.querySelector("#blockpixelart").classList.add("invisible")
        document.querySelector("#flechegauchepixel").classList.remove("invisible")
        document.querySelector("#flechedroitepixel").classList.remove("invisible")
        genius.event("#flechegauchepixel", "mousedown", () => {

            if (countfleche != 1) {
                img.classList.remove("imgpixelanimation")
                countfleche--
                genius.timeursecondes(0.01, () => {
                    img.classList.add("imgpixelanimation")
                    img.src = `./ressources/img/pixelart/${[countfleche]}.png`
                    console.log(countfleche);
                })


            }
            else { }
        })

        genius.event("#flechedroitepixel", "click", () => {

            if (countfleche < imagespixelart.length) {
                img.classList.remove("imgpixelanimation")
                countfleche++
                genius.timeursecondes(0.01, () => {
                    img.classList.add("imgpixelanimation")
                    img.src = `./ressources/img/pixelart/${[countfleche]}.png`
                    console.log(countfleche);
                })

            }
            else { }
        })



    })
})






// todo-------- events logo powered
genius.event("#infosite", "click", () => {
    
    window.open("https://www.npmjs.com/package/@rom13/genius-browser")
  
    
})


// todo -------------------------- EVENTS GLOBAL -----------------------------------


onload = () => {
    particlesJS.load('particles', 'json.json')



}
oncontextmenu = () => {
    return false
}
/* document.onkeydown = function (e) {
 
    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
} */

// todo -------------------------- EVENTS SON -----------------------------------

let li = document.querySelectorAll("li")
li.forEach(element => {
    /* console.log(element.nodeName); */
    element.addEventListener("click", function () {
        son.boutton.volume = 0.1
        son.boutton.play()
    });
});



