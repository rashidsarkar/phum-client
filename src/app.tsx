import { MainLayout } from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

export function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}
