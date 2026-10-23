import { api } from "./api";

export const coursesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "courses",
      providesTags: ["Courses"],
    }),
    addCourses: builder.mutation({
      query: (newCourse) => ({
        url: "courses",
        method: "POST",
        body: newCourse,
      }),
      invalidatesTags: ["Courses"],
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `courses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useAddCoursesMutation,
  useDeleteCourseMutation,
} = coursesApi;
