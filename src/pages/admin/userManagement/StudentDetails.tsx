import React from "react";
import { useParams } from "react-router-dom";

export default function StudentDetails() {
  const { studentId } = useParams();

  return <div> student details of {studentId}</div>;
}
