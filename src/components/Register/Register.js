import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'
import Login from '../Login/Login';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification} from 'react-firebase-hooks/auth';

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confrirmPassword,setconfrirmPassword]=useState('');
    const [error,setError]=useState('');

    //email and password create
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth);
    
    //email verification
    const [sendEmailVerification]=useSendEmailVerification(auth);
    
    
    const navigate=useNavigate();

    //all event handeler
    const emailhandelar=(event)=>{
        setEmail(event.target.value);
    }
    
    const passwordhandelar=(event)=>{
        setPassword(event.target.value);
    }
    
    const conPasswordhandelar=(event)=>{
        setconfrirmPassword(event.target.value);
    }
    //check condition 
    if(user){
        navigate('/home');
    }
    console.log(user);

    //form handelr area 
    const formhandelar=(event)=>{
        event.preventDefault();
        if(password!==confrirmPassword){
            setError("password dose not match");
        }
        if(password.length<6){
            setError("at list 6 charecter type password!!")
            
        }
        
        createUserWithEmailAndPassword(email,password);sendEmailVerification();

    }

    
    
    return (
        <div className='d-flex align-items-center flex-wrap '>
            <div>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-sign-up-4489353-3723261.png" alt="" />
            </div>
            <div className='from-control my-5 py-3 shadow-lg bg-white rounded'>
            <h1>Register Now</h1>
            <form onSubmit={formhandelar}>
                <div className='from-fild'>
                    <label htmlFor="email">Email:</label>
                    <input onBlur={emailhandelar} type="email" name="email" />
                </div>
                <div className='from-fild'>
                    <label htmlFor="password">Password:</label>
                    <input onBlur={passwordhandelar} type="password" name="password" />
                </div>
                <div className='from-fild'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onBlur={conPasswordhandelar} type="password" name="confirmPassword" />
                </div>
                <div className='error'>
                    <p>{error}</p>
                </div>
                <div className='submit-botton'>
                    <input type="submit" value="Register" />
                </div>
            </form>
            <p>Already have an account? <Link to='/login' element={<Login></Login>}>Login Now!</Link></p>
        </div>
        </div>
        
    );
};

export default Register;