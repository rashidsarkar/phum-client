import React from "react";
import PHFroom from "../../../components/form/PHFroom";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicFaculty.api";
import { Button, Col, Flex } from "antd";
import { useAddAcademicDepertmentMutation } from "../../../redux/features/admin/academicDepertment.api";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";

export default function CreateAcademicDepartment() {
  const { data: facultyData, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);
  const [addAcademicDepertment] = useAddAcademicDepertmentMutation();
  console.log(facultyData);
  if (isFetching) {
    return <div>Loading...</div>;
  }

  const facultyOptions = facultyData.data?.map((faculty) => {
    return {
      label: faculty.name,
      value: faculty._id,
    };
  });
  console.log(facultyOptions);
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    const toastID = toast.loading("Creating Academic Department...");
    console.log(data);
    const departmentData = {
      name: data.AcademicDepertmentName,
      academicFaculty: data.academicFaculty,
    };
    try {
      const res = await addAcademicDepertment(departmentData);
      if (res.error) {
        toast.error(res.error.data?.message, { id: toastID });
      } else {
        toast.success(res.data?.message, { id: toastID });
      }
      console.log(res);
    } catch (error) {}
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHFroom onSubmit={onSubmit}>
          <PHInput
            label="Academic Depertment"
            name="AcademicDepertmentName"
            type="text"
          />
          <PHSelect
            label="select a faculty"
            name="academicFaculty"
            options={facultyOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
