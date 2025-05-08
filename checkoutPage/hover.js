const HoverElements = document.querySelectorAll('.mapActive-container');

// Add activeDate class to the first element
if (HoverElements.length > 0) {
    HoverElements[0].classList.add('activeDate');
}

function activateElement(element) {
    HoverElements.forEach(el => el.classList.remove('activeDate'));
    element.classList.add('activeDate');
}

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains('mapActive-container')) {
        activateElement(element);
    }
});

HoverElements.forEach(hoverboy => {
    hoverboy.addEventListener('touchstart', () => activateElement(hoverboy));
    hoverboy.addEventListener('mousedown', () => activateElement(hoverboy));
});