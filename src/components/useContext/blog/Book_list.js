import { useContext, useState } from "react";
import { CurrencyContext } from "./currency-context";

const DATA = [
  {
    id: "1",
    title: "The Road to React",
    price: 19.99,
  },
  {
    id: "2",
    title: "The Road to GraphQL",
    price: 29.99,
  },
];

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

const Book_list = () => {
  const [currency, setCurrency] = useState(Currencies.Euro);

  return (
    <CurrencyContext.Provider value={currency}>
      <CurrencyButtons onChange={setCurrency} />

      <Books list={DATA} />
    </CurrencyContext.Provider>
  );
};

const CurrencyButtons = ({ onChange }) => {
  return Object.values(Currencies).map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)}>
      {item.label}
    </CurrencyButton>
  ));
};

const CurrencyButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Books = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

const Book = ({ item }) => {
  const currency = useContext(CurrencyContext);

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(item.price * currency.conversionRate);

  return (
    <li>
      {item.title} - {price}
    </li>
  );
};

export default Book_list;
