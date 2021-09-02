import React from 'react'
import Address from './Address'

const User = ({user, showAddress}) => {
    return (
        <div className='user'>
            <h1>Name: {user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            {showAddress && <Address user={user}/>}
        </div>
    )
}

export default User