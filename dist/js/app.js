// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

// call function
showMenu('nav-toggle', 'nav-menu')

// remove menu mobile

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  // get nav menu
  const navMenu = document.getElementById('nav-menu')

  // remove class show-menu
  navMenu.classList.remove('show-menu')
}

// loop through links
navLink.forEach((n) => n.addEventListener('click', linkAction))

// scroll sections active link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionID = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionID + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionID + ']')
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// change background header
function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 200) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

// show scroll top
function scrollTop() {
  const scrolltop = document.getElementById('scroll-top')
  if (this.scrollY >= 560) {
    scrolltop.classList.add('show-scroll')
  } else {
    scrolltop.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollTop)

// mixitup filter products

let mixer = mixitup('.portfolio-container', {
  selectors: { target: '.portfolio-content' },
  animation: { duration: 400 },
})

// link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio-item')

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((L) => L.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
  }
}

linkPortfolio.forEach((l) => l.addEventListener('click', activePortfolio))

// swiper carousel

const mySwiper = new Swiper('.testimonial-container', {
  // optional parameters
  spaceBetween: 16,
  // directin:'vertical',
  loop: true,
  grabCursor: true,

  // if we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // navigation arrows
  // navigation:{
  //     nextEl:'.swiper-button-next',
  //     prevEl:'.swiper-button-prev'
  // }

  // breackpoint
  breackpoint: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

// GSAP ANIMATION
// gsap.from('.home-img', { opacity: 0, duration: 2, delay: 0.5, x: 60 })
// gsap.from('.home-data', { opacity: 0, duration: 2, delay: 0.8, y: 25 })

// gsap.from('.home-greeting,.home-name,.home-profession,.btn', { opacity: 0, duration: 2, delay: 1, y: 25 , ease:'expo.out',stagger:.2})
gsap.from('.logo', { opacity: 0, duration: 2, delay: 0.5, x: 60 })
gsap.from('.title,.btn', { opacity: 0, duration: 2, delay: 1, y: 25 , ease:'expo.out',stagger:.2})
gsap.from('.nav-logo,.nav-toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25 , ease:'expo.out',stagger:.2})

gsap.from('.nav-item', { opacity: 0, duration: 2, delay: 1.8, y: 25 , ease:'expo.out',stagger:.2})
// gsap.from('.home-social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25 , ease:'expo.out',stagger:.2})


const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if(html.classList.contains('dark')) {
      html.classList.remove('dark')
      e.target.innerHTML = 'Dark mode'
  } else {
      html.classList.add('dark')
      e.target.innerHTML = 'Light mode'
  }
})
