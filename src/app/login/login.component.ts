import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  language: any;
  loginForm: FormGroup ;

  constructor(
    private router : Router ,
    private translateService : TranslateService,
    public fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.language = localStorage.getItem('lang') || 'en';
    this.initializeForm();
  }
  login(){
    if(this.loginForm.valid)
    this.router.navigate(['/dashboard'])
    else
    (Object as any).values(this.loginForm.controls).forEach((control : any) => {
      control.markAsTouched();
    });
  }
  initializeForm(userDetails? : any){
    this.loginForm=   this.fb.group({
      userName:['' , [Validators.required] ],
      password:['',  [Validators.required]]
  }) 
}
  changeLang(event: any){
    localStorage.setItem('lang' , event.value);
    this.translateService.use(localStorage.getItem('lang') || 'en')

    console.log(event.value)
  }

}
