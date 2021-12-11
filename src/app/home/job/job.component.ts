import { Component, OnInit } from '@angular/core';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['../home.component.scss']
})
export class JobComponent implements OnInit {
  public idUser:any;
  public jobs:any;
  public job0:any;
  public id:any;
  constructor( private getUser:ServerHttpService, private loadId : IdService) { }

  ngOnInit(): void {
      this.getUser.getJobByUser().subscribe((data) => {
        this.jobs= data.listJob;
        this.job0= data.listJob[0];
    })
    
  }

}
