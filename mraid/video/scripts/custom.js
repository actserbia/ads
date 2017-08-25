/* REUSABLE UTILITIES */

/* SETS IMAGE AS BACKGROUND */
function setBackgroundImage(elem, background, position, size) {
  if (elem && background) {
    elem.style.background = 'url(' + background + ') no-repeat ' + (position || '50% 50%') + ' / ' + (size || 'cover');
  }
}

/* REMOVES ELEMENTS WHEN IMAGE IS SET AS BACKGROUND */
function removeElems() {
  [].forEach.call(arguments, function (id) {
    var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
  });
}
