import React, {useState} from 'react'

export default function Signup() {
    
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, location: []})
        }).then(r =>r.json()).then(data => {
            console.log(data)
        })
        // this should ADD information to db.json to use later
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input 
                        type="text" 
                        name="name" 
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <input type="submit"></input>
                </label>
            </form>
        </div>
    )
}


/*
edititing existing data
use patch request

fetch(`http://localhost:3000/users/{id}`, {

method: "PATCH",
headers: {"Content-Type": "application/json"},
body: JSON.strigify({ whatever info is being updated })
})


*/