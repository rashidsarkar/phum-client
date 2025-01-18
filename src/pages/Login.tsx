import { Button } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHFroom from "../components/form/PHFroom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation();

  // console.log("error==> ", error);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });
  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    // const toastID = toast.loading("Logging In");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   // console.log("userdataToken", user);
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Login Success", { id: toastID, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (error) {
    //   toast.error("Invalid Credentials", { id: toastID, duration: 2000 });
    // }
  };
  return (
    <PHFroom onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHFroom>
  );
}
