import React, {useState, useEffect} from 'react'

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then((r) => r.json()).then((data) => {
            console.log(data)
            setUsers(data)
        })
    }, [])

    const userElements = users.map((user)=> {
        return <li key={user.id}>
            {user.username}
        </li>
    })

    return (
        <div>
            <ul>
              {userElements}
            </ul>
        </div>
    )
}
