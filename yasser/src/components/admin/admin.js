import React from 'react';

import './admin.css';


const Affectationsujet=()=>{
return (
  
  <form className='block1'>
    <h3>Affectation des sujets</h3>
    
  
  <input type="text" name="etudiant" placeholder="Nom de l'étudiant en autosuggestion" /> 
<span class="asterisc">*</span>


<input type="text" name="sujet" placeholder="Numéro du sujet" />
<span class="asterisc">*</span>


<input type="text" name="titre" placeholder="Titre du sujet" />
<span class="asterisc">*</span>

<input type="text" name="entreprise" placeholder="Organisme d'accueil (l'entreprise)" />
<span class="asterisc">*</span>
<h4>* champ obligatoire</h4>
<button className='btn'>Valider</button>



</form>)


}

const Affectationsuperviseur=()=>{
return (
<form className='block2'>
<h3>Affectation des superviseurs</h3>
<input name="nom" placeholder="Nom de l'etudiant en autosuggestion"/>
<span class="asterisc">*</span>

<input name="nom1" placeholder="Nom du superviseur en autosuggestion"/>
<span class="asterisc">*</span>
<h4>* champ obligatoire</h4>
<button className='btn'>Valider</button>

</form>
)
}

const Affectationjurys=()=>{
return (
  <form className='block3'>
    <h3>Affectation des jurys</h3>
    <input name="nom2" placeholder="Nom de l'étudiant en autosuggestion"/>
    <span class="asterisc">*</span>
    <form className='block4'>
    <input name="nom2" placeholder="Nom du Président en autosuggestion"/>
    <span class="asterisc1">*</span>
    
    <input name="nom2" placeholder="Nom Membre 1 en autosuggestion"/>
    <span class="asterisc2">*</span>
    
    </form>
    <form className='block5'>
    <input name="nom2" placeholder="Nom Membre 2 en autosuggestion"/>
    <span class="asterisc1">*</span>
    
    <input className="nom3" placeholder="jj/mm/aaaa"/> 
    
    <span class="asterisc2">*</span>
    </form>

    <input name="nom2" placeholder="Heure soutenance"/>
    <span class="asterisc">*</span> 
    <h4>* champ obligatoire</h4>
    <button className='btn'>Valider</button>
    

  </form>
)
}


const Administration=()=>{
return (<div className='yh'>
  
<Affectationsujet/>
<br></br>
<Affectationsuperviseur/>
<br></br>
<Affectationjurys/>

</div>)

}
export default Administration;
