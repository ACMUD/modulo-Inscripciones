import React from 'react'
import '../../contentApp.css';

import { textInputField, selectInputField, buttonInputField } from './fields'

function SignUpView(props) {
    return (
        <div style={{ height: '100%' }}>
            <div className='Flex-box-row' style={{ height: '85%' }}>
                {textInputField("Nombres", "Nombres", props.data.Nombres, props.handleChange, props.error)}
                {textInputField("Apellidos", "Apellidos", props.data.Apellidos, props.handleChange, props.error)}
                {selectInputField("Tipo de ID", "TipoIdentificacion", props.data.TipoIdentificacion, props.handleChange, props.data.TiposIdentificacion, props.error)}
                {textInputField("Identificación", "NumeroIdentificacion", props.data.NumeroIdentificacion, props.handleChange, props.error)}
                {selectInputField("Tipo de Correo", "TipoCorreo", props.data.TipoCorreo, props.handleChange, props.data.TiposCorreo, props.error)}
                {textInputField("Correo", "Correo", props.data.Correo, props.handleChange, props.error)}
                {textInputField("Teléfono", "Telefono", props.data.Telefono, props.handleChange)}
                {textInputField("Código", "Codigo", props.data.Codigo, props.handleChange, props.error)}
            </div>
            <div>
                {buttonInputField("Registrarse", props.sendData)}
            </div>
        </div>
    )
}


export default SignUpView;