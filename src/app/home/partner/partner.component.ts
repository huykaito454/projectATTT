import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['../home.component.scss']
})
export class PartnerComponent implements OnInit {

  public partners:any;
  public idUser:any;

  public name:any;
  public description:any;
  public id:any;
  constructor( private getPartners:ServerHttpService, private loadId : IdService, private router: Router) { }

  ngOnInit(): void {
    this.getPartners.getUser().subscribe((dataId) =>{
      this.id = dataId.id
    })
    this.getPartners.getAllPartner().subscribe(data => {
      if(data.message == 'Ok' && data.errCode == 0){
        this.partners = data.listPartner;
      }
      else{
        this.router.navigate(["/home"]);
      }
    })

}
post(){
  const newData = {name : this.name , description : this.description, userId : this.id }
  this.getPartners.postPartner(newData).subscribe(data => {
    if(data.message == "Thanh cong"){
      alert("Thành công");
      this.router.navigate(['/home-partner'])
      .then(() => {
        window.location.reload();
      })
    }
    else{
      alert(data.message);
    }
  })
}
put(data:any){
  const newData = {id : data.id, name : data.name, description : data.description};
  this.getPartners.putPartner(newData).subscribe(data2 => {
    console.log(data2)
    if(data2.message == 'OK' && data2.errCode == 0){
      alert(' Sửa thành công');
      this.router.navigate(["/home-partner"]).then(() => {
        window.location.reload();
      });
    }
    else{
      alert(' Sửa thất bại');
    }
  })
}
delete(data:any){
  this.getPartners.deletePartner(data).subscribe(data2 => {
    if(data2.message == 'Ok' && data2.errCode == 0){
      alert('Xóa thành công');
      this.router.navigate(["/home-partner"]).then(() => {
        window.location.reload();
      });
    }
    else{
      alert('Thất bại');
    }
  })
}
}
