import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstName: string 
  user: any
  isManager = false 
  isUserExists = false

  constructor(private router: Router) {}

  ngOnInit(): void {
  	this.user = JSON.parse(localStorage.getItem('user'))
    if(this.user != null) {
      this.isUserExists = true
      this.setIsManager(this.user["position"])
    }
    
  }

  setIsManager(position: string) {
    if (position == "Manager") {
      this.isManager = true
    }
  }
}

