import { useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CityContext } from "../../Context/CityContext";
import { loginUser, registerUser } from "../../Redux/userauth/action.userauth";
import FormInput from "./FormInput";
import "./register.css";

const Register = () => {
  const toast = useToast();
  const { city } = useContext(CityContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      plaeholder: "Username",
      errorMessage:
        "Username should be 3 - 20 characters and shouldn't include any special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      plaeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      plaeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      plaeholder: "Password",
      errorMessage:
        "Password should be 8 - 20 characters and include atleast 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      plaeholder: "Confirm Password",
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const userData = useSelector((store) => store.userAuth.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userExists = userData.find((item) => item.email === values.email);
    if (userExists) {
      toast({
        title: "Login Successfull",
        description: `${values.email} is already Registered Please Login, Thank You`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      navigate(`/${city}/login`);
    } else {
      dispatch(registerUser(values));
      toast({
        title: "Successfull Registered",
        description: `Thank You ${values.username}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate(`/${city}/login`);
    }
  };

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div className="__register_form__">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {inputs?.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Have an account{" "}
            <Link
              to={`/${city}/login`}
              style={{ textDecoration: "underline", color: "blue" }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
