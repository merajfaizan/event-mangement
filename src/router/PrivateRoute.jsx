/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const user = true;
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
