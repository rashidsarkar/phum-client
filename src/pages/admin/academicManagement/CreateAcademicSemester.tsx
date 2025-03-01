import PHFroom from "../../../components/form/PHFroom";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

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
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    let toastID = toast.loading("Creating Academic Semester");
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name: name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastID });
      } else {
        toast.success("Academic Semester Create Successfully", { id: toastID });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Error Creating Academic Semester", { id: toastID });
    }
  };

  return (
    <Flex justify="center" align={"center"}>
      <Col span={6}>
        <PHFroom
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect label={"Name"} name={"name"} options={nameOptions} />
          <PHSelect label={"Year"} name={"year"} options={yearOption} />
          <PHSelect
            label={"Start Month"}
            name={"startMonth"}
            options={monthOptions}
          />
          <PHSelect
            label={"End Month"}
            name={"endMonth"}
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
