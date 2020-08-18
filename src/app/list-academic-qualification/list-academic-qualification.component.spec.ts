import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcademicQualificationComponent } from './list-academic-qualification.component';

describe('ListAcademicQualificationComponent', () => {
  let component: ListAcademicQualificationComponent;
  let fixture: ComponentFixture<ListAcademicQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAcademicQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAcademicQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
