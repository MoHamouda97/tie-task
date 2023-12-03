import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";

export const isLoggedIn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    const toast = inject(ToastrService);

    if (!localStorage.getItem('isLoggedIn')) {
        toast.warning('Please login first');
        router.navigate(['/sign-in']);
        return false;
    }

    return true;
}
