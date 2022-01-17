alert(1)
const vardi=['Artūrs Liepa', 'Daniels Ozols', 'Ieva Kļava', 'Valdis Roze', 'Katrīna Telts'];
const balvas=['mašīna','skrīveru saldumi', 'telefons', 'kvadracikls', 'ceļojums'];
const naudaKopa=1000000;
let uzvaretajuSkaits=5;
let rand=Math.random()*10;
rand=Math.floor(rand); //noapalo skaitli uz leju
console.log(vardi[rand]); //izvada konsolee random vardus