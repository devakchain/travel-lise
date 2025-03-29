import React, { useState } from "react";
import Item from "./Item";

function PackingList({ products, deleteItem, heandleTogle, deleteAll }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = products;
  if (sortBy === "description")
    sortedItems = sortedItems = products
      .slice()
      .sort((a, b) => a.input.localeCompare(b.input));
  if (sortBy === "packed")
    sortedItems = products.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item, i) => {
          return (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              heandleTogle={heandleTogle}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>sort by input order</option>
          <option value={"description"}>sort by description order</option>
          <option value={"packed"}>sort by packed order</option>
        </select>
        <button onClick={() => deleteAll()}>clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
