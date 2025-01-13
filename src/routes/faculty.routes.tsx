import CreateCourse from "../pages/faculty/CreateCourse";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create course",
        path: "Create-course",
        element: <CreateCourse />,
      },
    ],
  },
];
