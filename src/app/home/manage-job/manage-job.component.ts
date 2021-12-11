import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-manage-job',
  templateUrl: './manage-job.component.html',
  styleUrls: ['../home.component.scss']
})
export class ManageJobComponent implements OnInit {
  public role:any
  public roleUser:any
  public jobs:any;
  public idUser = '0';
  public users:any;
  public job:any
  public jobDesc:any
  constructor(private getJob:ServerHttpService, private loadId : IdService,private router : Router) { }

  ngOnInit(): void {
    this.getJob.getUser().subscribe(data => {
      this.roleUser = data.role;
    })
    this.getJob.getUser().subscribe((data) => {
      this.role = data.role;
      if(this.role < 4){
        this.getJob.getAllJobByRole(this.role).subscribe((data)=>{
          if(data.message == 'Ok' && data.errCode == 0){
            this.jobs = data.listJob;
          }
          else{
            this.router.navigate(["/home"]);
          }
        })
        this.getJob.getUserByRole(this.role).subscribe((data) =>{
          this.users = data.listUser;
        })
      }
    })
  }
  
  select(event: any) {
    this.idUser = event.target.value;
  }
  postJob(){
    const newData = {name : this.job, user : this.idUser , role : this.role, description: this.jobDesc}
    this.getJob.postJob(newData).subscribe((data) =>{
      if(data.message == "Thanh cong"){
        alert("Thành công");
        this.router.navigate(['/home-manage-job'])
        .then(() => {
          window.location.reload();
        })
      }
      else{
        alert(data.message);
      }
    })
  }
  updateJob(data:any){
      const newData = {jobId : data};
    this.getJob.putJob(newData).subscribe(data2 => {
      if(data2.message == "Thanh cong"){
        alert("Thành công");
        this.router.navigate(['/home-manage-job'])
        .then(() => {
          window.location.reload();
        })
      }
      else{
        alert(data2.message);
      }
    })
  }

  loadUser(data:any){
    this.role = data;
    this.getJob.getAllJobByRole(data).subscribe((data2) =>{
      this.jobs= data2.listJob ;
  })
  this.getJob.getUserByRole(data).subscribe((data) =>{
    this.users = data.listUser;

  })
  
}
putJobManage(data:any){
  const newData = {id: data.id , name : data.name , description : data.description};
  this.getJob.putJobManage(newData).subscribe(data2 => {
    if(data2.message == 'OK' && data2.errCode == 0){
      alert('Thành công');
      this.router.navigate(["/home-manage-job"]).then(() => {
        window.location.reload();
      });
    }
    else{
      alert('Thất bại');
    }
  })
}
delete(data:any){
  this.getJob.deleteJob(data).subscribe(data2 => {
    if(data2.message == 'Ok' && data2.errCode == 0){
      alert('Xóa thành công');
      this.router.navigate(["/home-manage-job"]).then(() => {
        window.location.reload();
      });
    }
    else{
      alert('Thất bại');
    }
  })
}
}
