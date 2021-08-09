import { useState, useEffect } from "react";
import customerTransactions from "./customerData";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      const newData = data.map((customer) => {
        const { transaction } = customer;
        let totalPoints = 0;
        const months = [
          ...new Set(transaction.map((x) => new Date(x.date).getMonth())),
        ];
        const monthPoints = (month) => {
          const monthlyTransactions = transaction.filter(({ date }) => {
            return new Date(date).getMonth() === month;
          });
          const monthlyTotal = monthlyTransactions.reduce(function (
            sum,
            transaction
          ) {
            let { price } = transaction;
            if (price > 100) {
              return 50 + sum + (price - 100) * 2;
            }
            if (price > 50) {
              return price - 50;
            } else return sum;
          },
          0);
          totalPoints += monthlyTotal;
          return monthlyTotal;
        };
        const yearmonths = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const MonthlyTransactions = months.map((month) => {
          return { [yearmonths[month]]: monthPoints(month) };
        });
        console.log(
          MonthlyTransactions,
          "monthlytransa",
          totalPoints,
          "totalP"
        );
        return {
          id: customer.id,
          name: customer.firstName + " " + customer.lastName,
          months: MonthlyTransactions,
          total: totalPoints,
        };
      });
      setCustomerData(newData);
    });
  }, []);

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(customerTransactions);
      }, 1000);
    });
  };

  console.log(customerData, "data in state");

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
                    {customer.months.map((month) => {
                      return (
                        <th key={Object.keys(month)[0]}>
                          {Object.keys(month)[0]}
                        </th>
                      );
                    })}
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{customer.name}</td>
                    {customer.months.map((month) => {
                      return (
                        <td key={Object.keys(month)[0]}>
                          {month[Object.keys(month)[0]]}
                        </td>
                      );
                    })}
                    <td>{customer.total}</td>
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
