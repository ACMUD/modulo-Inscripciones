import React from 'react'
import '../../contentApp.css';
import TextField from '@material-ui/core/TextField';

function SignUpView(props) {
    return (
        <div>
            {textInputField("Nombres", props.data.Nombres, props.handleChange, props.error)}
            {textInputField("Apelidos", props.data.Apellidos, props.handleChange, props.error)}
            {textInputField("Codigo", props.data.Codigo, props.handleChange, props.error)}
            {textInputField("Telefono", props.data.Telefono, props.handleChange)}
        </div>
    )
}

function textInputField(variableName, variableValue, handleChange, error = false) {
    return (
        <TextField
            label={variableName}
            name={variableName}
            value={variableValue}
            onChange={(event) => handleChange(event.target.name, event.target.value)}
            margin="normal"
            variant="outlined"
            error={(error && variableValue === '')}
        />
    )
}

export default SignUpView;