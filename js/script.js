// SECTION => RESUMO
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
  const divContainerAtivado = document.querySelector('.container-ativado');
  divContainerAtivado.classList.toggle('display-none');
});

//SECTION => DISCUSSÕES: CRIAR TOPICO
const btnEnviarTopico = document.querySelector('.btn-enviar-topico');
btnEnviarTopico.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.querySelector('.form-criar-topico');
  form.classList.toggle('form-criar-topico-oculto');
  btnCriarTopico.classList.toggle('display-none');
  const divTopicoEnviado = document.querySelector('.topico-enviado');
  divTopicoEnviado.classList.toggle('display-none');
});


// SECTION => DISCUSSÕES ACCORDION => PERGUNTAS
const topicoAberto = document.querySelector('.topico-aberto');
const topicoAccordion = document.querySelector('.topico-accordion');
const abrirTopico = document.querySelector('.accordion');

abrirTopico.addEventListener('click', () => {
  topicoAberto.classList.toggle('display-none');
  topicoAccordion.classList.toggle('display-none');
});

topicoAccordion.addEventListener('click', () => {
  topicoAberto.classList.toggle('display-none');
  topicoAccordion.classList.toggle('display-none');
});
