import { Form } from "antd";
import { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFromConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFromConfig;
export default function PHFroom({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) {
  const fromConfig: TFromConfig = {};
  if (defaultValues) {
    fromConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    fromConfig["resolver"] = resolver;
  }

  const methods = useForm(fromConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
}
