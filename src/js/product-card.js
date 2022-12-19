(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal1-open1]'),
    closeModalBtn: document.querySelector('[data-modal1-close1]'),
    modal: document.querySelector('[data-modal1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal1);
  refs.closeModalBtn.addEventListener('click', toggleModal1);

  function toggleModal1() {
    refs.modal.classList.toggle('is-hidden1');
  }
})();
