import React, { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const initialuser = {
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    city: "",
  };
  const [token] = useState(
    JSON.parse(localStorage.getItem("token"))
      ? JSON.parse(localStorage.getItem("token")).token
      : ""
  );
  const [userDetail, setUserDetail] = useState(initialuser);

  const handleChange = (e) => {
    let { name, value } = e.target;
    value = name === "age" ? (value = +value) : value;
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
  const { email, password, name, age, gender, city } = userDetail;
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="age"
            placeholder="age"
            value={age}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="gender"
            value={gender}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            value={city}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
