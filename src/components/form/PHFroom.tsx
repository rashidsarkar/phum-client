import { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFromConfig = {
  defaultValues?: Record<string, any>;
};
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFromConfig;
export default function PHFroom({
  onSubmit,
  children,
  defaultValues,
}: TFormProps) {
  const fromConfig: TFromConfig = {};
  if (defaultValues) {
    fromConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(fromConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
