import { ButtonIcon } from './styles'

const IconButton = ({children, ...restProps}) => {
    return(
        <ButtonIcon {...restProps}>
            {children}
        </ButtonIcon>
    )
}