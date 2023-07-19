import React from "react";
import postData from "./data.json";

const PostList = () => {
  return (
    <div>
      {postData.map((post) => (
        <div key={post.id} style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;

  