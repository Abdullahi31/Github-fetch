import logo from './logo.svg';
import './App.css';
import Repolist from './component/Repolist';
import Error from './component/Error'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

 

function App() {
  const [repolist, setrepolist] = useState([])
  useEffect(()=>{
    axios.get("https://api.github.com/users/abdullahi31/repos").then((res)=>{
        console.log(res.data)
        setrepolist(res.data)
    })
  }, [])
  return(

    <div className="App">
    <Routes>
      <Route path="/"  element={<Repolist  repolist={repolist}/>} />
      <Route path="/repo/:name"  element={<Repolist  repolist={repolist}/>} />
      <Route path="*"  element={<Error/>} />
    </Routes>
      
    </div>
  )
  
}

export default App;
