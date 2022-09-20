import React,{useState} from 'react';
import "./account.css";
import { Navigate } from 'react-router-dom';
import useFetch from 'use-http';
//import back from './mp.jpg';

const Account=()=>{
    const[username,setUsername]=useState([])
  const[password,setPassword]=useState([])
  const[email,setEmail]=useState([])
const{get,post,response,loading,error}=useFetch('http://localhost:3000')

 function validateEmail(email) 
    {
        var regex = /^[^\s@]+@ensi-uma\.tn$/;
        var result = regex.test(email);
        if(result == true ){
            return true;
        }
        return false;
    }

    const [test1,st1]=useState('');
    const [error1,setError1]=useState(false);
    const [test2,st2]=useState('');
    const [error2,setError2]=useState(false);
    const [test3,st3]=useState('');
    const [error3,setError3]=useState(false);
    const [test4,st4]=useState('');
    const [error4,setError4]=useState(false);
    const [test5,st5]=useState('');
    const [error5,setError5]=useState(false);
    const [test6,st6]=useState('');
     const [error6,setError6]=useState(false);
  const [sub,setsub]=useState(false);
    function handlesubmit(e){
        if(test1.length<=3 || test1.length>=40 ){
            setError1(true);
        }
        if(!validateEmail(test2)){
            setError2(true);
        }
        if(test3.length!=8){
            setError3(true);
        }
        if(test4=="Select your job"){
            setError4(true);
        }
        if(test5.length<6 ){
            setError5(true);
        }
        if(test6!=test5){
            setError6(true);
        }
        setsub(true);
      
        



    
    }
    if(!error1 && !error2 && !error3 && !error4 && !error5 && !error6 &&sub){
          return(<Navigate to='/page'/>);
        }
     
    
    return(
    <div className='orig'> <div className='acc'>
        
         <h2 className='qq'>Sign up</h2>
     <hr className='ww'></hr>
     <input  value={test1} onChange={(e)=>st1(e.target.value)}  className='name' placeholder='Full name'/>
     
     {error1?<label className='red1'>Incorrect Name</label>:" "}
      <input  value={test2} onChange={(e)=>st2(e.target.value)} className='name' placeholder='Email Adress'/>
      {error2?<label className='red1'>Wrong format!</label>:" "}
       <input value={test3} onChange={(e)=>st3(e.target.value)} className='name' placeholder='phone number'/>
       {error3?<label className='red1'>phone number must be 8 characters</label>:" "}
        <select  className='name' unselectable='select job'>
          
        <option value={test4} onChange={(e)=>st4(e.target.value)}  >Select your job</option>
        <option value={test4} onChange={(e)=>st4(e.target.value)} >Superviseur</option>
        <option value={test4} onChange={(e)=>st4(e.target.value)} >Jury</option>
        <option value={test4} onChange={(e)=>st4(e.target.value)}  >Admin</option>

        </select>
          {error4?<label className='red1'>Select a job!!</label>:" "}
         <input value={test5} onChange={(e)=>st5(e.target.value)} type="password" className='name' placeholder='Create password'/>
           {error5?<label className='red1'>password is too weak!</label>:" "}
         <input  value={test6} onChange={(e)=>st6(e.target.value)} type="password" className='name' placeholder='Repeat password'/>
           {error6?<label className='red1'>not compatible!</label>:" "}

         <button  type="submit" onClick={handlesubmit} className='create'>Create Account</button>
         <p>have an account <a href="/login" className='lo' >Log in</a></p>
     


    </div></div>
   
    
)
}







export default Account;