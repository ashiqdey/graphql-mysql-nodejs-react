/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_USERS } from "./graphql/Queries";
import { DELETE_USER } from "./graphql/Mutations";

function AllUsers() {
  const [users, setUsers] = useState([]);

  const { data: userData } = useQuery(GET_ALL_USERS);
  const [deleteUser, { data: deleted, error }] = useMutation(DELETE_USER);

  const onDeleteUser = (id: string) => {
    deleteUser({ variables: { id } });
  };

  useEffect(() => {
    console.log("userData", userData);
    setUsers(userData?.getAllUsers || []);
  }, [userData]);

  useEffect(() => {
    if (deleted?.deleteUser) {
      console.log("deleted", deleted);
      const id = deleted.deleteUser.id;
      const temp = users.filter((e: any) => e.id !== id);
      setUsers(temp);
    }
  }, [deleted]);

  return (
    <div className="form">
      {users.map(({ id, name, email, password }: any) => {
        return (
          <div key={id}>
            ID : {id}
            <br />
            Name : {name}
            <br />
            Email : {email}
            <br />
            Password : {password}
            <br />
            <button onClick={() => onDeleteUser(id)}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AllUsers;
