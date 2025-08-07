import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);


  function handleDictionaryResponse(response) {
    /*console.log(response.data[0]);*/
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    /*console.log(response);*/
      setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(function (error) {
        console.error("API error:", error);
      });
    /* https://api.dictionaryapi.dev/api/v2/entries/en/<word> */

    const pexelsApiKey =
      "mtgg26LWNQRU4ySauF0IStsqj1ygczN5Tmrgsbn6IHif7EChQOeBfQ0C";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: pexelsApiKey };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autofocus={true}
              onChange={handleKeywordChange}
              placeholder="Type in a word...e.g. Tree, Courage, etc..."
            />
          </form>

          <div className="Dictionary">
            <Results results={result} />
            <hr />
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
