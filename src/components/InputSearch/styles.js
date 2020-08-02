import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:500px;
    justify-content:center;
  label{
    width:500px;
    position:relative;
    border-radius:10px;
    span{
      background-color: #eee;
      display: inline !important;
      text-transform:uppercase;
      font-size:14px;
      position:absolute;
      left:0;
      padding: 0 5px 0 5px;
      margin-left:10px;
      top:-8px;
      visibility:${props => props.isFilled ? "shown" : "hidden"};

    }
  }
  input{
    font-size:18px;
    background:#eee;
    padding:10px;
    width:100%;
    border: none;
    border-radius:10px;
    color:#000;
    cursor: pointer;
    text-transform:capitalize;
    transition: 0.4s;
    }
    input:focus{
      cursor: text;
      background:#eee;
      border:1px solid black;
      transition: 0.4s;
    }
`;
