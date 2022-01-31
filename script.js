
const vardi = ['Artūrs Liepa', 'Daniels Ozols', 'Ieva Kļava', 'Valdis Roze', 'Katrīna Telts'];
const balvas = ['mašīna', 'skrīveru saldumi', 'telefons', 'kvadracikls', 'ceļojums'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuSkaits; i++) { //jasak skaitit ar 0. jo tad ari 5 aizies
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand); //noapalo skaitli uz leju
    let uzvaretajs = vardi[rand]; //izvada konsolee random vardus
    rindas.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${uzvaretajs}</td>
    </tr>`
}