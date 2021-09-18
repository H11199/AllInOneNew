import React from "react";
import PostHeader from "./PostHeader";
import ReactHtmlParser from "react-html-parser";
import PostBody from "./PostBody";
const PostView = (props) => {
  const data = JSON.parse(localStorage.getItem("post-info"));
  return (
    <div>
      <PostHeader />
      <div className="container container-postview">
        <div class="row justify-content-center">
          <div class="col align-self-center">
            <h1 className="postview-title">{data.Title}</h1>
            <div className="row">
              <div className="admin-img">
                <img
                  src="https://gsr-web.s3.amazonaws.com/prod/uploads/2020/02/Best-Sneaker-Bots-For-2020.jpg"
                  width="60px"
                  height="60px"
                  height="60px"
                  alt="..."
                  class="img-thumbnail rounded-circle border-dark"
                />
              </div>
              <div className="admin-img">
                <div>
                  Admin
                  <a class="badge badge-pill badge-primary" href="#">
                    Inform
                  </a>
                </div>
                <div>{data.Date}</div>
              </div>
            </div>
          </div>
          <div class=".d-none .d-md-block .d-lg-block .d-xl-none"></div>
          <div class="col align-self-end">
            <div className="row">
              <div className="social-media rounded-circle border-dark ">
                <a
                  className="media-links"
                  href="https://twitter.com/Himansh19211107"
                >
                  <i class="bi bi-twitter"></i>
                </a>
              </div>
              <div className="social  rounded-circle border-dark ">
                <a
                  href="https://www.linkedin.com/in/himanshu-sharma-237973198/"
                  style={{ color: "#000" }}
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>

              <div className="social-media rounded-circle border-dark ">
                <a className="media-links" href="">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={data.imgLink}
          class="img-fluid util-img"
          alt="..."
          width="100%"
        />
      </div>
      <div>
        <PostBody text={ReactHtmlParser(data.Post)} />
      </div>
    </div>
  );
};
export default PostView;
