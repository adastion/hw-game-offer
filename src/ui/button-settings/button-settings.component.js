export function SettigsMobile() {
  const settingsPanel = document.querySelector(".settings");
  const bodyElement = document.querySelector("body");

  const buttonElement = document.createElement("button");
  buttonElement.classList.add(
    "btn",
    "btn--menu-settings",
    "settings__btn-visible"
  );
  buttonElement.textContent = "settings menu";

  buttonElement.addEventListener("click", () => {
    settingsPanel.classList.toggle("active");
    bodyElement.classList.toggle("no-scroll");

    if (buttonElement.textContent === "settings menu") {
      buttonElement.textContent = "close settings";
    } else {
      buttonElement.textContent = "settings menu";
    }
  });

  return buttonElement;
}
