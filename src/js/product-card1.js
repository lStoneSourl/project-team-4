(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal9-open9]'),
    closeModalBtn: document.querySelector('[data-modal9-close9]'),
    modal: document.querySelector('[data-modal9]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal9);
  refs.closeModalBtn.addEventListener('click', toggleModal9);

  function toggleModal9() {
    refs.modal.classList.toggle('is-hidden9');
  }
})();
