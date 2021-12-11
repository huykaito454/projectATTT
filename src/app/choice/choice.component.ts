import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdService } from '../Service/id.service';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  public role:any;
  constructor(private loadUser : ServerHttpService,private loadId :IdService,private router : Router) { }

  ngOnInit(): void {
    this.loadUser.getUser().subscribe((data) =>{
      this.role = data.role;
    })
  }
  choice(data:any){
    this.loadUser.checkRoleOfUser(data).subscribe(data2 => {
      if(data2.message === 'OK'){
        this.router.navigate(["/home"]);
      }
      else{
        alert("Không phải bộ phận của bạn !");
      }
    })


  }
}
