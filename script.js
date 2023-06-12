let formElement = document.querySelector(".js-formElement");
let currencyElement = document.querySelector(".js-field--currency");
let amountElement = document.querySelector(".js-field--amount");
let resultElement = document.querySelector(".js-resultElement");

let rateEUR = 4.5172;
let rateCHF = 4.6517;
let rateUSD = 4.2088;
let rateGBP = 5.1974;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = rateEUR * amount;
            break;

        case "CHF":
            result = rateCHF * amount;
            break;

        case "USD":
            result = rateUSD * amount;
            break;

        case "GBP":
            result = rateGBP * amount;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)}`;
});
