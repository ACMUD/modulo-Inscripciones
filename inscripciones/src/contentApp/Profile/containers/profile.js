import React from 'react'
import { requesterCrudServer } from '../../../Resources/requester';
import { Redirect } from 'react-router-dom'
import ProfileView from '../components/profileView'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: 0,

            Nombres: "",
            Apellidos: "",
            Codigo: "",
            Telefono: "",
            EstadoUsuario: "",

            Identificaciones: [],
            Correos: [],
            Roles: [],

            error: false,
        }
    }

    componentWillMount() {
        if ((localStorage.getItem('userID') > 0)
            || (sessionStorage.getItem('userID') > 0)) {
            let userID = 0
            if (localStorage.getItem('userID') > 0) {
                userID = localStorage.getItem('userID')
            } else {
                userID = sessionStorage.getItem('userID')
            }

            this.setState({ userID }, () => {
                this.getPersona()
                this.getIdentificaciones()
                this.getCorreos()
                this.getRoles()
            })

        } else {
            this.setState({ error: true })
        }
    }

    render() {
        if (this.state.error) {
            return <Redirect to='/SignUp' />
        }

        return (
            <ProfileView
                data={this.state}
                editMode={this.state.editMode}
                handleChange={(name, value) => this.setState({ [name]: value })}
                changeIdentificaciones={(id, value) => {
                    let ids = this.state.Identificaciones
                    let Identificaciones = ids.map((item) => {
                        if (item.Id === parseInt(id)) {
                            item.NumeroIdentificacion = value
                        }
                        return item
                    })
                    this.setState({ Identificaciones })
                }}
                changeCorreos={(id, value) => {
                    let crrs = this.state.Correos
                    let Correos = crrs.map((item) => {
                        if (item.Id === parseInt(id)) {
                            item.Correo = value
                        }
                        return item
                    })
                    this.setState({ Correos })
                }}
                editAccount={() => this.setState({ editMode: true })}
                closeSession={this.closeSession.bind(this)}
                aceptEdition={() => this.putPersona()}
                cancelEdition={() => { this.setState({ editMode: false }); this.getPersona() }}

            // addCorreos={}
            />
        )
    }

    getPersona() {
        requesterCrudServer('get', `persona/?query=Id:${this.state.userID}`,
            (result) => {
                if (result.data.length > 0) {
                    let resultData = result.data[0]

                    this.setState({
                        Nombres: resultData.Nombres,
                        Apellidos: resultData.Apellidos,
                        Codigo: resultData.Codigo,
                        Telefono: resultData.Telefono,
                        EstadoUsuario: resultData.EstadoUsuario.Nombre,
                        EstadoUsuarioID: resultData.EstadoUsuario.Id,
                    })
                }
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    getIdentificaciones() {
        requesterCrudServer('get', `identificacion/?query=Persona:${this.state.userID}`,
            (result) => {
                if (result.data.length > 0) {
                    this.setState({
                        Identificaciones: result.data.map((resultData) => {
                            return {
                                Id: resultData.Id,
                                NumeroIdentificacion: resultData.NumeroIdentificacion,
                                TipoIdentificacion: resultData.TipoIdentificacion.Nombre,
                                TipoIdentificacionId: resultData.TipoIdentificacion.Id,
                            }
                        })
                    })
                }
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    getCorreos() {
        requesterCrudServer('get', `correo/?query=Persona:${this.state.userID}`,
            (result) => {
                if (result.data.length > 0) {
                    this.setState({
                        Correos: result.data.map((resultData) => {
                            return {
                                Id: resultData.Id,
                                Correo: resultData.Correo,
                                TipoCorreo: resultData.TipoCorreo.TipoCorreo,
                                TipoCorreoId: resultData.TipoCorreo.Id,
                            }
                        })
                    })
                }
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    getRoles() {
        requesterCrudServer('get', `rol_persona/?query=Persona:${this.state.userID}`,
            (result) => {
                if (result.data.length > 0) {
                    this.setState({
                        Roles: result.data.map((resultData) => {
                            return {
                                Id: resultData.Id,
                                Rol: resultData.Rol.Nombre,
                            }
                        })
                    })
                }
            },
            (error) => {
                console.error(error)
                this.setState({ networkError: true })
            }
        )
    }

    putPersona() {
        let {
            Nombres,
            Apellidos,
            Codigo,
            Telefono,
            EstadoUsuarioID,
        } = this.state
        requesterCrudServer('put', `persona/${this.state.userID}`,
            (result) => {
                this.setState({ editMode: false })
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
                EstadoUsuario: {
                    Id: EstadoUsuarioID
                },
            }
        )
    }

    putCorreos() {
        this.state.Correos.forEach((item) => {
            requesterCrudServer('put', `correo/${item.Id}`,
                (result) => {
                },
                (error) => {
                    this.setState({ networkError: true })
                },
                {
                    correo: item.correo,
                    Persona: {
                        Id: this.state.userID
                    },
                    TipoCorreo: {
                        Id: item.TipoCorreoId
                    }
                }
            )
        });
    }

    putIdentificacion() {
        this.state.Identificaciones.forEach((item) => {
            requesterCrudServer('put', `identificacion/${item.Id}`,
                (result) => {
                    this.setState({ editMode: false })
                },
                (error) => {
                    console.error(error)
                    this.setState({ networkError: true })
                },
                {
                    NumeroIdentificacion: item.NumeroIdentificacion,
                    Persona: {
                        Id: this.state.userID
                    },
                    TipoIdentificacion: {
                        Id: item.TipoIdentificacionId
                    }
                }
            )
        });
    }

    closeSession() {
        localStorage.removeItem('userID')
        sessionStorage.removeItem('userID')
        this.setState({ error: true })
    }
}

export default Profile;