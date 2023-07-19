import React from "react";
import data from "./data.json";

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((experience) => (
          <div key={experience.id}>
            <p>Title: {experience.title}</p>
            <p>Company: {experience.company}</p>
            <p>Duration: {experience.duration}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
