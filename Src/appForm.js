//general
const viewportWidth = window.innerWidth;
const mouse = document.querySelector(".mouse");
console.log(viewportWidth);


let widthMouse = 3;
let heightMouse = 5;

const sizeOfMouse = () => {
    
    if(viewportWidth < 425){
        widthMouse = 6;
        heightMouse = 10;
    }
    else if(viewportWidth >= 425 && viewportWidth < 768){
        widthMouse = 12;
        heightMouse = 20;
    }
    else if(viewportWidth >= 768 && viewportWidth < 1024){
        widthMouse = 18;
        heightMouse = 30;
    }
    else if(viewportWidth >= 1024 && viewportWidth < 1440){
        widthMouse = 24;
        heightMouse = 40;
    }
    else if(viewportWidth >= 1440 && viewportWidth < 2559){
        widthMouse = 30;
        heightMouse = 50;
    }
    else if(viewportWidth >= 2560){
        widthMouse = 36;
        heightMouse = 60;
    }

}

sizeOfMouse();

let borderMouse = 10*widthMouse/100;
let sizeOfDot = borderMouse*2;
let marginOfDot= sizeOfDot;
let distanceToMove = heightMouse - borderMouse * 2 - marginOfDot * 3/2 - sizeOfDot;
document.documentElement.style.setProperty('--width-mouse', `${widthMouse}px`);
document.documentElement.style.setProperty('--height-mouse', `${heightMouse}px`);
document.documentElement.style.setProperty('--border-mouse', `${borderMouse}px`);
document.documentElement.style.setProperty('--distance-to-move', `${Math.floor(distanceToMove)}px`);

//animation when overflow

const textarea = document.querySelector("#letter-content");

textarea.addEventListener("input", () => {
    if(textarea.scrollHeight > textarea.clientHeight){
        mouse.style.display =  'block';
    }
    else{
        mouse.style.display = 'none';
    }
})


const wrapper = document.querySelector(".wrapper");
const logo = document.querySelector("#logo");
const body = document.querySelector("body");

logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});
wrapper.getBoundingClientRect();
logo.getBoundingClientRect();

const heightWrapper = wrapper.offsetHeight;
const heightLogo = logo.offsetHeight;

const heightBody = heightWrapper + wrapper.offsetTop + 100 + 50;

document.body.style.height = heightBody;
console.log(heightLogo, heightWrapper, wrapper.offsetTop);


//for logo
const magneto = document.querySelector(".magneto-button");
const magnetoText  = document.querySelector(".magneto-button--child");
const dbg = document.querySelector("#debugger");

const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 3.2599837*viewportWidth/100;
    const magnetoTextStrength = 6.5199674*viewportWidth/100;
    const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.5;
    const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.5;

    dbg.innerHTML = `cursorX: ${Math.ceil(event.clientX)} <br>
    boxleft: ${Math.ceil(boundBox.left)} <br>
    cursorInsideButton: ${Math.floor(event.clientX - boundBox.left)} <br>
    relativeToTotalWidth: ${((event.clientX - boundBox.left) / magneto.offsetWidth).toFixed(2)} <br>
    shifted: ${((event.clientX - boundBox.left) / magneto.offsetWidth - 0.5).toFixed(2)}`;

    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    }) 

    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    })


}

const resetMagneto = (event) => {

    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })

    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
}

magneto.addEventListener("mousemove", activateMagneto)

magneto.addEventListener("mouseleave", resetMagneto)


//area to write letter
const letter = document.querySelector('#letter-content');
const result = document.querySelector('#result');
const statusDot = document.querySelectorAll(".status-dot");

function updateTextareaContent() {
    // let textarea = document.getElementById("letter-content");
    let text = document.querySelector(".template-text");

    let content = letter.value;

    if(content.trim() !== ""){
        text.classList.add("template-text--typing");
        for(let i=0; i < statusDot.length; i++){
            statusDot[i].classList.add("status-dot--typing");
        }
    }
    else{
        text.classList.remove("template-text--typing");
        for(let i=0; i < statusDot.length; i++){
            statusDot[i].classList.remove("status-dot--typing");
        }
    }

    result.textContent = content;
}


// control transition for label and dot of email 
let emailInput = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener('focus', function () {
    this.classList.add('not-empty');
});
emailInput.addEventListener('blur', function () {
    if (!this.value.trim()) {
        this.classList.remove('not-empty');
        this.classList.remove('invalid');
    }
    else{
        if(emailRegex.test(this.value)){
            this.classList.add('valid');
            this.classList.remove('invalid');
        }
        else{
            this.classList.add('invalid');
            this.classList.remove('valid');
        }
    }
});
emailInput.addEventListener('input', function () {
    this.classList.add('not-empty');
});

//upload button
const button = document.querySelector(".upload-button");
const fileInput = button.querySelector("#file")


button.addEventListener("click", () => {
    fileInput.click();
})

fileInput.onchange = ({target}) => {
    let file = target.files[0];
    if(file)
    {
        let fileName = file.name;
        uploadFile(fileName);
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload");
    xhr.upload.addEventListener("progress", ({loaded, total}) =>{
            let fileLoaded = Math.floor((loaded / total) * 100);
            let fileTotal = Math.floor(total / 1000);
            console.log(fileLoaded, fileTotal);
    })
    //need to learn about back-end to excute file and update
}

const textInUploadButton = document.querySelector(".upload-button-text");

const widthOfText = textInUploadButton.offsetWidth;

console.log(widthOfText);

document.documentElement.style.setProperty('--width-upload-button', `${widthOfText}px`)

//send-button
const $send_button = document.querySelector('.send-button');
let processing = false;

$send_button.addEventListener('click', () => {
  if (processing) return;
  let reverting = false;
  processing = true;
  const $endListener = document.createElement('div');
  $endListener.classList.add('send-button-transitionend-listener');
  $send_button.appendChild($endListener);
  const layoutTrigger = $send_button.offsetTop;
  $send_button.classList.add('s--processing');
  
  $endListener.addEventListener('transitionend', () => {
    if (reverting) return;
    reverting = true;
    $send_button.classList.add('s--reverting');
  });
  
  setTimeout(() => {
    $send_button.removeChild($endListener);
    $send_button.classList.remove('s--processing', 's--reverting');
    processing = false;
  }, 10000);
});

