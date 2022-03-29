/* == BANCO DE DADOS == */

const Sequelize = require(`sequelize`)

/**                                 nome do DB        user         senha */
const sequelize = new Sequelize(`sistemadecadastro`, `root`, `Crystian@25612342`, {
    host: `localhost`,
    dialect: `mysql`
})

/**criar uma tabela postagens */
/*
const Postagem = sequelize.define(`postagens`, {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
*/

/**sincronizar a tabela no DB */
/* Postagem.sync({force: true}) */

/**inserir dados na tabela */
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


Usuario.create({
    nome: "Cotton",
    sobreNome: "Line",
    email: "cl2206@whitemail.com",
    idade: 75
})


/*
sequelize.authenticate().then( 
    () => console.log(`Conectado com sucesso!`) 
).catch( 
    (erro) => console.log(`Falha ao se conectar. ${erro}`) 
)
*/