import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';

import PropTypes from 'prop-types';

class LoginForm extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        }
    }


    onChange = e => 
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value}
        })

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if( Object.keys( errors ).length === 0 ) {
            this.props.submit( this.state.data )
        }
    }

    validate = data => {
        const errors = {}

        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if(!data.password) errors.password = "Can't be blank";

        return errors;
    }

    errorMessage = msg => <div>{msg}</div>

    render(){

        const { data, errors } = this.state

        return(
            <Form onSubmit={this.onSubmit}>

                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={this.onChange}
                        value={data.email} />
                </Form.Field>
                { errors.email && this.errorMessage(errors.email) }

                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        onChange={this.onChange}
                        placeholder="Your Password"
                        value={data.password} />
                </Form.Field>
                { errors.password && this.errorMessage(errors.password) }

                <Button primary>Send</Button>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;