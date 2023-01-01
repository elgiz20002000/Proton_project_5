export const filter = () => {
  const types = document.querySelectorAll('.types .type')
  const imgs = document.querySelectorAll('.custom figure')

  types.forEach(item => {
    item.addEventListener('click' , () => {
      if(!item.classList.contains('active')) {
        types.forEach(item => item.classList.remove('active'))
        item.classList.add('active')
      }
      imgs.forEach(item => {item.style = 'display:block;'})
      const filter =  item.getAttribute('data-filter')
      if(filter != 'all') {
        imgs.forEach(item => {item.classList.remove('active')})
        imgs.forEach(item => {
          if(item.getAttribute('data-category') != filter) {
            item.classList.add('active')
          }
        })
      } else {
        // imgs.forEach(item => {item.classList.add('active')})
        imgs.forEach(item => {item.classList.remove('active')})
      }
    })
  })
}