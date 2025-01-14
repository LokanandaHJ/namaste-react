import React from 'react';
import UserClass from './UserClass';
import UserFunctionalComponent from './User';

const About = () => {
    return (
        <div>
            <UserFunctionalComponent name={"Loka"} location={"Bengaluru"} />
            <UserClass name={"Loka from class"} location={"Bengaluru from karnataka"} />
        </div>
    );
}

export default About;