import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ApexOptions } from "apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
ssr: false,
});

// import ReactApexChart from "react-apexcharts";

type Props = {
  title: string;
  series: Array<number>;
  colors: Array<string>;
  data?: any;
};

const PieChart = ({ title, series, colors, data }: Props) => {
  console.log({ mydata: data });
  const CandidateSeries = [
    {
      name: "Candidate",
      data: [
        data && data[0][4].toString(),
        data && data[1][4].toString(),
        data && data[2][4].toString(),
      ],
    },
  ];

  const CandidateOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#475BE8", "#CFC8FF"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
      width: 4,
    },
    xaxis: {
      categories: ["1", "2", "3"],
      title: {
        text: "Candidate ID's",
      },
    },
    yaxis: {
      title: {
        text: "Votes",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    tooltip: {
      y: {
        formatter(val: number) {
          return ` ${val} votes`;
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-1 bg-[#fcfcfc] flex-col w-full content-between items-center pl-[3.5px] py-2 gap-2 rounded-[15px] min-h-[110px]  "
    >
      <p className="font-[600] font-mont text-[20px] tracking-[2px]">
        Election polls
      </p>
      <div className="flex">
        <p className="text-[#808191] text-[14px]">{title}</p>
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
      <div className="flex flex-row gap-3 items-center justify-center w-full">
        <div className="flex gap-2 items-center">
          <div className="bg-[#275be8] w-[15px] h-[15px]"></div>
          <p>- {data && data[0][2]}</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#47b4ca] w-[15px] h-[15px]"></div>
          <p>- {data && data[1][2]}</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#c4e8ef] w-[15px] h-[15px]"></div>
          <p>- {data && data[2][2]}</p>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ReactApexChart
          series={CandidateSeries}
          type="bar"
          height={310}
          options={CandidateOptions}
        />
      )}
    </motion.div>
  );
};

export default PieChart;
