const getCurrencySymbol = (currency) => {
  const currencies = {
    EUR: "€",
    GBP: "£",
    USD: "$",
  }
  return currencies[currency]
}

export default getCurrencySymbol
