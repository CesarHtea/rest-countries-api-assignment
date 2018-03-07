const countriesContainer = document.querySelector(".countries-container")
const request = superagent
const URL = "https://restcountries.eu/rest/v2/all"

request
	.get(URL)
	.then(function(data) {
		
		// generar un array??? de objetos HTML
		// iterar crear un objeto HTML con cada [i] 
		// y aplicar innerHTML dentro de coutriesContainer 
   		
   		for (i = 0 ; i < data.body.length ; i++) {
   			// crear elemento html
			let divCountryCard = '<div class="country-card"></div>'
			countriesContainer.innerHTML += divCountryCard
			let arrayOfCountryCard = [...document.querySelectorAll(".country-card")]
			let imgTag = `<img class="country-flag" src="${data.body[i].flag}" alt="flag">`
			arrayOfCountryCard[i].innerHTML += imgTag
			let hTag = `<h4 class="country-name">${data.body[i].name}</h4>`
			arrayOfCountryCard[i].innerHTML += hTag
			let pTag = `<p class="country-capital">${data.body[i].capital}</p>`
			arrayOfCountryCard[i].innerHTML += pTag
   		}			
 })

