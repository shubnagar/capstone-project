import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCurrentTheme } from "../../context/ThemeContext";

const defaultOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in March, 2022",
    align: "left",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 74.77,
          sliced: true,
          selected: true,
        },
        {
          name: "Edge",
          y: 12.82,
        },
        {
          name: "Firefox",
          y: 4.63,
        },
        {
          name: "Safari",
          y: 2.44,
        },
        {
          name: "Internet Explorer",
          y: 2.02,
        },
        {
          name: "Other",
          y: 3.28,
        },
      ],
    },
  ],
};

const Charts = () => {
  const currentTheme = useCurrentTheme();
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.update({
        chart: {
          backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
        },
        title: {
          style: {
            color: currentTheme === "dark" ? "#fff" : "#000",
          },
        },
      });
    }
  }, [currentTheme]);

  return (
    <main className="flexCenter height100Per">
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={defaultOptions}
      />
    </main>
  );
};

export default Charts;
