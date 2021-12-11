import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from '../Service/id.service';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  isLoginError : boolean = false;
  constructor( private dataService : ServerHttpService, private router : Router, private roleId : IdService ) { }

  ngOnInit(): void {
   sessionStorage.removeItem('userToken');
  }
  OnSubmit(){
    const newData = {email : this.email, password:this.password };
    this.dataService.login(newData).subscribe((data) =>{
      if(data.errCode === 0){
        sessionStorage.setItem('userToken',data.token);
        this.router.navigate(['/choice'])
      }
      else {
        alert(data.message);
        this.router.navigate(['/']);
      }
      
    },
    (errCode : HttpErrorResponse) => {
      this.isLoginError = true;
      console.log(errCode);
    });
  }

}
