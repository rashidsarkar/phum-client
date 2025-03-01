import OfferedCourse from "../pages/student/OfferedCourse.";
import StudentDashboard from "../pages/student/StudentDashboard";
export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferedCourse />,
      },
    ],
  },
];
