import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function Chart({ data }) {
  const barRef = useRef(null);
  const w = 1600;
  const h = 1400;

  useEffect(() => {
    let currentRef = d3
      .select(barRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("padding", 2)
      .style("background-color", "grey")
      .style("margin-left", 5);

    currentRef
      .selectAll("bar")
      .data([...data])
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 20)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 10)
      .attr("height", (d, i) => d * 10)
      .attr("fill", (d, i) => (d > 35 ? "tomato" : "yellow"));
  }, [data]);
  return (
    <div className="parent">
      <div ref={barRef}></div>
    </div>
  );
}

export default Chart;
