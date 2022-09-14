const click = document.querySelector('.click')
const mode = document.querySelector('.mode')
const icon = document.getElementById('sun')
const footer = document.querySelector('.footer')
console.log(icon.innerHTML)


click.addEventListener('click',function(o){
    click.classList.toggle('on')
    mode.classList.toggle('mode-malem')
    footer.classList.toggle('footer-malem')
    document.body.classList.toggle('malam')
    icon.classList.toggle('textt')
    BeforeIcon = 'Mode Terang <i class="bi bi-brightness-high-fill text-warning"></i>'
    if (icon.innerHTML == BeforeIcon){
        icon.innerHTML = 'Mode Gelap <i class="bi bi-moon-fill text-light"></i>'
    } else{
        icon.innerHTML = 'Mode Terang <i class="bi bi-brightness-high-fill text-warning"></i>'
        
    }
})
