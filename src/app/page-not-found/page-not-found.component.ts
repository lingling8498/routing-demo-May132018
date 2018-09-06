import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <span ng-style="myAlertStyle">
      {{ myPageNotFoundMessage }}
    </span>
  `,
  styles: [
    
  ]
})
export class PageNotFoundComponent implements OnInit {

  myPageNotFoundMessage = "Page Not Found!!";
  myAlertStyle = {"color": "red"};
  myBackgroundStyle={"background-color":"blue"};

  constructor() { }

  ngOnInit() {
  }

}
