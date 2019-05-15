import React from 'react'
import UserLoginView from '../components/userLoginView'

class UserLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: "SignIn"
        }
    }

    render() {
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

                    alert('Has Iniciado Sesión')
                    // this.props.logIn(userID)
                }}
            />
        )
    }
}

export default UserLogin;