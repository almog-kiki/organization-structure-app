import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Organization Structure App';

 constructor(private router: Router) { }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("login");
  }
}
