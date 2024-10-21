import { customerType } from "@/pages/customers/CustomersList";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";



export default function ProjectTable({data}:{data:customerType[]}) {

  if (!data || data.length === 0) {
    return <div>No customer data available</div>;
  }

  return (
    <div> 
    <Card>
    <Title>Customers</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Company</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>{item.company}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  </div>
  )
}
