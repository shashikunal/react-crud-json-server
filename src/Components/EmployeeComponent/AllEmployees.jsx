import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllEmployees = () => {
  let [Employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then(emp => {
        console.log(emp.data);
        setEmployees(emp.data);
      })
      .catch(err => console.log(err));
  }, [Employees]);

  let employeeRendered = Employees.map(emp => (
    <tr key={emp.id}>
      <td>{emp.id}</td>
      <td>{emp.emp_name}</td>
      <td>{emp.emp_email}</td>
      <td>{emp.emp_designation}</td>
      <td>{emp.emp_location}</td>
      <td>{emp.emp_address}</td>
      <td>
        <div className="btn-group">
          <Link className="btn btn-dark btn-sm" to={`/edit-emp/${emp.id}`}>
            edit
          </Link>
          <Link
            className="btn btn-success btn-sm"
            to={`/emp-details/${emp.id}`}
          >
            details
          </Link>
          <Link className="btn btn-danger btn-sm" to={`/delete-emp/${emp.id}`}>
            remove
          </Link>
        </div>
      </td>
    </tr>
  ));
  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Emil</th>
            <th>designation</th>
            <th>location</th>
            <th>address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{employeeRendered}</tbody>
      </table>
    </div>
  );
};

export default AllEmployees;
