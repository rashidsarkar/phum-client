import { useState } from "react";
import { Button, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import { TQueryParam } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../types/userManagement.type";

export type TTableData = Pick<TStudent, "name" | "id">;

export default function StudentData() {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(2);
  // const { data: semesterData } = useGetAllSemestersQuery([
  //   { name: "year", value: "2025" },
  // ]);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 1 },
    { name: "page", value: page },
    { name: "sort", value: "-id" },
    ...params,
  ]);
  // console.log(semesterData);
  const tableData = studentData?.data?.map(({ _id, fullName, id }) => {
    return {
      key: _id,
      name: fullName,
      id,
    };
  });
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: "Roll No",
      key: "id",
      dataIndex: "id",
    },

    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log({ filters, extra });
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) => {
        return queryParams.push({ name: "name", value: item });
      });
      filters.year?.forEach((item) => {
        return queryParams.push({ name: "year", value: item });
      });
      setParams(queryParams);
    }
  };
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      <Table<TTableData>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        loading={isFetching}
      />
    </div>
  );
}
