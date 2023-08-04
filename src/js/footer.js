const contenedorGmail = document.querySelector(".red__gmail");
const contenedorFacebook = document.querySelector(".red__facebook");
const contenedorYoutube = document.querySelector(".red__youtube");
const contenedorInstagram = document.querySelector(".red__instagram");
const contenedorHijo = document.querySelectorAll('.red__nombre');
const contenedorIcono = document.querySelectorAll('.social path');
const contenedorCirculo = document.querySelector('.social circle'); 

function agregarEventoHover(contenedor, contH, cntI) {
    contenedor.addEventListener('mouseover', () => {
      contH.classList.add('hover');
      cntI.classList.add('hover');
    });
    
    contenedor.addEventListener('mouseout', () => {
      contH.classList.remove('hover');
      cntI.classList.remove('hover');
    });
}

const contenedores = [
    { contenedor: contenedorGmail, hijo: contenedorHijo[0], icono: contenedorIcono[0] },
    { contenedor: contenedorFacebook, hijo: contenedorHijo[1], icono: contenedorIcono[1] },
    { contenedor: contenedorYoutube, hijo: contenedorHijo[2], icono: contenedorIcono[2] },
    { contenedor: contenedorInstagram, hijo: contenedorHijo[3], icono: contenedorIcono[3] },
    { contenedor: contenedorInstagram, hijo: contenedorHijo[3], icono: contenedorCirculo }
];

for (let i = 0; i < contenedores.length; i++) {
    agregarEventoHover(contenedores[i].contenedor, contenedores[i].hijo, contenedores[i].icono);
}
  