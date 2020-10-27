import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFamilySubsidyComponent } from './add-edit-family-subsidy.component';

describe('AddEditFamilySubsidyComponent', () => {
  let component: AddEditFamilySubsidyComponent;
  let fixture: ComponentFixture<AddEditFamilySubsidyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFamilySubsidyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFamilySubsidyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
