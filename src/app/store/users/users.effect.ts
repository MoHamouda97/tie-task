import { Injectable, signal } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { UsersActions } from './users.action-types';
import { UsersLoaded } from './users.actions';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { User } from "src/app/modules/users/types/users";

@Injectable()

export class UsersEffect {

    loadUsers$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(UsersActions.getUsers),
                concatMap(_ =>  {
                    return this.service.getUsers()
                }),
                map(data => {
                    const Users = data as User[];
                    return UsersLoaded({Users})
                })
            )
    )

    constructor(
        private actions$: Actions, 
        private service: UsersService) {}

}