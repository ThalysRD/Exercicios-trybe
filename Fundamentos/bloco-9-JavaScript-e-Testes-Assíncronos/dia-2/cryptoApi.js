




const getCripto = () => {
    const url = 'https://api.coincap.io/v2/assets'
   const allCripto = fetch(url).then((response) => response.json()).then((data) => (data.data)).catch((error) => error.toString())

    return allCripto
}



const createList =  async () => {
    const criptos = document.getElementById('criptos')
    const coins = await getCripto()

 coins.filter((coin) => Number(coin.rank) <= 10).forEach((coin) => {
     const list = document.createElement('li')
     const dolarPrice = Number(coin.priceUsd)

    list.innerHTML = `${coin.name} (${coin.symbol}): ${dolarPrice.toFixed(2)}`
    criptos.appendChild(list)

 }) 

}


window.onload = () => createList()