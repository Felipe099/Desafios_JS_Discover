// MEU CODIGO

// const id = document.getElementById('openModal')

// id.addEventListener('click', open)



// function open() {
// const abrir = document.querySelector('body div')
// abrir.classList.remove('invisible')

// }

// const aa = document.getElementById('openModal')

// aa.addEventListener('keydown', close)

// function close() {
// const abrir = document.querySelector('body div')
// abrir.classList.add('invisible')

// }

// CODIGO DO PROFESSOR

const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
  modalWrapper.classList.remove('invisible')
}


document.addEventListener('keydown', function(event) {
  
  const isEscKey = event.key === 'Escape'

  if (isEscKey) {
    modalWrapper.classList.add('invisible')
  }
})













