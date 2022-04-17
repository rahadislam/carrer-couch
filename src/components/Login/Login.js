import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Register from '../Register/Register';
import './Login.css';

const Login = () => {
    //all state
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle] =useSignInWithGoogle(auth);
    const navigate=useNavigate();

    //all event handeler
    const emailhandelar=(event)=>{
        setEmail(event.target.value);
    }
    
    const passwordhandelar=(event)=>{
        setPassword(event.target.value);
    }
    
    //requird auth
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    //if user login then transfar dirctory page
    if(user){
        navigate(from, {replace: true});
    }
    //from handelar
    const googlehandelar=()=>{
        signInWithGoogle();
        navigate(from, {replace: true});

    }
    const formhandelar=(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='from-control'>
            <h1>Login</h1>
            <form onSubmit={formhandelar}>
                <div className='from-fild'>
                    <label htmlFor="email">Email:</label>
                    <input onBlur={emailhandelar} type="email" name="email" />
                </div>
                <div className='from-fild'>
                    <label htmlFor="password">Password:</label>
                    <input onBlur={passwordhandelar} type="password" name="password" />
                </div>
                <div className='submit-botton'>
                    <input type="submit" value="Login" />
                </div>
                <p>{error?.message}</p>
                <p>{loading && <p>Loading...............</p>}</p>
            </form>
            <p>New to ema Johon? <Link to='/register' element={<Register></Register>}>Register Now!</Link></p>
            <div className='orstyle'>
                <div className='or'></div>
                or
                <div className='or'></div>
            </div>
            
               <button onClick={googlehandelar} className='googlePopup'>
                   <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                    <p>Continu with Google</p>
               </button>
            

        </div>
    );
};

export default Login;