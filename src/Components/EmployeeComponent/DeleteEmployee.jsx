import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DeleteEmployee = ({ history }) => {
  let { id } = useParams();
  let [removeEmp, setRemoveEmp] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then(result => {
        setRemoveEmp(result.data);
      })
      .catch(err => console.log(err));
    return () => {
      //clean up
    };
  }, [id]);

  let handleRemoveEmp = () => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then(_ => {
        history.push("/all-emp");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section>
        <h2 className="text-danger">
          Delete Employee <strong>{removeEmp?.emp_name}</strong>
        </h2>
        <div className="btn-group">
          <button className="btn btn-danger" onClick={handleRemoveEmp}>
            <i className="fas fa-trash m-2"></i>
            delete
          </button>
          <Link to="/all-emp" className="btn btn-dark">
            cancel
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DeleteEmployee;
