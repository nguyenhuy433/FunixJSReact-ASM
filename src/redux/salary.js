import * as ActionTypes from "./ActionTypes";

export const Salary = (
  state = {
    isLoading: true,
    errMess: null,
    salary: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_SALARY:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        salary: action.payload,
      };

    case ActionTypes.SALARY_LOADING:
      return { ...state, isLoading: true, errMess: null, salary: [] };

    case ActionTypes.SALARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        salary: [],
      };
    default:
      return state;
  }
};
