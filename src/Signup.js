import React from 'react'

export default function Login() {
    
    const handleSubmit = () => {
        return null
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" name="name" />
                </label>
            </form>
        </div>
    )
}
