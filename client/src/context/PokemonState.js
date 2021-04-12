import React, {useEffect, useState} from 'react'
import pokemonContext from './context'
import firebase from 'firebase'

function PokemonState({children}){

    const [details, setDetails] = useState([]);
    const [filterdata, setFilterdata] = useState([])
    const [input ,setInput] = useState ('')
    const [user,setUser] = useState('')
    const [pk, setPk] = useState({});


    useEffect(()=>{
        firebase.auth().onAuthStateChanged(u=>{
        if(u){
            setUser(u)
        }
        })
    },[])
    return(
        <pokemonContext.Provider value={{pk, setPk,user,setUser,details, setDetails,filterdata, setFilterdata,input,setInput}}>
            {children}
        </pokemonContext.Provider>
    )
}
export default PokemonState