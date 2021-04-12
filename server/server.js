const express = require('express');
const bodyParser = require("body-parser")
const cors = require("cors")
const sequelize = require("sequelize")
const {db} = require("./db/index")
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(cors())
// so we access json data from front-end
app.use(bodyParser.json())

//starting database?

db.sequelize.authenticate();
db.sequelize.sync({alter:true}).then(async ()=> {
    console.log("Database connected")
})

app.post('/favdata',async(req,res)=>{
    let data=await db.pokemon.create({
            userId : req.body.userId,
            pokemonUrl : req.body.pokemonUrl
        })
    res.send({status: 'inserted',data:data})
})

app.post('/myfavdata',async(req,res)=>{
    console.log(req.body.userId)
    let data=await db.pokemon.findAll({
        where:{
            userId:req.body.userId
        }
        })
    res.send({status: 'inserted',data:data})
})



app.listen(8080, (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Running on port : 8080')
})