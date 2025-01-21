import React from "react";
import { Button, Col, Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicFaculty.api";
interface DataType {
  key: React.Key;
  name: string;
}

const AcademicFaculty = () => {
  const { data: facultyData, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "London",
          value: "London",
        },
      ],
      onFilter: (value, record) => record.name.startsWith(value as string),
      filterSearch: true,
      width: "50%",
    },

    {
      title: "Action",
      key: "x",
      align: "right",
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

  // console.log(facultyData.data);
  // if (isFetching) {
  //   return <div>Loading...</div>;
  // }

  const tableData = facultyData?.data?.map(({ _id, name }) => {
    return {
      key: _id,
      name: name,
    };
  });
  console.log(tableData);
  return (
    <div>
      <h1
        className="stylish-font"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        All Academic Faculty
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
  );
};

export default AcademicFaculty;
