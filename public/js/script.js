console.log(',s')

// modals 
const makeModal = modalSel => {
	const modalEl = document.querySelector(modalSel);
		btnEl = document.querySelector(modalSel + '-btn'),
		closeEl = document.querySelector(modalSel + ' .modal-wrapper__bg'),

	btnEl.addEventListener('click', () => modalEl.classList.add('active'));
	closeEl.addEventListener('click', () => modalEl.classList.remove('active'));
}

makeModal('#modal-1');
makeModal('#modal-й');
// end modals