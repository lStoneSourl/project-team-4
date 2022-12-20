(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal3-open3]'),
    closeModalBtn: document.querySelector('[data-modal3-close3]'),
    modal: document.querySelector('[data-modal3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal3);
  refs.closeModalBtn.addEventListener('click', toggleModal3);

  function toggleModal3() {
    refs.modal.classList.toggle('is-hidden3');
  }
})();
