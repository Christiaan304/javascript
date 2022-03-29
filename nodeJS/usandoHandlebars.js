const express = require(`express`)
const handlebars = require(`express-handlebars`)
const Sequelize = require(`sequelize`)
const app = express()

//config
    //template engine
    app.engine(`handlebars`, handlebars.engine({defaultLayout: `main`}))
    app.set(`view engine`, `handlebars`)

    // conexão com o banco de dados mysql
    const sequelize = new Sequelize(`sistemadecadastro`, `root`, `Crystian@25612342`, {
        host: `localhost`,
        dialect: `mysql`
    })

    // rotas
    app.get(`/cadastro`, (req, res) => {
        res.render(`formulario`)
    })

app.listen(8081, () => console.log(`Servidor rodando`))