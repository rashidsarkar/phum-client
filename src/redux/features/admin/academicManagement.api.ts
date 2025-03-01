import { TResponseRedux } from "../../../types";
import { TAcademecSemester } from "../../../types/academicManagment.type";
import { baseApi } from "../../api/baseApi";

const academicManagenmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          // params.append(args[0].name, args[0].value);
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademecSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } =
  academicManagenmentApi;
