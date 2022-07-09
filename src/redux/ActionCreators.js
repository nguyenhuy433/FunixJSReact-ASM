import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading());

  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)));
};

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const fetchDepartment = () => (dispatch) => {
  dispatch(departmentLoading());

  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((department) => dispatch(addDepartment(department)));
};

export const addDepartment = (department) => ({
  type: ActionTypes.ADD_DEPARTMENT,
  payload: department,
});

export const departmentLoading = () => ({
  type: ActionTypes.DEPARTMENT_LOADING,
});

export const departmentFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENT_FAILED,
  payload: errmess,
});

export const fetchSalary = () => (dispatch) => {
  dispatch(salaryLoading(true));

  return fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((salary) => dispatch(addSalary(salary)));
};

export const addSalary = (salary) => ({
  type: ActionTypes.ADD_SALARY,
  payload: salary,
});

export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING,
});

export const salaryFailed = (errmess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errmess,
});
