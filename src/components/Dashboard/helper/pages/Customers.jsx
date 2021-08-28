import React from "react";

// import Table from "../components/table/Table";
import ServiceCard from "../components/service-card/ServiceCard";

// import customerList from "../assets/JsonData/customers-list.json";

// const customerTableHead = [
//   "",
//   "name",
//   "email",
//   "phone",
//   "total orders",
//   "total spend",
//   "location",
// ];

// const renderHead = (item, index) => <th key={index}>{item}</th>;

// const renderBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.id}</td>
//     <td>{item.name}</td>
//     <td>{item.email}</td>
//     <td>{item.phone}</td>
//     <td>{item.total_orders}</td>
//     <td>{item.total_spend}</td>
//     <td>{item.location}</td>
//   </tr>
// );

// Props - service_name, service_type, location, mobile, charges
const Customers = () => {
  return (
    <div>
      <h2 className="page-header">customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <ServiceCard
                service_name="Electrician"
                service_type="Repairing"
                location="Karol bagh, New Delhi"
                mobile="9938993894"
                charges="Rs. 500"
              />
              <ServiceCard
                service_name="Electrician"
                service_type="Repairing"
                location="Karol bagh, New Delhi"
                mobile="9938993894"
                charges="Rs. 500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
