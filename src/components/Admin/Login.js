import React, { useRef, useState } from "react";
import { useAuth } from "./Auth";
import { useHistory } from "react-router";
import Header from "../HomePage/Header";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/createPost");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-page-body">
      <Header />
      <div className="container">
        <div className="card-container">
          <div class="card card-login text-center" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">LOGIN</h5>
              <form style={{ marginTop: "35px" }} onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    type="email"
                    ref={emailRef}
                    required
                    class="form-control login-inp"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    ref={passwordRef}
                    required
                    class="form-control login-inp"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-danger btn-login">
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
