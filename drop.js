// ==UserScript==
// @name         First
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         https://*.dropbox.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.5.2/Rx.js
// ==/UserScript==
document.getElementsByTagName('html')[0].style.pointerEvents = 'none';
window.addEventListener("load", function(event) {
console.log("All resources finished loading!");
window.onload = document.getElementsByTagName('html')[0].style.pointerEvents = 'auto';
    var source = Rx.Observable.fromEvent(document, 'click');
    var subscription = source.subscribe(function (e) {
    var el = e.target;
    iNotI(el);
});

function iNotI(el) {
   // if(el.hasAttribute('aria-label') || el.hasAttribute('alt')){
    // console.log(el.getAttribute('alt'));
    // console.log(el.getAttribute('aria-label'));}else
    if (el.nodeName == 'IMG' || el.nodeName == 'svg' || el.parentElement.nodeName == 'svg') {
        console.log('qwe');
        ariaL(el);
    } else if (el.hasAttribute('href')) {
        console.log('hjjvg');
        console.log("view:" + el.innerText);
    } else if(el.nodeName == 'BUTTON' || el.parentElement.nodeName == 'BUTTON'){
      console.log("action:" + el.innerText);
      }else {
        console.log('PN' + el.parentElement.nodeName + "N" + el.nodeName);
    }
}

//function upload(el){
//    el.onchange = function(){
//     console.log(el.value);
//    };
//}

function ariaL(el) {
    if (el.hasAttribute('ALT')){
        console.log("view:" + el.getAttribute('alt'));
    } else if (el.hasAttribute('aria-label')) {
        console.log("view:" + el.getAttribute('aria-label'));
    } else if (el.parentElement.hasAttribute('aria-label')){
        console.log("view:" + el.parentElement.getAttribute('aria-label'));
    }
}
      });