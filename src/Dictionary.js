import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    /*console.log(response.data[0]);*/
    setResult(response.data[0]);
  }

  function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        console.error("API error:", error);
      });
    /* https://api.dictionaryapi.dev/api/v2/entries/en/<word> */
  }

  function handleSubmit(event) {
    event.preventDefault();
search();
    
  }

  function handleKeywordChange(event) {
    /*console.log(event.tager.value);*/
    setKeyword(event.target.value);
  }

function load() {
  setLoaded(true);
  search();
}

  if (loaded) {
     return (
       <div className="Dictionary">
         <form onSubmit={handleSubmit}>
           <input
             type="search"
             autofocus={true}
             onChange={handleKeywordChange}
             placeholder="Type in a word.."
           />
         </form>
         <p className="Type-example">For example: tree, honesty, etc...</p>
         <Results results={result} />
       </div>
     );
  } else {
    load();
    return "Loading";
  } 

 
}
