import {
    TextField
} from '@mui/material'
import { useField } from 'formik'
const InputField = ({name, ...otherProps})=>{
    const [field, meta] = useField(name)
    const configInput = {
        ...field,
        ...otherProps,
        fullWidth: true,
        size: "small",
        inputProps: {
            style: {
                fontSize: "13px",
                height: 15
            }
        }
    }
    if(meta && meta.touched && meta.error){
        configInput.error = true;
        configInput.helperText = meta.error;
        console.log(configInput.helperText);
    }
    return (
        <TextField {...configInput} />
    )
}

export default InputField