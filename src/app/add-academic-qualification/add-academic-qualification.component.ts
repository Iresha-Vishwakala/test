import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AcademicQualification } from '../academic-qualification';
import { AcademicQualificationService } from '../academic-qualification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.sass']
})
export class AddAcademicQualificationComponent implements OnInit {

  academic: AcademicQualification = new AcademicQualification();  // create object and assign to academic variable
  submitted = false;
  msg:string;

  constructor(private academicQualificationService: AcademicQualificationService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.academicQualificationService.addAcademicQualification(this.academic)
    .subscribe(data=> console.log(data), error => console.log(error));
    this.academic = new AcademicQualification();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  addTable(){
    alert("Hiii");
    // save data to here
  }

}
