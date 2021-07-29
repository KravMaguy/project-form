import { useState, useEffect } from "react";
import axios from "axios";

const BaseUrl = "http://localhost:3001/";
const customers = "customers";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    axios.get(`${BaseUrl}${customers}`).then(({ data }) => console.log(data));
  }, []);

  return <div>I will be the customer table</div>;
};

export default CustomerTable;
