import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoOrphanComponent } from './more-info-orphan.component';

describe('MoreInfoOrphanComponent', () => {
  let component: MoreInfoOrphanComponent;
  let fixture: ComponentFixture<MoreInfoOrphanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoOrphanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoOrphanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
