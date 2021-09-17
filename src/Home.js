import React, {useState} from 'react'
import Signup from './Signup'
import SignOut from './SignOut'
import Login from './Login'
import Weather from './Weather'

export default function Home() {

    const [userData, setUserData] = useState()

    return (
        <div>
            <h1>
                Welcome to Weather App!
            </h1>
            <h2>
                Personalize your experience by creating a username. Then, save your weather locations to use whenever you log in!
            </h2>
            {userData ? 
            <>
                <SignOut setUserData={setUserData} />
                <Weather setUserData={setUserData} userData={userData} /> 
            </>: <>
                Sign Up Here:
                <Signup setUserData={setUserData} />
                <br></br>

                Log In Here:
                <Login setUserData={setUserData} />
                <br></br>

            </>
            }   
        </div>
    )
}
