import React, { useState } from 'react';
import './supervis.css';


import { Navigate } from 'react-router-dom';
const Supervis=()=>{
   const [testy1,stt1]=useState(false);
   const [testy2,stt2]=useState(false);
   const [testy3,stt3]=useState(false);
   const [testy4,stt4]=useState(false);
   const [testy5,stt5]=useState(false);
   const [testy6,stt6]=useState(false);
   const [testy7,stt7]=useState(false);
   const [testy8,stt8]=useState(false);
   const [testy9,stt9]=useState(false);
   if(testy1) return(<Navigate to="/fiche1"/>);
     if(testy2) return(<Navigate to="/fiche2"/>);
       if(testy3) return(<Navigate to="/Note1"/>);
         if(testy4) return(<Navigate to="/fiche3"/>);
           if(testy5) return(<Navigate to="/fiche4"/>);
             if(testy6) return(<Navigate to="/Note2"/>);
               if(testy7) return(<Navigate to="/fiche5"/>);
                 if(testy8) return(<Navigate to="/fiche6"/>);
                   if(testy9) return(<Navigate to="/Note3"/>);
    
    
    return(
        <div className='tab'>
            <table className='tab1'>
                <tr>
                
                <th>Nom et Prenom de l'etudiant supervisé</th>
                
                <th>Visite 1</th>
                <th>Visite 2</th>
                <th>Note</th>



                </tr>
                <tr>
                    <th>Yasser Mahjoub</th>
                    <th><button className='btnn' onClick={()=>stt1(true)}>Fiche 1</button></th>
                    <th><button className='btnn' onClick={()=>stt2(true)}>Fiche 2</button></th>
                    <th><button className='btnn' onClick={()=>stt3(true)}>Note</button></th>


                </tr>
                <tr>
                  <th>Moetez Saidi</th> 
                  <th><button className='btnn' onClick={()=>stt4(true)}>Fiche 1</button></th>
                   <th><button className='btnn' onClick={()=>stt5(true)}>Fiche 2</button></th>
                    <th><button className='btnn' onClick={()=>stt6(true)}>Note</button></th>


                </tr>
                 <tr>
                    <th>Bechir Benothman</th>
                     <th><button className='btnn' onClick={()=>stt7(true)}>Fiche 1</button></th>
                     <th><button className='btnn' onClick={()=>stt8(true)}>Fiche 2</button></th>
                    <th><button className='btnn' onClick={()=>stt9(true)}>Note</button></th>

                    
                    
                    </tr>   




            </table>


        </div>
    )
}
export default Supervis;