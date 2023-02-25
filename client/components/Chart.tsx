import React from "react";
import PieChart from "./charts/PieChart";

type Props = {
  data: any;
};

const Chart = ({ data }: Props) => {
  return (
    <div className="my-4">
      <PieChart
        data={data}
        title="Win Probability"
        series={[70, 20, 10]}
        colors={["#275be8", "#47b4ca", "#c4e8ef"]}
      />
    </div>
  );
};

export default Chart;
