import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Applicant } from '../Models/create-applicant';

@Injectable({
  providedIn: 'root',
})
export class NavyCvService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiBaseUrl}/applicants`;

  /** Sends the application as multipart/form-data (fields + CV file). */
  create(data: FormData) {
    return this.http.post<Applicant>(this.apiUrl, data);
  }

  getAll() {
    return this.http.get<Applicant[]>(this.apiUrl);
  }
}
