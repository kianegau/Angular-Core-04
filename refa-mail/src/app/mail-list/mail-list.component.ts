import { Component, OnInit } from '@angular/core';
import { MailService } from '../common/mail-service/mail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  public mailList = [];
  id: string;
  selectedItem: string;
  constructor(private mailService: MailService, private route: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    // this.mailService.getMails().subscribe( data => {
    //   this.mailList = data;
    //   console.log(this.mailList);
    // });
    this.routes.params.subscribe( params => {
    this.mailService.getMails().subscribe( data => {
    this.mailList = data.filter( x => x.folder === params.name);
    });
    });
  }
  selectItem(id1: string) {
    this.selectedItem = id1;
  }
}
