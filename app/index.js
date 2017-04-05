import 'whatwg-fetch';
const commands = [
  {
    emoji: '🦄',
    name: 'unicorn'
  }, {
    emoji: '✨',
    name: 'sparkles'
  }
];

{
  commands.forEach(({ name, emoji }) => window.console[name] = (...args) => console.log(`${emoji} ${args.join(', ')}`));
}

console.unicorn('Hi! Thanks for taking a look at my work. I am currently seeking full-time employment.');
console.sparkles('I would love to be your next employee! Reach me at stephanie.n.winn@gmail.com. Talk soon!');
