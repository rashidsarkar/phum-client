import React from "react";
import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

export default function PHSelect({ label, name, options }: TPHSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <Form.Item label={label}>
            <Select
              style={{ width: "100%" }}
              {...field}
              options={options}
              size="large"
            />
          </Form.Item>
        );
      }}
    />
  );
}
