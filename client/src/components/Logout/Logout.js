import React from "react";
import { logout } from "../../models/user";

const Logout = () => {
  localStorage.clear();
  logout();
};

export default Logout;
