import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ifolders {
  id: string;
  columns: string[];
  actions: string[];
}
@Injectable({
  providedIn: 'root'
})

export class FolderService {

   // tslint:disable-next-line:variable-name
  private _urlFolder = '/assets/data/folders.json';
  constructor(private httpFolder: HttpClient) { }
  getFolders(): Observable<Ifolders[]> {
    return this.httpFolder.get<Ifolders[]>(this._urlFolder);
  }
}
