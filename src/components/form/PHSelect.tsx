import React from "react";
import { Form, Select, Space } from "antd";

export default function PHSelect({ label }) {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form.Item label={label}>
      <Select
        style={{ width: "100%" }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Form.Item>
  );
}
