import React from 'react';

import { Container } from './styles';

function InputSearch({title,isFilled,children,...rest}) {
  return(
   <Container isFilled={isFilled} >
    <label>
   <span >{title}</span>
    <input  type='search' {...rest} />
    </label>
  </Container>
  )
}

export default InputSearch;
