import React, { useState, useEffect} from 'react';
import DataTemp from '../../assets/tempData.json';
import Table from '../../components/Table';
import InputSearch from '../../components/InputSearch';
import Loading from '../../components/Loading';
import api from '../../services/api'
import { Container } from './styles';
function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [firstRequire, setFirstRequire] = useState([]);
  const [employerData, setEmployerData] = useState([]);

  useEffect(async () => {
    const response = await api.get('/employees');
    const arrayFormatted = response.data.data.map(employ => ({
      id: employ.id,
      employee_name: employ.employee_name.toLowerCase(),
      employee_salary: employ.employee_salary,
      employee_age: employ.employee_age,
      profile_image: employ.profile_image,
    }));
    setIsLoading(false);
    setFirstRequire(arrayFormatted);
    return setEmployerData(arrayFormatted);
  }, []);
  useEffect(() => {
    if (!inputValue) {
      return setEmployerData(firstRequire);
    }
    const filteredArray = [...firstRequire].filter(employ =>
      employ.employee_name.includes(inputValue.toLowerCase()),
    );
    return setEmployerData(filteredArray);
  }, [inputValue, firstRequire]);
  return isLoading?(<Loading/>):(
    <Container>
      <InputSearch isFilled={!!inputValue} title='Procurar Funcionário' placeholder='Procurar funcionário por nome' value={inputValue}  onChange={e => setInputValue(e.target.value)} />
      <Table data={employerData} />
    </Container>
  );
}

export default Home;
