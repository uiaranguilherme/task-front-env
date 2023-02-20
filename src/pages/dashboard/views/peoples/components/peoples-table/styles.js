import styled from "styled-components";

export const WhapperPeopleList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

export const People = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.primary.backgroundContrast};
  }

  &:hover > div > span {
    display: flex;
  }
`;

export const Info = styled.div`
  font-size: 1.3rem;
  padding: 0 0 0 6px;
  width: ${(props) => props.wd};
`;

export const WhapperTolls = styled.span`
  display: none;
  width: 100%;
  justify-content: flex-end;
  padding: 0 20px 0 0;
`;
