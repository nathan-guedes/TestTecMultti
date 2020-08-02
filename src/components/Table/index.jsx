import React, { useState, useCallback, useEffect } from 'react';
import { Container } from './styles';
import formatValue from '../../utils/formatValue';
import sortArray from '../../utils/sortArray';
import {AiOutlineSortAscending,AiOutlineSortDescending} from 'react-icons/ai'

function Table({ data }) {
  const [employerData, setEmployerData] = useState(data);
  const [isAscName, setIsAscName] = useState(true);
  const [isAscAge, setIsAscAge] = useState(true);
  const [isAscSalary, setIsAscSalary] = useState(true);

  useEffect(() => setEmployerData(data), [data]);
  const handleSort = useCallback(
    (method, isAsc) => {  switch(method){
      case 1:
        setIsAscAge(!isAscAge);
        setIsAscName(true);
        setIsAscSalary(true);
        break;
      case 2:
        setIsAscName(!isAscName);
        setIsAscAge(true);
        setIsAscSalary(true);
        break;
      case 3:
        setIsAscSalary(!isAscSalary);
        setIsAscAge(true);
        setIsAscName(true);

        break;
      default:
        console.log('deu erro');
      break;
    }
    setEmployerData(sortArray(employerData,method,isAsc));
    },
    [employerData],
  );

  return (
    <Container>
      <tbody>
        <tr>
          <th>
            Nome Funcionário

            <button type="button" onClick={() => handleSort(2, isAscName)}>
            {isAscName?<AiOutlineSortDescending color='#fff' size={32} />:<AiOutlineSortAscending color='#fff' size={32}/>}
            </button>
          </th>
          <th>
            Idade Funcionário
            <button type="button" onClick={() => handleSort(1, isAscAge)}>
            {isAscAge?<AiOutlineSortDescending color='#fff' size={32} />:<AiOutlineSortAscending color='#fff' size={32}/>}
            </button>
          </th>
          <th>
            Salario Funcionário
            <button type="button" onClick={() => handleSort(3, isAscSalary)}>
            {isAscSalary?<AiOutlineSortDescending color='#fff' size={32} />:<AiOutlineSortAscending color='#fff' size={32}/>}
            </button>
          </th>
        </tr>
        {employerData.map(employ => (
          <tr key={employ.id}>
            <td>{employ.employee_name}</td>
            <td>{employ.employee_age}</td>
            <td>{formatValue(employ.employee_salary)}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}

export default Table;
