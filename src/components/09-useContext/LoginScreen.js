import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);
    const fakeUser = {
        id: 654321,
        name: 'Mavarnare',
    };
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ () => setUser({ ...fakeUser }) }
            >
                Login
            </button>
        </div>
    )
}
