import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-manage-human',
  templateUrl: './manage-human.component.html',
  styleUrls: ['../home.component.scss']
})
export class ManageHumanComponent implements OnInit {
  public role:any;
  public users:any;
  public name:any;
  public email:any;
  public password:any;
  public phone:any;
  public address:any;
  public avatar = '123';
  public roleId = '0';
  public position = '0';


  constructor( private getUser:ServerHttpService, private loadId : IdService,private router :Router) { }

  ngOnInit(): void {
    this.getUser.getUser().subscribe((data) =>{
      this.role = data.role
      if(this.role < 4){
        this.getUser.getUserByRole(this.role).subscribe((data) =>{
          if(data.message == 'Ok' && data.errCode == 0){
            this.users= data.listUser ;
          }
          else{
            this.router.navigate(["/home"]);
          }
        })
      }
      
    })
    

}
  loadUser(data:any){
    this.getUser.getUserByRole(data).subscribe((data2) =>{
      console.log(data2);
      if(data2.message == 'Ok' && data2.errCode == 0){
        this.users= data2.listUser ;
      }
      else{
        this.router.navigate(["/home"]);
      }
    })
  }

  postUser(){
    if(this.role < 4) {
      const newData = {name : this.name, email : this.email, password : this.password, phone : this.phone, address : this.address, avatar : this.avatar, role : this.role, position: 1}
      this.getUser.postUser(newData).subscribe((data) =>{
      
        if(data.message == "OK"){
          alert("Thành công");
          this.router.navigate(['/home-manage-human'])
          .then(() => {
            window.location.reload();
          })
        }
        else{
          alert(data.message);
        }
      })
    }
    else{
      const newData = {name : this.name, email : this.email, password : this.password, phone : this.phone, address : this.address, avatar : this.avatar, role : this.roleId, position: this.position}
      this.getUser.postUser(newData).subscribe((data) =>{
     
        if(data.message == "OK"){
          alert("Thành công");
          this.router.navigate(['/home-manage-human'])
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

  selectP(event: any) {
    this.position = event.target.value;
  }
  selectR(event: any) {
    this.roleId = event.target.value;
  }
  updateUser(data:any){
    const newData = {id : data.id, name : data.name, phone : data.phone, address : data.address};
    this.getUser.putUserManage(newData).subscribe(data2 => {
      if(data2.message == 'OK' && data2.errCode == 0){
        alert(' Sửa thành công');
        this.router.navigate(["/home-manage-human"]).then(() => {
          window.location.reload();
        });
      }
      else{
        alert(' Sửa thất bại');
      }
    })
  }
  deleteUser(data:any){
    this.getUser.deleteUser(data).subscribe(data2 => {
      console.log(data2);
      if(data2.message == 'Ok' && data2.errCode == 0){
        alert(' Xóa thành công');
        this.router.navigate(["/home-manage-human"]).then(() => {
          window.location.reload();
        });
      }
      else{
        alert('Thất bại');
      }
    })
  }
}
