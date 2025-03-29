import React from "react";

function Item({ item, deleteItem, heandleTogle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => heandleTogle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.input} {item.select}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
