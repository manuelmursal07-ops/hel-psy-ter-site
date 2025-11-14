// script.js — Dark mode + active nav + image swap
(function(){
const root = document.documentElement;
const themeKey = 'helpsy-theme';


function applyTheme(theme){
if(theme === 'dark'){
root.setAttribute('data-theme','dark');
swapBackgrounds('dark');
} else {
root.removeAttribute('data-theme');
swapBackgrounds('light');
}
}


function swapBackgrounds(mode){
const hero = document.querySelector('.hero-right');
if(hero){
hero.style.backgroundImage = mode === 'dark'
? "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')"
: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80')";
}


document.querySelectorAll('[data-img-day]').forEach(el => {
const day = el.getAttribute('data-img-day');
const night = el.getAttribute('data-img-night') || day;
el.src = mode === 'dark' ? night : day;
});
}


// init
const saved = localStorage.getItem(themeKey) || 'light';
applyTheme(saved);


// toggle button
document.addEventListener('click', e => {
if(e.target.matches('#themeToggle') || e.target.closest('#themeToggle')){
const current = localStorage.getItem(themeKey) === 'dark' ? 'dark' : 'light';
const next = current === 'dark' ? 'light' : 'dark';
localStorage.setItem(themeKey,next);
applyTheme(next);
updateThemeIcon(next);
}
});


function updateThemeIcon(theme){
const btn = document.getElementById('themeToggle');
if(!btn) return;
btn.textContent = theme === 'dark' ? '☀️' : '🌙';
btn.setAttribute('aria-label', theme === 'dark' ? 'Lichtmodus' : 'Nachtmodus');
}


updateThemeIcon(saved);


// mark active nav link on page load
document.addEventListener('DOMContentLoaded', () => {
const links = document.querySelectorAll('nav a');
let path = window.location.pathname.split('/').pop();
if(!path) path = 'index.html';
links.forEach(a => {
const href = a.getAttribute('href');
if(href === path || (href === 'index.html' && path === 'index.html')){
a.classList.add('active');
}
});
});


})();