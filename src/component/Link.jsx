import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/sign-up"}>Sign up</Link>
      <Link to={"/posts"}>Post</Link>
      <Link to={"/create-post"}>new Post</Link>
    </div>
  );
};

export default Links;
