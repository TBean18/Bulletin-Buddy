import logo from "./logo.svg";
import "./App.css";
import PostCard from "./PostTools/PostCard";
import HubPage from "./HubPages/Hub.js";
import Landing from "./Landing.js";
import StudentReg from "./StudentPages/StudentRegistration.js";
import OrganizationReg from "./OrganizationPages/OrganizationRegistration.js";
import Login from "./OrganizationPages/Login.js";
import Hub from "./HubPages/Hub";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalProvider>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={() => <Landing />} />
              <Route
                path="/student/reg"
                exact
                component={() => <StudentReg />}
              />
              <Route
                path="/organization/registration"
                exact
                component={() => <OrganizationReg />}
              />
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/hub" exact component={() => <Hub />} />
              <Route
                path="/newPost"
                exact
                component={() => <PostCard />}
              ></Route>
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    </QueryClientProvider>
  );
}

export default App;
