import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import '../../contentApp.css'
import './profileStyles.css'
import { textLabelField } from '../../fields'

import profileImage from '../../../Resources/images/user.png'
// import add from '../../../Resources/iconos/add.png'

function ProfileView(props) {
    return (
        <div className='Flex-box-column'>
            <Card className='Flex-box-column' style={{ width: '45%' }}>
                <img alt='UserPhoto' src={profileImage} />
                {
                    !props.editMode
                        ? renderNormal(props)
                        : renderToEdit(props)
                }
                {
                    !props.editMode
                        ? <div>
                            <Button variant="contained" color="primary" onClick={props.editAccount}>
                                EDITAR CUENTA
                            </Button>
                            <Button variant="contained" color="secondary" onClick={props.closeSession}>
                                CERRAR SESIÓN
                            </Button>
                        </div>
                        : <div>
                            <Button variant="contained" color="primary" onClick={props.aceptEdition}>
                                ACEPTAR
                            </Button>
                            <Button variant="contained" color="secondary" onClick={props.cancelEdition}>
                                CANCELAR
                            </Button>
                        </div>
                }
            </Card>
        </div>
    )
}

function renderNormal(props) {
    return (
        <div>
            <h1>{props.data.Nombres} {props.data.Apellidos}</h1>
            <h2><b>Estado: </b>{props.data.EstadoUsuario}</h2>
            {
                props.data.Identificaciones.map((item) => {
                    return <h2 key={item.Id}><b>{item.TipoIdentificacion}: </b>{item.NumeroIdentificacion}</h2>
                })
            }
            <h2><b>Codigo: </b>{props.data.Codigo}</h2>
            <h2><b>Telefono: </b>{props.data.Telefono}</h2>
            {
                props.data.Correos.map((item) => {
                    return <h2 key={item.Id}><b>Correo {item.TipoCorreo}: </b>{item.Correo}</h2>
                })
            }
            {
                props.data.Roles.map((item) => {
                    return <h2 key={item.Id}><b>{item.Rol}</b></h2>
                })
            }
        </div>
    )
}

function renderToEdit(props) {
    return (
        <div >
            <div>
                {textLabelField('Nombres', 'Nombres', props.data.Nombres, props.handleChange)}
                {textLabelField('Apellidos', 'Apellidos', props.data.Apellidos, props.handleChange)}
            </div>
            <div>
                {
                    props.data.Identificaciones.map((item) => {
                        return textLabelField(item.TipoIdentificacion, `${item.Id}`, item.NumeroIdentificacion, props.changeIdentificaciones)
                    })
                }
            </div>
            <div>
                {textLabelField('Codigo', 'Codigo', props.data.Codigo, props.handleChange)}
                {textLabelField('Telefono', 'Telefono', props.data.Telefono, props.handleChange)}
            </div>
            <div>
                {
                    props.data.Correos.map((item) => {
                        return (
                            textLabelField(item.TipoCorreo, `${item.Id}`, item.Correo, props.changeCorreos)
                        )
                    })
                }
                {/* <img style={{ height: '45px', cursor: 'pointer' }} src={add} alt="AddEmails" onClick={props.addCorreos} /> */}
            </div>
        </div>
    )
}

export default ProfileView;