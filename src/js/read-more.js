(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal5-open5]'),
    closeModalBtn: document.querySelector('[data-modal5-close5]'),
    modal: document.querySelector('[data-modal5]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal5);
  refs.closeModalBtn.addEventListener('click', toggleModal5);

  function toggleModal5() {
    refs.modal.classList.toggle('is-hidden5');
  }
})();
