import { useState, useEffect } from "react";
import customerTransactions from "./customerData";
const months = ["05", "06", "07"];

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      console.log(data, "data");
      setCustomerData(data);
    });
  }, []);

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(customerTransactions);
      }, 3000);
    });
  };

  const tdPoints = (transactions) => {
    let totalPoints = 0;
    console.log(transactions);
    const monthPoints = (month) => {
      console.log(month);
      const monthlyTransactions = transactions.filter(({ date }) => {
        return new Date(date).getMonth() + 1 == month;
      });
      const monthlyTotal = monthlyTransactions.reduce(function (
        sum,
        transaction
      ) {
        let { price } = transaction;
        if (price > 100) {
          return 50 + sum + (price - 100) * 2;
        }
        if (price <= 100) {
          return sum + 50;
        } else return sum;
      },
      0);
      totalPoints += monthlyTotal;
      return monthlyTotal;
    };
    return (
      <>
        {months.map((month) => {
          return <td key={month}>{monthPoints(month)}</td>;
        })}
        <td>{totalPoints}</td>
      </>
    );
  };

  return (
    <div>
      <h1>Points</h1>
      <div>
        {customerData.length > 0
          ? customerData.map((customer) => (
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
            ))
          : "loading..."}
      </div>
    </div>
  );
};

export default CustomerTable;
