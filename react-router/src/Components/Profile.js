import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <div>
            <h2>
                Welcome! {auth.user}
            </h2>
            {
                auth.user &&
                <button onClick={handleLogout}>Logout</button>
            }
        </div>
    )
}

export default Profile