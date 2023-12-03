import { FormControl, FormGroup, Validators } from "@angular/forms";

export abstract class DepartmentForm {
    
    createDepartmentForm(): FormGroup {
        return new FormGroup({
            departmentId: new FormControl<number | null>(null, Validators.required),
        })
    }

}