import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-hotel',
  templateUrl: './liste-hotel.component.html',
  styleUrl: './liste-hotel.component.css'
})
export class ListeHotelComponent {
  hotel: any[] = [{ name: 'Hotel 1', description: 'Description 1', image: 'image1.jpg' },
  { name: 'Hotel 2', description: 'Description 2', image: 'image2.jpg' },
  { name: 'Hotel 3', description: 'Description 3', image: 'image3.webp' }
  ]; // Initialisez avec un tableau vide
}
