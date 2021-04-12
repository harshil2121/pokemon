import { Button } from '@material-ui/core'
import React,{useContext, useState} from 'react'
import pokemonContext from '../context/context'
import firebase from 'firebase'
import { useHistory } from 'react-router'


    function Header(){

        const [input,setInput] = useState("")
        const  {details, setFilterdata,setUser} = useContext(pokemonContext)
       
        const handleSearch= (e)=>{
            // console.log(input)
            setFilterdata(details.filter(za=>{
                if(za.name.toLowerCase().includes(e.target.value.toLowerCase()))
                return za
            }))
            // console.log(details[0].name)
        }
        let history = useHistory()

        const handleClick = (e) =>{
            e.preventDefault()
            firebase.auth().signOut().then(() => {
              setUser()
              history.push('/signin')
                  // Sign-out successful.
            }).catch((error) => {
                  // An error happened.
                  // console.log(error)
            });
        }

        const handleFavourite = (e) =>{
            history.push('/userfav')
        }

        return(
            <>
            <div className="hback">
                <div>
                  <h1 style={{marginLeft:'20px'}}><b>Pokemon Details</b></h1>
                  </div> 
                  <div>
                    <input type="search"  placeholder="Search…" value={input} style={{backgroundColor:"inherit",marginTop:'10px'}}  
                        onChange={(e)=>{
                            setInput(e.target.value)
                            handleSearch(e)}} /> 
                </div>
                <div>
                <Button variant='contained' color='secondary' style={{marginLeft:'20px',marginTop:'10px',height:'30px'}} onClick={e => handleFavourite(e)} >My Fav</Button> &ensp;
                <Button variant='contained' color='secondary' style={{marginRight:'20px',marginTop:'10px',height:'30px'}} onClick={e => handleClick(e)}>Sign out</Button>
                </div>
            </div>
            </>    
        )
    }
export default Header;