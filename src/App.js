import Content from "./components/content";
import Header from "./components/header";
import Aside from "./components/aside";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import UserContextProvider from "./context/userContext";

const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <Router>
      <div>
        <Route path="/login">
          {isAuthenticated ? (
            <Redirect to="/" />
          ) : (
            <UserContextProvider>
              <Login />
            </UserContextProvider>
          )}
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        {isAuthenticated && (
          <>
            <Header />
            <Aside />
            <Content />
            <div className="overlay btn-toggle-menu" />
          </>
        )}

        {!isAuthenticated && <Redirect to="/login" />}
      </div>
    </Router>
  );
};

export default App;
