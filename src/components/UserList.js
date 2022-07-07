import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/Users/UserContext";

export default function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((users) => (
        <a
          className="list-group-item list-group-item-action d-flex flex-row"
          href="#!"
          key={users.id}
          onClick={() => getProfile(users.id)}
        >
          <p className="mt-4 ml-4 pl-5">
            {users.first_name} {users.last_name}
          </p>
          <img
            src={users.avatar}
            alt=""
            className="img-fluid mr-5 border border-2 rounded-circle ms-auto"
            width="70"
          />
        </a>
      ))}
    </div>
  );
}
