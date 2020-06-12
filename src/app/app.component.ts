import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-sample';

  opened = false;

  onToggleSidenav(): void {
    this.opened = !this.opened;
    console.log('clicked!');
  }
}
