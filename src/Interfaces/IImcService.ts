import { Observable } from 'rxjs';
import { Imc } from 'src/Models/Imc';

export interface IImcSevice {
    calcularImc(imc: Imc): number
}