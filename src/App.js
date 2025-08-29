import React, { useState } from "react"

import Search from "./components/Search"
import Results from "./components/Results"
import axios from "axios"
import Popup from "./components/Popup"


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  
  const apiurl = "https://www.omdbapi.com/?apikey=365b53d0"

  const search = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = (data.Search || []).filter(
        (movie, index, self) =>
          index === self.findIndex(m => m.imdbID === movie.imdbID)
      );

      setState(prevState => {
        return { ...prevState, results };
      });
    });
  }
};
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return{...prevState, s: s}
    });
  }

  const openPopup = id => {
    console.log("openPopup called with id:", id);
    axios(apiurl + "&i=" + id).then(({data}) =>{
      console.log("API response for popup:", data); 
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search = {search}/>
        <Results results = {state.results} openPopup={openPopup}/>

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
