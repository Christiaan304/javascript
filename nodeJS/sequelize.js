/* == BANCO DE DADOS == */

const Sequelize = require(`sequelize`)
const sequelize = new Sequelize(`sistemadecadastro`, `root`, `Crystian@25612342`, {
    host: `localhost`,
    dialect: `mysql`
})

const Postagem = sequelize.define(`postagens`, {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/* Postagem.sync({force: true}) */

/*
Postagem.create({
    titulo: "lorem ipsum",
    conteudo: "lorem ipsum dolor sit amet"
})
*/


const Usuario = sequelize.define(`usuarios`, {
    nome: {
        type: Sequelize.STRING
    },
    sobreNome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

/* Usuario.sync({force: true}) */

/*
Usuario.create({
    nome: "Christiaan",
    sobreNome: "Rodrigues",
    email: "cr1998@anonmail.com",
    idade: 24
})


/*
sequelize.authenticate().then( 
    () => console.log(`Conectado com sucesso!`) 
).catch( 
    (erro) => console.log(`Falha ao se conectar. ${erro}`) 
)
*/