/* == PACOTES NODEJS ==

    prompt-sync
    express
    nodemon
    sequelize
    mysql2
    express-handlebars
*/

/*
let http = require(`http`)

http.createServer( (req, res) => {
    res.end(`hello!`)
}).listen(8090)

console.log(`Servidor rodando`)
*/


const express = require(`express`)
const app = express()

app.get(`/`, (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get(`/about`, (req, res) => {
    res.sendFile(`${__dirname}/about.html`)
})

app.get(`/ola/:nome/:cor`, (req, res) => {
    res.send(`<h1>Ola, ${req.params.nome}</h1> <h3>Voce escolheu a cor: ${req.params.cor}</h3>`)
})

app.listen(8090, () => console.log(`Server running...`))
