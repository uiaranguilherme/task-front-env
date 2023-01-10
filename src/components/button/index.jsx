import ButtonText from './button-text'
import ButtonContained from './button-contained'

const Button = ({children, variant, ...restPropsButton}) => {
    switch(variant){
        case 'text':
            return <ButtonText {...restPropsButton}>{children}</ButtonText>
        case 'contained':
            return <ButtonContained {...restPropsButton}>{children}</ButtonContained>
        default: 
            throw 'é necessario informar a variant'
    }
}

export default Button