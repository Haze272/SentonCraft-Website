import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExperementialComponent } from './header-experemential.component';

describe('HeaderExperementialComponent', () => {
  let component: HeaderExperementialComponent;
  let fixture: ComponentFixture<HeaderExperementialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderExperementialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderExperementialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
