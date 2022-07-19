import React,{useEffect,useState} from 'react';

import Navbar from "./components/navbar.js";
import Characters from "./components/characters.js";
import Pagination from './components/pagination.js';

function App () {

  const [character,setCharacter] = useState([]);  
  const [info,setInfo] = useState({});  

  const InicalUrl =' https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data=>{
      setCharacter(data.results);
      setInfo(data.info);
    })
    .catch(error =>console.log(error))
   
  };
  const onPrevi =()=>{
    fetchCharacters(info.prev)
  }
  const onNext =()=>{
    fetchCharacters(info.next)
  }
  useEffect(() =>{
    fetchCharacters(InicalUrl)
  },[])

  return (
    <>
      <Navbar brand="rick and morty"></Navbar>
      
      <div className="container mt-4">
        <Pagination prev={info.prev} next={info.next} onPrevi={onPrevi} onNext={onNext}/>
        <Characters character={character}/>
        <Pagination prev={info.prev} next={info.next} onPrevi={onPrevi} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
