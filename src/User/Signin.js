import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Sign.css';
import * as IconsRi from "react-icons/ri";

function Signin() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
    
        getuser: {
            username: '',
            password: '',
            email: ''
        },
    
    })

    const [errors, setErrors] = useState([])

    const handleusername = (e) => {
        setValues({
            getuser: {
                ...values.getuser,
                username: e.target.value
            }
        })
    }
    
    const handleemail = (e) => {
        setValues({
            getuser: {
                ...values.getuser,
                email: e.target.value
            }
        })
    }

    const handlepassword = (e) => {
        setValues({
            getuser: {
                ...values.getuser,
                password: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('values= '+values)
        console.log('get user= '+ values.getuser.email)
        axios.get('http://localhost:3000/users/signin', values.getuser)
            .then(response => {
                console.log(response)
                navigate("/")
            })
            .catch((err) => {
                console.log(values.getuser)
                console.log(err.response.data.message)
                setErrors(err.response.data.message)
            })
    }

    const signupbutton = (e) => {
        e.preventDefault()
        navigate("/signup")
    }


    return (
        <div className="form-container">
            <div className="form">
                <h3>Sign In</h3>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.getuser.username}
                    className="form--input"
                    onChange={handleusername}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    autoComplete="xyz"
                    value={values.getuser.email}
                    className="form--input"
                    onChange={handleemail}
                />
              
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form--input"
                    value={values.getuser.password}
                    onChange={handlepassword}
                />

                {errors.length > 1 && <></>}
                {errors.length > 1 ? <pre for="text" className="errur"><IconsRi.RiErrorWarningFill /> {errors}</pre> : <></>}

                <div className="form-container-button">
                    <button
                        onClick={handleSubmit}
                        className="form--submit">Sign In
                    </button>
                    <p className="or"> Or </p>
                    <button
                        className="form--submit-btn2"
                        onClick={signupbutton} >
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
}





export default Signin;