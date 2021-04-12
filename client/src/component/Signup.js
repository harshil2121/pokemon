import { Button, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import firebase from 'firebase'


function Signup(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [confirm, setConfirm] = useState('')

    const handleInput = (e) => {
        setEmail(e.target.value)
    }

    const handleChange = (ep) => {
        setPassword(ep.target.value)
    }

    const handleConfirm = (ecp) => {
        setConfirm(ecp.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(confirm !== password){
            return alert('password is do not match')
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // setUser(user)
            console.log(user)
            history.push('/')
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
            // ..
        });
    }

    let history = useHistory()
    const handleClick = () => {
        history.push('signin')
    }
    return(
        <div  style={{textAlign:'center'}}>
             <h2>Signup</h2><br />
            <form>
                <div style={{marginTop:'5px' }}>

                    <TextField type='text' variant="filled" label='email..' id='email' onChange={e=>handleInput(e)} style={{backgroundColor:'inherit'}} /><br />
                    <TextField type='password' variant="filled" label='password..' onChange={ep=>handleChange(ep)} style={{marginTop: "10px ",height:"30px"}} /> <br />
                    <TextField type='password' variant="filled" label='confirm password..' onChange={ecp=>handleConfirm(ecp)} style={{marginTop: '35px',height:"30px"}} /> <br /><br />

                    <Button onClick={e => handleSubmit(e)} style={{width:"221px",marginTop:'20px'}} variant='contained' color='primary' >Sign in</Button><br /><br />
                    Have  alredy an account? <a href='Signin' color='primary' >Sign in</a>
                </div>
            </form>
        </div>
    )
}
export default Signup;