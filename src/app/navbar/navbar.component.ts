import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'angular-sample';
  @Output() event = new EventEmitter<String>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
        // map(() => this.activatedRoute)
      )
      .subscribe((event: NavigationEnd) => {
        switch (event.url) {
          case '/':
          case '/list':
            this.title = 'Consultation Categories';
            break;
          case '/consultations':
            this.title = 'Previous Consultations';
            break;
          case '/consultant':
            this.title = 'Consultant Menu';
            break;
          default:
            this.title = 'angular-sample';
        }
      });
    // this.router.events
    //   .filter((event) => event instanceof NavigationEnd)
    //   .subscribe((event) => {
    //     console.log({ event });
    //   });
  }

  onToggleSidenav(): void {
    this.event.emit('clicked');
  }
}
