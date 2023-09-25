import React from 'react'
import {TextField, MenuItem } from '@mui/material'
import {useField, useFormikContext} from 'formik'
const SelectField = (props)=>{
    const {name, options, ...otherProps} = props

    const [field, meta]  = useField(name);
    const { setFieldValue } = useFormikContext()

    const handleChange = (event)=>{
        const {value} = event.target
        setFieldValue(name, value)
    }
    const configSelect = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant:'outlined',
        select: true,
        onChange: handleChange,
        size: "small",
        inputProps: {
            style: {
                fontSize: "13px",
                height: 15
            }
        }
    }
    if(meta && meta.touched && meta.error){
        configSelect.error = true
        configSelect.helpertext = meta.error
    }
    return(
        <TextField {...configSelect}>
            {
                Object.keys(options).map((item, pos)=>(
                    <MenuItem key={pos} value={item}>{options[item]}</MenuItem>
                ))
            }
        </TextField>
    )
}

export default SelectField