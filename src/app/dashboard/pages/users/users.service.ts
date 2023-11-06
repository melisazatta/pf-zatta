import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Admin',
        lastname: 'Admin',
        email: 'admin@mail.com',
      },
      {
        id: 2,
        name: 'User',
        lastname: 'User',
        email: 'user@mail.com',
      },
    
    ]
  }
}