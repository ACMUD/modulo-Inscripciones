import React from 'react'
import SignInView from '../components/signInView'
import { requesterCrudServer } from '../../../Resources/requester'
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Usuario: '',
            Contrasena: '',
            RemeindMe: true,
            userId: 0
        }
    }

    render() {
        return (
            <SignInView
                data={this.state}
                SignIn={this.SignIn.bind(this)}
                handleChange={(name, value) => this.setState({ [name]: value })}
                error={this.state.error}
            />
        )
    }

    SignIn() {
        if (this.validateInputs()) {
            requesterCrudServer('get', `persona/?query=Codigo:${this.state.Usuario}&fields=Id`,
                (result) => {
                    if (result.data.length > 0) {
                        this.props.logIn(result.data[0].Id, this.state.RemeindMe)
                    }
                },
                (error) => {
                    console.error(error)
                    this.setState({ networkError: true })
                }
            )
        }
    }

    validateInputs() {
        if ((this.state.Usuario === "")
            || (this.state.Contrasena === "")
            || (this.state.Usuario !== this.state.Contrasena)
        ) {
            this.setState({ error: true })
            return false
        } else {
            this.setState({ error: false })
            return true
        }
    }
}

export default SignIn;