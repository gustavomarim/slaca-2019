const btnVerMais = document.querySelector('.btn-ver-mais');

const paragrafoOculto = document.querySelectorAll('.p-oculto');

function toggleResumo(event) {
  paragrafoOculto.forEach((paragrafo) => {
    paragrafo.classList.toggle('p-oculto');
    btnVerMais.innerHTML = paragrafo.classList.contains('p-oculto') ? 'Ver mais' : 'Ver menos';
  });
}

btnVerMais.addEventListener('click', toggleResumo);

const btnCriarTopico = document.querySelector('.btn-criar-topico');

btnCriarTopico.addEventListener('click', () => {
  const form = document.querySelector('.form-criar-topico');
  form.classList.toggle('form-criar-topico-oculto');
});