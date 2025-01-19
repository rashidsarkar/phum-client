import React from "react";
import PHFroom from "../../../components/form/PHFroom";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { Button } from "antd";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHFroom onSubmit={onSubmit}>
      <PHInput type="text" name="name" />
      <Button htmlType="submit">Submit</Button>
    </PHFroom>
  );
}
