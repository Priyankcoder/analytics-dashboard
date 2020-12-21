import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Radio } from "antd";
const Graph = () => {
  const [years, setYears] = useState(10);
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 1000);
    gradient.addColorStop(0, "#02088c");
    gradient.addColorStop(1, "#1893dc");
    return {
      labels: Array.from(Array(years), (item, ind) => ind + 1),
      datasets: [
        {
          backgroundColor: gradient,
          borderColor: "rgba(75,192,192,1)",
          maxBarThickness: 30,
          minBarThickness: 20,
          data: Array.from(Array(50), (item, ind) =>
            Math.floor(Math.random() * 1000)
          ),
        },
      ],
    };
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Radio.Group
          value={years}
          onChange={(e) => {
            setYears(e.target.value);
          }}
          style={{ display: "flex", float: "right", margin: "20px", marginRight: "0px" }}
        >
          <Radio.Button value={10}>10y</Radio.Button>
          <Radio.Button value={20}>20y</Radio.Button>
          <Radio.Button value={30}>30y</Radio.Button>
        </Radio.Group>
      </div>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Annual Projection",
            position: "top",
            fontSize: 15,
            fontColor: "black",
            fontStyle: "bold",
            lineHeight: "0.8",
            padding: 40,
          },
          legend: {
            display: false,
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Asset Balance (In Lakhs)",
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
                scaleLabel: {
                  display: "true",
                  labelString: "No. of Year",
                },
              },
            ],
          },
          tooltips: {
            backgroundColor: "#1ba9ea",
            custom: function (tooltip) {
              if (!tooltip) return;
              // disable displaying the color box;
              tooltip.displayColors = false;
            },
            callbacks: {
              title: function (tooltipItems, data) {
                return "";
              },

              label: function (tooltipItem, data) {
                var allData = data.datasets[tooltipItem.datasetIndex].data;
                var tooltipLabel = data.labels[tooltipItem.index];
                var tooltipData = allData[tooltipItem.index];
                var total = 0;
                for (var i = 0; i < allData.length; i++) {
                  total += allData[i];
                }
                var tooltipPercentage =
                  Math.round((tooltipData / total) * 1000) / 10;
                return tooltipPercentage + "%";
              },
            },
          },
        }}
      />
    </>
  );
};

export default Graph;
