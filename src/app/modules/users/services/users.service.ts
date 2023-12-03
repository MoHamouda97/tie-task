import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../types/users';
import { USERS } from '../constants/users.constants';
import { Department } from '../types/department';
import { DEPARTMENTS } from '../constants/departments.constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS)
  }

  getDepartments(): Observable<Department[]> {
    return of(DEPARTMENTS)
  }

}
