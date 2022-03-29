const express = require(`express`)
const handlebars = require(`express-handlebars`)
const app = express()

//config
    //template engine
    app.engine(`handlebars`, handlebars.engine({defaultLayout: `main`}))
    app.set(`view engine`, `handlebars`)

    //body parser descontinuado, use a própia sintaxe do express
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    // rotas
    app.get(`/cadastro`, (req, res) => {
        res.render(`formulario`)
    })

    app.post(`/adicionar`, (req, res) => {
        res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
    })

app.listen(8081, () => console.log(`Servidor rodando`))