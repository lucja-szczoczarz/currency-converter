{
    const calculateResault = (amount, currency) => {
        const rateEUR = 4.5172;
        const rateCHF = 4.6517;
        const rateUSD = 4.2088;
        const rateGBP = 5.1974;

        switch (currency) {
            case "EUR":
                return rateEUR * amount;

            case "CHF":
                return rateCHF * amount;

            case "USD":
                return rateUSD * amount;

            case "GBP":
                return rateGBP * amount;

        }
    };

    const upDateResaultText = (result) => {
        const resultElement = document.querySelector(".js-resultElement");

        resultElement.innerText = `${result.toFixed(2)}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const result = calculateResault(+amountElement.value, currencyElement.value);

        upDateResaultText(result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-formElement");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}