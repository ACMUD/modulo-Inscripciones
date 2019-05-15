import React from 'react'
import UserLoginView from '../components/userLoginView'
import { Redirect } from 'react-router-dom'

class UserLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: "SignIn",
            redirect: '/profile',
        }
    }

    render() {
        if ((localStorage.getItem('userID') > 0)
            || (sessionStorage.getItem('userID') > 0))
            return <Redirect to={this.state.redirect} />

        return (
            <UserLoginView
                mode={this.state.mode}
                handleChange={(value) => {
                    this.setState({ mode: value });
                }}
                logIn={(userID, remeindMe) => {
                    if (remeindMe) {
                        localStorage.setItem('userID', userID);
                    } else {
                        sessionStorage.setItem('userID', userID);
                    }

                    this.setState({ redirect: '/' })
                }}
            />
        )
    }
}

export default UserLogin;