document.querySelectorAll(".img").forEach(element => {
    let idtext = element.children[1].id
    let idcoeur = element.children[2].id
    element.addEventListener("mouseover", (e) => {
        document.querySelector(`#${idtext}`).style.opacity = 1
        document.querySelector(`#${idcoeur}`).style.opacity = 1

    })
    element.addEventListener("mouseout", () => {
        document.querySelector(`#${idtext}`).style.opacity = 0
        document.querySelector(`#${idcoeur}`).style.opacity = 0
    })
});

document.querySelectorAll(".coeur").forEach(element => {
    element.addEventListener("click", (e) => {
        e.target.style.textShadow = "0 0 0 red"
    })
});


