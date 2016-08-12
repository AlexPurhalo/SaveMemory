import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        return (
            <div>
                <span> x </span>
                {
                    this.props.title ? <h4>{this.props.title}</h4> : null
                }
                <div>{this.props.text}</div>
            </div>
        );
    }
}