import React from "react";
const DashboardCard = (props) => {
  return (
    <div class="card card-dashboard" style={{ height: "30rem" }}>
      <img
        class="card-img-top"
        src={props.imgLink}
        alt="Card image cap"
        height="20rem"
      />
      <div class="card-body">
        <h5 class="card-title">{props.Title}</h5>
        <p class="card-text">{props.summary}</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default DashboardCard;
