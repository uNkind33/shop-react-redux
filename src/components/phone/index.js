import React, { Component } from 'react';

export default class Phone extends Component {
    componentDidMount() {
        this.props.fetchPhoneById(this.props.params.id)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                Phone
            </div>
        );
    }
}
