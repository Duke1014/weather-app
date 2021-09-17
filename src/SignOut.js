import React from 'react'

export default function SignOut( {setUserData} ) {

    const signOut = () => {
        console.log("User signed out.")
        setUserData()
    }

    return (
        <div>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}
