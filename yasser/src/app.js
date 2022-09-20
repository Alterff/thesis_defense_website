import React from 'react';

import {BrowserRouter,Route,Routes} from "react-router-dom";
import Account from './components/account/account';
import Administration from './components/admin/admin';

import Login from './components/login/login';
import Supervis from './components/superviseur/supervis';
import Loginsup from './components/loginsupe/loginsup';
import Loginjury from './components/loginjury/loginjury';
import Pagge from'./components/page1/page1'
import Fiche1 from'./components/fiche1/fiche1'
import Fiche2 from'./components/fiche2/fiche2'
import Fiche3 from'./components/fiche3/fiche3'
import Fiche4 from'./components/fiche4/fiche4'
import Fiche5 from'./components/fiche5/fiche5'
import Fiche6 from'./components/fiche6/fiche6'
import Jury from './components/jury/jury'
import Note1 from './components/Note1/Note1'
import Note2 from './components/Note2/Note2'
import Note3 from './components/Note3/Note3'
import NoteE1 from './components/Note.encadrant1/Note.encadrant1'
import NoteE2 from './components/Note.encadrant2/Note.encadrant2'
import NoteE3 from './components/Note.encadrant3/Note.encadrant3'
function App() {
return(
<div className='App'>
<BrowserRouter>
<Routes>
<Route path="/" element={<Account/>}/>
<Route path="/fiche1" element={<Fiche1/>}/>
<Route path="/fiche2" element={<Fiche2/>}/>
<Route path="/Note1" element={<Note1/>}/>
<Route path="/fiche3" element={<Fiche3/>}/>
<Route path="/fiche4" element={<Fiche4/>}/>
<Route path="/Note2" element={<Note2/>}/>
<Route path="/fiche5" element={<Fiche5/>}/>
<Route path="/fiche6" element={<Fiche6/>}/>
<Route path="/Note3" element={<Note3/>}/>


<Route path="/page" element={<Pagge/>}/>
<Route path="/login" element={<Login/>}/> 
<Route path="/loginsup" element={<Loginsup/>}/>
<Route path="/loginjury" element={<Loginjury/>}/>
<Route path="/admin" element={<Administration/>}/>
<Route path="/supervis" element={<Supervis/>}/> 
<Route path="/jury" element={<Jury/>}/>
<Route path="/Note.encadrant1" element={<NoteE1/>}/>
<Route path="/Note.encadrant2" element={<NoteE2/>}/>
<Route path="/Note.encadrant3" element={<NoteE3/>}/>


</Routes>



</BrowserRouter>



</div>
)


}
export default App