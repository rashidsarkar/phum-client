import PHFroom from "../../../components/form/PHFroom";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { Button, Col, Flex, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types";

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
  const [addRegisteredSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);
  const academicSemesterOptions = academicSemester?.data?.map((item) => {
    return {
      value: item._id,
      label: `${item.name} ${item.year}`,
    };
  });
  // console.log(academicSemester);
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    let toastID = toast.loading("Creating Academic Semester");
    // console.log(semesterData);
    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);
    try {
      const res = (await addRegisteredSemester(semesterData)) as TResponse<any>;

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
      <Col span={24}>
        <PHFroom onSubmit={onSubmit}>
          <Row gutter={6}>
            <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
              <PHSelect
                label={"Academic Semester"}
                name={"academicSemester"}
                options={academicSemesterOptions}
              />
            </Col>
            <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
              <PHSelect
                label={"Status"}
                name={"status"}
                options={semesterStatusOptions}
              />
            </Col>
            <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
              <PHDatePicker name="startDate" label="Start Date" />
            </Col>
            <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
              <PHDatePicker name="endDate" label="End Date" />
            </Col>
            <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
              <PHInput type="text" name="minCredit" label="Min Credit" />
            </Col>
            <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
              <PHInput type="text" name="maxCredit" label="Max Credit" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
