import { Component, OnInit } from '@angular/core';
import { MailService, IMail } from '../mail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  mailLists = [];
  mail: IMail;
  // tslint:disable-next-line:variable-name
  constructor(
    // tslint:disable-next-line:variable-name
    private _mailService: MailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this._mailService.getMail().subscribe(data => this.mailLists = data);
    // });
    this._mailService.getMail().subscribe(data => this.mailLists = data);
  }
}
