(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal7-open7]'),
    closeModalBtn: document.querySelector('[data-modal7-close7]'),
    modal: document.querySelector('[data-modal7]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal7);
  refs.closeModalBtn.addEventListener('click', toggleModal7);

  function toggleModal7() {
    refs.modal.classList.toggle('is-hidden7');
  }
})();
