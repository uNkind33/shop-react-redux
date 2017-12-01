import React, { Component } from 'react';

import { Link } from 'react-router';

class Phones extends Component {
    componentDidMount() {
        this.props.fetchPhones()
    }

    shorDescription(desc) {
        let newDesription = desc.split('').slice(0,57)
        return  newDesription.join('');
    }

    renderPhones() {
        const phones = this.props.phones.map(phone => {
            return (
                <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={phone.id}>
                    <div className="thumbnail">
                        <img src={phone.image}
                            alt={phone.name} 
                            className="ims-thumbnail" 
                        />
                        <div className="caption">
                            <h4 className="pull-right">${phone.price}</h4>
                            <h4>
                                <Link to={`phone/${phone.id}`}>
                                    {phone.name}
                                </Link>
                            </h4>
                            <p>{this.shorDescription(phone.description)}</p>
                        </div>
                    </div>
                </div>
            )
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