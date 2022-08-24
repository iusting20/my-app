import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  constructor() {}

  message = 'THE MESSAGE IS THIS.';
  devName = 'Iustin Ghergu';
  siteUrl = 'https://impactfultech.com/';
  dynamicSiteUrl = 'https://impactfultech.com/';

  sayHello() {
    alert('Hello, my dear developer, ' + this.devName + ' :D');
  }

  ngOnInit(): void {}
}
