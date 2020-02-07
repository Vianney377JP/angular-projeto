import {Component, Input, OnInit} from '@angular/core';
import {Paciente} from '../../model/paciente';

@Component({
  selector: 'app-pipe-exemplo',
  templateUrl: './pipe-exemplo.component.html',
  styleUrls: ['./pipe-exemplo.component.scss']
})
export class PipeExemploComponent implements OnInit {
  valor: number;
  multiplicador: number;
  data = new Date();
  @Input()
  medicos: Paciente[];

  filtro: string;

  numeros: number[] = [1, 2, 3, 4,5,6,7,8,9,10,11];

  constructor() { }

  ngOnInit() {
  }

}
