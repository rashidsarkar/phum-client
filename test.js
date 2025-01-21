export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN DASHBORD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty />",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent />",
      },
    ],
  },
];
console.log("module 30 start ");
// {
//   key: "dashboard",
//   label: <NavLink to={`/admin/dashboard`}>Dashboard</NavLink>,
// },

// key: "User Management",
// label: "User Management",
// children: [
//   {
//     key: "Create Admin",
//     label: <NavLink to={`/admin/create-admin`}>Create Admin</NavLink>,
//   },

const newArr = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
      children: item.children.map((child) => {
        return {
          key: child.name,
          label: "NAVLINK",
        };
      }),
    });
  }
  return acc;
}, []);
console.log(newArr);
// const newArr = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
