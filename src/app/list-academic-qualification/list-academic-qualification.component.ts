import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicQualificationService } from '../academic-qualification.service';
import { AcademicQualification } from '../academic-qualification';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-list-academic-qualification',
  templateUrl: './list-academic-qualification.component.html',
  styleUrls: ['./list-academic-qualification.component.sass']
})
export class ListAcademicQualificationComponent implements OnInit {

  academicqualifications: AcademicQualification[] = [
    {
      id: 123,
      institute: "TestB",
      date: new Date("2020-12-30")
    },
    {
      id: 345,
      institute: "TestV",
      date: new Date("2099-12-30")
    }
  ];

  constructor(private academicQualificationService: AcademicQualificationService, private router: Router) { }

  ngOnInit(): void {
  }

  list() {
    this.academicQualificationService.listAcademicQualification()
      .subscribe((data: AcademicQualification[]) => {
        console.log(data);
        this.academicqualifications = data;
      })
  }

}
