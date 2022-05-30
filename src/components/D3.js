import React from "react";
import { useState, useEffect } from "react";
import Chart from "./Chart";

const url = "https://dd-33.herokuapp.com/";

function D3() {
  const [data, setData] = useState([]);
  const [valuee, setValuee] = useState("intensity");

  const keypress = (e) => {
    if (e.keyCode === 13) {
      const val = e.target.value;
      if (val === "") {
        return;
      } else {
        return setValuee(val);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const resData = await res.json();

      let r = [];
      resData.map((d) => {
        for (const [key, value] of Object.entries(d)) {
          if (key === `${valuee}`) {
            return r.push(value);
          }
        }
        return r;
      });
      setData(r);
    };
    getData();
  }, [valuee]);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <input type="text" placeholder="Search" onKeyDown={keypress} />
      <Chart data={data} />
    </>
  );
}

export default D3;
