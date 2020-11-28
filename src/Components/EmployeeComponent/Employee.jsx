import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Employee = () => {
  let { id } = useParams();
  let [emp, setEmp] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then(result => {
        setEmp(result.data);
      })
      .catch(err => console.log(err));
    return () => {};
  }, [id]);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{emp?.emp_name}</h5>
          <h6 className="card-title">{emp?.emp_email}</h6>
          <h6 className="card-title">
            <i className="fas fa-location-arrow"></i>
            {emp?.emp_location}
          </h6>
          <p className="card-text">{emp?.emp_address}</p>
          <Link to="/all-emp" className="btn btn-primary">
            go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Employee;
