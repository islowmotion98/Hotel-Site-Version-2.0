const $btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const headerHidden = document.getElementById('header-hidden');
    headerHidden.classList.toggle('active');
    $btnMobile.classList.toggle('transform');
}
$btnMobile.addEventListener('click', toggleMenu);
$btnMobile.addEventListener('touchstart', toggleMenu);