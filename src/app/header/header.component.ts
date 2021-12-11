import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IdService } from '../Service/id.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public role:any;
  constructor(private router : Router,private loadId : IdService) { }

  ngOnInit(): void {
   
  }
  logOut(){
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('id');
    this.router.navigate(['/'])
  }
}
