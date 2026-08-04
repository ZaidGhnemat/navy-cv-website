import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant} from '../Models/create-applicant'

@Injectable({
  providedIn: 'root',
})
export class NavyCvService {

  private apiUrl = 'https://localhost:7023/api/applicants';
  constructor(private http: HttpClient) {}
  
  create(data: FormData){
    return this.http.post(this.apiUrl, data)
  }

  getAll(){
    return this.http.get<Applicant[]>(this.apiUrl)
  }


  
  /*uploadCv(formData: FormData) {
  return this.http.post(
    'https://localhost:5001/api/cv/upload',
    formData
  );
}*/
}
