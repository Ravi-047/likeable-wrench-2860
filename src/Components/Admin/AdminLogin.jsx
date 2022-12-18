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
            alert("login successfull");
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
            <form style={{ display: "flex", flexDirection: "column", margin: "auto", width: "30%", border: "1px solid black", justifyContent: "space-evenly", alignItems: "center", height: "300px", marginTop: "60px", marginBottom: "60px" }} >
                <h1> Admin Login form</h1>
                <label htmlFor=""
                    style={{ width: "70%" }}

                >Enter Your Email</label>
                <input
                    type="text"
                    value={data.email}
                    name="email"
                    placeholder='Enter Your email Id'
                    onChange={changeHandler}
                    style={{
                        border: "1px solid",
                        width: "70%"
                    }}
                />
                <label htmlFor=""
                    style={{
                        width: "70%"
                    }}

                >Enter Your Password</label>
                <input
                    type="text"
                    name="password"
                    value={data.password}
                    placeholder='Enter Your password'
                    onChange={changeHandler}
                    style={{
                        border: "1px solid",
                        width: "70%"
                    }} />
                <button onClick={submitHandler} style={{ backgroundColor: "orange", width: "100px", height: "50px", display: "flex", justifyContent: "space-around" }}  > Submit</button>
            </form>
        </div>
    )
}

export default AdminLogin


/* function errorMessageExample() {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

*/