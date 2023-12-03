import { Route } from "@angular/router";
import { AllUsersComponent } from "./pages/all-users/all-users.component";
import { AllUsersResolver } from "./resolvers/all-users.resolver";
import { AllDepartmentsResolver } from "./resolvers/all-departments.resolver";

export const usersRouting: Route[] = [
    {
        path: '',
        component: AllUsersComponent,
        resolve: {
            users: AllUsersResolver,
            departments: AllDepartmentsResolver
        }
    }
]