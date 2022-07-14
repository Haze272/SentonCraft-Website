import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartActiveComponent } from './cart-active.component';

describe('CartActiveComponent', () => {
  let component: CartActiveComponent;
  let fixture: ComponentFixture<CartActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
