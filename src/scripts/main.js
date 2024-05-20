document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.header');
    const heigthHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual > heigthHero) {
            ocultaBackgroundDoHeader();
        } else {
            exibeBackgroundDoHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            aba.classList.toggle('details__list--is-active');
            botao.target.classList.toggle('details__tabs__button--is-active');
        })
    }
})

function ocultaBackgroundDoHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function exibeBackgroundDoHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}