import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: "",

    })
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault()
        if (data.email === "admin@firstrent.com" && data.password === "admin123") {
            alert("logi successfull");
            navigate("/admindashboard")
        }
    }
    const changeHandler = (e) => {
        const { name, value } = e.target;
        const newData = {
            ...data, [name]: value
        }
        setData(newData)
    }
    return (
        <div>
            <form >
                <label htmlFor="">Enter Your Email</label>
                <input
                    type="text"
                    value={data.email}
                    name="email"
                    placeholder='Enter Your email Id'
                    onChange={changeHandler}
                />
                <label htmlFor="">Enter Your Password</label>
                <input
                    type="text"
                    name="password"
                    value={data.password}
                    placeholder='Enter Your password'
                    onChange={changeHandler} />
                <button onClick={submitHandler}> Submit</button>
            </form>
        </div>
    )
}

export default AdminLogin
/*
import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import axios from "axios";
export default function Login() {
    const { isAuth, toggleAuth } = useContext(AuthContext)

    const [data, setData] = useState({
        email: "",
        password: "",

    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        const newData = {
            ...data, [name]: value
        }
        setData(newData)
    }
    const postData = () => {
        return axios.post(`https://reqres.in/api/login`, data);
    }

    const submitFormHandler = (e) => {
        e.preventDefault()
        const response = postData();
        response
            .then((res) => {
                console.log("inside submit function => ", res);
                toggleAuth();
            })
            .catch((err) => {
                console.log("inside submit functuion => error ", err)
            })
    }
    console.log(isAuth)
    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column", width: "30%", margin: "auto", border: "2px solid black", height: "400px", justifyContent: "space-evenly" }}>
                <label htmlFor="email" > Your Email</label>
                <input type="text"
                    placeholder='enter your name'
                    name="email"
                    value={data.userEmail}
                    onChange={onChangeHandler} />
                <label htmlFor="password">Your Password</label>
                <input
                    type="text"
                    placeholder='enter your password'
                    name='password'
                    value={data.userPassword}
                    onChange={onChangeHandler} />
                <button onClick={submitFormHandler}>Submit</button>
            </form>
        </div>
    )
}


*/