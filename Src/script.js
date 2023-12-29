const header = document.querySelector("header");
const dbgr = document.querySelector("#debugger");
const specifications = header.getBoundingClientRect();
const x = specifications.x;
const y = specifications.y;
const rightHeader = specifications.right;
const viewPortWidth = window.innerWidth;

console.log(rightHeader);

document.documentElement.style.setProperty('--coordinates_nav_table', `${viewPortWidth - rightHeader}px`);
window.addEventListener('scroll', () =>{
    let a = specifications.top + document.documentElement.scrollTop;
    dbgr.innerHTML = `${document.documentElement.scrollLeft} <br> ${Math.ceil(a).toFixed(2)}`;
})
const iconHamburger = document.querySelector("#button__hamburger");
const navTable = document.querySelector('#nav_table');

iconHamburger.addEventListener('click', () => {
    if(iconHamburger.classList.contains('click')){
        iconHamburger.classList.remove('click');
        navTable.classList.remove('opened');
    }
    else{
        iconHamburger.classList.add('click');
        navTable.classList.add('opened');
    }
})

// if(viewPortWidth >= 1440 && viewPortWidth < 2559){
//     document.documentElement.style.setProperty("--w-button-letter", '130px');
//     document.documentElement.style.setProperty("--h-button-letter", '56px');
//     document.documentElement.style.setProperty("--s-icon-pencil", '24px');
//     document.documentElement.style.setProperty("--fs-button-letter", '20px');
//     document.documentElement.style.setProperty("--g", '8px');
//     document.documentElement.style.setProperty("--b", '15px');
      
// }