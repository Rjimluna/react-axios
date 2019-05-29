import React from 'react'

const GetUsers = (props) => {
    return (
        <form onSubmit={props.getUser}>
            <input type="text" placeholder="Enter Name" name="id" />
            <button>Send Request</button>
        </form>
    )
}

export default GetUsers
