import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Admin/Login";
import CreatePost from "./components/Admin/CreatePost";
import { AuthProvider } from "./components/Admin/Auth";
import PrivateRoute from "./components/Admin/PrivateRoute";
import PostView from "./components/PostViews/PostView";
import RealPostView from "./components/PostViews/RealPostView";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <PrivateRoute exact path="/createPost" component={CreatePost} />
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/preview" exact component={PostView} />
          <Route path="/post/:postId" exact component={RealPostView} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
