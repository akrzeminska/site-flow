import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionsComponent } from './constructions.component';

describe('ConstructionsComponent', () => {
  let component: ConstructionsComponent;
  let fixture: ComponentFixture<ConstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionsComponent]
    });
    fixture = TestBed.createComponent(ConstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
