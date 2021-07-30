import { useState, useEffect } from "react";
import axios from "axios";

const BaseUrl = "http://localhost:3001/";
const customers = "customers";
const may = "05";
const june = "06";
const july = "07";
const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    axios.get(`${BaseUrl}${customers}`).then(({ data }) => {
      setCustomerData(data);
    });
  }, []);

  const tdPoints = (transactions) => {
    let totalPoints = 0;
    const monthPoints = (month) => {
      let total = 0;
      transactions.forEach((transaction) => {
        let { price } = transaction;
        if (transaction.date.split("-")[1] === month) {
          if (price > 100) {
            let doublepoints = (price - 100) * 2;
            total = total + doublepoints;
            price = price - doublepoints / 2;
          }
          if (price <= 100) {
            total = total + 50;
            totalPoints += total;
          }
        }
      });
      return total;
    };
    return (
      <>
        <td>{monthPoints(may)}</td>
        <td>{monthPoints(june)}</td>
        <td>{monthPoints(july)}</td>
        <td>{totalPoints}</td>
      </>
    );
  };

  return (
    <div>
      <h1>Points</h1>
      <div>
        {customerData.map((customer) => (
          <table key={customer.id} className="customer-tables">
            <thead>
              <tr>
                <th>Name</th>

                <th>may</th>
                <th>june</th>
                <th>july</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {customer.firstName} {customer.lastName}
                </td>
                {tdPoints(customer.transaction)}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default CustomerTable;
