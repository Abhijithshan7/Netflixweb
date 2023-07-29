import React from "react";
import NavBar from "./Components/NavBar";
import{orginals,trending,action,romanc,horror,comedy,Documentaries} from './urls'
import './App.css'
import Baner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost"; 



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Baner/>
      <RowPost url={orginals} title='NetFlix Orginasls'/>
      <RowPost url={trending} title='Trending'/>
      <RowPost url={action} title='Action'isSmall />
      <RowPost url={romanc} title='Romantic 'isSmall />
      <RowPost url={comedy} title='Comedy'isSmall />
      <RowPost url={horror} title='Horror'isSmall />
      <RowPost url={Documentaries} title='Documentaries'isSmall />
    
    </div>
    
  );
}


export default App;
 