// todo -------------------------- IMPORTS -----------------------------------
import { pageacceuil, pagearticles, pagecreations,pagecontact } from "./pages.js"
import { pageactuelle, contenupagehtml, genius } from "../index.js"
import { recits } from "./variables.js"

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
            p.textContent = element.titre 
            contenupagehtml.appendChild(p)
        });


    }
    else if (page === "creations") {
        console.log('créations');
        div.innerHTML = pagecreations
    }
    else if(page ==="contact"){
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