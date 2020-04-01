import React from "react";
import APIHTTPClient from "../clients/APIHTTPClient";
import { UserData } from "../types/User";
import * as quill from "quill";

export type ModalState = {
  enabled: boolean;
  title?: JSX.Element;
  body?: string | quill.DeltaStatic;
  footer?: JSX.Element;
};

type GlobalContext = {
  client?: APIHTTPClient;
  defaultUser?: UserData;
  updateModal?: (modal: ModalState) => void;
};

const ClientContext = React.createContext<GlobalContext>({
  client: undefined,
  defaultUser: undefined,
  updateModal: undefined
});
export default ClientContext;
