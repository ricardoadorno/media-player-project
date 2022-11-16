import React from "react";
import { useState } from "react";
import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { GithubContextType } from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";
import { AlertContextType } from "../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers, clearUsers } = useContext(
    GithubContext
  ) as GithubContextType;

  const { setAlert } = useContext(AlertContext) as AlertContextType;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      searchUsers(text);
      setText("");
    } else {
      setAlert("Please enter something", "error");
    }
  };

  const handleClear = () => {
    clearUsers();
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              type="submit"
            >
              Go
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
