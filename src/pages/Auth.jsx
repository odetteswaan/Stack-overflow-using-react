import React,{useState} from 'react'
import logo from '../assesst/logo.jpg'
import Aboutauth from './Aboutauth'
import './Auth.css'


export default function Auth() {
const[isSignup,setsignup]=useState(false)
const handleswitch=()=>{
setsignup(!isSignup)
}
  return (
    <div>
      <section className='auth-section'>
      {isSignup&&(
<Aboutauth/>
      )}
      <div className='auth-container-2'>
      {
        !isSignup && <img src={logo} alt='stack-overflow-logo' className='login-logo'/>}
        <form>
        {
            isSignup && (
                <label>
                <h4>Display name</h4>
                <input type='text' name='name'/>
                </label>
            )
        }
        <label htmlFor='email'>
        <h3>Email</h3>
        <input type='email' className='email' id='email'/>
        </label>
        <label htmlFor='password'>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <h3>Password</h3>
        <p style={{color:'#007acb',fontSize:'13px'}}>{!isSignup && 'forget Password?'}</p></div>
        <input type='password' className='password' id='password'/>
        </label>
        {isSignup &&(
            <p>Password must contain atleast eight<br/> characters including one letter and one <br/>number </p>
        )}
        {
            isSignup&& (
                <label htmlFor='check'>
                <input type='checkbox' className='check'/>
                <p>
                Opt-in to receive occassional <br/> ,product updates, User research invitation, <br/>Company anouncements and digests
                </p>
                </label>
            )
        }
        <button type='submit' value='submit' className='auth-btn'>{isSignup?'signup':'login'}</button>
        <br/>
        {
            isSignup&& (
                
                <p style={{color:'#666767',fontSize:'13px'}}>
                By clicking signup you must agree to our
                <span style={{color:'#007acb'}}> terms of <br/>service </span>, 
                <span style={{color:'#007acb'}}>policy of privacy</span> and 
                <span style={{color:'#007acb'}}>cookie policy</span>
                </p>
                
            )
        }
        </form>
        <p>
        {isSignup?'Already have account?':'Don\'t have Account?'}
        <button type='button' onClick={handleswitch} className='handle-switch-button auth-btn'>{isSignup?'Login':'Signup' }</button>
        </p>
      
      </div></section>
    </div>
  )
}
