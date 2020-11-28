import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AllEmployees from "./Components/EmployeeComponent/AllEmployees";
import CreateEmployee from "./Components/EmployeeComponent/CreateEmployee";
import DeleteEmployee from "./Components/EmployeeComponent/DeleteEmployee";
import EditEmployee from "./Components/EmployeeComponent/EditEmployee";
import Employee from "./Components/EmployeeComponent/Employee";
import Navbar from "./Components/HeaderComponent/Navbar";

const App = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main className="container my-2">
        <Switch>
          <Route path="/all-emp" exact component={AllEmployees} />
          <Route
            path="/create-emp"
            exact
            component={props => <CreateEmployee {...props} />}
          />
          <Route path="/emp-details/:id" exact component={Employee} />
          <Route
            path="/edit-emp/:id"
            exact
            component={() => <EditEmployee />}
          />
          <Route path="/delete-emp/:id" exact component={DeleteEmployee} />
        </Switch>
      </main>
    </Fragment>
  );
};

export default App;
