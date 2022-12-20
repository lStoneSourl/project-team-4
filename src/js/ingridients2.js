(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal8-open8]'),
    closeModalBtn: document.querySelector('[data-modal8-close8]'),
    modal: document.querySelector('[data-modal8]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal8);
  refs.closeModalBtn.addEventListener('click', toggleModal8);

  function toggleModal8() {
    refs.modal.classList.toggle('is-hidden8');
  }
})();
