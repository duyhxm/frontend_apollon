const header = document.querySelector("header");
const dbgr = document.querySelector("#debugger");
const specifications = header.getBoundingClientRect();
const x = specifications.x;
const y = specifications.y;
const leftHeader = specifications.left;
const heightHeader = Math.ceil(specifications.height).toFixed(2);
const viewPortWidth = window.innerWidth;
const publicLetter = document.querySelector('#public_letter');
const specPublicLetter = publicLetter.getBoundingClientRect();
const yPublicLetter = specPublicLetter.top + window.scrollY;
const intro = document.querySelector("#introduction");
const letterSection = document.querySelector("#letter_section");
const aboutUs = document.querySelector("#about_us");
const arr = document.querySelectorAll('section');
const main = document.querySelector('main');
const t = Math.ceil(intro.getBoundingClientRect().height + letterSection.getBoundingClientRect().height + aboutUs.getBoundingClientRect().height).toFixed(2);
const letterContainer = document.querySelector(".content__container--template");
const heightLetterContainer = letterContainer.offsetHeight;


const g = 3.472222222*3/100*viewPortWidth + heightLetterContainer;
const heightPublicLetter = parseFloat(publicLetter.offsetHeight);

let k = Math.ceil(g).toFixed(2);
let j = intro.offsetHeight + aboutUs.offsetHeight + parseFloat(k) - parseFloat(heightHeader);
document.documentElement.style.setProperty('--h-content-container', `${Math.ceil(heightLetterContainer).toFixed(2)}px`);
document.documentElement.style.setProperty('--coordinates_nav_table', `${leftHeader}px`);
window.addEventListener('scroll', () =>{
    let a = Math.ceil(specifications.top + document.documentElement.scrollTop).toFixed(2);
    dbgr.innerHTML = `${document.documentElement.scrollLeft} <br> ${a} <br> ${t} <br> ${yPublicLetter} <br> ${g} <br> ${viewPortWidth} <br> ${j} <br> ${publicLetter.offsetHeight}`;
    if(parseFloat(a) >= j && parseFloat(a) <= j + heightPublicLetter)
    {
        header.classList.add("change");
    }
    else{
        header.classList.remove("change");
    }
})
const iconHamburger = document.querySelector("#button__hamburger");
const navTable = document.querySelector('#nav_table');
const templateText = document.querySelector('#template_text');
const widthTemplateText = templateText.offsetWidth;
document.documentElement.style.setProperty('--w-content-nav-table', `${Math.ceil(widthTemplateText)}px`);

iconHamburger.addEventListener('click', () => {
    if(iconHamburger.classList.contains('click')){
        iconHamburger.classList.remove('click');
        navTable.classList.remove('opened');
    }
    else{
        iconHamburger.classList.add('click');
        navTable.classList.add('opened');
    }
});
