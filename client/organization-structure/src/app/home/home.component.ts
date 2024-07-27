import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route: ActivatedRoute,
        private router: Router, 
        private userService: UserService) { }

  ngOnInit(): void {
  	let token = localStorage.getItem('token');
  	if (token == null || token ==""){
  		this.router.navigateByUrl("login");
  	}else{

      if ( localStorage.getItem('user') == null) {
        this.userService.getUser()
                .subscribe(
                  response => {
                    const userData = response["data"]
                    localStorage.setItem('user', JSON.stringify(userData));
                    this.router.navigateByUrl("dashboard");
                  },
                  error => {
                    console.error(error)
                  }
                ); 
        }
  	}
  }
}
