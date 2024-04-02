import Dashboard from "../pages/dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContextProvider from "../context/userContext";
import Signup from "../pages/signup";
import Login from "../pages/login";

const Content = () => {
  return (
    <main className="page-content">
      <Router>
        <UserContextProvider>
          <Route path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </UserContextProvider>
      </Router>
    </main>
  );
};

export default Content;
