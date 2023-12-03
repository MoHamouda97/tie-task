import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, State } from "@ngrx/store";
import { DepartmentsActions } from "../departments/departments.action-types";

export interface DepartmentsState extends EntityState<any> {
    DepartmentsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: Departments => Departments.departmentId
})

export const initDepartmentsState = adapter.getInitialState({
    DepartmentsLoaded: false
})

export const DepartmentsReducer = createReducer(
    initDepartmentsState,
    on(DepartmentsActions.DepartmentsLoaded, (state, action) => adapter.addMany(action.Departments, {...state, DepartmentsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();