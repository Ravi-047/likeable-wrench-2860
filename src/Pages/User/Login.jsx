import { useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CityContext } from "../../Context/CityContext";
import { loginUser } from "../../Redux/userauth/action.userauth";
import "./forminput.css";
import "./register.css";

const Login = () => {
  const toast = useToast();
  const { city } = useContext(CityContext);
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
    if (userExists.email === values.email) {
      if (userExists.password === values.password) {
        const randomToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        localStorage.setItem("token", randomToken);
        localStorage.setItem("username", userExists.username);
        toast({
          title: "Login Successfull",
          description: `Welcome ${userExists.username} to Our Home`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else {
        toast({
          title: "Password",
          description: "Please enter your correct password",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Email",
        description: "Please enter your correct Email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
      <p className="__no__account__">
        No Account, want to create{" "}
        <Link
          to={`/${city}/register`}
          style={{ textDecoration: "underline", color: "blue" }}
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
