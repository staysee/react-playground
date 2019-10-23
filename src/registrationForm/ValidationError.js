import React from 'react'

export default function ValidationError(props){
    //if message is a string, display the message,
    //otherwise if it is undefined return an empty fragment
    if (props.message) {
        return (
            <div className="error">{props.message}</div>
        )
    }

    return <></>
}