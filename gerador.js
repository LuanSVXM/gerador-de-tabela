import {NomeElementos} from './name_elements.js'
import {NumeroAtomico} from './atomic_element.js'
import {MassaElementos} from './mass_element.js'
import {SiglaElemento} from './sigla_element.js'
import {Elemento} from './element.class.js'
 let test = [];
 let test1 = [];
for (let i = 0 ; i<118 ;i++){
   test1.push(new Elemento(NumeroAtomico[i],SiglaElemento[i],NomeElementos[i],MassaElementos[i]))
}
export {test1}