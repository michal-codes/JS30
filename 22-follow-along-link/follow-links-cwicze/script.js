const triggers = document.querySelectorAll('a');

// dodać do DOM element spac o klasie hightlight
const highlight = document.createElement('span');
document.body.appendChild(highlight);


function addHighlight() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    highlight.classList.add('highlight');
    highlight.style.height = `${coords.height}px`;
    highlight.style.width = `${coords.width}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

function removeHighlight() {
    highlight.classList.remove('highlight');

}

// najpierw bede słuchał eventu mouseenter
triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', addHighlight);
})
triggers.forEach(trigger => {
    trigger.addEventListener('mouseout', removeHighlight);
})
