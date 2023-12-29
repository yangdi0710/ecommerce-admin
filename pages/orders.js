import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Order</h1>
      <table className="basic">
        <thead>
          <tr>
            <td>Date</td>
            <td>Paid</td>
            <td>Recipient</td>
            <td>Products</td>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order, index) => (
              <tr key={index}>
                <td>{(new Date(order.createdAt).toLocaleString())}</td>
                <td className={order.paid ? "text-green-700" : "text-red-600"}>{order.paid ? "PAID" : "UNPAID"}</td>
                <td>
                  {order.name} <br />
                  {order.email} <br />
                  {order.streetAddress}
                  {order.city} &nbsp;
                  {order.postalCode} &nbsp;
                  {order.country}
                </td>
                <td>
                  {order.line_items.map((l) => (
                    <>
                      {l.quantity} * {l.price_data?.product_data.name} <br/>
                    </>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
