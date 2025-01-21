import { baseApi } from "../../api/baseApi";

const academicDepertmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAcademicDepertment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["department"],
    }),
    getAllAcademicDepertment: builder.query({
      query: () => ({
        url: "/academic-departments",
        method: "GET",
      }),
      providesTags: ["department"],
    }),
  }),
});

export const {
  useAddAcademicDepertmentMutation,
  useGetAllAcademicDepertmentQuery,
} = academicDepertmentApi;
