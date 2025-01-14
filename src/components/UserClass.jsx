import React from "react";

export default class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <div>
                <h1>class count = {this.state.count}</h1>
                <h1>{this.props.name}</h1>
                <p>{this.props.location}!</p>
            </div>
        );
    }
}
