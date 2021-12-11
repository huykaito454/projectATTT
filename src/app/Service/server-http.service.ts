import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IdService } from './id.service';
@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
  }
  private endpoint = 'http://localhost:8081';
  constructor(private httpClient : HttpClient, private id : IdService) { }
  
  public login(data : any): Observable<any> {
    const url = `${this.endpoint}/api/login`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getUserById(data : any): Observable<any> {
    const url = `${this.endpoint}/api/getUserById?id=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getUser(): Observable<any> {
    const url = `${this.endpoint}/api/getUser`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getUserByRole(data : any): Observable<any> {
    const url = `${this.endpoint}/api/getUserByRole?role=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllJobByRole(data : any): Observable<any> {
    const url = `${this.endpoint}/api/getAllJobByRole?role=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getJobByUser(): Observable<any> {
    const url = `${this.endpoint}/api/getJobByUser`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllPartner(): Observable<any> {
    const url = `${this.endpoint}/api/getAllPartner`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllContract(): Observable<any> {
    const url = `${this.endpoint}/api/getAllContract`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getProjectByRole(data:any): Observable<any> {
    const url = `${this.endpoint}/api/getProjectByRole?role=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getProjectByUser(data:any): Observable<any> {
    const url = `${this.endpoint}/api/getProjectByUser?userId=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getReportByRole(data:any): Observable<any> {
    const url = `${this.endpoint}/api/getReportByRole?role=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public checkRoleOfUser(data:any): Observable<any> {
    const url = `${this.endpoint}/api/checkRoleOfUser?roleId=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

    public postJob(data : any): Observable<any> {
    const url = `${this.endpoint}/api/postJob`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
    public postPartner(data : any): Observable<any> {
    const url = `${this.endpoint}/api/postPartner`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
    public postContract(data : any): Observable<any> {
    const url = `${this.endpoint}/api/postContract`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
    public postReport(data : any): Observable<any> {
    const url = `${this.endpoint}/api/postReport`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
    public postUser(data : any): Observable<any> {
    const url = `${this.endpoint}/api/postUser`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
    public postProjectByRole(data : any): Observable<any> {
    const url = `${this.endpoint}/api/postProjectByRole`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public putJob(data : any): Observable<any> {
    const url = `${this.endpoint}/api/putJobStatus`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  public deleteReport(data:any): Observable<any> {
    const url = `${this.endpoint}/api/deleteReport?reportId=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public putJobManage(data : any): Observable<any> {
    const url = `${this.endpoint}/api/putJob`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public putUserManage(data : any): Observable<any> {
    const url = `${this.endpoint}/api/putUser`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
 
   public deleteJob(data:any): Observable<any> {
    const url = `${this.endpoint}/api/deleteJob?jobId=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public putContract(data : any): Observable<any> {
    const url = `${this.endpoint}/api/putContract`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
   public deleteContract(data:any): Observable<any> {
    const url = `${this.endpoint}/api/deleteContract?contractId=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public putPartner(data : any): Observable<any> {
    const url = `${this.endpoint}/api/putPartner`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
   public deletePartner(data:any): Observable<any> {
    const url = `${this.endpoint}/api/deletePartner?partnerId=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
   public deleteUser(data:any): Observable<any> {
    const url = `${this.endpoint}/api/deleteUser?userId=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  //--------------------------------------------------------------------------------------- Admin
  // public getAllUser(): Observable<any> {
  //   const url = `${this.endpoint}/admin/api/get-all-user`;
  //   return this.httpClient
  //     .get<any>(url,this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }
  
  // public getOrderUserId(data:any): Observable<any> {
  //   const url = `${this.endpoint}/admin/api/get-win-auction-by-user?userId=${data}`;
  //   return this.httpClient
  //     .get<any>(url,this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }
  // public deleteUser(data:any): Observable<any> {
  //   const url = `${this.endpoint}/admin/api/delete-user?id=${data}`;
  //   return this.httpClient
  //     .delete<any>(url,this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }
 
  // public postUser(data : any): Observable<any> {
  //   const url = `${this.endpoint}/admin/api/post-user`;
  //   return this.httpClient
  //     .post<any>(url, data , this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  // public putUser(data : any): Observable<any> {
  //   const url = `${this.endpoint}/admin/api/put-user`;
  //   return this.httpClient
  //     .put<any>(url, data , this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}