import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHotelComponent } from './liste-hotel.component';

describe('ListeHotelComponent', () => {
  let component: ListeHotelComponent;
  let fixture: ComponentFixture<ListeHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
