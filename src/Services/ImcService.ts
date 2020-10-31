import { IImcSevice } from 'src/Interfaces/IImcService';
import { Imc } from 'src/Models/Imc';

export class ImcService implements IImcSevice {
    calcularImc(imc: Imc): number {
        if (!imc.altura) throw new Error('campo altura é obrigatório');
        if (!imc.peso) throw new Error('campo peso é obrigatório');
        var total = imc.peso / Math.pow(imc.altura, 2);
        var imctotal = total.toFixed(2);
        return parseFloat(imctotal);
    }

}