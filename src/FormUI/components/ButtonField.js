import {
    Button
} from '@mui/material'
import { useFormikContext } from 'formik'
const ButtonField = (props)=>{
    const { submitForm } = useFormikContext()
    const handleClick = ()=>{
        submitForm()
    }
    const configButton = {
        ...props,
        fullWidth: true,
        disableElevation: true, 
        onClick: handleClick,
    }
    return (
        <Button {...configButton}>{props.children}</Button>
    )
}

export default ButtonField