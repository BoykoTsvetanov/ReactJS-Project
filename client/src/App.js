import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { logout } from "./models/user";
import { AuthProvider } from "./config/auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route
            path="/logout"
            render={(props) => {
              localStorage.clear();
              logout();
            }}
          />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
