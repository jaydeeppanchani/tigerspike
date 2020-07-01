import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    constructor(private http: HttpClient) { }

    public registerUser(registerData : object): Observable<any> {
      const registerUserURL = `${environment.api}/users/register`;
      // console.log('authenticateURL',authenticateURL);
      const queryParams = new HttpParams();
      // this.headers = this.headers.set('Authorization', '');
      const options = {
          params: queryParams,
          headers: this.headers
      };
      return this.http.post(registerUserURL,registerData, options);
  }
}
