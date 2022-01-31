import React, {useState} from 'react';
import { Form } from "@unform/web";
import InputTec from '../Form/InputTec';

import { Container, TagIcon, TecInput, TecList } from './styles';

const Tag = () => {
  //VALIDAÇÃO SE INPUT FOI CLICADO OU NÃO
  const [inputValid , setInputValid] = useState(false);
  
  //ATUALIZAÇÃO DO ARRAY DE CONTEUDO
  const [tecs, setTecs] = useState([ ])
  const [id, setId] = useState(0);

  return (
      <Container >
        <div>
          <TagIcon onClick={() => setInputValid(()=> inputValid ? false : true)} />
        </div>
        <TecInput display={inputValid}>
          <Form  onSubmit={(data)=> setTecs([...tecs, {id: setId(id + 1), name: data.TecUsage}])}>
              <InputTec  name={"TecUsage"}/>
          </Form>
        </TecInput>
        <TecList>
          {
            tecs.map((item) => <div key={item.id}>{item.name}</div>)
          }
        </TecList>
      </Container>
  );
}

export default Tag;