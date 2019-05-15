import React from 'react'
import SignUpView from '../components/signUpView'
import { requesterCrudServer } from '../../../Resources/requester'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Por Defecto Activo
            EstadoUsuario: null,

            // Datos Tabla Persona
            Nombres: "",
            Apellidos: "",
            Codigo: "",
            Telefono: "",
            // Response (result.body.Id)
            PersonaID: 0,

            // Datos Tabla identificacion (Requiere Persona ID y tipoIdentificación ID)
            NumeroIdentificacion: "",
            TipoIdentificacion: "",

            // Datos Tabla Correo (Lista:) (requiere Persona ID y tipoCorreo ID (evaluar casos))
            Correo: "", // 'Correo' c/u
            TipoCorreo: "",

            // rol (por defecto) (rol_persona requiere id rol id persona)
            Rol: '',

            // Opciones
            TiposIdentificacion: [],
            TiposCorreo: [],

            error: false,
            networkError: false,

            sendedIdentificacion: false,
            sendedCorreo: false,
            sendedRol: false,
        }
    }

    componentWillMount() {
        this.getEstadosUsuario()

        this.getTipoIdentificacion()
        this.getTipoCorreo()
        this.getRol()
    }

    render() {
        return (
            <SignUpView
                data={this.state}
                handleChange={(name, value) => this.setState({ [name]: value })}
                sendData={this.sendData.bind(this)}
                error={this.state.error}
            />
        )
    }

    getEstadosUsuario() {
        requesterCrudServer('get', 'estado_usuario/?query=Nombre:Activo',
            (result) => {
                this.setState({ EstadoUsuario: result.data[0] })
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    getTipoIdentificacion() {
        requesterCrudServer('get', 'tipo_identificacion/',
            (result) => {
                this.setState({ TiposIdentificacion: result.data })
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    getTipoCorreo() {
        requesterCrudServer('get', 'tipo_correo/',
            (result) => {
                this.setState({ TiposCorreo: result.data })
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    getRol() {
        requesterCrudServer('get', 'rol/?query=Nombre:Estudiante',
            (result) => {
                this.setState({ Rol: result.data[0] })
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    sendData() {
        if (this.validateInputs()) {
            let {
                EstadoUsuario,
                Nombres,
                Apellidos,
                Codigo,
                Telefono
            } = this.state

            requesterCrudServer('post', 'persona/',
                (result) => {
                    let PersonaID = result.data.Body.Id
                    this.sendIdentificacion(PersonaID)
                    this.sendCorreo(PersonaID)
                    this.sendRol(PersonaID)
                },
                (error) => {
                    console.error(error)
                    this.setState({ networkError: true })
                },
                {
                    Nombres,
                    Apellidos,
                    Codigo,
                    Telefono,
                    EstadoUsuario,
                }
            )
        }
    }

    sendIdentificacion(PersonaID) {
        let {
            NumeroIdentificacion,
            TipoIdentificacion
        } = this.state

        requesterCrudServer('post', 'identificacion/',
            (result) => {
                this.setState({ sendedIdentificacion: true }, () => this.logIn(PersonaID))
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            },
            {
                NumeroIdentificacion,
                Persona: {
                    Id: PersonaID
                },
                TipoIdentificacion: {
                    Id: parseInt(TipoIdentificacion),
                }
            }
        )
    }

    sendCorreo(PersonaID) {
        let {
            Correo,
            TipoCorreo
        } = this.state

        requesterCrudServer('post', 'correo/',
            (result) => {
                this.setState({ sendedCorreo: true }, () => this.logIn(PersonaID))
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            },
            {
                Correo,
                Persona: {
                    Id: PersonaID,
                },
                TipoCorreo: {
                    Id: parseInt(TipoCorreo),
                }
            }
        )
    }

    sendRol(PersonaID) {
        let {
            Rol
        } = this.state

        requesterCrudServer('post', 'rol_persona/',
            (result) => {
                this.setState({ sendedRol: true }, () => this.logIn(PersonaID))
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            },
            {
                Persona: {
                    Id: PersonaID,
                },
                Rol
            }
        )
    }

    validateInputs() {
        if ((this.state.Nombres === "")
            || (this.state.Apellidos === "")
            || (this.state.Codigo === "")
            || (this.state.NumeroIdentificacion === "")
            || (this.state.TipoIdentificacion === "")
            || (this.state.Correo === "")
            || (this.state.TipoCorreo === "")
        ) {
            this.setState({ error: true })
            return false
        } else {
            this.setState({ error: false })
            return true
        }
    }

    logIn(PersonaID) {
        if (this.state.sendedCorreo
            && this.state.sendedIdentificacion
            && this.state.sendedRol
        ) {
            this.props.logIn(PersonaID)
        }
    }
}

export default SignUp;