const getNextState = (current) => {
  switch (current) {
    case "unselected":
      return "selected";
    case "selected":
      return "temporaryReservation";
    case "temporaryReservation":
      return "reserved";
    default:
      return current;
  }
};

export const initialState = {
  chairs: [],
  errorMessage: null,
  loading: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        ...state,
        chairs: action.chairsInfo,
        loading: false,
      };
    case "fetch_failure":
      return {
        ...state,
        errorMessage: action.error,
        loading: false,
      };
    case "toggle_chair":
      return {
        ...state,
        chairs: state.chairs.map((chair) =>
          chair.number === action.number ?
            { ...chair, state: getNextState(chair.state) }
          : chair,
        ),
      };
    default:
      return state;
  }
};
