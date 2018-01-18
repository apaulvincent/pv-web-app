import React, {Component}from 'react';
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actions} from '../actions/auth'

class LoginPage extends Component {

    submit = (data) => {
        this.props.login(data).then(() => this.props.history.push('/'))
    }

    render(){
        return (
            <div className="ui container">
                <h1>Login</h1>
                <Link to="/">Home</Link>
                <LoginForm submit={this.submit}></LoginForm>
            </div>
        )
    }

}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);