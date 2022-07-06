export const currencyOptions = {method: 'GET', headers: {Accept: 'application/json'}};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};