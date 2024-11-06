import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.css'
})
export class ExerciceComponent {
name: any;
nom: any;
age: any;
a:any= 10;
b:any= 20;
img= "img1.png";
s=0;

afficher():void {
  this.s=this.a+this.b;
  alert("la somme de "+this.a+" et "+this.b+" = "+this.s);
}
effacer():void {
this.nom="";
this.age="";
}
}