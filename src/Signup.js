import React, {useState} from 'react'

export default function Signup({setUserData}) {
    
    const [login, setLogin] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch("http://localhost:3000/users/")
        .then(r => r.json()).then((data) => {
            const user = data.find(u => u.username === login)
            if (user) {
                setError("Username already in use, please try another one.")
            } else {              
                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username: login, location: []})
                }).then(r =>r.json()).then((data) => {
                    setUserData(data)
                })
            }            
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input 
                        type="text" 
                        name="name" 
                        value={login}
                        onChange={e => setLogin(e.target.value)} 
                    />
                    <input type="submit"></input>
                </label>
            </form>
            <div>
                {error}
            </div>
        </div>
    )
}


