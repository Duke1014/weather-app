import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Weather from './Weather'

export default function Home() {

    return (
        <div>
            <h1>
                Welcome to Weather App!
            </h1>
            <h2>
                Personalize your experience by creating a username. Then, save your weather locations to use whenever you log in!
            </h2>
            Sign Up Here:
            <Signup />
            <br></br>
            Log In Here:
            <Login />
            <br></br>
            <Weather />
        </div>
    )
}
