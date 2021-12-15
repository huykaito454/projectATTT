import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['../home.component.scss']
})
export class ManageProjectComponent implements OnInit {
  public projects:any;
  public roleUser:any;
  public role:any;
  public name:any;
  public roleId:any;
  public desc:any;
  public idUser:any;
  constructor(private getProject:ServerHttpService, private loadId : IdService,private router : Router) { }

  ngOnInit(): void {
    this.getProject.getUser().subscribe(data => {
      this.roleUser = data.role;
    })
    this.getProject.getUser().subscribe(data => {
      this.role = data.role;
      this.idUser = data.id;
      if(this.role < 4){
        this.getProject.getProjectByRole(this.role).subscribe(data2 => {
          if(data2.message == 'Ok' && data2.errCode == 0){
            this.projects = data2.listProject;
          }
          else if (data2.message == 'No data' && data2.errCode == 2){
            alert('Không có dữ liệu');
          }
          else{
            this.router.navigate(["/home"]);
          }
        })
      }
    })
    
  }
  loadUser(data:any){
    this.getProject.getProjectByRole(data).subscribe(data2 => {
      if(data2.message == 'Ok' && data2.errCode == 0){
        this.projects = data2.listProject;
      }
      else if (data2.message == 'No data' && data2.errCode == 2){
        alert('Không có dữ liệu');
      }
      else{
        this.router.navigate(["/home"]);
      }
  })
  
}
selectR(event: any) {
  this.roleId = event.target.value;
}
post(){
  if(this.role < 4){
    const newData = {name : this.name , description : this.desc, role : this.role,userId: this.idUser }
    this.getProject.postProjectByRole(newData).subscribe(data => {
      if(data.message.message == "Thanh cong"){
        alert("Thành công");
        this.router.navigate(['/home-manage-project'])
        .then(() => {
          window.location.reload();
        })
      }
      else{
        alert(data.message.message);
      }
    })
  }
  else{
    const newData = {name : this.name , description : this.desc , role : this.roleId, userId: this.idUser }
    this.getProject.postProjectByRole(newData).subscribe(data => {
      if(data.message.message == "Thanh cong"){
        alert("Thành công");
        this.router.navigate(['/home-manage-project'])
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

delete(data:any){
  this.getProject.deleteProject(data).subscribe(data2 => {
    if(data2.message == 'Ok' && data2.errCode == 0){
      alert('Thành công');
      this.router.navigate(["/home-manage-project"]).then(() => {
        window.location.reload();
      });
    }
    else{
      alert('Thất bại');
    }
})
}

}
