const Sequelize = require(`sequelize`)

const sequelize = new Sequelize(`sistemadecadastro`, `root`, `Crystian@25612342`, {
    host: `localhost`,
    dialect: `mysql`
})

sequelize.authenticate().then( 
    () => console.log(`Conectado ao banco de dados.`) 
).catch( 
    (erro) => console.log(`Falha ao se conectar no banco de dados. ${erro}`) 
)

module.exports =
{
    Sequelize: Sequelize,
    sequelize: sequelize
}