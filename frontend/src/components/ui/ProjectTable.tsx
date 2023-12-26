import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

const data = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
    departement: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    status: "active",
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    status: "active",
  },
  {
    name: "Alain Berset",
    Role: "Federal Councillor",
    departement: "The Federal Department of Home Affairs (FDHA)",
    status: "active",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    status: "active",
  },
];

export default function ProjectTable() {
  return (
    <div> 
    <Card>
    <Title>Projects</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  </div>
  )
}
