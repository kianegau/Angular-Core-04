import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  user: { id: number; name: string; };

  constructor(private userService: UserService, private router: ActivatedRoute, private router2: Router ) {
    console.log('abc');
  }

  ngOnInit() {
    this.router.params.subscribe(param => {
     this.user = this.userService.getUser(+param.id);
    });
  }
  onClick() {
    // this.router2.navigateByUrl('/about');
    this.router2.navigate(['/home', 3]);
  }

}
