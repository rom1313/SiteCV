// todo -------------------------- IMPORTS -----------------------------------
import { pageacceuil, pagearticles, pagecreations, pagecontact } from "./pages.js"
import { pageactuelle, contenupagehtml, genius, countfleche } from "../index.js"
import { recits, descriptiontext, imagespixelart,son } from "./variables.js"


// todo -------------------------- MAIN -----------------------------------

export function changerpage(page, element) {
    let div = element
    if (page === "acceuil") {
        console.log('acceuil');
        div.innerHTML = pageacceuil
    }
    else if (page === "articles") {
        console.log('articles');
        div.innerHTML = pagearticles
        recits.forEach(element => {
            let p = genius.element('p', '.titrerecits')
            p.innerHTML = `${element.titre}   <img class="logoskill"src="${element.img}" alt="" srcset="">`
            contenupagehtml.appendChild(p)
        });
    }
    else if (page === "creations") {
        console.log('créations');
        div.innerHTML = pagecreations
    }
    else if (page === "contact") {
        console.log('contact');
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
    genius.event("#blockpixelart", "click", () => {
        son.boutton.volume = 0.1
        son.boutton.play()
        blockcreations.style.opacity = 0
        let img = genius.element("img", ".imgpixel")
        contenupagehtml.appendChild(img)
        img.src = `./ressources/img/pixelart/${[countfleche.value]}.png`
        document.querySelector("#flechegauchepixel").classList.remove("invisible")
        document.querySelector("#flechedroitepixel").classList.remove("invisible")
        console.log(document.querySelector("#descriptionpixel"));
        document.querySelector("#descriptionpixel").innerHTML = descriptiontext[countfleche.value]
        document.querySelector("#descriptionpixel").classList.remove("invisible")
        genius.event("#flechegauchepixel", "click", () => {
            son.boutton.volume = 0.1
            son.boutton.play()

            if (countfleche.value != 0) {
                countfleche.value--
                document.querySelector("#descriptionpixel").innerHTML = descriptiontext[countfleche.value]
                img.src = `./ressources/img/pixelart/${[countfleche.value]}.png`
                console.log(countfleche);
            }
            else { return }
        })
        genius.event("#flechedroitepixel", "click", () => {
            son.boutton.volume = 0.1
            son.boutton.play()
            if (countfleche.value < imagespixelart.length - 1) {
                countfleche.value++
                document.querySelector("#descriptionpixel").innerHTML = descriptiontext[countfleche.value]
                img.src = `./ressources/img/pixelart/${[countfleche.value]}.png`
                console.log(countfleche);
            }
            else { return }
        })
    })
}

