const Sequelize = require('sequelize')

const sequelize = new Sequelize('pokemon',"root","", {host:"localhost", dialect: "mysql"})

let db = {}

db.sequelize = sequelize
db.pokemon = require("./pokemon")(sequelize,Sequelize)

module.exports = {db}