import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademecSemester } from "../../../types/academicManagment.type";

export type TTableData = Pick<
  TAcademecSemester,
  "name" | "_id" | "year" | "startMonth" | "endMonth"
>;

export default function AcademicSemester() {
  const [params, setParams] = useState([]);
  // const { data: semesterData } = useGetAllSemestersQuery([
  //   { name: "year", value: "2025" },
  // ]);
  const { data: semesterData } = useGetAllSemestersQuery(params);
  // console.log(semesterData);
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => {
      return {
        _id,
        name,
        startMonth,
        endMonth,
        year,
      };
    }
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
      ],
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
  ];

  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  // ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log({ filters, extra });
    if (extra.action === "filter") {
      const queryParams = [];
      filters.name?.forEach((item) => {
        return queryParams.push({ name: "name", value: item });
      });
      filters.year?.forEach((item) => {
        return queryParams.push({ name: "year", value: item });
      });
      setParams(queryParams);
    }
  };

  return (
    <div>
      <Table<TTableData>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
}
