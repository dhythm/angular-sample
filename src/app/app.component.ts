import { Component, HostListener } from '@angular/core';

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
    const performanceEntries = performance.getEntriesByType('navigation');
    console.log('ngOnInit: ' + performanceEntries[0]['type']);
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    // Before closing the browser
    const performanceEntries = performance.getEntriesByType('navigation');
    console.log('unload: ' + performanceEntries[0]['type']);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    // Before moving to another page
    const performanceEntries = performance.getEntriesByType('navigation');
    console.log('beforeunload: ' + performanceEntries[0]['type']);
  }

  onReceiveEventFromChild(eventData: String) {
    console.log({ eventData });
    this.opened = !this.opened;
  }
}
