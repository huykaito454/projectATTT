import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerHttpService } from '../Service/server-http.service';

@Injectable({
  providedIn: 'root'
})
export class LevelTSGuard implements CanActivate {
  public label:any;
  constructor(private router : Router, private getLabel : ServerHttpService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      this.getLabel.getUser().subscribe((data) =>{
        this.label = data.label;
      })

      if(this.label >= 3){
        return true
      }
      else{
        this.router.navigate(['/home']);
        return false;
      }
  }
  
}
