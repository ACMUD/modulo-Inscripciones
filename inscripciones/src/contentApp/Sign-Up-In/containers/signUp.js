import React from 'react'
import SignUpView from '../components/signUpView'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Nombres: "",
            Apellidos: "",
            Codigo: "",
            Telefono: "",
        }

        this.EstadoUsuario = {
            "Id": 1
        }
    }

    render() {
        return (
            <SignUpView
                data={this.state}
                handleChange={(name, value) => this.setState({ [name]: value })}
                error={false}
            />
        )
    }
}

export default SignUp;