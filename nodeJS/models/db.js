const Sequelize = require(`sequelize`)

const sequelize = new Sequelize(`sistemadecadastro`, `root`, `Crystian@25612342`, {
    host: `localhost`,
    dialect: `mysql`
})

module.exports =
{
    Sequelize: Sequelize,
    sequelize: sequelize
}