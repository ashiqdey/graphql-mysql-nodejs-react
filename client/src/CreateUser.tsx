import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./graphql/Mutations";

function App() {
  const [createUser, { error, loading }] = useMutation(CREATE_USER);

  const [data, setdata] = useState({
    name: "",
    password: "",
    email: "",
  });

  const onChange = (e: any, key: string) => {
    setdata((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onCreateUser = () => {
    createUser({
      variables: { ...data },
    });
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => onChange(e, "name")}
      />
      <input
        type="text"
        placeholder="Email"
        value={data.email}
        onChange={(e) => onChange(e, "email")}
      />
      <input
        type="text"
        placeholder="password"
        value={data.password}
        onChange={(e) => onChange(e, "password")}
      />

      <button className="btn w-100" onClick={onCreateUser} disabled={loading}>
        {loading ? "Creating..." : "Create user"}
      </button>
    </div>
  );
}

export default App;
