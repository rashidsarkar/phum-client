import { TResponseRedux } from "../../../types";
import { TAcademecSemester } from "../../../types/academicManagment.type";
import { baseApi } from "../../api/baseApi";

const academicManagenmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "academic-semesters",
        method: "GET",
      }),
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
