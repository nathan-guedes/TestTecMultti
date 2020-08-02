import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
  font-size:50px;
  margin-bottom:10px;
}
svg{
  animation: spin 4s infinite linear;
  -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;

}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
}
`;
