export const seccionesOcultas = document.querySelectorAll('.hiden');

const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry. isIntersecting);

    })
})

seccionesOcultas.forEach((seccion)=>observe(seccion));