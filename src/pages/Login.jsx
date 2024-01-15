import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("token"))
      ? JSON.parse(localStorage.getItem("token")).token
      : ""
  );
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetail((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:8080/user/login", {
      ...userDetail,
    });
    localStorage.setItem("token", JSON.stringify({ token: res.data.token }));
    console.log(res.data);
  };
  const { email, password } = userDetail;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
