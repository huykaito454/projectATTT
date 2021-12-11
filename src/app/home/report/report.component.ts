import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['../home.component.scss']
})
export class ReportComponent implements OnInit {
  public id:any;
  public desc:any;
  constructor(private getReport:ServerHttpService, private loadId : IdService,private router : Router) { }

  ngOnInit(): void {
    this.getReport.getUser().subscribe((dataId) =>{
      this.id = dataId.id
    })
  }
  post(){
    const newData = {user : this.id , description : this.desc}
    this.getReport.postReport(newData).subscribe(data => {
      if(data.message == "Thanh cong"){
        alert("Thành công");
        this.router.navigate(['/home-report'])
        .then(() => {
          window.location.reload();
        })
      }
      else{
        alert(data.message);
      }
    })
  }
}
