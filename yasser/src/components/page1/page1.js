
import "./page1.css" 
import succ from '../page1/Logo_correct.png';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Imag from './Logo_correct.png';
const Pagge=()=>{
    
    const [testt,stt]=useState(false);
    

   if(testt){
  return(<Navigate to="/login"/>);
}

    return(


<div>
    
<div className="contain">
    <img src={Imag} />
    </div>   
    
    
    <div><h1 >Your account is created successfully</h1></div>
    
   <button className="oop" onClick={()=>{stt(true);}} >Log in</button>
    
    </div>)



}
export  default Pagge
