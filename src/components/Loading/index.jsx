import React from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { Container } from './styles';

function Loading() {
  return (<Container>
    <h1>Carregando</h1>
    <AiOutlineLoading3Quarters size={60} color='#000' />
  </Container>);
}

export default Loading;
