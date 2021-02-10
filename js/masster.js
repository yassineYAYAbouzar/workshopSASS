var sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.lastElementChild.addEventListener('click', () =>{
        section.style.maxHeight="0px";
        section.style.transform="scale(0.0)";
    });
});