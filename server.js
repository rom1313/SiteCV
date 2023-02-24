const { Genius } = require("@rom13/genius");
const genius = new Genius();

genius.serveurStatique("./")
genius.serveurStatique("./ressources")



genius.serveur(13000, () => {
    console.log('Hey !')
})

genius.serveurRequeteGET("/", (req, res) => {
    console.log('Requête sur / !');
    res.sendFile('./index.html', {
        root: __dirname
    })
})