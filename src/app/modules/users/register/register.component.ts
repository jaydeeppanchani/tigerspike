import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, ValidationErrors } from "@angular/forms";
import { MustMatch } from '../../../shared/helpers/mustMatch';

import { Common } from '../../../shared/services/common'
import { RegisterService } from '../../../shared/services/users/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;
    public submitted : boolean = false;
    public showPassword : boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        public common: Common,
        private registerService : RegisterService
    ) { }

    ngOnInit() {
        this.createRegisterForm();    
    }

    // create register form with validations
    createRegisterForm(){
        this.registerForm = this.formBuilder.group({
            foreName: ["", [Validators.required,Validators.maxLength(100)]],
            surName: ["", [Validators.required,Validators.maxLength(100)]],
            sex : [1, Validators.required],
            dob : ["", [Validators.required]],
            email : ["", [Validators.required,Validators.email]],
            confirmEmail : ["", [Validators.required,Validators.email]],
            password: ["", [Validators.required,Validators.minLength(7),Validators.maxLength(25),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$')]],
        }, {
            validator: MustMatch('email', 'confirmEmail')
          }
          );
    }
    // get formData controlers
    get formData() {
        return this.registerForm.controls;
    }

    // on click of register
    register(){
        this.submitted = true;
        if (this.registerForm.valid) {
            let registerData = this.registerForm.value;
            this.registerService.registerUser(registerData).subscribe(data => {
                console.log('data',data);
                if(data.code == '200'){
                    alert(data.message);
                    this.router.navigateByUrl("/");
                }
                else if(data.code == '404'){
                    alert(data.message);
                }
            });
        }
        // if (this.registerForm.invalid) {
        // }
    }
    
    // get password input field type
    getPasswordInputType(){
        return this.showPassword?'true':'password';
    }
    
    //get Hide / show label for show password checkbox  
    getShowPasswordLabel(){
        return this.showPassword?'Hide':'Show';
    }

    // toggle show password boolean flag
    toggelShowPassword(){
        this.showPassword = !this.showPassword;
    }

}
