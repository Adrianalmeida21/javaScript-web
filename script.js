const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.488
const euro = 6.018
const convertValues = () => {
   const inputReal = document.getElementById('input-real').value
   const realValueText = document.getElementById('Real-value-text')
   const currencyValueText = document.getElementById('currency-value-text')
   // realValueText.innerHTML=inputReal

   realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
      style: "currency",
      currency: "BRL",
   }).format(inputReal)
   if (select.value === "€ Euro") {
      currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
         style: "currency",
         currency: 'EUR',
      }).format(inputReal / euro)
    
   }

   if (select.value === "US$ Dólar americano") {
      currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
         style: "currency",
         currency: "USD",
      }).format(inputReal / dolar)
      
   }
}

changeCurrency = () => {
   const currencyName = document.getElementById('currency-name')
   const currencyImg = document.getElementById('currency-img')
   if (select.value === "€ Euro") {
      currencyName.innerHTML = "€ Euro"
      currencyImg.src = "image-euro.jpeg"
      
   }
   if (select.value === `US$ Dólar americano`) {
      currencyName.innerHTML = "US$ Dólar americano"
      currencyImg.src = "bandeira_eua.jpg"
     
   }
   convertValues()
} 


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)