import { DatePicker, Form, Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
type TDatePickerProps = {
  name: string;
  label?: string;
};

export default function PHDatePicker({ name, label }: TDatePickerProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
}
