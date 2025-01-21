import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["student"],
    }),
    // getAllAcademicFaculty: builder.query({
    //   query: () => {
    //     return {
    //       url: "/academic-faculties",
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["faculty"],
    // }),
  }),
});
export const { useAddStudentMutation } = userManagementApi;
