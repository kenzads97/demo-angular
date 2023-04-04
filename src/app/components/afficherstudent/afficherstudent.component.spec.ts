import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherstudentComponent } from './afficherstudent.component';

describe('AfficherstudentComponent', () => {
  let component: AfficherstudentComponent;
  let fixture: ComponentFixture<AfficherstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
