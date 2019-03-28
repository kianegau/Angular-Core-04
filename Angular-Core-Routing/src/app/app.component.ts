import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Core-Routing';
  constructor(private router: Router) {}
  // onSelected() {
  //   // Do something
  //   const test = 'This is test component';
  //   this.route.navigate(['test']);
  // }
  changURL() {
    this.router.navigateByUrl('test');
  }
}
