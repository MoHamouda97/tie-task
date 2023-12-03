import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromDepartments from "../reducers/departments.reducers";
import { DepartmentsState } from "../reducers/departments.reducers";

export const selectDepartmentsState = createFeatureSelector<DepartmentsState>('Departments');

export const selectAllDepartments = createSelector(
    selectDepartmentsState,
    fromDepartments.selectAll
)

export const selectDepartments = createSelector(
    selectAllDepartments,
    (Departments: any, props: any) => Departments.filter((Departments: any) => Departments.departmentId === props.departmentId)
)

export const isDepartmentsLoaded = createSelector(
    selectDepartmentsState,
    state => state.DepartmentsLoaded
)