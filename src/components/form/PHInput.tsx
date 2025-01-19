import { Form, Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

export default function PHInput({ type, name, label }: TInputProps) {
  //   const { register } = useFormContext();

  return (
    // <div style={{ marginBottom: "20px" }}>
    //   {/* {label ? label : null} */}
    //  {label && <label>{label}</label>} {/* Render the label only if it's provided */}
    //   <Controller
    //     name={name}
    //     render={({ field }) =>

    //       <Form.Item label={label}>

    //     <Input {...field} type={type} id={name} />}
    //       </Form.Item>
    //   />
    // </div>

    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
}
