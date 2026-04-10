import React from "react";
import "./Today.css";

const Today = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("pt-BR", { month: "long" });
  const year = today.getFullYear();
  const weekday = today.toLocaleString("pt-BR", { weekday: "long" });

  return (
    <div className="div-date">
      <p className="date">{`${day} ${month} ${year}`}</p>
      <p className="date-weekday">{weekday}</p>
    </div>
  );
};

export default Today;
