import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import Cart from "./Cart";
import AppCSS from "./App.module.css";

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default App;
