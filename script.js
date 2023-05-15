////////NavLinks-section animation//////////
///smooth scrolling///
const navBar=document.querySelector('.nav__links');

navBar.addEventListener('click',(e)=>{
    e.preventDefault();

    if(e.target.classList.contains('nav__url'))
    {
        const id=e.target.getAttribute('href');
        const section=document.querySelector(id);
        section.scrollIntoView({behavior:"smooth"});
    }
})

///navOpacity///

const opacityHandler= (e,opacity)=>{
    console.log(e);
    if(e.target.classList.contains('nav__url'))
    {
        const clicked=e.target;
        const siblings=clicked.closest('.navigation__bar').querySelectorAll(".nav__url");
        const siteLogo=document.querySelector(".site__owner");

        siblings.forEach(el => {
            if(el!==clicked)
            {
                el.style.opacity=opacity;
            }
        });

        siteLogo.style.opacity=opacity;
    }

}

navBar.addEventListener('mouseover',(e)=>{
    opacityHandler(e,0.5);
});
navBar.addEventListener('mouseout',(e)=>{
    opacityHandler(e,1);
});


////ScrollReveal Third Party Library///
ScrollReveal({
    reset:false,
    distance:'100px',
    duration:2500,
});

ScrollReveal().reveal('.intro__para', { delay: 200, origin:'left'});
ScrollReveal().reveal('.intro__img', { delay: 200, origin:'right'});
ScrollReveal().reveal('.links__icon', { delay: 200, origin:'bottom', interval:200});
ScrollReveal().reveal('.tech__stack div', { delay: 200, origin:'left', interval:200});
ScrollReveal().reveal('#resume-btn', { delay: 300, origin:'bottom'});
ScrollReveal().reveal('#skill-items', { delay: 50, origin:'right', interval:100});
ScrollReveal().reveal('#aboutme', { delay: 50, origin:'left'});
ScrollReveal().reveal('.section-2-sub-sec', { delay: 50, origin:'top'});
ScrollReveal().reveal('#section-4', { delay: 50, origin:'bottom'});


