import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestudentsComponent } from './updatestudents.component';

describe('UpdatestudentsComponent', () => {
  let component: UpdatestudentsComponent;
  let fixture: ComponentFixture<UpdatestudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
