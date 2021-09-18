import React from "react";
import { Link } from "react-router-dom";
const MainBoard = (props) => {
  return (
    <div>
      <div class="card cardMainBoard">
        <img class="card-img-top" src={props.imglink} alt="Card image cap" />
        <div class="card-body">
          <h1 class="card-title">{props.title}</h1>
          <h6 class="card-subtitle mb-2 text-muted">Posted on {props.date}</h6>
          <p class="card-text">{props.postsummary}...</p>
          <Link to={props.toLink} class="card-link">
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainBoard;
