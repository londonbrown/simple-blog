import React from "react";
import APIHTTPClient from "../clients/APIHTTPClient";

export type ModalState = {
  enabled: boolean;
  title?: string;
  body?: JSX.Element;
  footer?: JSX.Element;
};

type GlobalContext = {
  client: APIHTTPClient | undefined;
  updateModal: undefined | ((modal: ModalState) => void);
};

const ClientContext = React.createContext<GlobalContext>({
  client: undefined,
  updateModal: undefined
});
export default ClientContext;
