import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "../../../../../../components/dialog";
import Avatar from "../../../../../../components/avatar";
import Button from "../../../../../../components/button";
import Properties from "../../components/card-tasks/components/properties";
import { AiFillBug } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import IconButton from "../../../../../../components/button/button-icon";
import { BiMessageAltAdd } from "react-icons/bi";
import {
  WhapperTaskView,
  HeaderTaskView,
  BodyTaskView,
  ContainerDescriptionAndComents,
  ContainerPropsAndButtons,
  Title,
  Description,
  Label,
  Coments,
  ContainerComents,
  Coment,
  Paragraf,
  ButtonsArea,
} from "./styles";

const styleCard = {
  "background-color": "#ffff",
  width: "60%",
};

const styleButtonAddComent = {
  padding: "0 3px",
};

const styleButtonCancelar = {
  padding: "3px 6px",
  margin: "0 5px 0 0",
  "border-radius": "20px",
};

const styleButtonSalvar = {
  padding: "3px 20px",
  "border-radius": "20px",
};

const taskMock = {
  _id: uuidv4(),
  title: "[PORTAL DIGITAL] - Login",
  description: "Realizar login na plataforma com altenticação de dois fatores",
  author: {
    name: "Uiaran Guilherme",
    email: "uiaran@hotmail.com",
  },
  responsible: {
    name: "Uiaran Guilherme",
    email: "uiaran@hotmail.com",
  },
  tags: ["Portal Pós Venda"],
  childs: [
    {
      _id: uuidv4(),
      title: "[PORTAL DIGITAL] - Login",
      description:
        "Realizar login na plataforma com altenticação de dois fatores",
      author: {
        name: "Uiaran Guilherme",
        email: "uiaran@hotmail.com",
      },
      responsible: {
        name: "Uiaran Guilherme",
        email: "uiaran@hotmail.com",
      },
    },
  ],
  properties: {
    changeAt: new Date().toLocaleDateString({
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    createdAt: new Date().toLocaleDateString({
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    severity: "3 - Médio",
    estimated: {
      original: 1,
      remaining: 0,
      complete: 1,
    },
    block: {
      type: "Local",
      reason: "necessidade de concluir as rotas em back-end",
    },
  },
  discussion: [
    {
      name: "Uiaran Guilherme",
      email: "uiaran@hotmail.com",
      comment: "Preciava verificar",
    },
    {
      name: "Emanuelli Custódia",
      email: "manu_tody@gmail.com",
      comment: "Vamos Refazer",
    },
    {
      name: "Sabrina de Sá",
      email: "sabrina-sa-98@yahooo.com",
      comment: "Ficou verificado que ....",
    },
  ],
};

const TaskView = () => {
  const [clickDescription, setDescription] = useState(false);
  const [clickComent, setComent] = useState(false);

  return (
    <Dialog
      cardProps={{
        style: styleCard,
      }}
      open={true}
    >
      <WhapperTaskView>
        <HeaderTaskView>
          <Title>
            <AiFillBug /> {taskMock.title}
          </Title>
          <IconButton>
            <IoClose />
          </IconButton>
        </HeaderTaskView>
        <BodyTaskView>
          <ContainerDescriptionAndComents>
            <Description
              onBlur={() => setDescription(false)}
              onClick={() => setDescription(true)}
            >
              <Label for="description-textarea">Descrição:</Label>
              {clickDescription ? (
                <>
                  <textarea
                    autoFocus
                    name="description-textarea"
                    id="description-textarea"
                  />
                </>
              ) : (
                <Paragraf>Adicionar Descrição...</Paragraf>
              )}
            </Description>
            <Coments>
              <Label>Comentários:</Label>
              <Coment
                onBlur={() => setComent(false)}
                onClick={() => setComent(true)}
                style={{
                  margin: "5px 0 10px 0",
                }}
              >
                {clickComent ? (
                  <>
                    <textarea autoFocus />
                    <ButtonsArea>
                      <Button
                        title="Adicionar comentário"
                        style={styleButtonAddComent}
                        variant="contained"
                      >
                        <BiMessageAltAdd />
                      </Button>
                    </ButtonsArea>
                  </>
                ) : (
                  <Paragraf>Adicione um comentário...</Paragraf>
                )}
              </Coment>
              {Array.isArray(taskMock.discussion) &&
                taskMock.discussion.map((discussion, index) => (
                  <ContainerComents key={index} direction={index % 2 === 0}>
                    <Avatar name={discussion.name} />
                    <Coment>
                      <span>{discussion.name}:</span>
                      {discussion.comment}
                    </Coment>
                  </ContainerComents>
                ))}
            </Coments>
          </ContainerDescriptionAndComents>
          <ContainerPropsAndButtons>
            <Properties {...taskMock.properties} />
            <ButtonsArea>
              <Button style={styleButtonCancelar} variant="outlined">
                Cancelar
              </Button>
              <Button style={styleButtonSalvar} variant="contained">
                Salvar
              </Button>
            </ButtonsArea>
          </ContainerPropsAndButtons>
        </BodyTaskView>
      </WhapperTaskView>
    </Dialog>
  );
};

export default TaskView;
