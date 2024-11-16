// Scroll button functionality
document.getElementById("scrollButton").addEventListener("click", () => {
    document.querySelector("#content").scrollIntoView({
      behavior: "smooth",
    });
  });
  
  // Home button functionality
  document.getElementById("homeButton").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  