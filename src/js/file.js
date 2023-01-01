export const file = () => {
    const files = document.querySelectorAll('input[type=file]')
    files.forEach(item => {
        item.addEventListener('change' , () => {
            item.previousElementSibling.value = item.value
        })
    })
}