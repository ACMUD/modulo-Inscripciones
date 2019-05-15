import React from 'react'

import { TextField } from '@material-ui/core'
import { NativeSelect, InputLabel, OutlinedInput, FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';

function textInputField(label, variableName, variableValue, handleChange, error = false, styles = {}, type) {
    return (
        <TextField
            label={label}
            name={variableName}
            value={variableValue}
            onChange={(event) => handleChange(event.target.name, event.target.value)}
            margin="normal"
            variant="outlined"
            error={(error && variableValue === '')}
            style={styles}
            type={type ? type : ''}
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

function buttonInputField(label, onClick) {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            {label}
        </Button>
    )
}

function checkBoxInputField(label, name, checked, handleChange) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    name={name}
                    checked={checked}
                    onChange={(event) => handleChange(event.target.name, event.target.checked)}
                    value={name}
                    color="primary"
                />
            }
            label={label}
        />
    )
}

export {
    textInputField,
    selectInputField,
    buttonInputField,
    checkBoxInputField,
}