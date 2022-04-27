const btnVerMais = document.querySelector('.btn-ver-mais');

const paragrafoOculto = document.querySelectorAll('.p-oculto');

console.log(paragrafoOculto);

function toggleResumo(event) {
  paragrafoOculto.forEach((paragrafo) => {
    paragrafo.classList.toggle('p-oculto');
    btnVerMais.innerHTML = paragrafo.classList.contains('p-oculto') ? 'Ver mais' : 'Ver menos';
  });
}

btnVerMais.addEventListener('click', toggleResumo);