import styled from "styled-components";
import { FaFolder } from "../../../../../../styles/icons";

export const FolderWhapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;
  height: 10rem;
  width: 10rem;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.hoverButtonColor};
  }
`;

export const FolderIcon = styled(FaFolder)`
  height: 4rem;
  width: 4rem;
`;

export const FolderName = styled.div`
  width: 90%;
  margin-top: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
