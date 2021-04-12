module.exports = (sequelize,Sequelize) => {
    const pokemon = sequelize.define("pokemon",{
        userId:{
            type:Sequelize.STRING
        },
        favourite:{
            type:Sequelize.BOOLEAN,
            defaultValue:false,
        },
        pokemonUrl:{
            type:Sequelize.TEXT
        }
    },{timestamps:true})
    return pokemon;
}