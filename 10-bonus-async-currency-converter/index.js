const axios = require("axios");

const API_KEY = "b9922818ac116ec10b8d6a58e1e30696";

// API's
// Exchange Rate: http://data.fixer.io/api/ latest?access_key=b9922818ac116ec10b8d6a58e1e30696&format=1
// Countries: https://restcountries.eu/rest/v2/currency/${currencyCode}

const getExchangeRate = (fromCurrency, toCurrency) => {
	axios
		.get(
			"http://data.fixer.io/api/latest?access_key=b9922818ac116ec10b8d6a58e1e30696&format=1"
		)
		.then((response) => {
			const rate = response.data.rates;

			console.log(rate);
		});
};

getExchangeRate("USD", "EUR");
