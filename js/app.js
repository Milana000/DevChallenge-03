const span = document.getElementById('closenav');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelector('#nav-menu a');

span.addEventListener('click', openNav)
navLink.addEventListener('click', closeNav)

function openNav(ev){
    if (ev.target.tagName.toLowerCase() == 'span'){
        navMenu.setAttribute('style', 'width: 100%; transition: 0.3s;');
    } else {
        return
    }
}

function closeNav(ev){
    if(ev.target.tagName.toLowerCase() === 'a'){
        navMenu.style.width = '0'
    } else{
        return
    }
}