import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWelcomeComponent } from './header-welcome.component';

describe('HeaderWelcomeComponent', () => {
  let component: HeaderWelcomeComponent;
  let fixture: ComponentFixture<HeaderWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderWelcomeComponent]
    });
    fixture = TestBed.createComponent(HeaderWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
