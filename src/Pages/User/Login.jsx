import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/userauth/action.userauth";
import "./forminput.css";
import "./register.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const userData = useSelector((store) => store.userAuth.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userExists = userData.find((item) => item.email === values.email);
    console.log(values);
    console.log(userData);
    if (userExists.email === values.email) {
      if (userExists.password === values.password) {
        const randomToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        localStorage.setItem("token", randomToken);
        localStorage.setItem("username", userExists.username);
        alert("login successful");
        navigate("/");
      } else {
        alert("Please Enter Correct Password");
      }
    } else {
      alert("Please Enter Correct Email");
    }
  };

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="__register_form__">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="formInput">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required="true"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required="true"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
