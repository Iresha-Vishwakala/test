import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAcademicQualificationComponent } from './add-academic-qualification/add-academic-qualification.component';
import { ListAcademicQualificationComponent } from './list-academic-qualification/list-academic-qualification.component';

const routes: Routes = [
  {path: 'add_academic_qualification', component: AddAcademicQualificationComponent},
  {path: 'list_academic_qualification', component: ListAcademicQualificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
