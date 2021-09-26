import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing.js";
import StudentReg from "./StudentPages/StudentRegistration.js";
import OrganizationReg from "./OrganizationPages/OrganizationRegistration.js";
import Login from "./OrganizationPages/Login.js";
import Hub from "./HubPages/Hub";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Landing />} />
            <Route path="/student/reg" exact component={() => <StudentReg />} />
            <Route
              path="/organization/registration"
              exact
              component={() => <OrganizationReg />}
            />
            <Route
              path="/organization/login"
              exact
              component={() => <Login />}
            />
            <Route path="/hub" exact component={() => <Hub />} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
