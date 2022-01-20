import { useEffect, useRef } from 'react';
import {useField} from '@unform/core';
import { ContainerTec } from './styles';

const InputTec = ( {name, display} ) => {
    const inputRef = useRef(null)
    const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <>
        <ContainerTec display={display}>
          <input className='inputTask'  ref={inputRef} />
        </ContainerTec>
    </>
  );
}

export default InputTec;