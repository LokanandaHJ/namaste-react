import React, { useState } from 'react';

const UserFunctionalComponent = (props) => {

    const [count, setCount] = useState(0);

    return <div className>
        <h1> func count = {count}</h1>
        <div>
            Increment the count
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <h1>{props.name}</h1>
        <p>{props.location}</p>
    </div>
}

export default UserFunctionalComponent;