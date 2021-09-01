import React from 'react'
import Signup from './Signup'
import Login from './Login'

export default function Home() {

    return (
        <div>
            <h1>
                Welcome to Insert-Clever-Name-Here Weather App!
            </h1>
            <h2>
                Personalize your experience by creating a username and password. Then, save your weather locations for your use!
            </h2>
        Sign Up Here:
        <Signup />
        <br></br>
        Log In Here:
        <Login />
        </div>
    )
}
