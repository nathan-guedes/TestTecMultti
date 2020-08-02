const sortArray = (employerData,method, isAsc)=>{

  const types = {
    1: 'employee_age',
    2: 'employee_name',
    3: 'employee_salary',
  };

  const sortParameter = types[method];

  if (method === 2 && isAsc) {
    const sortedEmployer = [...employerData].sort((a, b) => {
      if (a[sortParameter] < b[sortParameter]) {
        return -1;
      }
      if (a[sortParameter] > b[sortParameter]) {
        return 1;
      }
      return 0;
    });

    return sortedEmployer;
  }
  if (method === 2 && !isAsc) {
    const sortedEmployer = [...employerData].sort((a, b) => {
      if (b[sortParameter] < a[sortParameter]) {
        return -1;
      }
      if (b[sortParameter] > a[sortParameter]) {
        return 1;
      }
      return 0;
    });

    return sortedEmployer;
  }

  if (isAsc) {
    const sortedEmployer = [...employerData].sort(
      (a, b) => b[sortParameter] - a[sortParameter],
    );

    return sortedEmployer;
  }

  const sortedEmployer = [...employerData].sort(
    (a, b) => a[sortParameter] - b[sortParameter],
  );

  return sortedEmployer;
}

export default sortArray;
