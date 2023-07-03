// define some affirmation options
const vibes = [
    'You do what you know you should do when you should do it!',
    'You face your fears - the obstacle is the way!',
    'You can withstand more physiological pain than anyone!',
    'You are fast and efficient!',
    'You spend your time wisely!'
];

// select an affirmation randomly
const vibe = vibes[Math.floor(Math.random() * vibes.length)]

// store the target div
const vibeDiv = document.querySelector('.vibe');

// create a paragraph for the text
const vibeParagraph = document.createElement('p');

// insert the text in the new paragraph
vibeParagraph.textContent = vibe;

// add the new paragraph inside the target div
vibeDiv.appendChild(vibeParagraph);