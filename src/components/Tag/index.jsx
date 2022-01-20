import React, {useState} from 'react';
import { Form } from "@unform/web";
import InputTec from '../Form/InputTec';

import { Container, TagIcon, TecInput, TecList } from './styles';

const Tag = () => {
  const [inputValid , setInputValid] = useState(false);
  
  const [tecs, setTecs] = useState([ ])
  const [id, setId] = useState(0);

  function getData(data){
    setTecs([...tecs, {id: setId(id + 1), name: data.TecUsage}])
    console.log(tecs)
  }

  return (
      <Container >
        <div>
          <TagIcon onClick={() => setInputValid(()=> inputValid ? false : true)} />
        </div>
        <TecInput display={inputValid}>
          <Form  onSubmit={getData}>
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