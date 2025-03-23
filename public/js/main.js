document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      // Toggle icon between bars and times
      const icon = mobileMenuBtn.querySelector("i")
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navLinks &&
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      navLinks.classList.remove("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })
  // Hero Carousel
  const heroSlides = document.querySelectorAll(".hero-slide")
  let currentHeroSlide = 0

  function nextHeroSlide() {
    heroSlides[currentHeroSlide].classList.remove("active")
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length
    heroSlides[currentHeroSlide].classList.add("active")
  }

  // Change slide every 5 seconds
  setInterval(nextHeroSlide, 5000)

  // Our Pieces Slider
  const pieceItems = document.querySelectorAll(".piece-item")
  const thumbnails = document.querySelectorAll(".thumbnail")
  const dots = document.querySelectorAll(".dot")
  const piecesPrev = document.querySelector(".pieces-slider .prev")
  const piecesNext = document.querySelector(".pieces-slider .next")

  let currentPieceIndex = 0

  function updatePiecesSlider() {
    pieceItems.forEach((item, index) => {
      item.classList.remove("active")
      if (index === currentPieceIndex) {
        item.classList.add("active")
      }
    })

    thumbnails.forEach((thumb, index) => {
      thumb.classList.remove("active")
      if (index === currentPieceIndex) {
        thumb.classList.add("active")
      }
    })

    dots.forEach((dot, index) => {
      dot.classList.remove("active")
      if (index === currentPieceIndex) {
        dot.classList.add("active")
      }
    })
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      currentPieceIndex = index
      updatePiecesSlider()
    })
  })

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentPieceIndex = index
      updatePiecesSlider()
    })
  })

  piecesPrev?.addEventListener("click", () => {
    currentPieceIndex = (currentPieceIndex - 1 + pieceItems.length) % pieceItems.length
    updatePiecesSlider()
  })

  piecesNext?.addEventListener("click", () => {
    currentPieceIndex = (currentPieceIndex + 1) % pieceItems.length
    updatePiecesSlider()
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Initialize sliders
  updatePiecesSlider()
})

