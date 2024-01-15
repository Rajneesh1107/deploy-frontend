import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const initialuser = {
    title: "",
    body: "",
    no_of_comments: "",
    device: "",
  };
  const [token] = useState(
    JSON.parse(localStorage.getItem("token"))
      ? JSON.parse(localStorage.getItem("token")).token
      : ""
  );
  const [userDetail, setUserDetail] = useState(initialuser);

  const handleChange = (e) => {
    let { name, value } = e.target;
    value = name === "no_of_comments" ? (value = +value) : value;
    setUserDetail((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "http://localhost:8080/user/register",
      {
        ...userDetail,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res.data);
  };
  const { title, no_of_comments, body, device } = userDetail;
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="body"
            placeholder="body"
            value={body}
            onChange={handleChange}
          />
          <input
            type="device"
            name="body"
            placeholder="body"
            value={body}
            onChange={handleChange}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
