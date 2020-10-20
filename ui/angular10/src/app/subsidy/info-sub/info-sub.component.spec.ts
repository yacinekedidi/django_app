import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSubComponent } from './info-sub.component';

describe('InfoSubComponent', () => {
  let component: InfoSubComponent;
  let fixture: ComponentFixture<InfoSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
