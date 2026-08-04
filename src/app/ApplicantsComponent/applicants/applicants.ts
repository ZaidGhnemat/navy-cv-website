import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavyCvService } from '../../Services/navy-cv-service';
import { Applicant } from '../../Models/create-applicant';

@Component({
  selector: 'app-applicants',
  imports: [],
  templateUrl: './applicants.html',
  styleUrl: './applicants.css',
})
export class Applicants implements OnInit {

  applicants: Applicant[] = [];
  
  constructor(private _service: NavyCvService, private cdr: ChangeDetectorRef) {
    
  }
  ngOnInit(): void {
    this.loadingData();
  }

  loadingData(){
    this._service.getAll().subscribe({
      next: (data: any)=> {
        this.applicants = data;
        this.cdr.detectChanges();
        console.log(this.applicants);
      },

      error: (err: any) => {
        console.error(err);
      }
    })
  }
}
