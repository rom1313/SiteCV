// todo -------------------------- IMPORTS -----------------------------------

// todo -------------------------- Variables -----------------------------------
const genius = $;
const input = document.querySelector("input");

let inputfocus = false
// todo -------------------------- Event img -----------------------------------
document.querySelectorAll(".img").forEach(element => {
    let idtext = element.children[1].id
    let idcoeur = element.children[2].id
    let idimg = element.children[0].id
    let idimgindice = genius.recupnb(idimg)
    
    element.addEventListener("mouseover", (e) => {
        document.querySelector(`#${idtext}`).style.opacity = 1
        document.querySelector(`#${idcoeur}`).style.opacity = 1

    })
    element.addEventListener("mouseout", () => {
        document.querySelector(`#${idtext}`).style.opacity = 0
        document.querySelector(`#${idcoeur}`).style.opacity = 0
    })
});


// todo -------------------------- EVENTS like -----------------------------------

document.querySelectorAll(".coeur").forEach(element => {
    element.addEventListener("click", (e) => {
        e.target.style.textShadow = "0 0 0 red"
    })
});
// todo -------------------------- Event input -----------------------------------
input.addEventListener('input', (e) => { })

input.onkeydown = (e) => {
    if (e.code === "Enter") {
        recherche()
    }
}
// todo -------------------------- Event logo recherche-----------------------------------
genius.event('#svgsearch', 'click', (e) => {
    recherche()
})


// todo -------------------------- Fonction -----------------------------------


function recherche() {

    if (input.value === "" || input.value === undefined) {
        input.placeholder = 'Entrez un mot...'
        genius.timeursecondes(1, () => {
            input.placeholder = "Recherche..."
        })
    }
    else {
        input.value = ""
        input.placeholder = "Aucun résultat..."
        genius.timeursecondes(1, () => {
            input.placeholder = "Recherche..."
        })
    }
}