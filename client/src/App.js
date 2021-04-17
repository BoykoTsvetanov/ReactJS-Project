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
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import AuthContext from "./context/Auth";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);
  const authInfo = {
    isAuth: Boolean(user),
    username: user?.email,
  };
  return (
    <div className="App">
      <AuthContext.Provider value={authInfo}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route
            path="/logout"
            render={({ history }) => {
              localStorage.clear();
              logout();
              history.push("/");
            }}
          />
          <Route path="/destinations" component={AddDestination} />
          <Route path="/details/:destId" component={Details} />
          <Route path="/edit/:destId" component={EditDestinations} />
        </Switch>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
