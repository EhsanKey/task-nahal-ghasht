const finder = (data, valueData, value) => {
  return data.find((item) => item[valueData] === value);
  
};
export default finder;
