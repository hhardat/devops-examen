(()=>{var t={897:(t,e)=>{const a=t=>!t||0===t.length;e.isEmpty=a,e.isValid=t=>(t=>!a(t)&&t.length>=8)(t)&&(t=>!!t.match(/[^A-Za-z0-9]/))(t)&&(t=>!!t.match(/[0-9]/))(t)}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}(()=>{try{const{isValid:n}=a(897),r=document.getElementById("gamerTagInput"),i=document.getElementById("gamerTagCheckButton"),o=document.getElementById("gamerTagFeedback");var t,e;r.addEventListener("change",(e=>{t=e.target.value})),i.addEventListener("click",(()=>{e=n(t)?"Gamer tag is valid":"Gamer tag is not  valid",o.textContent=e}))}catch(t){console.error(JSON.stringify(t))}})()})();