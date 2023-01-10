import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.Background};
  min-height: 70%;
  width: 25%;
  border-radius: 10px;

  border: 1px solid ${(props) => props.theme.borderColor};
  -webkit-box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.39);
  box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.39);
`;

export default Card;
