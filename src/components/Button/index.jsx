import { Container} from './styles';

const Button = ({color, name}) => {
    
    return(
        <Container color={color}>
            <button>{name}</button>
        </Container>
    );
}
export default Button