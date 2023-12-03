import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, finalize, first, tap } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { getDepartments } from "src/app/store/departments/departments.actions";
import { isDepartmentsLoaded } from "src/app/store/departments/departments.selectors";

@Injectable({
    providedIn: 'any'
})

export class AllDepartmentsResolver  {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isDepartmentsLoaded),
                tap((DepartmentsLoaded) => {
                    if (!this.loading && !DepartmentsLoaded) {
                        this.stroe.dispatch(getDepartments());
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            )
    }
}