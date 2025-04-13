document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector("button");
    
    homeButton.addEventListener("click", () => {
      alert("Let's get in touch!");
    });
  });
  
// Simple Scroll Animation: Fade in elements when they appear in the viewport
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade');
  
  elements.forEach((element, index) => {
    // Add a delay for each element to fade in sequentially
    setTimeout(() => {
      element.classList.add('fade-in');
    }, index * 200); // Delay each element by 200ms
  });
});

/* For animatino in project page   */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.setProperty('--delay', index);
  });
});

/*know more in project */
// Function to toggle the visibility of project details
function toggleProjectContent(projectId) {
  const projectContent = document.getElementById(projectId);

  if (projectContent.style.display === 'block') {
    projectContent.style.display = 'none';  // Hide the content
  } else {
    projectContent.style.display = 'block';  // Show the content
  }
}
