import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    private token:any;
    constructor(private router : Router ){}
    intercept(
        request : HttpRequest<any>,
        next : HttpHandler
    ):Observable<HttpEvent<any>>{
        if(sessionStorage.getItem('userToken') != null){
            this.token = sessionStorage.getItem('userToken');
            const headers = new HttpHeaders()
            .set('access-token',this.token)
            .set('Authorization', 'Bearer ' + this.token); 
            const AuthRequest = request.clone({headers:headers});
            return next.handle(AuthRequest);
        } else{
            return next.handle(request);
        }
        
    }
}