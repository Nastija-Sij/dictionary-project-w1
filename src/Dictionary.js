import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        console.error("API error:", error);
      });
    /* https://api.dictionaryapi.dev/api/v2/entries/en/<word> */
  }

  function handleKeywordChange(event) {
    /*console.log(event.tager.value);*/
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus={true} onChange={handleKeywordChange} placeholder="Type in a word.."/>
      </form>

      <Results results={result} />
    </div>
  );
}
