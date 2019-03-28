import { Component, OnInit } from '@angular/core';
import { DataUserService, IUser } from '../data-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  user: IUser;

  constructor(private userService: DataUserService, private route: ActivatedRoute, private route1: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.user = this.userService.getUser(+params.id);
    // tslint:disable-next-line:no-debugger
    });
  }
  handleClick() {
  // this.route1.navigate(['/home', 3]);
  this.route1.navigateByUrl('about');
  }

}
