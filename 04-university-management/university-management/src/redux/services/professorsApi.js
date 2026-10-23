import { api } from "./api";

export const professorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfessors: builder.query({
      query: () => "professors",
      providesTags: ["Professors"],
    }),
    addProfessor: builder.mutation({
      query: (newProfessor) => ({
        url: "professors",
        method: "POST",
        body: newProfessor,
      }),
      invalidatesTags: ["Professors"],
    }),
    deleteProfessor: builder.mutation({
      query: (id) => ({
        url: `professors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Professors"],
    }),
  }),
});

export const {
  useGetProfessorsQuery,
  useAddProfessorMutation,
  useDeleteProfessorMutation,
} = professorsApi;
