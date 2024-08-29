import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"

export default function Orders() {
  const orders = [
    { id: 1, orderNumber: "ORD001", customerName: "John Doe", customerNumber: "1234567890", items: "Coffee, Croissant" },
    { id: 2, orderNumber: "ORD002", customerName: "Jane Smith", customerNumber: "0987654321", items: "Tea, Sandwich" },
    { id: 3, orderNumber: "ORD003", customerName: "Bob Johnson", customerNumber: "5555555555", items: "Latte, Muffin" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order Number</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Customer Number</TableHead>
            <TableHead>Items</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.orderNumber}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.customerNumber}</TableCell>
              <TableCell>{order.items}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}