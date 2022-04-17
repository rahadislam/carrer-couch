import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'
import Login from '../Login/Login';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confrirmPassword,setconfrirmPassword]=useState('');
    const [error,setError]=useState('');
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth);
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

    //form handelr area 
    const formhandelar=(event)=>{
        event.preventDefault();
        if(password!==confrirmPassword){
            setError("password dose not match");
        }
        if(password.length<6){
            setError("at list 6 charecter type password!!")

        }
        createUserWithEmailAndPassword(email,password);

    }
    
    return (
        <div className='from-control'>
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
            <div className='orstyle'>
                <div className='or'></div>
                or
                <div className='or'></div>
            </div>
            
               <button className='googlePopup'>
                   <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                    <p>Continu with Google</p>
               </button>
            

        </div>
    );
};

export default Register;