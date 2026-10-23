// RTK Query errors are either { status, data } / { status, error } or a serialized error with "message"
export const getErrorMessage = (error) => {
  if (!error) return "";
  if (error.error) return error.error;
  if (error.data) {
    return typeof error.data === "string" ?
        error.data
      : JSON.stringify(error.data);
  }
  if (error.message) return error.message;
  return `status ${error.status}`;
};
