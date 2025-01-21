import React from "react";
import PHFroom from "../../../components/form/PHFroom";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};
//NOTE - this is for dev
const studentDefaultValues = {
  password: "student123",

  name: {
    firstName: "I am ",
    middleName: "Student",
    lastName: "Number 1",
  },
  gender: "male",

  email: "student2@gmail.com",
  contactNo: "1235678",
  emergencyContactNo: "987-654-3210",
  bloogGroup: "A+",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",
  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666",
  },
  localGuardian: {
    name: "Alice Johnson",
    occupation: "Doctor",
    contactNo: "777-888-9999",
    address: "789 Pine St, Villageton",
  },
  admissionSemester: "65b0104110b74fcbd7a25d92",
  academicDepartment: "65b00fb010b74fcbd7a25d8e",
};

export default function CreateStudent() {
  const { data: semesterData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);

  const semesterOptions = semesterData?.data?.map((item) => {
    return {
      value: item._id,
      label: `${item.name} ${item.year}`,
    };
  });
  console.log(semesterData);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(data));
    // console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHFroom onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHSelect label="Gender" name="gender" options={genderOptions} />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHDatePicker name="dateOfBirth" label="Date Of Birth" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHSelect
                label="Blood Group"
                name="bloogGroup"
                options={bloodGroupOptions}
              />
            </Col>
            <Divider>Contact Info.</Divider>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="contactNo" label="Contact No" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency ContactNo"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
            <Divider>Guardian Info.</Divider>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact Number"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact Number"
              />
            </Col>

            <Divider>Local Guardian Info.</Divider>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="localGuardian.contactNo"
                label="ContactNo"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="localGuardian.address"
                label="Address"
              />
            </Col>
          </Row>
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHSelect
                name="admissionSemester"
                disabled={sIsLoading}
                label="Admission Semester"
                options={semesterOptions}
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              {/* <PHSelect
                  name="academicDepartment"
                  label="Academic Department"
                  options={}
                /> */}
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHFroom>
      </Col>
    </Row>
  );
}
