import React from "react";
import { useFormContext } from "react-hook-form";

export default function PHInput({ type, name, label }) {
  const { register } = useFormContext();

  return (
    <>
      {label ? label : null}
      <input type={type} id={name} {...register(name)} />
    </>
  );
}
