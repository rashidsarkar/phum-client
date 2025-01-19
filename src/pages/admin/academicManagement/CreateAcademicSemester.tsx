import PHFroom from "../../../components/form/PHFroom";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "Autumn",
    label: "Autumn",
  },
  {
    value: "Summer",
    label: "Summer",
  },
  {
    value: "Fall",
    label: "Fall",
  },
];

export default function CreateAcademicSemester() {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    const semesterData = {
      name: "some",
      code: "someCoode",
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align={"center"}>
      <Col span={6}>
        <PHFroom onSubmit={onSubmit}>
          <PHSelect label={"Name"} name={"name"} options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
