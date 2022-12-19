(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal4-open4]'),
    closeModalBtn: document.querySelector('[data-modal4-close4]'),
    modal: document.querySelector('[data-modal4]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal4);
  refs.closeModalBtn.addEventListener('click', toggleModal4);

  function toggleModal4() {
    refs.modal.classList.toggle('is-hidden4');
  }
})();
