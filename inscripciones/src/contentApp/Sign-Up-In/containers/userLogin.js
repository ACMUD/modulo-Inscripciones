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
            />
        )
    }
}

export default UserLogin;