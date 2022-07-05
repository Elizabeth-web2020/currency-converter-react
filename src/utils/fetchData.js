// export const currencyOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '16c45cb634msh01b12b9a1866faep13f788jsn2b63ef67f0c4',
//     'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
//   }
// };
export const currencyOptions = {method: 'GET', headers: {Accept: 'application/json'}};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data)

  return data;
};