import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  private urlMail = '/assets/data/messages.json';
  constructor(private httpMail: HttpClient) { }
  getMails(): Observable<IMail[]> {
    return this.httpMail.get<IMail[]>(this.urlMail);
  }
  getMailById(id: string) {
    return this.httpMail.get<IMail[]>(this.urlMail + '/finace');
  }
}
