import React from "react";
const PostBody = (props) => {
  return (
    <div className="container post-post-container">
      <div class="card post-card">
        <div class="card-body">{props.text}</div>
      </div>
    </div>
  );
};
export default PostBody;
