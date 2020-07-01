import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, ValidationErrors } from "@angular/forms";
import { LoginService } from '../../../shared/services/users/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService : LoginService
    ) { }

    ngOnInit() {
        this.createLoginForm();    
    }

    // create login form with validation
    createLoginForm(){
        this.loginForm = this.formBuilder.group({
            userName: ["", [Validators.required,Validators.maxLength(100)]],
            password: ["", [Validators.required,Validators.minLength(7),Validators.maxLength(25)]]
        });
    }

    // get formData controlers
    get formData() {
        return this.loginForm.controls;
    }

    requestLogin(){
        this.submitted = true;
        if (this.loginForm.valid) {
            let loginData = this.loginForm.value;
            this.loginService.authenticateLogin(loginData).subscribe(data => {
                console.log('data',data);
                if(data.code == '200'){
                    alert(data.message);
                    this.router.navigateByUrl("/dashboard");
                }
                else if(data.code == '404'){
                    alert(data.message);
                }
            });
        }
        // if (this.loginForm.invalid) {
           
        // }
    }
}
