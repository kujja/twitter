import React from 'react';
import "./Login.css";
import {loginUrl} from "./Spotify"
function Login() {
  return (

    <div className='login'>Login
    <h1>I am the login page</h1>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ERPqVfKQLj2RqAfMzFtzlm3TvTzPvMFdKw&usqp=CAU' alt=''></img>
    
<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login