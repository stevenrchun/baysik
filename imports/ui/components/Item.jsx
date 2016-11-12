import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';


// Single item Component
export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Col componentClass="div" className="item w3-hover-shadow" xs={12}>
                <Col componentClass="div" className="thumbnail" xsOffset={2} xs={8} smOffset={0} sm={2} mdOffset={0} md={3}>
                    <img className="" src="https://pbs.twimg.com/profile_images/715764206382030848/H6TlAseJ.jpg"/>
                </Col>
                <Col componentClass="div" className="content" xs={12} sm={10} md={9}>
                    <Col componentClass="h2" className="" xs={6}>{this.props.item.title}</Col>
                        <Col componentClass="h2" className="" xsOffset={2} xs={4} smOffset={4} sm={2} mdOffset={2} md={4}>
                            {this.props.item.price}
                        </Col>
                    <Col componentClass="div" className="description" xs={12} sm={10} md={8}>
                        <p className="">
                            {this.props.item.description}
                        </p>
                    </Col>

                    <Col componentClass="div" xs={4} sm={2} md={3}>
                        <RaisedButton className="button">Add to Cart</RaisedButton>
                    </Col>

                    <Col componentClass="p" xs={4} sm={2} md={3} className="">
                        Posted by <a href="www.dartmouth.edu/~stevenchun/profile.html">{this.props.item.owner}</a>
                    </Col>

                </Col>
            </Col>
        );
    }
}
