import React, { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  console.log(token);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}
