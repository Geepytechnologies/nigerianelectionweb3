import React from "react";
import PieChart from "./charts/PieChart";

type Props = {};

const Chart = (props: Props) => {
  return (
    <div className="">
      <PieChart
        title=""
        value={500}
        series={[80, 20]}
        colors={["#275be8", "#c4e8ef"]}
      />
    </div>
  );
};

export default Chart;
