const express = require(`express`)
const handlebars = require(`express-handlebars`)
const app = express()

//config
    //template engine
    app.engine(`handlebars`, handlebars({defaultLayout: `main`}))
    app.set(`view engine`, `handlebars`)

app.listen(8081, () => console.log(`Servidor rodando`))