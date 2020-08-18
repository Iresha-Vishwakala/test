import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAcademicQualificationComponent } from './add-academic-qualification/add-academic-qualification.component';
import { ListAcademicQualificationComponent } from './list-academic-qualification/list-academic-qualification.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAcademicQualificationComponent,
    ListAcademicQualificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
