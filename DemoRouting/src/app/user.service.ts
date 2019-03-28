import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data = [
  {id: 1, name: 'duc'},
  {id: 2, name: 'van'},
  {id: 3, name: 'dung'},
  ];
  constructor() { }
  getUser(id: number) {
    // tslint:disable-next-line:no-debugger
    return this.data.find(x => x.id === id);
  }
}
