import { useEffect, useRef } from 'react';
import {useField} from '@unform/core';
import { Container } from './styles';

const Input = ( {name, placeholder} ) => {
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
        <Container>
          <input className='inputTask'  ref={inputRef} placeholder={placeholder} />
        </Container>
    </>
  );
}

export default Input;