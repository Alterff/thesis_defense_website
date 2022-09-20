
import "./fiche2.css" 

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
const Fiche2=()=>{

return(
<div className="bordur">
<div className="titre">
<h2>Fiche visite n°2</h2>
</div>
<div className="rig">
<p className="al">stagiaire (s) :<b>Yasser Mahjoub</b></p>
<p className="al">Etablissement d'accueil: <b>SOFRECOM TUNISIE</b></p>
<p className="al">Superviseur : <b>BEN SAID WISSEM</b></p>
<p className="al">N° sujet:<b>11B</b></p>
<p className="al">Sujet :<b>ArchiMaster: le hub de gestion des connaissances pour le succès des projets IT</b> </p>
<h4 className="oo">Conception</h4>
<input className="ll" type='text' placeholder="Situation"/>
<br></br>
<input className="ll" type='text' placeholder="Methodes"/>
<br></br>
<input className="ll" type='text' placeholder="Rapport"/>
<br></br>
<input className="ll" type='text' placeholder="Remarques"/>
<h4 className="oo">Realisation</h4>
<input className="ll" type='text' placeholder="Situation"/>
<br></br>
<input className="ll" type='text' placeholder="Materiel/Systeme"/>
<br></br>
<input className="ll" type='text' placeholder="langage"/>
<br></br>
<input className="ll" type='text' placeholder="Remarques"/>
<h4 className="oo">Divers</h4>
<input className="ll" type='text' placeholder="Niveau du stagiaire"/>
<br></br>
<input className="ll" type='text' placeholder="Assiduité"/>
<br></br>
<input className="ll" type='text' placeholder="Relations humaines"/>
<br></br>
<input className="ll" type='text' placeholder="Remarques"/>

</div>

<button  className="va" type="submit">Valider</button>

</div>

)



}
export  default Fiche2;