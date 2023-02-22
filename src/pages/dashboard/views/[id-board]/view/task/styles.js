import styled from "styled-components";

export const WhapperTaskView = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HeaderTaskView = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0 4px 0;
  border-bottom: 2px solid ${(props) => props.theme.primary.contrastColor};
`;
export const BodyTaskView = styled.aside`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ContainerDescriptionAndComents = styled.div`
  width: 60%;
`;
export const ContainerPropsAndButtons = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
  width: 30%;
`;
export const Title = styled.div``;

export const Label = styled.label`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.primary.contrastColor};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px 0;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.primary.contrastColor};

  textarea {
    width: 100%;
    min-height: 10rem;
    resize: none;
    border: 0 none;
    margin-top: 5px;
  }
`;

export const Coments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ContainerComents = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? "row-reverse" : "row")};
  margin: 5px 0;
`;
export const Coment = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 3rem;
  width: 100%;
  padding: 3px;
  border-radius: 3px;
  margin: 0 5px;
  font-size: 0.9rem;
  border: 1px solid ${(props) => props.theme.primary.contrastColor};

  span {
    color: ${(props) => props.theme.primary.subText};
    width: 100%;
    font-size: 1rem;
    padding-bottom: 3px;
  }

  textarea {
    width: 100%;
    resize: none;
    border: 0 none;
    margin-top: 5px;
  }
`;

export const Paragraf = styled.p`
  margin: 10px 0 5px 3px;
  color: #a6a6a6;
  font-size: 0.9rem;
`;

export const ButtonsArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 3px 0;
  border-top: 1px solid ${(props) => props.theme.primary.contrastColor};
`;
