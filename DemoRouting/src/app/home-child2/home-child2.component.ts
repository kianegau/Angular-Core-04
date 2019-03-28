import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-child2',
  templateUrl: './home-child2.component.html',
  styleUrls: ['./home-child2.component.css']
})
export class HomeChild2Component implements OnInit {
  user: { id: number; name: string; };

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser(2);
  }

}
