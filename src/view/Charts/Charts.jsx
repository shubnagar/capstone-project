import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useCurrentTheme } from "../../context/ThemeContext";
import { defaultChartOptions } from "../../constant/config";


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
        options={defaultChartOptions}
      />
    </main>
  );
};

export default Charts;
