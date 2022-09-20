
import "./Note1.css" 

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const note=()=>{
return(
    <div className="tit1"> 
    <div className="tit2" >
        <h2>Fiche Note</h2>

    </div>
    <div className="rigg">
    <p className="bl">stagiaire (s) :<b>Yasser Mahjoub</b></p>
<p className="bl">Etablissement d'accueil: <b>SOFRECOM TUNISIE</b></p>
<p className="bl">Superviseur : <b>BEN SAID WISSEM</b></p>
<p className="bl">N° sujet:<b>11B</b></p>
<p className="bl">Sujet :<b>ArchiMaster: le hub de gestion des connaissances pour le succès des projets IT</b> </p>
<input className="mm" type='text' placeholder="Assiduité et sérieux ..................................................................."/>
<input className="mm1" type='text' placeholder="./5"/>
<br></br>
<input className="mm" type='text' placeholder="Conception et adéquation de la solution ..............................."/>

<input className="mm1" type='text' placeholder="./5"/>
<br></br>
<input className="mm" type='text' placeholder="Rapport et respect des délais..................................................."/>
<input className="mm1" type='text' placeholder="./5"/>
<br></br>
<input className="mm" type='text' placeholder="Réalisation.................................................................................."/>
<input className="mm1" type='text' placeholder="./5"/>
<br></br>
<input className="mm" type='text' placeholder="Note finale.................................................................................."/>
<input className="mm1" type='text' placeholder="./20"/>
<br></br>
<br></br>
<input className="mm2" placeholder="justfication de la note"/>
<br></br>
<button className="vc"> valider</button>

</div>
    </div>
)


}
export default note;