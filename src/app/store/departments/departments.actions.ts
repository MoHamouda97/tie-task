import { createAction, props } from "@ngrx/store";
import { Department } from "src/app/modules/users/types/department";

export const getDepartments = createAction(
    "[Departments Resolver] Get Departments"
);

export const DepartmentsLoaded = createAction(
    "[Load Departments Effect] Departments Loaded",
    props<{Departments: Department[]}>()
);