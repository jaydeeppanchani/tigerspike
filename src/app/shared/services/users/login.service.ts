import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    constructor(private http: HttpClient) { }

    public authenticateLogin(loginData : object): Observable<any> {
        const authenticateURL = `${environment.api}/users/authenticateUser`;
        // console.log('authenticateURL',authenticateURL);
        const queryParams = new HttpParams();
        const options = {
            params: queryParams,
            headers: this.headers
        };
        return this.http.post(authenticateURL,loginData, options);
    }

}
