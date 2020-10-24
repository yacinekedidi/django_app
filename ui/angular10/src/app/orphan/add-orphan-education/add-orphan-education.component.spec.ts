import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrphanEducationComponent } from './add-orphan-education.component';

describe('AddOrphanEducationComponent', () => {
  let component: AddOrphanEducationComponent;
  let fixture: ComponentFixture<AddOrphanEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrphanEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrphanEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
