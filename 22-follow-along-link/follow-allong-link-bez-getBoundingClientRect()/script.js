const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
document.body.appendChild(highlight);

function addHighlight(e) {
  //   const linkCoords = this.getBoundingClientRect();
  //   console.log(linkCoords);
  //   const coords = {
  //     width: linkCoords.width,
  //     height: linkCoords.height,
  //     top: linkCoords.top + window.scrollY,
  //     left: linkCoords.left + window.scrollX
  //   };
  const coords = {
    width: this.offsetWidth,
    height: this.offsetHeight,
    top: this.offsetTop,
    left: this.offsetLeft
  };
  highlight.classList.add('highlight');
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', addHighlight);
});
triggers.forEach(trigger => {
  trigger.addEventListener('mouseout', () =>
    highlight.classList.remove('highlight')
  );
});
