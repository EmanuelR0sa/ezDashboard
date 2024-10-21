import {Grid, Col } from "@tremor/react";
import IncomeChart from "../../components/ui/IncomeChart";
import ThreeCards from "../../components/ui/ThreeCards";


export default function Dashboard() {


  return <div className="p-12">
 <Grid numItemsMd={2} numItemsLg={3} className="gap-6">
 <ThreeCards/>
    </Grid>
    <div className="pt-6"> 
    <Grid numItems={3} numItemsSm={2} numItemsLg={3} className="gap-6">
    <Col numColSpan={2} numColSpanLg={2}>
    <IncomeChart/>
  </Col>
  <Col>
  </Col>
  </Grid>
  </div>
  </div>;
}
