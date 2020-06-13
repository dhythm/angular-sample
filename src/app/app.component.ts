import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-sample';
  opened: boolean;

  ngOnInit() {
    this.opened = false;
  }

  onReceiveEventFromChild(eventData: String) {
    console.log({ eventData });
    this.opened = !this.opened;
  }
}
