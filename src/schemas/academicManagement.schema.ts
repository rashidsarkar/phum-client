import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({
    required_error: "this field is required",
  }),
  year: z.string({
    required_error: "this field is required",
  }),
  startMonth: z.string({
    required_error: "this field is required",
  }),
  endMonth: z.string({
    required_error: "this field is required",
  }),
});
