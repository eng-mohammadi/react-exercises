import { api } from "./api";

export const selectUnitsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSelectUnits: builder.query({
      query: () => "selectUnits",
      providesTags: ["SelectUnits"],
    }),
    addSelectUnits: builder.mutation({
      query: (newSelectUnitsData) => ({
        url: "selectUnits",
        method: "POST",
        body: newSelectUnitsData,
      }),
      invalidatesTags: ["SelectUnits"],
    }),
    deleteSelectUnits: builder.mutation({
      query: (id) => ({
        url: `selectUnits/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SelectUnits"],
    }),
  }),
});

export const {
  useGetSelectUnitsQuery,
  useAddSelectUnitsMutation,
  useDeleteSelectUnitsMutation,
} = selectUnitsApi;
