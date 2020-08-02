const formatValue = value =>
  Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(value); // TODO

export default formatValue;
