import React, { Component } from 'react';

class Phones extends Component {
    componentDidMount() {
        this.props.fetchPhones()
    }

    renderPhones() {
        const phones = this.props.phones.map(phone => {
            return <li key={phone.id}>{phone.name}</li> 
        })
        return phones;
    }

    render() {
        console.log(this.props.phones)
        return (
            <div>
                <ul>
                    {this.renderPhones()}
                </ul>
            </div>
        );
    }
}

export default Phones;