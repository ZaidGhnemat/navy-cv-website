import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface LoginRequest {
  username: string;
  passwordHash: string;
}

/** Shape returned by POST /api/auth/login in the ASP.NET Core API. */
export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: number;
    username: string;
    fullName: string;
    role: 'Admin' | 'User';
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiBaseUrl}/auth`;

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data);
  }
}
