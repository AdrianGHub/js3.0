const axios = require("axios");

const API_KEY = "b9922818ac116ec10b8d6a58e1e30696";

// API's
// Exchange Rate: http://data.fixer.io/api/ latest?access_key=b9922818ac116ec10b8d6a58e1e30696&format=1
// Countries: https://restcountries.eu/rest/v2/currency/${currencyCode}

const getExchangeRate = async (fromCurrency, toCurrency) => {
	const response = await axios.get(
		`http://data.fixer.io/api/latest?access_key=${API_KEY}`
	);

	const rate = response.data.rates;
	const pln = 1 / rate[fromCurrency];

	const exchangeRate = pln * rate[toCurrency];

	if (isNaN(exchangeRate)) {
		throw new Error(
			`Unable to get currency ${fromCurrency} and ${toCurrency}`
		);
	}

	return exchangeRate;
};

getExchangeRate("USD", "PLN");

const getCountries = async (toCurrency) => {
	try {
		const response = await axios.get(
			`https://restcountries.eu/rest/v2/currency/${toCurrency}`
		);

		return response.data.map((country) => country.name);
	} catch (error) {
		throw new Error(`Unable to get countries that use ${toCurrency}`);
	}
};

getCountries("PLN");

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
	const countries = await getCountries(toCurrency);
	const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
	const convertedAmount = (amount * exchangeRate).toFixed(2);

	return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spent these in the following countries: ${countries}`;
};

convertCurrency("USD", "PLN", 30)
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.log(error.message);
	});
