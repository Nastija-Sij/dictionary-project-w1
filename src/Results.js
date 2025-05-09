import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  /*console.log(props.results);*/

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h5 className="phonetic">
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </h5>
        <div className="definition-section">
          {props.results.meanings.map(function (meaning, index) {
            /*console.log("meaning:", meaning);*/

            if (!Array.isArray(meaning.definitions)) {
              return <p key={index}>No definitions available.</p>;
            }

            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
