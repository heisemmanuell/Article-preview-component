function toggleSharePopup() {
    const popup = document.getElementById("sharePopup");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  }

  //close popup if clicked outside
  document.addEventListener("click", function (e) {
    const popup = document.getElementById("sharePopup");
    const shareIcon = document.querySelector(".share-icon");

    if (!popup.contains(e.target) && !shareIcon.contains(e.target)) {
      popup.style.display = "none";
    }
  });