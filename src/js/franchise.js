(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal2-open2]'),
    closeModalBtn: document.querySelector('[data-modal2-close2]'),
    modal: document.querySelector('[data-modal2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal2);
  refs.closeModalBtn.addEventListener('click', toggleModal2);

  function toggleModal2() {
    refs.modal.classList.toggle('is-hidden2');
  }
})();
