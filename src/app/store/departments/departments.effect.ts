import { Injectable, signal } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { DepartmentsActions } from './departments.action-types';
import { DepartmentsLoaded } from './departments.actions';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { Department } from 'src/app/modules/users/types/department';

@Injectable()

export class DepartmentsEffect {

    loadDepartments$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(DepartmentsActions.getDepartments),
                concatMap(_ =>  {
                    return this.service.getDepartments()
                }),
                map(data => {
                    const Departments = data as Department[];
                    return DepartmentsLoaded({Departments})
                })
            )
    )

    constructor(
        private actions$: Actions, 
        private service: UsersService) {}

}