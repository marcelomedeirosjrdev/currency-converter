const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 4.8
const euro = 5.16
const bitcoin = 1429.81

function convertValues() {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "U$$ Dolar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency', 
            currency: 'BTC'
        }).format(inputReais / bitcoin)
    }
        
}
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'U$$ Dolar americano') {
        currencyName.innerHTML = 'Dolar americano'
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }
    

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/bitcoin.png"
    }
convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
