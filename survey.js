const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`Hey! ${name}`);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`Wow, ${activity} sounds fun!`);

    rl.question('What do you listen to while doing that? ', (music) => {
      console.log(`${music}. Oh, that sounds nice!`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        console.log(`${meal}, the most important meal of the day!`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          console.log(`${food}, Yummmm!`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`${sport} is a great sport!`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              console.log(`${power} ...With great power comes great responsibility...`);

              rl.close();
            });
          });
        });
      });
    });
  });
});