import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  
  constructor(private http: HttpClient) {
    
  }

  private apiUrlLogin = 'https://localhost:7023/api/auth';

  login(data: FormData){
    return this.http.post(this.apiUrlLogin+'/login', data)
  }
}
