import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing.js";
import StudentReg from "./StudentPages/StudentRegistration.js";
import OrganizationReg from "./OrganizationPages/OrganizationRegistration.js";
import Hub from "./HubPages/Hub"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={() => <Landing />} />
					<Route path="/student/reg" exact component={() => <StudentReg />} />
					<Route
						path="/organization/reg"
						exact
						component={() => <OrganizationReg />}
					/>
					<Route 
						path="/hub" 
						exact 
						component={() => <Hub />}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
