import React from "react";
import PHFroom from "../../../components/form/PHFroom";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align={"center"}>
      <Col span={6}>
        <PHFroom onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name" />
          <PHInput type="text" name="year" label="Year" />
          <PHSelect label={"Name"} />
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
