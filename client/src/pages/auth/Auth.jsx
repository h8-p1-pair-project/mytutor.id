import React from 'react'
import { LogIn, SignUp, Tab } from "@components"

const tabs = [
    {
        id : 1,
        name : "Login",
        component : <LogIn />,
    },
    {
        id : 2,
        name : "Sign Up",
        component : <SignUp />,
    }
]

function Auth() {
  return (
    <div>
        <Tab tabs={tabs}/>
    </div>
  )
}

export default Auth