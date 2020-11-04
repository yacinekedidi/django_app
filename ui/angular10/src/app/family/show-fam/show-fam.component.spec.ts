import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFamComponent } from './show-fam.component';

describe('ShowFamComponent', () => {
  let component: ShowFamComponent;
  let fixture: ComponentFixture<ShowFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
