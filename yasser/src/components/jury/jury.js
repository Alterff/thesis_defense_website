import "./jury.css" 

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Juryy=()=>{
const [test1,se1]=useState(false);
const [test2,se2]=useState(false);
const [test3,se3]=useState(false);
if(test1)  return(<Navigate to="/Note.encadrant1"/>);
if(test2) return(<Navigate to="/Note.encadrant2"/>);
if(test3)  return(<Navigate to="/Note.encadrant3"/>); 

return(
        <div className='tabb'>
            <table  className='tabb1'  >
                <tr>
                
                <th>N°</th>
                
                <th>Opt.</th>
                <th>Eleve ingenieur</th>
                <th>N1 Encadrant</th>
                <th>N2 rapporteur</th>
                <th>N3 superviseur</th>
                <th>N4 Qualite</th>
                <th>N5 Question</th>
                <th>Moyenne</th>
                <th>Publiable</th>


                </tr>
                <tr>
                    <th>11B</th>
                    <th>IOT</th>
                    <th>Yasser Mahjoub</th>
                    <th><button className='btnx' onClick={()=>se1(true)}>Note</button></th>
                    <th><input type='text'/></th>
                     <th><input type='text'/></th>
                      <th><input type='text'/></th>
                       <th><input type='text'/></th>
                        <th><input type='text'/></th>
                        <th><button type='radio'></button></th>




                </tr>
                <tr>
                  <th>419C</th>
                    <th>IOT</th>
                    <th>Moetez Saidi</th>
                    <th><button className='btnx' onClick={()=>se2(true)}>Note</button></th>
                    <th><input type='text'/></th>
                     <th><input type='text'/></th>
                      <th><input type='text'/></th>
                       <th><input type='text'/></th>
                        <th><input type='text'/></th>
                        <th><button type='checkbox'></button></th>

               </tr>
                 <tr>
                    <th>31B</th>
                    <th>GL</th>
                    <th>Bechir Benothman</th>
                    <th><button className='btnx' onClick={()=>se3(true)}>Note</button></th>
                    <th><input type='text'/></th>
                     <th><input type='text'/></th>
                      <th><input type='text'/></th>
                       <th><input type='text'/></th>
                        <th><input type='text'/></th>
                        <th><button type='checkbox'></button></th>

                    
                    
                    </tr>   
                  </table>  
                    </div>
)
}
export default Juryy;