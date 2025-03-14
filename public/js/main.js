document.addEventListener("DOMContentLoaded", () => {
  
  // Collections Slider
  const collectionsSlider = document.querySelector(".collections-slider")
  const collectionItems = document.querySelectorAll(".collection-item")
  const collectionPrev = document.querySelector(".collections-slider .prev")
  const collectionNext = document.querySelector(".collections-slider .next")

  let currentCollectionIndex = 1 // Start with the second item active

  function updateCollectionSlider() {
    collectionItems.forEach((item, index) => {
      item.classList.remove("active")
      if (index === currentCollectionIndex) {
        item.classList.add("active")
      }
    })
  }

  collectionPrev?.addEventListener("click", () => {
    currentCollectionIndex = (currentCollectionIndex - 1 + collectionItems.length) % collectionItems.length
    updateCollectionSlider()
  })

  collectionNext?.addEventListener("click", () => {
    currentCollectionIndex = (currentCollectionIndex + 1) % collectionItems.length
    updateCollectionSlider()
  })

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
  updateCollectionSlider()
  updatePiecesSlider()
})

