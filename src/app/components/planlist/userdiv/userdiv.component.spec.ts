import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdivComponent } from './userdiv.component';

describe('UserdivComponent', () => {
  let component: UserdivComponent;
  let fixture: ComponentFixture<UserdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
