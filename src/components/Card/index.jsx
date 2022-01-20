import {Container} from "./styles";



const Card= (props) => {
    return (
        <Container heigth={props.heigth} width={props.width} >
            {props.children}
        </Container>
    );
}
export default Card;