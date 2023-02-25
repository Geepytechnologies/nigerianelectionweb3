import { ApexOptions } from "apexcharts";

export const CandidateSeries = [
  {
    name: "Candidate",
    data: [183, 124, 115],
  },
  //   {
  //     name: "Running Month",
  //     data: [95, 84, 72, 44, 108, 108, 47],
  //   },
];

export const CandidateOptions: ApexOptions = {
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
