import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from '../Service/id.service';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public role:any;
  public label:any;
  public position:any;
  public idUser:any;
  public user:any;
  constructor(private loadId : IdService,private getUser :ServerHttpService, private router : Router) { }

  ngOnInit(): void {
    this.getUser.getUser().subscribe((data) =>{
      this.user = data ;
      this.role = data.role
      this.position = data.position;
      this.idUser = data.id;
      this.label = data.label;
    })
  }
  loadManageJob(){
    if(this.label < 2){
      alert("Bạn không được vào đây !");
    }
    else{
      this.router.navigate(["./home-manage-job"]);
    }
  }
  loadManageReport(){
    if(this.label < 2){
      alert("Bạn không được vào đây !");
    }
    else{
      this.router.navigate(["./home-manage-report"]);
    }
  }
  loadManageProject(){
    if(this.label < 2){
      alert("Bạn không được vào đây !");
    }
    else{
      this.router.navigate(["./home-manage-project"]);
    }
  }
  loadManageHuman(){
    if(this.label < 2){
      alert("Bạn không được vào đây !");
    }
    else{
      this.router.navigate(["./home-manage-human"]);
    }
  }
  loadPartner(){
    if(this.label < 3){
      alert("Bạn không được vào đây !");
    }
    else{
      this.router.navigate(["./home-partner"]);
    }
  }
  loadContract(){
    if(this.label < 3){
      alert("Bạn không được vào đây !");
    }
    else{
      this.router.navigate(["./home-contract"]);
    }
  }
  

}
