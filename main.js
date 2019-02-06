const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let turn = 0;
let line1 = ['1', '2', '3']
let line2 = ['4', '5', '6']
let line3 = ['7', '8', '9']
let results = new Array(9);


let game = (results, turn) => {

if(turn % 2 === 0) {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else {
      console.log(`You pressed the "${str}" key`);
      console.log();
      console.log(key);
      console.log();
    }
  });
  
  console.log('X move');
  }
}




// let game = () => {
//   console.log(`${line1}\n${line2}\n${line3} \n`)
//   let turn = 1;
//   let winner = '';

//   let moves = (turn) => {
//     if(turn % 2 !== 0) {
//       rl.question(' Select where X wants to move', (answer) => {
//         if(answer < 4 && answer > 0) {
//           array = line1;
//           for (let i = 0; i < array.length; i++) {
//             if(array[i] === answer) {
//               array[i] = 'X'
//               moves(turn) 
//             }
//           }
//         } else if(answer < 7 && answer > 3) {
//           array = line2;
//           for (let i = 0; i < array.length; i++) {
//             if(array[i] === answer) {
//               array[i] = 'X'
//               moves(turn)
//             }
//           }
//         }else if(answer < 10 && answer > 6) {
//           array = line3;
//           for (let i = 0; i < array.length; i++) {
//             if(array[i] === answer) {
//               array[i] = 'X'
//               moves(turn)
//             }
//           }
//         }
//       })
//     } else if(turn 2 === 0) {
//       rl.question(' Select where Y wants to move', (answer) => {
//         array = line1;
//         if(answer < 4 && answer > 0) {
//           for (let i = 0; i < array.length; i++) {
//             if(array[i] === answer) {
//               array[i] = 'Y'
//               moves(turn)
//             }
//           }
//         } else if(answer < 7 && answer > 3) {
//           array = line2;
//           for (let i = 0; i < array.length; i++) {
//             if(array[i] === answer) {
//               array[i] = 'Y'
//               moves(turn)
//             }
//           }
//         }else if(answer < 10 && answer > 6) {
//           array = line3;
//           for (let i = 0; i < array.length; i++) {
//             if(array[i] === answer) {
//               array[i] = 'Y'
//               moves(turn)
//             }
//           }
//         }
//       })
//     }
//   }
//   moves(turn)
// }

game();