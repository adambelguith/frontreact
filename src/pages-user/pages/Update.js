import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './css/Update.css'
import * as IconsRi from "react-icons/ri";

function Update() {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    updateuser: {
      newUserName: '',
      newpassword: '',
      confirm_password: '',
    },
  })

  const [old, setOld] = useState({
    olduser: {
      oldpassword: '',
      email: '',
    }
  })

  const [errors, setErrors] = useState([])

  const handlenewUserName = (e) => {
    setValues({
      updateuser: {
        ...values.updateuser,
        newUserName: e.target.value
      }
    })
  }

  const handleemail = (e) => {
    setOld({
      olduser: {
        ...old.olduser,
        email: e.target.value
      }
    })
  }

  const handlenewpassword = (e) => {
    setValues({
      updateuser: {
        ...values.updateuser,
        newpassword: e.target.value
      }
    })
  }

  const handleoldpassword = (e) => {
    setOld({
      olduser: {
        ...old.olduser,
        oldpassword: e.target.value
      }
    })
  }

  const handleconfirm_password = (e) => {
    setValues({
      updateuser: {
        ...values.updateuser,
        confirm_password: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('update user =' + values.updateuser)
    console.log('old user =' + old.olduser)
    axios.patch('http://localhost:3000/users/update/:old.olduser.email/:old.olduser.oldpassword', values.updateuser)
      .then(response => {
        console.log(response)
        navigate("/")
      })
      .catch((err) => {
        console.log(err.response.data.message)
        setErrors(err.response.data.message)
      })
  }

  return (
    <div className="form-container-update">
      <div className="big-form-update">
        <h3>Edit Profile</h3>
        <div className="form-update">
          <div className="left-update">

            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="xyz"
              value={old.olduser.email}
              className="form--input-update"
              onChange={handleemail}
            />

            <input
              type="password"
              name="oldpassword"
              placeholder="Old password"
              className="form--input-update"
              value={old.olduser.oldpassword}
              onChange={handleoldpassword}
            />

          </div>

          <div className="bar-update" />
          <div className="right-update">

            <input
              type="text"
              name="newUserName"
              placeholder="Username"
              value={values.updateuser.newUserName}
              className="form--input-update"
              onChange={handlenewUserName}
            />

            <input
              type="password"
              name="newpassword"
              placeholder="New password"
              className="form--input-update"
              value={values.updateuser.newpassword}
              onChange={handlenewpassword}
            />

            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              className="form--input-update"
              value={values.updateuser.confirm_password}
              onChange={handleconfirm_password}
            />

          </div>
        </div>

        {errors.length > 1 && <></>}
        {errors.length > 1 ? <pre for="text" className="errur-update"><IconsRi.RiErrorWarningFill /> {errors}</pre> : <></>}

        <center>
          <button
            onClick={handleSubmit}
            className="form--submit-update">Update my profile
          </button>
        </center>
      </div>
    </div>
  );
}





export default Update;