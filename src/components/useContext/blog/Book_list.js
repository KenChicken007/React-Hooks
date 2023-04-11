import { CurrencyProvider, useCurrency, Currencies } from "./currency-context";

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

const Book_list = () => {
  return (
    <CurrencyProvider>
      <CurrencyButtons />

      <Books list={DATA} />
    </CurrencyProvider>
  );
};

const CurrencyButtons = () => {
  const { onChange } = useCurrency();

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
  const { value } = useCurrency();

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: value.code,
  }).format(item.price * value.conversionRate);

  return (
    <li>
      {item.title} - {price}
    </li>
  );
};

export default Book_list;
