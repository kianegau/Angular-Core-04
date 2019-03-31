import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IFolder {
  id: string;
  colums: string[];
  actions: string[];
}
@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private urlFolder = '/assets/data/folders.json';
  constructor(private httpFolder: HttpClient) { }
  getFolders(): Observable<IFolder[]> {
    return this.httpFolder.get<IFolder[]>(this.urlFolder);
  }
}
