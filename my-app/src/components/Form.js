import React, { useState, useCallback, useEffect } from "react";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState("");
  const [length, setLength] = useState("");
  const [selectedValue, setSelectedValue] = useState("1");
  let [text, setText] = useState("");

  let a = 0;

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    // const am=e.target.name;
    // setData({[am]: e.target.value})
  };

  const handleChangeLength = (e) => {
    setLength(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (selectedValue) {
      case "1":
        if (selectedValue === "1") {
          if (amount === "7" && length === "short") {
            text = "Ошибок не обнаружено, загрузка системы продолжается";
            setText(text);
          }
        } else {
          setText("");
        }
        break;

      case "2":
        if (selectedValue === "2") {
          if (amount === "7" && length === "short") {
            text = "Err";
            setText(text);
            console.log("txt", text);
          }
        } else {
          setText("");
        }
        break;

      case "3":
        if (selectedValue === "3") {
          console.log("hello3");
        }
        break;

      case "4":
        if (selectedValue === "4") {
          console.log("hello4");
        }

        break;

      default:
        break;
    }

    if (amount === "") {
      alert("Please, enter amount");
      return;
    } else if (length === "") {
      alert("Please, enter length");
      return;
    }
    setData([...data, { amount, length, text }]);

    setText("");
    setAmount("");
    setLength("");
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <select
        onChange={handleChange}
        value={selectedValue}
        className={styles.selectInput}
      >
        <option value="1">AMI BIOS</option>
        <option value="2">Award BIOS</option>
        <option value="3">Dell</option>
        <option value="4">Phoenix BIOS</option>
      </select>
      <div className={styles.input}>
        <input
          value={amount}
          type="number"
          className={styles.inputAmount}
          name="amount"
          onChange={handleChangeAmount}
          placeholder="Enter Amount..."
        />
        <input
          value={length}
          type="text"
          name="length"
          onChange={handleChangeLength}
          placeholder="Enter length..."
        />
      </div>
      <ul className={styles.list}>
        <li>Code</li>
        <li>Amount</li>
        <li>Length</li>
        <li>Meaning</li>
      </ul>
      <div className={styles.newItems}>
        {Object.values(data).map((el) => {
          console.log(el);
          return (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <span key={uuidv4()}>{++a}</span>
                <span key={uuidv4()}>{el.amount}</span>
                <span key={uuidv4()}>{el.length}</span>
                {<span style={{ width: 20 }}>{el.text}</span>}
              </div>
            </>
          );
        })}
      </div>
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default Form;
