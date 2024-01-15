import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CreatePost from "../pages/CreatePost";
import Post from "../pages/Post";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Post />} />

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
