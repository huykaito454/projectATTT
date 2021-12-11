import { Component, Input, OnInit } from '@angular/core';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../home.component.scss']
})
export class UserComponent implements OnInit {
  public idUser:any;
  public user:any;
  constructor( private getUser:ServerHttpService, private loadId : IdService) { }

  ngOnInit(): void {
    this.getUser.getUser().subscribe((data) =>{
      this.user = data ;
      this.idUser = data.id;
    })

}
}