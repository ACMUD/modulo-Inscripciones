import React from 'react'

import { textInputField, buttonInputField, checkBoxInputField } from './fields'

function SignInView(props) {
    return (
        <div className='Flex-box-column'>
            <div className='Flex-box-row' style={{ width: '65%', height: '50%' }}>
                {textInputField("Usuario", "Usuario", props.data.Usuario, props.handleChange, props.error, { width: '100%' })}
                {textInputField("Contraseña", "Contrasena", props.data.Contrasena, props.handleChange, props.error, { width: '100%' }, "password")}

                {checkBoxInputField("Mantener Sesion Iniciada", "RemeindMe", props.data.RemeindMe, props.handleChange)}
            </div>
            <div>
                {buttonInputField("Iniciar Sesión", props.SignIn)}
            </div>
        </div>
    )
}

export default SignInView;