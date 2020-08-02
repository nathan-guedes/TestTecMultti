import styled from 'styled-components';

export const Container = styled.table`
  display: flex;
  margin-top:10px;
  flex: 1;
  border-collapse: collapse;
  width:100%;

  th {
    background-color: #1A1F25;
    text-align:center;
    vertical-align:middle;
    font-size:25px;
    font-weight:bolder;
    color: white;
    padding:10px;
    border-right:1px solid #fff;
  }
  button{
    background:#1A1F25;
    border:none;
    padding:none;

  }
  td {
  text-align: center;
  font: 18px Arial;
  border: 1px solid #fff;
  /* border: 0 1px 0 1px; */
  border-collapse: collapse;
  padding:10px;
  text-transform:capitalize;
  }
  tr:nth-child(even) {
    background-color: #ccc;
  }
`;

