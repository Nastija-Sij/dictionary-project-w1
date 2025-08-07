import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  /*console.log(props.results);*/

  if (props.results) {
    const phonetic = props.results.phonetics.find(
      (phonetic) => phonetic.text && phonetic.audio
    );
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>

        <hr />
        {phonetic && (
          <h5 className="phonetic">
            <Phonetics phonetic={phonetic} />
          </h5>
        )}

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
