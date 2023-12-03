import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { usersRouting } from "./users.routing";
import { UsersComponent } from "./users.component";
import { AllUsersComponent } from "./pages/all-users/all-users.component";
import { SharedModule } from "src/app/shared/shared.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UsersReducer } from "src/app/store/reducers/users.reducers";
import { UsersEffect } from "src/app/store/users/users.effect";
import { DepartmentsEffect } from "src/app/store/departments/departments.effect";
import { DepartmentsReducer } from "src/app/store/reducers/departments.reducers";

@NgModule({
    declarations: [
        UsersComponent,
        AllUsersComponent,
    ],
    imports: [
        RouterModule.forChild(usersRouting),
        EffectsModule.forFeature([
            UsersEffect,
            DepartmentsEffect
        ]),
        StoreModule.forFeature('Users', UsersReducer), 
        StoreModule.forFeature('Departments', DepartmentsReducer), 
        SharedModule
    ],
    providers: []
})
export class UsersModule {}