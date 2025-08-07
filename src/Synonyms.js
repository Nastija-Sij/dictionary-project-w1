import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <strong>Synonyms: </strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <div key={index}>
                <p>
                  {" "}
                  <li>{synonym}</li>
                </p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
