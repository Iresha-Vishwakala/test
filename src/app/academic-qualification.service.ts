import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcademicQualification } from './academic-qualification';

@Injectable({
  providedIn: 'root'
})
export class AcademicQualificationService {

  private baseUrl = 'http://localhost:8058';  

  constructor(private http: HttpClient) { }

  // all methods  
  // variable name : type
  // return object
  addAcademicQualification(academicQualification: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, academicQualification);
  }

  listAcademicQualification(): Observable<object>{
    return this.http.get(`${this.baseUrl}`+ '/list');
  }
}
