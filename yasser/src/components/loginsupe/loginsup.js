import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './loginsup.css';
import profil from '../login/images.jpg';
import mail from '../login/1057100.png';
import pass from '../login/yasw.jpg';
import { Navigate } from 'react-router-dom';
//import {Link} from "react-router-dom";


const Loginsup=()=>{
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
  const [test,qt]=useState(false);
 const [test1,qt1]=useState(false);
 const [test2,qt2]=useState(false);

if(test1){
  return(<Navigate to="/login"/>);
}
if(test2){
  return(<Navigate to="/loginjury"/>);
}
const Handlesubmit=(e)=>{
if(!validateEmail(user) && pass1.length==0 ){
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
  qt(true);
}
}
if(test){
  return(<Navigate to="/supervis"/>);
}



  return(
<div className='structur1'>
<div className='sub_structur1'>
<div>
<div className='img11'>
<div className='container_img11'>
 <img src={profil} alt="profil_pic" className='profil11'>

 </img>

</div>



</div>
<h2>Superviseur</h2>
<h2>Sign in </h2>

<div>
<img src={mail} alt="mail_pic" className="mail11">
  

</img>



<input type="text"  value={user} onChange={(e)=>setUser(e.target.value)} className="inputs11" placeholder="username@ensi-rnu.tn"/>
<br></br>
{error1?<label className='red1'>Not correct format!</label>:" "}





</div>



<div>
<img src={pass} alt="mail_pic" className="mail11">
  

</img>



<input type="password" value={pass1} onChange={(e)=>setPass(e.target.value)} className='inputs11' placeholder="************"/>
<br></br>
{error2?<label className='red1'>Input must be filled!</label>:" "}







</div>

<button  className='login1' onClick={Handlesubmit} >Sign in</button>
<br></br><br></br>
<a href=""  className='link1' ><button className='btns11' onClick={()=>{qt1(true);}}>sign in as a Admin</button> </a>

<a href="" className='link1'><button className='btns11'onClick={()=>{qt2(true);}}>sign in as a jury</button> </a>
<br></br>
<a href="" className='link1' > forget password ?  </a>

</div>




</div>


</div>


  )
};
export default Loginsup
