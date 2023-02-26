

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
genius.event("#acceuil", "mousedown", () => {
    changerpage("acceuil", contenupagehtml)
    countfleche = 1
})

genius.event("#articles", "mousedown", () => {
    pageactuelle = "articles"
    changerpage("articles", contenupagehtml)
    countfleche = 1
})
genius.event("#contact", "mousedown", () => {
    pageactuelle = "contact"
    changerpage("contact", contenupagehtml)
    countfleche = 1
    // todo-------- copie contact
    genius.event("#mailcopie", "mousedown", (e) => {

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
    genius.event("#telcopie", "mousedown", (e) => {
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

genius.event("#creations", "mousedown", () => {
    pageactuelle = "creations"
    changerpage("creations", contenupagehtml)
    countfleche = 1
    // todo-------- events blockpixelart
    genius.event("#blockpixelart", "mousedown", () => {
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

        genius.event("#flechedroitepixel", "mousedown", () => {

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
genius.event("#logoinfo", "mousedown", () => {
    window.open("https://www.npmjs.com/package/@rom13/genius-browser")
})


// todo -------------------------- EVENTS GLOBAL -----------------------------------


onload = () => {
    particlesJS.load('particles', 'json.json')


}
oncontextmenu = () => {
    return false
}

// todo -------------------------- EVENTS SON -----------------------------------

let li = document.querySelectorAll("li")
li.forEach(element => {
    /* console.log(element.nodeName); */
    element.addEventListener("click", function () {
        son.boutton.volume = 0.1
        son.boutton.play()
    });
});



