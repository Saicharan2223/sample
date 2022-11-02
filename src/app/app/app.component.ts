import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styles: [
  ]
})
export class AppComponent implements OnInit {
  appHeading:string
  constructor(){
    this.appHeading="<u>Colruyt</u> Group, Belgium"
}

  ngOnInit(): void {
  }

}
