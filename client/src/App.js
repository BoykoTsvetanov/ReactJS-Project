import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { logout } from "./models/user";
import Footer from "./components/Footer/Footer";
import AddDestination from "./components/AddDestinations/AddDestinations";
import Details from "./components/Details/Details";
import EditDestinations from "./components/EditDestinations/EditDestinations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route
          path="/logout"
          render={() => {
            localStorage.clear();
            logout();
          }}
        />
        <Route path="/destinations" component={AddDestination} />
        <Route path="/details/:destId" component={Details} />
        <Route path="/edit/:destId" component={EditDestinations} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
