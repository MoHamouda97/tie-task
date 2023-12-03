import { Component, OnDestroy, OnInit, TemplateRef, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../types/users';
import { ScreenSizeSignals } from 'src/app/shared/signals/screen-size.signals';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { UserDeleted, UserUpdated } from 'src/app/store/users/users.actions';
import { selectAllUsers } from 'src/app/store/users/users.selectors';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Department } from '../../types/department';
import { selectAllDepartments } from 'src/app/store/departments/departments.selectors';
import { DepartmentForm } from '../../form/department-form';
import { FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent extends DepartmentForm implements OnInit, OnDestroy {
  departmentForm: FormGroup = this.createDepartmentForm();
  users: User[] = [];
  cachedUsers: User[] = [];
  departments: Department[] = [];
  modalService = inject(NgbModal);
  $destroy: Subject<null> = new Subject<null>();

  selectedUser!: User;
  
  constructor (
    private store: Store<AppState>,
    private service: UsersService,
    private toastr: ToastrService,
    public screen: ScreenSizeSignals) {
      super();
  }

  //#region // HOOKS
  ngOnInit(): void {
    this.getUsers();  
    this.getDepartmets();  
  }

  ngOnDestroy(): void {
    this.$destroy.next(null);
    this.$destroy.complete();
  }   
  //#endregion

  //#region // GETTER
  get isSameDepartment(): boolean {
    return this.selectedUser?.id === this.departmentForm.get('departmentId')?.value;
  }
  //#endregion

  //#region // METHODS
  getUsers(): void {
    this.store
    .pipe(
      takeUntil(this.$destroy),
      select(selectAllUsers)
    ).subscribe(
      (users: User[]) => {
        this.users = users;
        this.cachedUsers = users;
      }
    )
  }

  getDepartmets(): void {
    this.store
    .pipe(
      takeUntil(this.$destroy),
      select(selectAllDepartments)
    ).subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      }
    )
  }

  confirmDelete(id: number) {
    Swal.fire({
      icon: 'question',
      title: 'Do you want to delete this user?'
    }).then(res => {
      if (res.isConfirmed) this.deleteUser(id);
    })
  }

  filterUsers(search: string) {
    if (!search.trim()) {
      this.users = this.cachedUsers;
      return;
    }

    this.users = this.cachedUsers.filter(user => user.skils.findIndex(item => item.title.toLowerCase().includes(search.trim().toLowerCase())) !== -1)
  }

  open(content: TemplateRef<any>, user: User) {
    this.selectedUser = user;
    this.departmentForm.get('departmentId')?.setValue(user.departmentId);
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
  //#endregion

  //#region // HTTP
  deleteUser(id: number) {
    this.store.dispatch(UserDeleted({id}));
    this.toastr.success('User deleted successfully');
  }

  updateUserDepartment() {
    if (!this.isSameDepartment) {
      const update: any = {...this.selectedUser};
      const departmentId = +this.departmentForm.get('departmentId')?.value;
  
      update.departmentId = departmentId;
      update.department = this.departments.find(depatrment => depatrment.departmentId === departmentId)?.department as string;
      
      this.store.dispatch(UserUpdated({update}));
  
      this.toastr.success('User updated successfully');
  
      this.modalService.dismissAll();
    }
  }
  //#endregion
}