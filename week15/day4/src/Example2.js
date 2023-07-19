import React from "react";
import data from "./data2.json";

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {data.Skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
