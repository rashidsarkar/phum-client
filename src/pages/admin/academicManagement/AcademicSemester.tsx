import React from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

export default function AcademicSemester() {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return <div>AcademicSemester</div>;
}
