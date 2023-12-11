import { BadgeDelta, Card, DeltaType, Flex, Grid, Col, Metric, ProgressBar, Text, AreaChart, Title } from "@tremor/react";
import ProjectTable from "./ui/ProjectTable";

export default function Dashboard() {
  type Kpi = {
    title: string;
    metric: string;
    progress: number;
    target: string;
    delta: string;
    deltaType: DeltaType;
  };
  
  const kpiData: Kpi[] = [
    {
      title: "Income",
      metric: "$ 12,699",
      progress: 15.9,
      target: "$ 80,000",
      delta: "13.2%",
      deltaType: "moderateIncrease",
    },
    {
      title: "Expenses",
      metric: "$ 45,564",
      progress: 36.5,
      target: "$ 125,000",
      delta: "23.9%",
      deltaType: "increase",
    },
    {
      title: "Revenue",
      metric: "$ 45,564",
      progress: 36.5,
      target: "$ 125,000",
      delta: "23.9%",
      deltaType: "moderateDecrease",
    },
  ];

  const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];
  
  const valueFormatter = function(number:number) {
    return "$ " + new Intl.NumberFormat("us").format(number).toString();
  };





  return <div className="p-20">
 <Grid numItemsMd={2} numItemsLg={3} className="gap-6">
      {kpiData.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <div className="truncate">
              <Text>{item.title}</Text>
              <Metric className="truncate">{item.metric}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType}>
              {item.delta}
            </BadgeDelta>
          </Flex>
          <Flex className="mt-4 space-x-2">
            <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
            <Text className="truncate">{item.target}</Text>
          </Flex>
          <ProgressBar value={item.progress} className="mt-2" />
        </Card>
      ))}
    </Grid>
    <div className="pt-6"> 
    <Grid numItems={3} numItemsSm={2} numItemsLg={3} className="gap-6">
    <Col numColSpan={2} numColSpanLg={2}>
    <Card >
    <Title>Income vs Expenses</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["indigo", "cyan"]}
      valueFormatter={valueFormatter}
    />
  </Card>
  </Col>
  <Col>
  <ProjectTable/>
  </Col>
  </Grid>
  </div>
  </div>;
}
