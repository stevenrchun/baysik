import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import Item from './Item'


// Results Component
export default class Results extends Component {
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

        var listItems = this.props.items.map(function(item) {
            console.log(item)
            return (
                <Item key={item.title} item={item}></Item>
            );
        });

        return (
            <Col componentClass="div" className="results" lg={8} md={9} sm={12} xs={12}>
                <Col componentClass="h1" className="text-center">Latest</Col>
                <div>
                    {listItems}
                </div>
            </Col>
        );
    }
}
