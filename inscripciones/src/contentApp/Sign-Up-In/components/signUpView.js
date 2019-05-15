import React from 'react'
import '../../contentApp.css';
import { TextField } from '@material-ui/core'
import { NativeSelect, InputLabel, OutlinedInput, FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core';

function SignUpView(props) {
    return (
        <div style={{ height: '100%' }}>
            <div style={{ height: '85%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignContent: 'center' }}>
                {textInputField("Nombres", "Nombres", props.data.Nombres, props.handleChange, props.error)}
                {textInputField("Apellidos", "Apellidos", props.data.Apellidos, props.handleChange, props.error)}
                {selectInputField("Tipo de ID", "TipoIdentificacion", props.data.TipoIdentificacion, props.handleChange, props.data.TiposIdentificacion, props.error)}
                {textInputField("Identificación", "NumeroIdentificacion", props.data.NumeroIdentificacion, props.handleChange, props.error)}
                {textInputField("Código", "Codigo", props.data.Codigo, props.handleChange, props.error)}
                {textInputField("Teléfono", "Telefono", props.data.Telefono, props.handleChange)}
                {selectInputField("Tipo de Correo", "TipoCorreo", props.data.TipoCorreo, props.handleChange, props.data.TiposCorreo, props.error)}
                {textInputField("Correo", "Correo", props.data.Correo, props.handleChange, props.error)}
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={props.sendData}>
                    Registrarse
                </Button>
            </div>
        </div>
    )
}

function textInputField(label, variableName, variableValue, handleChange, error = false) {
    return (
        <TextField
            label={label}
            name={variableName}
            value={variableValue}
            onChange={(event) => handleChange(event.target.name, event.target.value)}
            margin="normal"
            variant="outlined"
            error={(error && variableValue === '')}
        />
    )
}

function selectInputField(label, variableName, variableValue, handleChange, options, error = false) {
    return (
        <FormControl
            variant="outlined"
            style={{ marginTop: '16px', marginBottom: '8px', minWidth: '242px' }}
            error={(error && variableValue === '')}
        >
            <InputLabel>
                {label}
            </InputLabel>
            <NativeSelect
                name={variableName}
                value={variableValue || ''}
                onChange={(event) => handleChange(event.target.name, event.target.value)}
                input={
                    <OutlinedInput
                        labelWidth={variableName.length * 4}
                        name={variableName}
                    />
                }
            >
                <option value={''} />
                {
                    options.map((opt, index) => {
                        return (
                            <option key={index} value={opt.Id}>{opt.Abreviacion || opt.TipoCorreo}</option>
                        )
                    })
                }
            </NativeSelect>
        </FormControl>
    )
}

export default SignUpView;