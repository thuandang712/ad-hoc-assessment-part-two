import React from 'react'
import User from './User'

const Users = ({users, showAddressInfo, showAddress}) => {

    const handleShowAddress = () => {
        showAddressInfo()
    }

    return (
        <div className='container'>
            <h1>User Info</h1>
            <button className='show-address-btn' onClick={handleShowAddress}>Show Address</button>
            {users.map(user => (
                <User key={user.id} user={user} showAddress={showAddress}/>
            ))}
        </div>
    )
}

export default Users