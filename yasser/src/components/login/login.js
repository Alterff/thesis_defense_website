import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './login.css';
import profil from './profil2.png';
import mail from './1057100.png';
import pass from './yasw.jpg';
import { Navigate } from 'react-router-dom';
import { isFriday } from 'date-fns';
import useFetch from 'use-http';
import {useLocalStorage} from "react-use-storage";
//import {Link} from "react-router-dom";


const Login=()=>{
  const{get,post,response,loading,error}=useFetch('http://localhost:3000')
  const[sections,setSections]=useState([])
  const[email,setEmail]=useState([])
  const[password,setPassword]=useState([])
  const [islogin, setislogin, removeislogin] = useLocalStorage("islogin", "false");
  const [memberId, setmemberId, removememberId] = useLocalStorage("memberId", "");
  const[message,setMessage]=useState([])
  function validateEmail(email) 
    {
        var regex = /^[^\s@]+@ensi-uma\.tn$/;
        var result = regex.test(email);
        if(result == true ){
            return true;
        }
        return false;
    }
const [user,setUser]=useState('');
const [pass1,setPass]=useState('');
const [error1,setError1]=useState(false);
const [error2,setError2]=useState(false);
  const [test,st]=useState(false);
 const [testt,stt]=useState(false);
 const [test2,st2]=useState(false);


if(testt){
  return(<Navigate to="/loginsup"/>);
}


if(test2){
  return(<Navigate to="/loginjury"/>);
}

const Handlesubmit=(e)=>{

if( !validateEmail(user) && pass1.length==0 ){
  setError1(true);
  setError2(true);
}
else if(!validateEmail(user) && pass1.length!=0){
  setError1(true);
}
else if(validateEmail(user) && pass1.length==0){
  setError2(true);
}
else{
st(true);
  
  
}
console.log(user);
}
if(test){
  return(<Navigate to="/admin"/>);
}



  return(
<div   className='structur'>
<div className='sub_structur'>
<div>
<div className='img1'>
<div className='container_img1'>
 <img src={profil} alt="profil_pic" className='profil1'>

 </img>

</div>



</div>
<h2>Admin</h2>
<h2>Sign in </h2>

<div>
<img src={mail} alt="mail_pic" className="mail1">
  

</img>



<input  value={user}
onChange={(e)=>setUser(e.target.value)}  

 type="text" className="inputs1" placeholder=" username@ensi-rnu.tn"/>
<br></br>

{error1?
<label className='red'>not correct format!</label>:""}






</div>



<div>
<img src={pass} alt="mail_pic" className="mail1">
  

</img>



<input value={pass1}
onChange={e=>setPass(e.target.value)} 

type="text" className='inputs1' placeholder="         ************"/>

<br></br>
{error2?
<label className='red'>input must be filled!</label>:""}





</div>

<button  
                      onClick={Handlesubmit}
                      className="login" 
                                            >Sign in</button>
<br></br><br></br>
<button className='btns' onClick={()=>{stt(true);}}>sign in as a supervisor</button> 

<button className='btns' onClick={()=>{st2(true);}}>sign in as a jury</button> 
<br></br>
<a href="" className='link' > forget password ?  </a>

</div>




</div>


</div>


  )
};
export default Login
























