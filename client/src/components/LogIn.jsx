import React, { useState } from 'react'
import axios from "axios"
import { Select } from "@components"
import { roles } from "@assets/static"

const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL

function LogIn() {
  const [input, setInput] = useState({
    email: "", password: "", role: ""
  })
  const [errors, setErrors] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prev => ({...prev, [name] : value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setErrors(false)

      axios
        .post(
          `${serverBaseUrl}auth/login`, 
          input
        )
        .then(res => console.log(res.data))
        .catch(err => setErrors(() => err.response.data.errors))
  }

  return (
    <>
      {errors && errors.map(error => <p>
        {error}
      </p>)}
      <form method='POST' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' placeholder='ex : User@mail.com' onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='Password'onChange={handleChange}/>
        <Select name="role" label="Login as" options={roles} onChange={handleChange}/>
        <button type='submit'>Log in</button>
      </form>
    </>
  )
}

export default LogIn