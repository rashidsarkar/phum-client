import { Table, TableColumnsType, TableProps } from "antd";
import React from "react";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicFaculty.api";

interface DataType {
  name: string;
  age: number;
  address: string;
}

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export default function AcademicFaculty() {
  const { data: facultyData, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);
  const tableData = facultyData.data.map(({ _id, name }) => {
    return {
      _id,
      name,
    };
  });
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
      ],
    },
  ];

  console.log(data);
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        loading={isFetching}
      />
    </div>
  );
}
