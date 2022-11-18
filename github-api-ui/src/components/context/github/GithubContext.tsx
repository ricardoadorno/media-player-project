import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

// TODO Tirar o any

export type GithubContextType = {
  users: any[];
  user: {
    login: string;
  };
  loading: boolean;
  searchUsers: (text: string) => void;
  clearUsers: () => void;
  getUser: (username: string) => void;
};

const GithubContext = createContext<GithubContextType | null>(null);

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

export const GithubProvider = ({ children }: any) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // * FETCH USERS
  const searchUsers = async (text: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await res.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // * Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // * Clear users
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  // * Get single user
  const getUser = async (login: string) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
