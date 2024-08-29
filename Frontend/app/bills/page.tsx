import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"

export default function Bills() {
  const bills = [
    { id: 1, billNumber: "BILL001", customerName: "John Doe", amount: 15.50, date: "2023-05-01" },
    { id: 2, billNumber: "BILL002", customerName: "Jane Smith", amount: 12.75, date: "2023-05-02" },
    { id: 3, billNumber: "BILL003", customerName: "Bob Johnson", amount: 18.20, date: "2023-05-03" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Bills</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bill Number</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.billNumber}</TableCell>
              <TableCell>{bill.customerName}</TableCell>
              <TableCell>${bill.amount.toFixed(2)}</TableCell>
              <TableCell>{bill.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}