import PHFroom from "../../../components/form/PHFroom";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDatePicker";

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

export default function SemesterRegistration() {
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);
  const academicSemesterOptions = academicSemester?.data?.map((item) => {
    return {
      value: item._id,
      label: `${item.name} ${item.year}`,
    };
  });
  console.log(academicSemester);
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    // let toastID = toast.loading("Creating Academic Semester");

    const semesterData = {
      ...data,
    };
    console.log(semesterData);
    // try {
    //   const res = (await addAcademicSemester(semesterData)) as TResponse;
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastID });
    //   } else {
    //     toast.success("Academic Semester Create Successfully", { id: toastID });
    //   }
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Error Creating Academic Semester", { id: toastID });
    // }
  };

  return (
    <Flex justify="center" align={"center"}>
      <Col span={6}>
        <PHFroom onSubmit={onSubmit}>
          <PHSelect
            label={"Academic Semester"}
            name={"academicSemester"}
            options={academicSemesterOptions}
          />
          <PHSelect
            label={"Status"}
            name={"status"}
            options={semesterStatusOptions}
          />

          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
