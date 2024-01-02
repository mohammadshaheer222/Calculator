import React, { useEffect, useState } from "react";
import Screen from "../Screen/Screen";
import "./body.css";
const Body = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [equal, setEqual] = useState(false);

  const showValue = (event) => {
    const isOperator = (char) => {
      return ["+", "-", "*", "/", "%"].includes(char);
    };
    // setValue(value + event.target.value);
    const add = [...value];
    console.log(value)
    if (add.length === 0 && isOperator(event.target.value)) {
      setValue("0" + event.target.value);
      setResult(result);
      return;
    }

    add.push(event.target.value);
    setValue(add.join(""));
    try {
      const rmUndefined = eval(add.join(""));
      rmUndefined === undefined ? setResult("") : setResult(rmUndefined);
    } catch {
      setResult(result);
    }
    // if (event.target.value === "%") {
    //   const percentage = parseFloat(value) / 100;
    //   return setResult(percentage);
    // }

    const lastChar = value.charAt(value.length - 1);
    if (isOperator(lastChar) && isOperator(event.target.value)) {
      return setValue(value.slice(0, -1) + event.target.value);
    }
    setEqual(false);
  };
  const equalBtn = () => {
    setEqual(true);
  };

  const deleteBtn = () => {
    if (equal === false) {
      const del = [...value];
      del.pop();
      setValue(del.join(""));
      try {
        const rmUndefined = eval(del.join(""));
        rmUndefined === undefined ? setResult("") : setResult(rmUndefined);
      } catch {
        setResult(result);
      }
    }
  };
    const clearBtn = () => {
      setValue("");
      setResult("");
    };
  
  return (
    <div className="container">
      <div className="main">
        <Screen display={value} result={result} equals={equal} />
        <div className="body">
          <button onClick={clearBtn}>{value === "" ? "AC" : "CL"} </button>
          <button onClick={deleteBtn}>DEL</button>
          <button value={"%"} onClick={showValue}>
            %
          </button>
          <button value={"/"} onClick={showValue}>
            /
          </button>
          <button value={"7"} onClick={showValue}>
            7
          </button>
          <button value={"8"} onClick={showValue}>
            8
          </button>
          <button value={"9"} onClick={showValue}>
            9
          </button>
          <button value={"*"} onClick={showValue}>
            *
          </button>
          <button value={"4"} onClick={showValue}>
            4
          </button>
          <button value={"5"} onClick={showValue}>
            5
          </button>
          <button value={"6"} onClick={showValue}>
            6
          </button>
          <button value={"-"} onClick={showValue}>
            -
          </button>
          <button value={"1"} onClick={showValue}>
            1
          </button>
          <button value={"2"} onClick={showValue}>
            2
          </button>
          <button value={"3"} onClick={showValue}>
            3
          </button>
          <button value={"+"} onClick={showValue}>
            +
          </button>
          <button value={"."} onClick={showValue}>
            .
          </button>
          <button value={"0"} onClick={showValue}>
            0
          </button>
          <div className="last">
            <button onClick={equalBtn}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
