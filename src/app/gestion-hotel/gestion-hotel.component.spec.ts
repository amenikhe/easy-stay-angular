import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHotelComponent } from './gestion-hotel.component';

describe('GestionHotelComponent', () => {
  let component: GestionHotelComponent;
  let fixture: ComponentFixture<GestionHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHotelComponent]
    });
    fixture = TestBed.createComponent(GestionHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
