import { api } from "./api";

export const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "students",
      providesTags: ["Students"],
    }),
    addStudent: builder.mutation({
      query: (newStudent) => ({
        url: "students",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["Students"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;
