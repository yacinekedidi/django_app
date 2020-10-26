import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrphEducationComponent } from './edit-orph-education.component';

describe('EditOrphEducationComponent', () => {
  let component: EditOrphEducationComponent;
  let fixture: ComponentFixture<EditOrphEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrphEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrphEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
