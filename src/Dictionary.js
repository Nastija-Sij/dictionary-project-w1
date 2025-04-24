import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of the word: ${keyWord}`);
  }

  function handleKeyWordChange(event) {
    /*console.log(event.tager.value);*/
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus={true} onChange={handleKeyWordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
