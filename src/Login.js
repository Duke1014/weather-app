import React, {useState} from 'react'

export default function Login({setUserData}) {
    
    const [login, setLogin] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => { 
        e.preventDefault()
        fetch('http://localhost:3000/users')
        .then(r =>r.json()).then(users => {
            const user = users.find(u => u.username === login)
            if (user) {
                setUserData(user)
            } else {
                setError("Username not found, please try again.")
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:   <input 
                                    type="text" 
                                    name="name"
                                    value={login}
                                    placeholder=""
                                    onChange={e => setLogin(e.target.value)}
                                />
                    <input type="submit"></input>
                </label>
            </form>
            <div>{error}</div>
        </div>
    )
}
