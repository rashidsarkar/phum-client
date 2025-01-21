import React from "react";
import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

export default function PHSelect({
  label,
  name,
  options,
  disabled,
}: TPHSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <Form.Item label={label}>
            <Select
              style={{ width: "100%" }}
              {...field}
              options={options}
              size="large"
              disabled={disabled}
            />

            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        );
      }}
    />
  );
}
