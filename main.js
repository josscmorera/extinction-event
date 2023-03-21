// Step 1: Add event listener to `li` elements in the first `ol` to apply line-through effect
let ol = document.querySelector('ol');
let olItems = ol.querySelectorAll('li');

olItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.textDecoration = 'line-through';
  });
});

// Step 2: Add event listener to `li` elements in the second `ul` to apply opacity effect
let ul = document.querySelector('ul');
let ulItems = ul.querySelectorAll('li');

ulItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.opacity = 0.5;
  });
});

// Step 3: Add event listener to images to apply desired effect
let imagesDiv = document.querySelector('#row');
let images = imagesDiv.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.style.opacity = 0.5;
  });
});

// Step 4: Add event listener to "Meteor Me" button to apply effects to all elements
let meteorButton = document.querySelector('#destroy-all');

meteorButton.addEventListener('click', () => {
  olItems.forEach(item => {
    item.style.textDecoration = 'line-through';
  });

  ulItems.forEach(item => {
    item.style.opacity = 0.5;
  });

  images.forEach(image => {
    image.style.opacity = 0.5;
  });
});
