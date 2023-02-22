import { useCallback } from "react";
import * as yup from "yup";
import {
  FaCheckCircle,
  FaDollarSign,
  FaUserTie,
  FaUserClock,
} from "react-icons/fa";

export const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

export const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  phone: yup.string().required().max(10).min(10),
});

export const defaultChartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in March, 2023",
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

export const listData = [
  {
    id: 1,
    name: "Account Balance",
    amount: 30211.28,
    icon: FaUserTie,
  },
  {
    id: 2,
    name: "Pending",
    amount: -3021,
    icon: FaUserClock,
  },
  {
    id: 3,
    name: "Processes",
    amount: 10261.8,
    icon: FaCheckCircle,
  },
  {
    id: 4,
    name: "Net Worth",
    amount: 100007,
    icon: FaDollarSign,
  },
];
