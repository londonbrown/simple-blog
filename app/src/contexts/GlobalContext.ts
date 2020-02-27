import React, { Component } from "react";
import APIHTTPClient from "../clients/APIHTTPClient";

const ClientContext = React.createContext<{}>({
  client: undefined
});
export default ClientContext;
