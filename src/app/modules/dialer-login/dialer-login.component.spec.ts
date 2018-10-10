import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialerLoginComponent } from './dialer-login.component';

describe('DialerLoginComponent', () => {
  let component: DialerLoginComponent;
  let fixture: ComponentFixture<DialerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
