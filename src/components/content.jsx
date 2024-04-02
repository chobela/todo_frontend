import Dashboard from "../pages/dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContextProvider from "../context/userContext";
import Signup from "../pages/signup";
import Login from "../pages/login";
import AddTodo from "../pages/addTodo";
import EditTodo from "../pages/editTodo";

const Content = () => {
  return (
    <main className="page-content">
      <Router>
        <UserContextProvider>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/addTodo" component={AddTodo} />
          <Route path="/editTodo" component={EditTodo} />
        </UserContextProvider>
      </Router>
    </main>
  );
};

export default Content;
