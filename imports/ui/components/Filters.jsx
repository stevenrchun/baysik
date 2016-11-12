import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';


// Filters Component
export default class Filters extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    handleTouchTap(event){
        // This prevents ghost click.
        event.preventDefault();
        this.setState({

        });
    };



    render() {

        return (
            <Col componentClass="div" xs={12} sm={12} md={2}>
               <Col componentClass="div" className="filters" xs={10} xsOffset={1}>
                   <Col componentClass="div" className="text-left" xs={2} xsOffset={1} smOffset={1} sm={2} mdOffset={0} md={12}>Low-High</Col>
                   <Col componentClass="div" className="text-left" xs={2}  sm={2} md={12}>High-Low</Col>
                   <Col componentClass="div" className="text-left" xs={2}  sm={2} md={12}>Used</Col>
                   <Col componentClass="div" className="text-left" xs={2}  sm={2} md={12}>New</Col>
                   <Col componentClass="div" className="text-left" xs={2}  sm={2} md={12}>Dope</Col>


               </Col>
            </Col>
        );
    }
}
