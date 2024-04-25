function toggleVisibility(id) {
  let element = document.getElementById(id);
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function unhighlightBlocks() {
let blok = document.querySelectorAll('.oorzaakEen, .oorzaakTwee, .oorzaakDrie, .oorzaakVier, .oorzaakEen2, .oorzaakTwee2, .oorzaakDrie2, .oorzaakVier2');

blok.forEach(function(element) {
    element.style.backgroundColor = 'white';
});
}

function highlightBlocks() {
  let blok = document.querySelectorAll('.oorzaakEen');
  let blok2 = document.querySelectorAll('.oorzaakEen2');
  
  blok.forEach(function(element) {
      element.style.backgroundColor = 'rgb(225, 91, 109)';
  });
  blok2.forEach(function(element) {
    element.style.backgroundColor = 'rgb(235, 178, 33)';
  });
  }

function highlightBlocks2() {
  let blok = document.querySelectorAll('.oorzaakTwee');
  let blok2 = document.querySelectorAll('.oorzaakTwee2');
  
  blok.forEach(function(element) {
      element.style.backgroundColor = 'rgb(225, 91, 109)';
  });
  blok2.forEach(function(element) {
    element.style.backgroundColor = 'rgb(235, 178, 33)';
  });
  }

function highlightBlocks3() {
  let blok = document.querySelectorAll('.oorzaakDrie');
  let blok2 = document.querySelectorAll('.oorzaakDrie2');
  
  blok.forEach(function(element) {
      element.style.backgroundColor = 'rgb(225, 91, 109)';
  });
  blok2.forEach(function(element) {
    element.style.backgroundColor = 'rgb(235, 178, 33)';
  });
  }

function highlightBlocks4() {
let blok = document.querySelectorAll('.oorzaakVier');
let blok2 = document.querySelectorAll('.oorzaakVier2');

blok.forEach(function(element) {
    element.style.backgroundColor = 'rgb(225, 91, 109)';
});
blok2.forEach(function(element) {
  element.style.backgroundColor = 'rgb(235, 178, 33)';
});
}