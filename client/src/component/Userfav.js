import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'
import pokemonContext from "../context/context"

function Userfav(){
    
    const{user, setDetails,pk, setPk}=useContext(pokemonContext)
    const[favPokemonUrls,setFavPokemonUrls]=useState([])
    const [favPokemonData, setFavPokemonData] = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        // fetch(url)
        // .then((response) => response.json())
        // .then((json) => {
        //   setMyFavData(json)
        ////
        // axios.get("https://pokeapi.co/api/v2/pokemon").then((result) => {
        //     // setDetails(result.data.results)
        //     console.log(result.data.results)
        // })
        // //
        // console.log(user.uid)
        if(user)  axios.post('http://localhost:8080/myfavdata',{userId:user.uid}).then((result)=>{
            setFavPokemonUrls(result.data.data)
            fetchData(result.data.data)
        })
    },[user])
    const fetchData =async (pokemonsss) => {
        // console.log(url)
        let ppp= [...favPokemonData];
        pokemonsss.map( async(poke) => {
         let details = await axios.get(poke.pokemonUrl)
         ppp.push(details.data)
            console.log("adding poke")
            setFavPokemonData(ppp)
    }) 
    // setFlag(!flag)
    }
    // useEffect(() => {
    //     if(favPokemonUrls.length > 0 ) {
    //     fetchData()
    //     }
    // }, [favPokemonUrls])
    const handleChange = (e,url) => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setFavPokemonUrls(json)
          console.log(pk )
        }
        );
    };

    return(
        <div style={{display:'flex', flexWrap: "wrap", marginLeft: "10px",padding: "20px"}}>
            {
                favPokemonData && favPokemonData.length > 0 ?
                favPokemonData.map((i,index)=>{
                    return(
                        
                            <div key={index}>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src={`http://pokeres.bastionbot.org/images/pokemon/${i.id}.png`} alt="Pokemon Image ?" style={{color:"white", textAlign:"center"}}/>
                                        </div>
                                        <div class="flip-card-back"><br />
                                            <h2 style={{textTransform: 'capitalize'}}>
                                                <center>{i.name} </center>
                                            </h2>
                                            <p> 
                                                <h4 style={{textTransform: 'capitalize'}}>Id:{i.id} <br />Height:{i.height} &ensp; Weight:{i.weight}</h4>
                                                {
                                                i.abilities && i.abilities.map((i,index)=>{
                                                    return<>
                                                    <h4><b>Ability:</b>{i.ability.name}</h4>
                                                    </>
                                                })
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    )
                }):"empty"
            }
        </div>
    )
}
export default Userfav;