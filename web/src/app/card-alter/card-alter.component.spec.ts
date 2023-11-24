import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlterComponent } from './card-alter.component';

describe('CardAlterComponent', () => {
  let component: CardAlterComponent;
  let fixture: ComponentFixture<CardAlterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAlterComponent]
    });
    fixture = TestBed.createComponent(CardAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
