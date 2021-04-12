import React, { useState ,useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import pokemonContext from '../context/context'
import firebase from '../firebase'
import GoogleButton from 'react-google-button'

function Signin(){

    const {input, setInput  } = useContext(pokemonContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    const handleInput=(e)=>{
        setEmail(e.target.value)
    }

    const handleChange=(ep)=>{
        setPassword(ep.target.value)
    }

    let history = useHistory() 
    const handleSubmit=(e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            history.push('/')
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(error)
        });
    }

    const handleGoogle = (e)=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
         });
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var userG = result.user;
            console.log(userG)
            // setUser(userG)
            history.push('/')
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error)
            // ...
        });
    }


    return(
        <div style={{textAlign:'center'}}>
            <h2>Signin</h2>
            <form>
                <div style={{marginTop:'20px' }}>

                <TextField type='text' label="Email.." variant="filled" onChange={e => handleInput(e)}  /><br />
                <TextField type='password' label="Password.." variant="filled" onChange={e => handleChange(e)} style={{marginTop: "10px ",height:"30px", marginBottom:'20px'}} /><br /><br />

                <Button onClick={e => handleSubmit(e)} style={{width:"221px"}} variant='contained' color='primary' >Sign in</Button><br /><br />
                Not a Signin? <a href='Signup' color='primary' >Sign up</a>
                <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                    <GoogleButton onClick={e =>handleGoogle(e)}  />
                </div>
                </div>
            </form>
        </div>
    )
}
export default Signin;