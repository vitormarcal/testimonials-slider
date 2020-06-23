const depoymentsList = Array.from(document.querySelectorAll('.depoyments__item'));

const findFeaturedIndex = () => depoymentsList.findIndex(e => e.classList.contains("depoyments__item--featured"));
const findNext = (index) => index === depoymentsList.length - 1 ? 0 : index + 1
const findPrevious = (index) => index === 0 ? depoymentsList.length - 1 : index - 1

document.querySelector('.slider__arrow--prev')
        .addEventListener('click', previous);

document.querySelector('.slider__arrow--next')
        .addEventListener('click', next)


function previous() {
    let current = findFeaturedIndex();
    let previous = findPrevious(current);

    toggleClass(current, previous);
}

function next() {
    let current = findFeaturedIndex();
    let next = findNext(current);

    toggleClass(current, next);
}

function toggleClass(from, to) {
    depoymentsList[from].classList.remove('depoyments__item--featured');
    depoymentsList[from].classList.add('depoyments__item--invisible');
    depoymentsList[to].classList.remove('depoyments__item--invisible');
    depoymentsList[to].classList.add('depoyments__item--featured');
}