/**
 * Returns a currency value if the given currency code exists
 * @param {FormDataEvent} event - form submit event
 */
async function getCurrency(event) {
	// Fetch Data from API
	// API URL - https://api.exchangerate-api.com/v4/latest/USD
	// Verify if the passed Country Code Exists
	// If exists - return the value of the currency
	// Else - show currency code entered is wrong
	event.preventDefault(); // Prevent form submission

    const currencyInput = document.getElementById('currencyInput').value;
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const rates = data.rates;
        const currencyCode = currencyInput.trim();

        if (rates.hasOwnProperty(currencyCode)) {
            const currencyRate = rates[currencyCode];
            document.getElementById('results').innerText = `1 USD = ${currencyRate} ${currencyCode}`;
        } else {
            document.getElementById('results').innerText = `${currencyCode} does not exist`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('results').innerText = 'Error fetching data. Please try again later.';
    }
}
