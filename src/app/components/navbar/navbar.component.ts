import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  constructor(private breakpointObserver: BreakpointObserver) {}

  setLocalStoragePlans() {
    localStorage.setItem('types', 'plans');
  }
  setLocalStorageUser() {
    localStorage.setItem('types', 'users');
  }
  setLocalStoragePlantype() {
    localStorage.setItem('types', 'types');
  }
}
