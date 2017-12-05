import React, { Component } from 'react';

import { Link } from 'react-router';

class Phones extends Component {
    componentDidMount() {
        this.props.fetchPhones()
    }

    shorDescription(description) {
        let newDesription = description.split('').slice(0,57);
        return  newDesription.join('');
    }

    renderPhones() {
        const { phones } = this.props;
        const allPhones = phones.map(phone => {
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
                            <p className="itemButton">
                                <button className="btn btn-primary">
                                    Buy now
                                </button>
                                <Link to={`phones/${phone.id}`}>
                                    More info
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
        return allPhones;
    }

    render() {
        const { loadMorePhones } = this.props;
        return (
            <div>
                {this.renderPhones()}
                <div className="row">
                    <div className="col-md-12">
                        <button 
                            onClick={loadMorePhones}
                            className="pull-right btn-primary"    
                        >
                            Load more
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Phones;