let fb = document.getElementById("facebook");
let yt = document.getElementById("youtube");
let tt = document.getElementById("twitter");
let git = document.getElementById("github");

console.log(yt,tt,fb,git);

fb.addEventListener("click", function() {
  window.open("https://www.facebook.com/duyhxm0", "_blank");
});

yt.addEventListener("click", function() {
  window.open("https://www.youtube.com/@duyhxm", "_blank");
});

tt.addEventListener("click", function () {
  window.open("https://twitter.com/", "_blank");
});

git.addEventListener("click", function () {
  window.open("https://github.com/duyhxm", "_blank");
});



let getSibling = (e) => {
  let siblings = [];

  if(!e.parentNode){
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  while(sibling != null){
    if(sibling.nodeType == 1 && sibling != e){
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
}

let result = getSibling(document.querySelector('a'));
let siblingText = result.map(e => e.innerHTML);
console.log(siblingText);
