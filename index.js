function toggleVisibility(id) {
  var element = document.getElementById(id);
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function highlightBlocks() {
  var blok = document.querySelectorAll('.oorzaakEen');

  blok.forEach(function(element) {
      element.style.backgroundColor = 'green';
  });
}

function highlightBlocks2() {
var blok = document.querySelectorAll('.oorzaakTwee');

blok.forEach(function(element) {
    element.style.backgroundColor = 'green';
});
}

function highlightBlocks3() {
var blok = document.querySelectorAll('.oorzaakDrie');

blok.forEach(function(element) {
    element.style.backgroundColor = 'green';
});
}

function highlightBlocks4() {
var blok = document.querySelectorAll('.oorzaakVier');

blok.forEach(function(element) {
    element.style.backgroundColor = 'green';
});
}

function unhighlightBlocks() {
var blok = document.querySelectorAll('.oorzaakEen, .oorzaakTwee, .oorzaakDrie, .oorzaakVier');

blok.forEach(function(element) {
    element.style.backgroundColor = 'white';
});
}






