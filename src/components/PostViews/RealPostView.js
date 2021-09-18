import { child, get, getDatabase, onValue, ref } from "@firebase/database";
import React, { useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import ReactHtmlParser from "react-html-parser";
import PostBody from "./PostBody";
import { useParams } from "react-router";
import Footer from "../HomePage/Footer";

const RealPostView = (props) => {
  const [postData, setpostData] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    const dbref = ref(getDatabase());
    const url = "-" + postId;
    get(child(dbref, `posts/${url}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setpostData(data);
          console.log(data);
        } else {
          console.log("no data available");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <PostHeader />
      <div className="container-postview container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-sm-8 align-self-center">
            <h1 className="postview-title">{postData.Title}</h1>
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
                  <a
                    class="badge badge-pill badge-primary"
                    href="http://himanshu-sharma-portfolio.herokuapp.com/contact"
                  >
                    Inform
                  </a>
                </div>
                <div>{postData.Date}</div>
              </div>
            </div>
          </div>
          <div class="w-100 d-sm-none d-block"></div>
          <div class="col-4 align-self-end d-none d-sm-block d-md-block">
            <div className="row">
              <div className="social-media rounded-circle border-dark col-0.5">
                <a className="media-links" href="">
                  <i class="bi bi-twitter"></i>
                </a>
              </div>
              <div className="social rounded-circle border-dark">
                <a style={{ color: "#000" }} href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>

              <div className="social-media rounded-circle border-dark">
                <a className="media-links" href="">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-cover-img">
        <img
          src={postData.imgLink}
          class="img-fluid util-img"
          alt="..."
          width="100%"
        />
      </div>
      <div>
        <PostBody text={ReactHtmlParser(postData.Post)} />
      </div>
      <Footer />
    </div>
  );
};
export default RealPostView;
