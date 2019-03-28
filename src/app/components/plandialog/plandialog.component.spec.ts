import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandialogComponent } from './plandialog.component';

describe('PlandialogComponent', () => {
  let component: PlandialogComponent;
  let fixture: ComponentFixture<PlandialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlandialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlandialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
