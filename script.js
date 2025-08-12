// DOM elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Story template — :customname: will be replaced by user input
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. ' +
                'When they got to :inserty:, they saw :customname: standing there. ' +
                'Without warning, :insertx: :insertz:. Everyone was shocked, ' +
                'but :customname: just laughed.';

// Arrays for placeholders
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Pick a random value from an array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Event listener for button
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  // Replace placeholders with random choices
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  // Replace :customname: with user input or fallback to "Bob"
  let name = customName.value.trim();
  if (name === '') {
    name = 'Bob';
  }
  newStory = newStory.replace(/:customname:/g, name);

  // Display the story
  story.textContent = newStory;
  story.style.display = 'block';
}
