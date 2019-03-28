import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.css']
})
export class TestExampleComponent implements OnInit {
// Load route has 2 ways: using template and typescript
// this way is way typescript
  constructor() { }
  // onSelected() {
  //   // Doing something
  //   const testComponent = 'Hello this is test component';
  //   this.router.navigate(['test']);
  // }
  ngOnInit() {
  }

}
