const { Genius } = require("@rom13/genius");
const genius = new Genius();

function test() {
    console.log("midfdleware");
}

genius.serveurStatique("./")
genius.serveurStatique("./ressources")



genius.serveur(13000, () => {
    console.log('Hey !')
    console.log(this);
})

genius.serveurRequeteGET("/", (req, res) => {
    console.log('Requête sur / !');
    res.sendFile('./index.html', {
        root: __dirname
    })
})
genius.serveurRequeteGET("/test", (req, res) => {
    console.log('Requête sur / !');
    res.sendFile('./index.html', {
        root: __dirname
    })
})



