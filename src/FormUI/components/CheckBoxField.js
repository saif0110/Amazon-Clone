import React from 'react'
import {
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel
} from '@mui/material'

import { useField, useFormikContext} from'formik'

const CheckBoxField = (props)=>{
    const {name, label, legend, ...otherProps} = props

    const  [field, meta] = useField(name)
    const { setFieldValue } = useFormikContext()

    const handleChange= (event)=>{
        const { checked } = event.target
        setFieldValue(name, checked)
    }
    const configCheckBox = {
        ...field,
        ...otherProps,
        onChange: handleChange
    }
    const configFormControl = {
        error: false,
        helpertext: ""
    }

    if(meta && meta.touched && meta.error){
        configFormControl.error = true;
        configFormControl.helpertext = meta.error;
    }
    return (
        <FormControl {...configFormControl}>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...configCheckBox}/>} label={label} />
            </FormGroup>
        </FormControl>
    )
}

export default CheckBoxField