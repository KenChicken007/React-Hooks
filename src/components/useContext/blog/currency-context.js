import React from "react";

const Currencies = {
  Euro: {
    code: "EUR",
    label: "Euro",
    conversionRate: 1,
  },
  USD: {
    code: "USD",
    label: "US Dollar",
    conversionRate: 1.19,
  },
};

const CurrencyContext = React.createContext(null);

const useCurrency = () => {
  const [currency, setCurrency] = React.useContext(CurrencyContext);

  const handleCurrency = (value) => {
    setCurrency(value);
  };

  return { value: currency, onChange: handleCurrency };
};

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = React.useState(Currencies.Euro);
  return (
    <CurrencyContext.Provider value={[currency, setCurrency]}>
      {children}
    </CurrencyContext.Provider>
  );
};
export { CurrencyProvider, useCurrency, Currencies };
