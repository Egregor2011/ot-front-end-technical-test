import React from "react";
import { ActiveRow as Row, blueColor, ChartCell } from "./styles";
import { Bar, Radar } from "react-chartjs-2";
import { getChartData } from "../../utils";
import { label } from "../../locales";

export default function ActiveRow({ datatypes }) {
  const chartData = getChartData(datatypes);
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label,
        data: chartData.data,
        backgroundColor: blueColor,
      },
    ],
  };
  return (
    <Row>
      <ChartCell colSpan="3">
        <Bar
          data={data}
          height={220}
          options={{ maintainAspectRatio: false }}
        />
      </ChartCell>
      <ChartCell colSpan="4">
        <Radar
          data={{
            ...data,
            datasets: [
              {
                ...data.datasets[0],
                backgroundColor: undefined,
                borderColor: blueColor,
              },
            ],
          }}
        />
      </ChartCell>
    </Row>
  );
}
