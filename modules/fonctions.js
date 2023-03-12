// todo -------------------------- IMPORTS -----------------------------------
import { pageacceuil, pagearticles, pagecreations, pagecontact } from "./pages.js"
import { pageactuelle, contenupagehtml, genius, countfleche } from "../index.js"
import { recits, descriptiontext, imagespixelart, son } from "./variables.js"


// todo -------------------------- CHANGER PAGE -----------------------------------

export function changerpage(page, element) {
    let div = element
    if (page === "acceuil") {

        div.innerHTML = pageacceuil
    }
    else if (page === "articles") {

        div.innerHTML = pagearticles
        recits.forEach(element => {
            let p = genius.element('p', '.titrerecits')
            p.innerHTML = `${element.titre}   <img class="logoskill"src="${element.img}" alt="" srcset="">`
            contenupagehtml.appendChild(p)
        });
    }
    else if (page === "creations") {

        div.innerHTML = pagecreations
    }
    else if (page === "contact") {

        div.innerHTML = pagecontact
    }
    else { return }



}

/* export function creationlisterecits(recits) {
    recits.forEach(element => {
        let p = document.createElement("p")
        p.textContent = element.titre
        contenupagehtml.appendChild(p)
    });
} */
// todo----------------------------------------------------------- CREATIONS ------------------------------------

export function blockpixelfunc() {

    // todo-------- events blockpixelart

    son.boutton.volume = 0.1
    son.boutton.play()
    let img = genius.element("img", ".imgpixel")
    let div = genius.element("div", "#blockimgpixel")

    contenupagehtml.appendChild(div)
    div.appendChild(img)
    /*    div.appendChild(p) */

    img.src = `./ressources/img/pixelart/${[countfleche.value]}.png`
    document.querySelector("#flechegauchepixel").classList.remove("invisible")
    document.querySelector("#flechedroitepixel").classList.remove("invisible")

    document.querySelector("#descriptionpixel").innerHTML = descriptiontext[countfleche.value]

    genius.event("#flechegauchepixel", "click", () => {

        son.boutton.volume = 0.1
        son.boutton.play()

        if (countfleche.value != 0) {

            countfleche.value--

            document.querySelector("#descriptionpixel").innerHTML = descriptiontext[countfleche.value]
            img.src = `./ressources/img/pixelart/${[countfleche.value]}.png`

            lien()
        }
        else { }
    })
    genius.event("#flechedroitepixel", "click", () => {

        son.boutton.volume = 0.1
        son.boutton.play()
        if (countfleche.value < imagespixelart.length - 1) {
            countfleche.value++
            document.querySelector("#descriptionpixel").innerHTML = descriptiontext[countfleche.value]
            img.src = `./ressources/img/pixelart/${[countfleche.value]}.png`

            lien()
        }
        else { }
    })
    lien()



}

// todo --------------------------------------------------- Liens func --------------------------

function lien() {

    if (countfleche.value === 0) {
        genius.event(".lien", "click", () => {
            window.open("https://overwatchworld.netlify.app")
        })

    }
    else if (countfleche.value === 1) {
        genius.event(".lien", "click", () => {
            window.open("https://cv-rom.herokuapp.com/mode")
        })

    }
    else if (countfleche.value === 2) {

    }
    else if (countfleche.value === 3) {
        genius.event(".lien", "click", () => {
            window.open("https://www.npmjs.com/package/@rom13/genius")
        })
    }
    else if (countfleche.value === 4) {
        genius.event(".lien", "click", () => {
            window.open("https://starwarsworld.netlify.app")
        })
    }


}

