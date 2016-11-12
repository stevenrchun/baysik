import React, { Component, PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import Filters from './Filters';
import Results from './Results';

var queryResults = [
    {title: 'Meet Halfway', price: '$20.00', description: 'you\'re going to buy this book, not read it, but \
        still need it lol', owner: 'Phil Hanlon'},
    {title: 'Public Policy 110 Book', price: '$20.00', description: 'you\'re going to buy this book, not read it, but \
        still need it lol', owner: 'Phil Hanlon'},
    {title: 'Public Policy 200 Book', price: '$20.00', description: 'you\'re going to buy this book, not read it, but \
        still need it lol', owner: 'Phil Hanlon'}
];

// Content Component
export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

        return (
            <Row componentClass="div" className="content">
                <Filters></Filters>
                <Results items={queryResults}></Results>
            </Row>
        );
    }
}
