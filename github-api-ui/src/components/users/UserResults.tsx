import React from "react";
import { useContext } from "react";
import UserItem from "./UserItem";
import UserSearch from "./UserSearch";
import GithubContext from "../context/github/GithubContext";
import { GithubContextType } from "../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext) as GithubContextType;

  if (!loading) {
    return (
      <>
        <UserSearch />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user: any) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

export default UserResults;
