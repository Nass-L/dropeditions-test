import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;
  exp="/[0-9a-zA-Z]{6,}/";
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
   
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.pattern(this.exp)]]
    });
  }

  onSubmit(){
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authService.signInUser(email,password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage=error;
      }
    );
  }

}