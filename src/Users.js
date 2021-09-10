import React, {useState, useEffect} from 'react'

export default function Users() {

    const [users, setUsers] = useState('')

    useEffect(() => {
        fetch("db.json")
        .then((r) => r.json())
        .then((data) => {
            setUsers(data)
        })
    }, [])

    return (
        <div>
            {users}
        </div>
    )
}
