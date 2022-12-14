import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <p>
                    <b>Text :</b>{this.props.content} 
                </p>
                <p>
                    < b >Post By</b>{this.props.name} </p>
            </div>
        );
    }
}

