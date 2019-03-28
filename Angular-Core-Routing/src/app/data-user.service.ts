import { Injectable } from '@angular/core';

// tslint:disable-next-line:no-empty-interface
export interface IUser {
  id: number;
  name: string;
  }
@Injectable({
  providedIn: 'root'
})
export class DataUserService {
data: IUser[] = [
{id: 1, name: 'DungTT27'},
{id: 2, name: 'Ducpt5' },
{id: 3, name: 'Vantta'}
];
  constructor() { }
  getUser(id: number) {
    return this.data.find(x => x.id === id);
  }
}
