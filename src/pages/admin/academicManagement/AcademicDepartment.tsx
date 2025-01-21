import React from "react";
import { Button, Col, Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicFaculty.api";
import { useGetAllAcademicDepertmentQuery } from "../../../redux/features/admin/academicDepertment.api";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
console.log("sda");
export default function AcademicDepartment() {
  const { data: depertmentData, isFetching } =
    useGetAllAcademicDepertmentQuery(undefined);
  console.log(depertmentData);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      width: "35%", // Set width to 35%
    },
    {
      title: "Academic Faculty",
      dataIndex: "faculty",
      width: "35%", // Set width to 35%
    },
    {
      title: "Action",
      key: "x",
      align: "right",
      width: "20%", // Set width to 20%
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const tableData = depertmentData?.data?.map(
    ({ _id, name, academicFaculty }) => {
      return {
        key: _id,
        name: name,
        faculty: academicFaculty.name,
      };
    }
  );
  console.log(tableData);

  return (
    <>
      <div>
        <h1
          className="stylish-font"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          All Academic Department
        </h1>
        <Flex align="center" justify="center">
          <Col span={12}>
            <Table<DataType>
              columns={columns}
              dataSource={tableData}
              loading={isFetching}
              onChange={onChange}
            />
          </Col>
        </Flex>
      </div>
    </>
  );
}
