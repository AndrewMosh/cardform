import React from "react";
import "./form.css";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "адрес запроса",
        { date, number, cvv, message, name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((response) => {
        setData(response);
        setMessage("Оплата произведена");
      })
      .catch((error) => {
        setMessage("Вы ввели неверные данные");
      });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label>Держатель карты</label>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        autoFocus={true}
      />
      <label>Номер карты</label>{" "}
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="text"
        required
      />
      <label>Срок действия</label>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        required
      />
      <label>cvv код</label>
      <input
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        type="password"
        required
      />
      <button
        disabled={
          (date.length > 0 &&
            number.length > 0 &&
            name.length > 0 &&
            cvv.length > 0 &&
            true) ||
          false
        }
        style={{
          color:
            date.length > 0 &&
            number.length > 0 &&
            name.length > 0 &&
            cvv.length > 0 &&
            "black",
          backgroundColor:
            date.length > 0 &&
            number.length > 0 &&
            name.length > 0 &&
            cvv.length > 0 &&
            "rgb(255, 228, 196)",
          cursor:
            date.length > 0 &&
            number.length > 0 &&
            name.length > 0 &&
            cvv.length > 0 &&
            "pointer",
        }}
      >
        Отправить
      </button>
      <span>{message}</span>
    </form>
  );
};

export default Form;
