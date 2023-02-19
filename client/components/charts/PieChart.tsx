import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { TotalRevenueOptions, TotalRevenueSeries } from "./chartconfig";
// import ReactApexChart from "react-apexcharts";

type Props = {
  title: string;
  value: number;
  series: Array<number>;
  colors: Array<string>;
};

const PieChart = ({ title, value, series, colors }: Props) => {
  return (
    <div className="flex flex-1 bg-[#fcfcfc] flex-row content-between items-center pl-[3.5px] py-2 gap-2 rounded-[15px] min-h-[110px] w-fit ">
      <div className="flex">
        <p className="text-[#808191] text-[14px]">{title}</p>
        <p className="text-[#808191] font-[700] mt-1 text-[24px]">{value}</p>
      </div>
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={{
            chart: { type: "donut" },
            colors,
            legend: { show: false },
            dataLabels: { enabled: false },
          }}
          series={series}
          type="donut"
          width="120px"
        />
      )}
      {typeof window !== "undefined" && (
        <ReactApexChart
          series={TotalRevenueSeries}
          type="bar"
          height={310}
          options={TotalRevenueOptions}
        />
      )}
    </div>
  );
};

export default PieChart;
