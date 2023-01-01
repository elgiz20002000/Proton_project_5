export const sidenav = () => {
    const nav_btns = document.querySelectorAll('.offcanvas li')
    nav_btns.forEach(item => {
        item.addEventListener('click' , () => {
            document.querySelector('.offcanvas').classList.add('hiding')
            document.querySelector('.offcanvas-backdrop').classList.remove('show')
        })
    })
}