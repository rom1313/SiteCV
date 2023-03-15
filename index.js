

// todo -------------------------- IMPORTS -----------------------------------

import { changerpage, blockpixelfunc } from "./modules/fonctions.js"
import { recits, imagespixelart, son, descriptiontext } from "./modules/variables.js"

export const genius = $

// todo -------------------------- MAIN -----------------------------------

export let pageactuelle = "acceuil"
export let contenupagehtml = document.querySelector("#contenupagehtml")

export let countfleche = {
    value: 0
}


// todo -------------------------- EVENTS -----------------------------------

// todo--------- events menu
genius.event("#acceuil", "click", () => {
    changerpage("acceuil", contenupagehtml)

})

genius.event("#articles", "click", () => {
 
    pageactuelle = "articles"
    changerpage("articles", contenupagehtml)
   


})
genius.event("#contact", "click", () => {
    pageactuelle = "contact"
    changerpage("contact", contenupagehtml)

    // todo-------- mail contact
    genius.event("#mailcopie", "click", (e) => {
        son.boutton.volume = 0.1
        son.boutton2.play()

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
    // todo-------- tel contact
    genius.event("#telcopie", "click", (e) => {
        son.boutton.volume = 0.1
        son.boutton2.play()
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
// todo-------- Boutton Creation
genius.event("#creations", "click", () => {
    son.boutton.volume = 0.1
    son.boutton.play()
    changerpage("creations", contenupagehtml)
    pageactuelle = "creations"
    countfleche.value = 0
    blockpixelfunc()



})






// todo-------- events genius powered



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


