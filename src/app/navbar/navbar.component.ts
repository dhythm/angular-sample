import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'angular-sample';
  @Output() event = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  onToggleSidenav(): void {
    this.event.emit('clicked');
  }
}
