import GithubContext from "./context/github/GithubContext";
import { GithubContextType } from "./context/github/GithubContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const { getUser, user, loading } = useContext(
    GithubContext
  ) as GithubContextType;

  const params = useParams();

  useEffect(() => {
    getUser(params.login as string);
  }, []);

  return <div>{user.login}</div>;
}

export default UserPage;
