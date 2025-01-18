import { useForm } from "react-hook-form";

export default function PHFroom({ onSubmit, children }) {
  const { handleSubmit } = useForm();
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}
