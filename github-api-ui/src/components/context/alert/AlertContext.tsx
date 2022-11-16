import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

export type AlertContextType = {
  alert: any;
  setAlert: (msg: string, type: string) => void;
};

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider = ({ children }: any) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // * Set Alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 5000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
