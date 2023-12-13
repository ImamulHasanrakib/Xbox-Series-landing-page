const navToggler = document.querySelector('.nav_toggler')
const navClose = document.querySelector('.nav_close_btn')
const navItems = document.querySelector('.nav_items')
const overLay = document.querySelector('.overlay')

navToggler.addEventListener('click', () => {
  navItems.classList.add('nav_active')
  overLay.classList.add('overlay_active')
  document.querySelector('body').classList.add('body_active')
})
navClose.addEventListener('click', () => {
  navItems.classList.remove('nav_active')
  overLay.classList.remove('overlay_active')
  document.querySelector('body').classList.remove('body_active')
})

// accordion

const accordionHeader = document.querySelectorAll('.accordion_header')
const accordionIcon = document.querySelectorAll('.accordion_header .icon')
const accordionContent = document.querySelectorAll('.accordion_content')

accordionHeader.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    accordionContent[index].classList.toggle('accordion_active')
    accordionIcon[index].classList.toggle('active_Icon')
  })
})
