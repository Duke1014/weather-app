import React from 'react'

export default function Login() {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users'
        ).then(r =>r.json()).then(data => {
            console.log(data)
        })
        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" name="name" />
                    <input type="submit"></input>
                </label>
            </form>
        </div>
    )
}
