import { Container} from './styles';

const Button = ({color, name, funcao}) => {
    
    return(
        <Container color={color}>
            <button onClick={funcao} type="button" >{name}</button>
        </Container>
    );
}
export default Button