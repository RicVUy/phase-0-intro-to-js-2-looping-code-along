// Code your solutions in this file
const names =["Ric", "Edna","Arlan", "Julius"];
const messages = [];
function writeCards(names, eventNames){
    //const names =["Ric", "Edna","Arlan", "Julius"];
//const messages = [];
    for (let i = 0; i < names.length; i ++){
  let message =  `Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`;
    messages.push(message);
} return messages;
}
 function countDown(number){
   // let countdown = number > 0;
    while (number >= 0){
     console.log(number);
     number--;
    }
 }