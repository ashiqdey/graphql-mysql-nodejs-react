import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "./graphql/Mutations";

function UpdatePassword() {
  const [updatePassword, { error, loading }] = useMutation(UPDATE_PASSWORD);

  const [data, setdata] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const onChange = (e: any, key: string) => {
    setdata((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onUpdatePassword = () => {
    updatePassword({
      variables: { ...data },
    });
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Email"
        value={data.email}
        onChange={(e) => onChange(e, "email")}
      />
      <input
        type="text"
        placeholder="Old Password"
        value={data.oldPassword}
        onChange={(e) => onChange(e, "oldPassword")}
      />
      <input
        type="text"
        placeholder="New Password"
        value={data.newPassword}
        onChange={(e) => onChange(e, "newPassword")}
      />

      {error && <>{error.message}</>}
      <button
        className="btn w-100"
        onClick={onUpdatePassword}
        disabled={loading}
      >
        {loading ? "Loading..." : "Update password"}
      </button>
    </div>
  );
}

export default UpdatePassword;
