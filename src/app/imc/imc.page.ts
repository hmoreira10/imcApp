import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/Models/Imc';
import { ImcService } from 'src/Services/ImcService';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  imc: Imc = new Imc();
  resultado: number;
  constructor(private _imcService: ImcService) {
    this.resultado = 0;
  }

  ngOnInit() {
  }

  calcular() {
    this.resultado = this._imcService.calcularImc(this.imc);
  }
}
