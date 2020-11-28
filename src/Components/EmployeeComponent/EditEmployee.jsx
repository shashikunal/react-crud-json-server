import React, { useState, useEffect } from "react";
import { withRouter, Link, useParams } from "react-router-dom";

import axios from "axios";

const EditEmployee = ({ history }) => {
  let { id } = useParams();
  let [employee, setEmployee] = useState({
    emp_name: "",
    emp_email: "",
    emp_designation: "",
    emp_location: "",
    emp_address: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then(result => {
        console.log(result);
        setEmployee({
          id: result.data.id,
          emp_name: result.data.emp_name,
          emp_email: result.data.emp_email,
          emp_designation: result.data.emp_designation,
          emp_location: result.data.emp_location,
          emp_address: result.data.emp_address,
        });
      })
      .catch(err => console.log(err));
    return () => {};
  }, [id]);

  let handleChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/employees/${id}`, employee)
        .then(_ => {
          history.push("/all-emp");
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  let {
    emp_name,
    emp_email,
    emp_designation,
    emp_location,
    emp_address,
  } = employee;
  return (
    <div>
      <section className="card my-4">
        <article className="card-body">
          <h3 className="display-6 font-weight-bold text-uppercase text-success border-bottom pb-2 mb-2">
            Update Employee
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="name">Employee name</label>
                <input
                  type="text"
                  className="form-control"
                  name="emp_name"
                  value={emp_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="emp_email">Employee Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="emp_email"
                  value={emp_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="emp_designation">Employee designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="emp_designation"
                  value={emp_designation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="emp_location">Employee Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="emp_location"
                  value={emp_location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="emp_address">Employee Address</label>
                <textarea
                  name="emp_address"
                  id="emp_address"
                  cols="30"
                  rows="10"
                  value={emp_address}
                  onChange={handleChange}
                  className="form-control"
                ></textarea>
              </div>
              <div className="col-md-3">
                <button className="btn btn-success my-2">
                  Update Employee
                </button>
              </div>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
};

export default withRouter(EditEmployee);
