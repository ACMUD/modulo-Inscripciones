import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import '../../contentApp.css'
import './profileStyles.css'

import profileImage from '../../../Resources/images/user.png'

function ProfileView(props) {
    console.log(props)
    return (
        <div className='Flex-box-column'>
            <Card className='Flex-box-column' style={{ width: '45%' }}>
                <img alt='UserPhoto' src={profileImage} />
                <h1>{props.data.Nombres} {props.data.Apellidos}</h1>
                {
                    props.data.Identificaciones.map((item) => {
                        return <h2><b>{item.TipoIdentificacion}: </b>{item.NumeroIdentificacion}</h2>
                    })
                }
                <h2><b>Codigo: </b>{props.data.Codigo}</h2>
                <h2><b>Telefono: </b>{props.data.Telefono}</h2>
                {
                    props.data.Correos.map((item) => {
                        return <h2><b>Correo {item.TipoCorreo}: </b>{item.Correo}</h2>
                    })
                }
                {
                    props.data.Roles.map((item) => {
                        return <h2><b>{item.Rol}</b></h2>
                    })
                }
                <h2><b>Estado: </b>{props.data.EstadoUsuario}</h2>
                <Button variant="contained" color="secondary" onClick={props.closeSession}>
                    CERRAR SESIÓN
                </Button>
            </Card>
        </div>
    )
}

export default ProfileView;