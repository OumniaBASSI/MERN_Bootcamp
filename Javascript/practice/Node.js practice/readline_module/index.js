// Old version with callbacks and util.log
// let readline = require('readline')
// let util = require('util')

// let RL = readline.createInterface(process.stdin, process.stdout)

// RL.question('What is your name ', (nom)=>{
//     // console.log(`you are doing ${feeling}`);
//     // RL.close()
    
//     RL.setPrompt(`${nom} how old are you? `);

//     RL.prompt();

//     RL.on('line', (age)=> {
//         if(age < 18){
//             util.log(`${nom.trim()} beacause you are ${age} years old, you cannot proceed`)
//             RL.close();
//         }else {
//             util.log(`${nom.trim()} is great that you are ${age} years old, now you can enjoy our service`)
//             RL.close();
//         }
//     })
// })

// Modern version with readline/promises and async/await
const readline = require('readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  const name = await rl.question('What is your name? ');
  const age = await rl.question(`${name}, how old are you? `);

  if (age < 18) {
    console.log(`${name.trim()}, because you are ${age} years old, you cannot proceed`);
  } else {
    console.log(`${name.trim()}, it is great that you are ${age} years old, now you can enjoy our service`);
  }
  
  rl.close();
}

run();
