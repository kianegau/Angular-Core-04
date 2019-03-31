import { Component, OnInit } from '@angular/core';
import { IMail, MailService } from '../common/mail-service/mail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-mail',
  templateUrl: './content-mail.component.html',
  styleUrls: ['./content-mail.component.css']
})
export class ContentMailComponent implements OnInit {
email: IMail;
  constructor(private mailService: MailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.mailService.getMails().subscribe( data => {
      this.email = data.find( x => x._id === params.id);
      });
      });
  }

}
