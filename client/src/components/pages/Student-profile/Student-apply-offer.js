import React, { Component } from 'react';
import ApplyForm from './Student-apply-contact-form';

class ApplyOffer extends Component {
    render() {
        return (
            <ApplyForm loggedUser={this.state.loggedInUser}/>
        )
    }
}

export default ApplyOffer