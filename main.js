import {test1} from './gerador.js'
const f1 = document.getElementById("F1");
for(let i= 0 ; i < 20 ; i++) {
f1.innerHTML +=`<td><div class="quadrado">
                            <header class="numatomico">${test1[i].atomico}</header>
                            <span class="sigla">${test1[i].sigla}</span>
                            <span class="nomeext">${test1[i].nome}</span>
                            <span class="massa">${test1[i].massa}</span>
                    </div>
                </td>`
}
console.log("main.js");