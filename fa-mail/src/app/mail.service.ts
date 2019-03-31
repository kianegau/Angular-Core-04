import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface IMail {
  folder: string;
  body: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  senderName: string;
  corpus: string;
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailService {

  // tslint:disable-next-line:variable-name
  private _urlMail = '/assets/data/messages.json';
  // tslint:disable-next-line:variable-name
  constructor(private _httpMail: HttpClient) {

   }
   getMail(): Observable<IMail[]> {
     return this._httpMail.get<IMail[]>(this._urlMail);
   }
}
