const path = document.location.pathname.replace('/', '')
const links = document.querySelectorAll('.navbar-nav .nav-item .nav-link')

links.forEach(link => {
  let pathname = link.pathname.replace('/', '')

  if (pathname === path) {
    link.classList.add('active')
  }
});