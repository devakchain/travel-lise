import React from "react";

function States({ products }) {
  if (!products.length) {
    return (
      <p className="stats">start adding some items to your paking list 🧚</p>
    );
  }
  const calc = products.length;
  const numPacked = products.filter((item) => item.packed).length;
  const percents = Math.round((numPacked / calc) * 100);
  return (
    <footer className="stats">
      {percents === 100 ? (
        "you have everything ready to go ✈️"
      ) : (
        <em>
          🧳 you have {calc} items on your list, and you already packed{" "}
          {numPacked} ({percents}%)
        </em>
      )}
    </footer>
  );
}

export default States;
