import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-manage-report',
  templateUrl: './manage-report.component.html',
  styleUrls: ['../home.component.scss']
})
export class ManageReportComponent implements OnInit {
  public reports:any;
  public roleUser:any;
  public role:any;
  public name:any;
  public roleId:any;
  public desc:any;
  constructor(private getReport:ServerHttpService, private router : Router) { }

  ngOnInit(): void {
    this.getReport.getUser().subscribe(data => {
      this.roleUser = data.role;
      if(this.roleUser < 4){
        this.getReport.getReportByRole(this.roleUser).subscribe(data2 => {
          if(data2.message == 'Ok' && data2.errCode == 0){
            this.reports = data2.listReport;
          }
          else if (data2.message == 'No data' && data2.errCode == 2){
            alert('Không có báo cáo nào');
          }
          else{
            this.router.navigate(["/home"]);
          }
        })
      }
    })
  
      
  }
  loadUser(data:any){
    this.getReport.getReportByRole(data).subscribe(data2 => {
      if(data2.message == 'Ok' && data2.errCode == 0){
        this.reports = data2.listReport;
      }
      else if (data2.message == 'No data' && data2.errCode == 2){
        alert('Không có báo cáo nào');
      }
      else{
        this.router.navigate(["/home"]);
      }
    })
  }
  delete(data:any){
    this.getReport.deleteReport(data).subscribe(data2 => {
      if(data2.message == 'Ok' && data2.errCode == 0){
        alert('Thành công');
        this.router.navigate(["/home-manage-report"]).then(() => {
          window.location.reload();
        });
      }
      else{
        alert('Thất bại');
      }
  })
}
}