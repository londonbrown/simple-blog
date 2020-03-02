import React from "react";
import APIHTTPClient from "../clients/APIHTTPClient";

type GlobalContext = {
  client: APIHTTPClient | undefined;
};

const ClientContext = React.createContext<GlobalContext>({
  client: undefined
});
export default ClientContext;
