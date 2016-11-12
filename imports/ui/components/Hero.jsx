import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import { Tabs, Tab, IconButton } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router';
import classNames from 'classnames';

// Hero Component
export default class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 1,
            searchText: '',
            sellText: '',
        };
    }


    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    };

    handleSearchChange(event) {
        console.log(event.target.value)
        this.setState({
            searchText: event.target.value,
        });
    }

    handleSellChange(event) {
        console.log(event.target.value)
        this.setState({
            sellText: event.target.value,
        })
    }


    render() {
        /*
        var buyClass = classNames({
            'tabs-buy': this.state.slideIndex == 0,
        });

        var sellClass = classNames({
            'tabs-sell':  this.state.slideIndex == 1,
        });
        */

        return (
        <div>
            <Tabs
                className='tabs'
                onChange={this.handleChange.bind(this)}
                value={this.state.slideIndex}
            >
                <Tab label="Buy" value={0} id="1" />
                <Tab label="Sell" value={1} id="2" />
            </Tabs>
            <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange.bind(this)}
            >
                <div>
                    <Col componentClass="div" className="hero" xs={12}>
                        <Col componentClass="div" xs={9} xsOffset={2} sm={7} smOffset={3}>
                            <Col componentClass="h1" xs={12}>Any Item.<br/>Your Campus.</Col>

                                <Col componentClass="input" xs={10} type="text" value={this.state.searchText}
                                     onChange={this.handleSearchChange.bind(this)} placeholder="Find stuff yo"/>
                                <IconButton className="search-button"
                                    iconClassName="material-icons"
                                >
                                    search
                                </IconButton>

                        </Col>
                    </Col>
                </div>
                <div>
                    <Col componentClass="div" className="hero2" xs={12}>
                        <Col componentClass="div" xs={9} xsOffset={2} sm={7} smOffset={3}>
                            <Col componentClass="h1" xs={12}>List Anything.</Col>
                            <Col componentClass="input" xs={10} type="text" value={this.state.sellText}
                                 onChange={this.handleSellChange.bind(this)} placeholder="Enter ISBN or item name"/>
                            <Link to={`/form/title=${this.state.sellText}`}>
                                <IconButton className="search-button"
                                        iconClassName="material-icons"
                                >
                                    monetization_on
                                </IconButton>
                            </Link>
                        </Col>
                    </Col>
                </div>
            </SwipeableViews>
        </div>
        );
    }
}
