import { createContext, useEffect, useReducer } from "react";

const AppReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "SET_CANDIDATES":
      return {
        candidates: action.payload,
      };
    default:
      return { ...state };
  }
};
export const setCandidates = (candidate_data: any) => ({
  type: "SET_CANDIDATES",
  payload: candidate_data,
});
interface initial {
  candidates: any;
  dispatch: any;
}
const INITIAL_STATE: initial = {
  // candidates: JSON.parse(localStorage.getItem("candidates") ?? "{}"),
  candidates: "hello",
  dispatch: () => {},
};

export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  // useEffect(() => {
  //   localStorage.setItem("candidates", JSON.stringify(state.candidates));
  // }, [state.candidates]);
  return (
    <AppContext.Provider
      value={{
        candidates: state.candidates,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
