import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['../home.component.scss']
})
export class ContractComponent implements OnInit {
  public contracts:any;
  public idUser:any;
  public name:any;
  public desc:any;
  public id:any;
  constructor( private getContract:ServerHttpService, private loadId : IdService, private router : Router) { }

  ngOnInit(): void {
    this.getContract.getUser().subscribe((dataId) =>{
      this.id = dataId.id
    })
    this.getContract.getAllContract().subscribe(data => {
      if(data.message == 'Ok' && data.errCode == 0){
        this.contracts = data.listContract;
      }
      else if (data.message == 'No data' && data.errCode == 2){
        alert('Không có dữ liệu');
      }
      else{
        this.router.navigate(["/home"]);
      }
    })
  }
  post(){
    const newData = {name : this.name , description : this.desc, userId : this.id }
  this.getContract.postContract(newData).subscribe(data => {
    if(data.message == "Thanh cong"){
      alert("Thành công");
      this.router.navigate(['/home-contract'])
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
    this.getContract.putContract(newData).subscribe(data2 => {
      if(data2.message == 'OK' && data2.errCode == 0){
        alert(' Sửa thành công');
        this.router.navigate(["/home-contract"]).then(() => {
          window.location.reload();
        });
      }
      else{
        alert(' Sửa thất bại');
      }
    })
  }
  delete(data:any){
    this.getContract.deleteContract(data).subscribe(data2 => {
      if(data2.message == 'Ok' && data2.errCode == 0){
        alert(' Xóa thành công');
        this.router.navigate(["/home-contract"]).then(() => {
          window.location.reload();
        });
      }
      else{
        alert('Thất bại');
      }
    })
  }
}
