import React from "react";
import { Button, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut, setUser } from "../../redux/features/auth/authSlice";

const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "dashboard",
//     label: <NavLink to={`/admin/dashboard`}>Dashboard</NavLink>,
//   },
//   {
//     key: "dsf4ads546",
//     label: "Profile",
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to={`/admin/create-admin`}>Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to={`/admin/create-faculty`}>Create Faculty</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to={`/admin/create-student`}>Create Student</NavLink>,
//       },
//     ],
//   },
// ];

export const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
