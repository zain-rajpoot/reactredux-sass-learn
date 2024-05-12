import React from 'react'
export default function user(props) {
    console.log(props.data.name);
    return (
        <>
            <div>User Components</div>
            <h1>{props.data.name}</h1>
        </>
    );
}
