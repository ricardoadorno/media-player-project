import React from "react";

function UserItem({ user }: any) {
  return (
    <div className="card shadow-md compact side bg-base-100 rounded-box">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-tile">{user.login}</h2>
          <a
            className="text-base-content text-opacity-40"
            href={`/user/${user.login}`}
          >
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
