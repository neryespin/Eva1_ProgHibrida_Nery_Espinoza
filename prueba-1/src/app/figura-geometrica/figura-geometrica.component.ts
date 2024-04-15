import { Component, OnInit } from '@angular/core';
import { IonItem, IonList, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CirculoComponent } from '../circulo/circulo.component';
/*import { FormsModule } from '@angular/forms';*/


@Component({
  selector: 'app-figurageometrica',
  templateUrl: './figura-geometrica.component.html',
  styleUrls: ['./figura-geometrica.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonInput, IonSelect, IonSelectOption,TrianguloComponent, CirculoComponent, IonButton ]
})
export class FigurageometricaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  

}

