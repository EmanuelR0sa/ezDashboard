import { Card, AreaChart, Title } from "@tremor/react";

export default function IncomeChart() {



    const chartdata = [
        {
          date: "Jan 22",
          Expenses: 2890,
          "Income": 2338,
        },
        {
          date: "Feb 22",
          Expenses: 2756,
          "Income": 2103,
        },
        {
          date: "Mar 22",
          Expenses: 3322,
          "Income": 2194,
        },
        {
          date: "Apr 22",
          Expenses: 3470,
          "Income": 2108,
        },
        {
          date: "May 22",
          Expenses: 3475,
          "Income": 1812,
        },
        {
          date: "Jun 22",
          Expenses: 3129,
          "Income": 1726,
        },
      ];
      
      const valueFormatter = function(number:number) {
        return "$ " + new Intl.NumberFormat("us").format(number).toString();
      };
    

  return (
    <> 
    <Card >
    <Title>Income vs Expenses</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["Expenses", "Income"]}
      colors={["indigo", "cyan"]}
      valueFormatter={valueFormatter}
    />
  </Card>
  </>
  )
}
