import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  /*console.log(props.meaning);*/
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition-block">
              <strong>{index+1}. Definition: </strong>
              {definition.definition}
              {definition.example && (
                <>
                  <br />
                  <em>Example: "{definition.example}"</em>
                </>
              )}
              {definition.synonyms && definition.synonyms.length > 0 && ( /*only renders if its not an empty array*/
                <Synonyms synonyms={definition.synonyms} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
