import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOrphComponent } from './add-edit-orph.component';

describe('AddEditOrphComponent', () => {
  let component: AddEditOrphComponent;
  let fixture: ComponentFixture<AddEditOrphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOrphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOrphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
