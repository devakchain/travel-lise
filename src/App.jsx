import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import States from "./components/States";

function App() {
  const [products, setProducts] = useState([]);
  console.log(products);

  const addItem = (item) => {
    setProducts((products) => [...products, item]);
  };

  const deleteItem = (id) => {
    setProducts((products) => products.filter((item) => item.id !== id));
  };

  const heandleTogle = (id) => {
    setProducts((products) =>
      products.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  };

  const deleteAll = () => {
    if (window.confirm("are you sure you want to delete all?")) setProducts([]);
  };
  return (
    <div>
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        products={products}
        deleteItem={deleteItem}
        heandleTogle={heandleTogle}
        deleteAll={deleteAll}
      />
      <States products={products} />
    </div>
  );
}

export default App;
