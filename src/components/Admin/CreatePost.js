import React, { useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "@firebase/auth";
import "../../static/css/custom.css";
import PostForm from "./PostForm";
import Dashboard from "./Dashboard";
const CreatePost = () => {
  const [block, setBlock] = useState(false);
  let mainBlock = "";
  if (block) {
    mainBlock = <PostForm />;
  } else {
    mainBlock = <Dashboard />;
  }

  return (
    <div className="row post-row">
      <div className="bg-dark VerticalBar col-2">
        <h3>Hey Admin</h3>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" onClick={() => setBlock(false)} href="#">
              <i class="bi bi-speedometer2"></i> Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" onClick={() => setBlock(true)}>
              <i class="bi bi-file-earmark-plus-fill"></i> Create New
            </a>
          </li>
        </ul>
        <button className="btn btn-danger" onClick={() => signOut(auth)}>
          signOut
        </button>
      </div>
      <div className="col-10 post-form">{mainBlock}</div>
    </div>
  );
};
export default CreatePost;
