import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text && (
        <span className="PhoneticText">{props.phonetic.text}</span>
      )}

      {props.phonetic.audio && (
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
          className="Link"
        >
          Listen
          {" "}
        </a>
      )}
    </div>
  );
}
