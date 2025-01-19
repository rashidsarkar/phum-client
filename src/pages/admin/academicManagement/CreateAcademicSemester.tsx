import PHFroom from "../../../components/form/PHFroom";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();
const yearOption = [0, 1, 2, 3, 4].map((num) => ({
  value: String(currentYear + num),
  label: String(currentYear + num),
}));

export default function CreateAcademicSemester() {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data?.name) - 1].label;
    const semesterData = {
      name: name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align={"center"}>
      <Col span={6}>
        <PHFroom onSubmit={onSubmit}>
          <PHSelect label={"Name"} name={"name"} options={nameOptions} />
          <PHSelect label={"Year"} name={"year"} options={yearOption} />
          <PHSelect
            label={"Start Month"}
            name={"startMonth"}
            options={nameOptions}
          />
          <PHSelect
            label={"End Month"}
            name={"endMonth"}
            options={nameOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
