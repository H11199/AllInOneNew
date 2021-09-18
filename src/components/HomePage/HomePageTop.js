import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../../static/css/custom.css";
function HomePageTop() {
  return (
    <div className="pack container-fluid">
      <Header />
      <div>
        <div className="container-top-main">
          <h1 className="container-top-heading">All in One</h1>
          <p className="container-top-para">Learn anything you want</p>
          <a
            href="/login"
            class="button button-red button-right d-none d-sm-block d-sm-none d-md-block"
          >
            ADMIN
          </a>
          <br />
          <a href="#id1">
            <FontAwesomeIcon icon={faAngleDown} className="arrow-font" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomePageTop;
