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
                closeSession={this.closeSession.bind(this)}
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

    closeSession() {
        localStorage.removeItem('userID')
        sessionStorage.removeItem('userID')
        this.setState({ error: true })
    }
}

export default Profile;