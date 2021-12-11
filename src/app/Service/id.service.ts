import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IdService {
  public role = new BehaviorSubject('');
  public role2 = '';
  public id = new BehaviorSubject('');
  public label = new BehaviorSubject('');
  public position = new BehaviorSubject('');
  currentRole = this.role.asObservable();
  currentLabel = this.label.asObservable();
  currentPosition = this.position.asObservable();
  currentId = this.id.asObservable();
  constructor() { }

  loadRole(data:any){
    this.role2 = data;
  }
  loadID(data:any){
    this.id.next(data);
  }
  loadLabel(data:any){
    this.label.next(data);
  }
  loadPosition(data:any){
    this.position.next(data);
  }
 
}

