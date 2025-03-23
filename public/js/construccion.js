document.addEventListener("DOMContentLoaded", () => {
    // Set the date we're counting down to (2 weeks from now)
    const countDownDate = new Date()
    countDownDate.setDate(countDownDate.getDate() + 14)
  
    // Update the countdown every 1 second
    const countdownTimer = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime()
  
      // Find the distance between now and the countdown date
      const distance = countDownDate - now
  
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
      // Display the result
      document.getElementById("days").textContent = days.toString().padStart(2, "0")
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
  
      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(countdownTimer)
        document.getElementById("days").textContent = "00"
        document.getElementById("hours").textContent = "00"
        document.getElementById("minutes").textContent = "00"
        document.getElementById("seconds").textContent = "00"
      }
    }, 1000)
  
    // Form submission handling
    const notifyForm = document.getElementById("notify-form")
    const formMessage = document.getElementById("form-message")
  
    notifyForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const email = document.getElementById("email").value
  
      // Simulate form submission (in a real application, you would send this to a server)
      setTimeout(() => {
        formMessage.innerHTML = `<p class="success-message">¡Gracias! Te notificaremos cuando el sitio esté de vuelta.</p>`
        notifyForm.reset()
  
        // Clear the success message after 5 seconds
        setTimeout(() => {
          formMessage.innerHTML = ""
        }, 5000)
      }, 1000)
    })
  })
  
  