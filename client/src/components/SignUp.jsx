import React, { useState } from 'react'
import axios from "axios"
import { Select } from "@components"
import { roles } from '@assets/static'

const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL


function SignUp() {
  const [input, setInput] = useState(
    {email : "", password : "", role : "", course : ""}
  )
  const [errors, setErrors] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prev => ({...prev, [name] : value}))
  }

  axios.defaults.withCredentials = true

  function handleSubmit(e) {
    e.preventDefault()

    setErrors(false)

    axios
      .post(serverBaseUrl + "auth/register", input)
      .then((data) => {console.log(data)})
      .catch(err => {
        if(err.response) setErrors(() => err.response.data.errors)
        else setErrors(() => err.message)
      })
  }

  return (
    <>
      {errors && errors.map(error => <p>
        {error}
      </p>)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' placeholder='ex : User@mail.com'onChange={handleChange}/> 
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='Password'onChange={handleChange}/>
        <Select name="role" label="Register as" options={roles} onChange={handleChange}/>
        {input.role === "tutor" && 
          <>
            <label htmlFor="course">Course</label>
            <input type="text" name='course' placeholder='What do you want to teach?'onChange={handleChange}/>
          </>
        }
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default SignUp