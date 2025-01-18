import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function PHInput({ type, name, label }) {
  //   const { register } = useFormContext();

  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
}
