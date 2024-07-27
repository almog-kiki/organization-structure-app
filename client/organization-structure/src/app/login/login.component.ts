
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form!: FormGroup;
    loading = false;
    submitted = false;
    errorMsg= "";

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private userService:UserService
    ) { 
     this.form = formBuilder.group({
      firstName:['', Validators.required],
      password: ['', Validators.required]
    })
 }

  ngOnInit(): void {
  }


	clearFields(){
		this.form.reset();
	    this.loading = false;
	    this.submitted = false;
	}

   onSubmit() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        this.loginService.login(this.form.controls.firstName.value, this.form.controls.password.value)
            .subscribe(
              data => {
                localStorage.setItem('token', data["token"]);
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
				        this.clearFields();
              },
              err  => {
              	this.clearFields();
              	this.errorMsg = <any>err
              }
            );
    }

}