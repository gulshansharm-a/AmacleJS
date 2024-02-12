import LoginBackGround from '../assets/LoginBackGround.png';
import React, { useState } from 'react';
import LoginMen from '../assets/LoginMen.png';
import './Login.css';
import LogiDetails from '../Amacle/Models/LoginDetails';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        const login = new LogiDetails()
        login.insert({password,email:id}).then(result=>{
            console.log(result,"it is of insertion")
        })
        setPassword('')
        setId('')
        alert("registered")
    }

    const Login = () =>{
        const login = new LogiDetails()
        login.select("*").where("email","=",id).where("password","=",password).count().get().then(result=>{
            if(result==1) {
                localStorage.setItem('email', id);
                alert("login"+id)
                console.log(localStorage.getItem('email'))
            }else {
                alert("wrong Id Or passWord")
            }
        })
    }

    return (
        <>
            <div id='container' >
                <img id='backGroundImage' src={LoginBackGround} alt="background"></img>
                <img id='LoginMen' src={LoginMen} alt="login men"></img>
                <div id='formContainer' >
                    <div id='Welcomback'>
                        <h1 id='WelcomText' >Welcome! </h1>
                        <h1 id='LoginText' >Login </h1>
                    </div>
                    <p id='dis' >Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                    <input type='text' className='inputField' value={id} placeholder='Email' onChange={(e) => setId(e.target.value)}></input>
                    <br />
                    <input type='text' className='inputField' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <button className='inputFieldButton' onClick={Login} >Login</button>
                    <br />
                    <button className='inputFieldButton' onClick={register} >Register</button>
                </div>
            </div>
        </>
    );
}

export default Login;
