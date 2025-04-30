document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      if (button.textContent.trim() === "Load Products") {
        button.addEventListener("click", function () {
          console.log("Botón 'Load Products' fue clickeado");
        });
      }
    });
  });