import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { ReactiveFormsModule } from '@angular/forms';
/*import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";*/
import { NgIf } from '@angular/common';
import { NavyCvService } from '../../Services/navy-cv-service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  cvForm: FormGroup;
  fileName: string = '';
  isSubmitting: boolean = false;
  showToastFlag: boolean = false;
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private navyCvService: NavyCvService
  ) {

    this.cvForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      education: ['', Validators.required],
      experience: [''],
      cv: [null, Validators.required]
    });

  }

  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement
    const file = event.target.files[0];
    if(input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.cvForm.patchValue({
        cv: this.selectedFile
      });
    }

    if(file) {
      this.selectedFile = file;
      this.fileName = file.name;
    }
  }

  onSubmit() {
    console.log(this.cvForm.value);
    if(this.cvForm.invalid) {
      console.log(this.cvForm.value);
      return ;
    }

    this.isSubmitting = true;

    const formData = new FormData();

    formData.append('fullName', this.cvForm.value.fullName);
    formData.append('email', this.cvForm.value.email);
    formData.append('phoneNumber', this.cvForm.value.phoneNumber);
    formData.append('dateOfBirth', this.cvForm.value.dateOfBirth);
    formData.append('address', this.cvForm.value.address);
    formData.append('education', this.cvForm.value.education);
    formData.append('experience', this.cvForm.value.experience);

    if (this.selectedFile) {
      formData.append('cvFile', this.selectedFile);
    }

    this.navyCvService.create(formData)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.isSubmitting = false;
          this.showToastFlag = true;
          setTimeout(()=>{

            this.showToastFlag=false;

          },4000);

          this.cvForm.reset();
          this.fileName = '';
        },
        error: (err:any) => {
          this.isSubmitting = false;
          console.error(err);
        }
      });

    
  }
}
