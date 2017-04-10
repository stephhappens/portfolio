import 'whatwg-fetch';

// Console Rick//
const commands = [
  {
    emoji: '😊',
    name: 'smile'
  }, {
    emoji: '🎶 ',
    name: 'music'
  }, {
    emoji: '🎵',
    name: 'note'
  }
];

{
  commands.forEach(({ name, emoji }) => window.console[name] = (...args) => console.log(`${emoji} ${args.join(', ')}`));
}

console.note('Never gonna give you up');
console.music('Never gonna let you down');
console.note('Never gonna run around and desert you');
console.smile();
