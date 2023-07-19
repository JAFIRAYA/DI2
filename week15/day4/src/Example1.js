import React from "react";
import data from "./data2.json";

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Social Media Links</h2>
        {data.SocialMedias.map((socialMedia) => (
          <div key={socialMedia.id}>
            <p>Name: {socialMedia.name}</p>
            <p>URL: {socialMedia.url}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;
