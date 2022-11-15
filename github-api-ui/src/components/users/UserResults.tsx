import React from "react";
import { useState, useEffect } from "react";
import UserItem from "./UserItem";
import UserSearch from "./UserSearch";

// ! Tirar o any

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch users
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
      },
    });

    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <>
        <UserSearch />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user: any) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

export default UserResults;
