import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test : string;
  constructor() { }

  ngOnInit() {
    console.log(this.test);
  }

}
