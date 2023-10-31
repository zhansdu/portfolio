import store from "@/store";

export const setExchangeRate = (exchangeRate) => {
  if (exchangeRate != null && exchangeRate !== undefined) {
    store.commit("setExchangeRate", exchangeRate);
    localStorage.setItem("exchangeRate", JSON.stringify(exchangeRate));
  } else {
    const exchangeRate = localStorage.getItem("exchangeRate");
    if (exchangeRate != null && exchangeRate !== undefined) {
      store.commit("setExchangeRate", JSON.parse(exchangeRate));
    }
  }
};

export const getPrice = (price) => {
  const currentCurrency = store.getters.currentCurrency;
  if (currentCurrency.rate) {
    price *= currentCurrency.rate;
  }

  price = price + "";
  const parts = price.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || ""; // Handle the case where there's no decimal part

  const length = integerPart.length;
  let result = "";

  for (let i = length - 1; i >= 0; i--) {
    result = integerPart.charAt(i) + result;
    if ((length - i) % 3 === 0 && i !== 0) {
      result = " " + result;
    }
  }

  result = result + (decimalPart.length > 0 ? "." + decimalPart : "");

  switch (currentCurrency.title) {
  case "RUB":
    result += " rub";
    break;
  case "KZT":
    result += " kzt";
    break;
  default:
    result += " usd";
    break;
  }
  return result;
};
