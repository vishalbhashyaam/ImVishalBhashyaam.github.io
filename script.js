function toggleMenu() {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburger-icon')

  menu.classList.toggle('open')
  icon.classList.toggle('open')
}

document.addEventListener('DOMContentLoaded', () => {
  const sectionLinks = document.querySelectorAll('a[href^="#"]')

  sectionLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })
})

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0) // Scroll to the top of the page
})

document.addEventListener('DOMContentLoaded', () => {
  const scrollElements = document.querySelectorAll('.animate-on-scroll')

  // Function to trigger staggered animations (for both reload and scroll)
  const triggerAnimation = (elements) => {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible')
      }, index * 200) // 200ms delay between animations
    })
  }

  // Intersection Observer options
  const observerOptions = {
    root: null, // Viewport as root
    threshold: 0.1, // Trigger when 10% is visible
  }

  // Intersection Observer callback
  const observerCallback = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, index * 200) // Stagger animations on scroll
      } else {
        entry.target.classList.remove('visible') // Reset animation when out of view
      }
    })
  }

  // Initialize Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions)

  // Observe all elements with animate-on-scroll class
  scrollElements.forEach((el) => observer.observe(el))

  // Trigger animations on page load
  triggerAnimation(scrollElements)
})

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.createElement('button')
  themeToggleButton.textContent = 'Light Theme' // Since dark theme is default
  themeToggleButton.className = 'btn'
  themeToggleButton.style.position = 'fixed'
  themeToggleButton.style.bottom = '2rem'
  themeToggleButton.style.right = '2rem'
  themeToggleButton.style.zIndex = '1000'
  document.body.appendChild(themeToggleButton)

  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('tokyo-night-theme')
    themeToggleButton.textContent = document.body.classList.contains(
      'tokyo-night-theme'
    )
      ? 'Light Theme'
      : 'Dark Theme'
  })
})
