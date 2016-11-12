import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';


// Form component - represents the whole app
export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
        <div>
            <Col componentClass="h1" className="text-center">Just a bit more...</Col>
            <Col componentClass="div" className="item item-form" xs={8} xsOffset={2}>
                <Col componentClass="div" className="thumbnail" xsOffset={2} xs={8} smOffset={0} sm={2} mdOffset={0} md={3}>
                    <img className="" src="https://pbs.twimg.com/profile_images/715764206382030848/H6TlAseJ.jpg"/>
                </Col>
                <Col componentClass="div" className="content" xs={12} sm={10} md={9}>
                    <Col componentClass="div" className="" xs={6}>
                        <TextField className="form-input" defaultValue={this.props.params.title} hintText={'Give your item a name!'}></TextField>
                    </Col>
                    <Col componentClass="div" className="" xsOffset={2} xs={4} smOffset={4} sm={2} mdOffset={2} md={4}>
                        <TextField className="form-input" hintText={'Price'}></TextField>
                    </Col>
                    <Col componentClass="div" className="description" xs={12} sm={10} md={8}>
                        <TextField className="form-input" hintText={'Description'} multiLine={true} rows={5} fullWidth={true}>
                        </TextField>

                        <TextField className="form-input" hintText={'ISBN (optional)'}></TextField>

                    </Col>

                    <Col componentClass="div" xs={4} sm={2} md={4} className="">
                        <TextField className="form-input" hintText={'Condition (optional)'}></TextField>
                    </Col>

                    <Col componentClass="div" xs={4} sm={2} md={3}>
                        <RaisedButton className="button">Finish</RaisedButton>
                    </Col>


                </Col>
            </Col>
        </div>
        );

    }
}
