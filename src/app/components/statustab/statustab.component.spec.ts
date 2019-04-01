import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatustabComponent } from './statustab.component';

describe('StatustabComponent', () => {
  let component: StatustabComponent;
  let fixture: ComponentFixture<StatustabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatustabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatustabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
