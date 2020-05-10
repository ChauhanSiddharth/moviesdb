import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import  Search  from './components/Search'
import  Results  from './components/Results'
import axios from "axios"
import Popup from './components/Popup'
import { TableBody } from '@material-ui/core';

function App() {
  const [ state, setState ] = useState({
    s : "",
    results : [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=6b2cf894";

  const search = (e) => {
    if(e.key === "Enter"){
      axios(apiurl + "&s=" + state.s).then(({data})=>{
        let results = data.Search;
        setState(prevState => {
          return {...prevState, results: results }
        })
      });
    }
  }
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
    
  }
  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      document.body.style.overflow = "hidden";
      console.log(result)
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    document.body.style.overflow = "scroll";
    setState(prevState => {
      return{ ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
        <header>
          <Typography className="labelTitle" variant="h3" gutterBottom>
          <MovieCreationIcon fontSize="large"/> Search Movies
          </Typography>
        </header>
        <main>
          <Search handleInput={handleInput} search={search} />
          <Results results={state.results} openPopup={openPopup} />
          {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> :false}
        </main>
        <footer>
          <Typography variant="body1" className="footerText" gutterBottom>Built with <a href="https://reactjs.org/">ReactJS</a> & <a href="https://material-ui.com/">Material UI</a></Typography>
        </footer>
      
    </div>
  );
}

export default App
