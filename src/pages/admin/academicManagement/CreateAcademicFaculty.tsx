import React from "react";
import PHFroom from "../../../components/form/PHFroom";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicFaculty.api";
import { TError, TResponse } from "../../../types";

export default function CreateAcademicFaculty() {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    const toastID = toast.loading(" Creating Academic Faculty...");
    console.log(data);
    const academicFaculty = {
      name: data.AcademicFacultyName,
    };
    try {
      const res = (await addAcademicFaculty(academicFaculty)) as TResponse;

      if (res.error) {
        toast.error(res.error.data?.message, { id: toastID });
      } else {
        toast.success(res.data.message, { id: toastID });
      }

      console.log(res);
    } catch (error) {
      toast.error("Error Creating Academic Faculty", { id: toastID });
    }
  };
  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PHFroom onSubmit={onSubmit}>
          <PHInput
            label="Academic Faculty"
            name="AcademicFacultyName"
            type="text"
          />
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Flex>
  );
}
