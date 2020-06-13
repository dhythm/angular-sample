import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.css'],
})
export class DrawerMenuComponent implements OnInit {
  @Output() event = new EventEmitter<String>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(path: string): void {
    this.router.navigate([path]);
    this.event.emit('clicked');
  }
}
