const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callBack) => {
    return console.log(`Mars temperature is : ${callBack()} degree Celsius`)
}
setTimeout(() => {
    sendMarsTemperature(getMarsTemperature)
}, messageDelay());
// imprime "Mars temperature is: 20 degree Celsius", por exemplo