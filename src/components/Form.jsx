import React, { useState } from "react";

function Form({ addItem }) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) return;

    const newItem = {
      id: Date.now(),
      input,
      select,
      packed: false,
    };

    addItem(newItem);

    setInput("");
    setSelect(1);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>what do you need for your trip?</h3>
      <select value={select} onChange={(e) => setSelect(+e.target.value)}>
        {Array.from({ length: 10 }, (cur, i) => i + 1).map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="item..."
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
