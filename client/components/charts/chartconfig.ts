import { ApexOptions } from "apexcharts";

export const TotalRevenueSeries = [
  {
    name: "Candidate",
    data: [
      183, 124, 115, 85, 143, 143, 96, 183, 124, 115, 85, 143, 143, 96, 183,
      124, 115, 85,
    ],
  },
  //   {
  //     name: "Running Month",
  //     data: [95, 84, 72, 44, 108, 108, 47],
  //   },
];

export const TotalRevenueOptions: ApexOptions = {
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
    categories: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
    ],
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
