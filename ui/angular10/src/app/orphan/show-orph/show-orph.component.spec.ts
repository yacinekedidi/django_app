import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrphComponent } from './show-orph.component';

describe('ShowOrphComponent', () => {
  let component: ShowOrphComponent;
  let fixture: ComponentFixture<ShowOrphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
