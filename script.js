"use strict";

const triggers = [...document.querySelectorAll(".accordion-trigger")];

triggers.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
    triggers.forEach((button) => {
      const expanded = button === trigger && shouldOpen;
      button.setAttribute("aria-expanded", String(expanded));
      document.getElementById(button.getAttribute("aria-controls")).hidden = !expanded;
    });
  });

  trigger.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowDown") next = (index + 1) % triggers.length;
    if (event.key === "ArrowUp") next = (index - 1 + triggers.length) % triggers.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = triggers.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      triggers[next].focus();
    }
  });
});

const form = document.getElementById("contact-form");
const fields = [...form.querySelectorAll("[required]")];
const confirmation = document.getElementById("confirmation");

function validateField(field) {
  let message = "";
  if (!field.value.trim()) message = `Please ${field.tagName === "SELECT" ? "select" : "enter"} ${field.dataset.label}.`;
  else if (field.type === "email" && field.validity.typeMismatch) message = "Please enter a valid email address.";

  const error = document.getElementById(`${field.id}-error`);
  error.querySelector(".error-text").textContent = message;
  error.hidden = !message;
  field.setAttribute("aria-invalid", String(Boolean(message)));
  return !message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmation.hidden = true;
  const invalid = fields.filter((field) => !validateField(field));
  if (invalid.length) {
    invalid[0].focus();
    return;
  }
  confirmation.hidden = false;
  confirmation.focus();
});

fields.forEach((field) => {
  field.addEventListener("input", () => {
    confirmation.hidden = true;
    if (field.getAttribute("aria-invalid") === "true") validateField(field);
  });
});

// Reserve the expanded header's space so collapsing never moves page content.
const header = document.querySelector(".site-header");
const headerSlot = document.querySelector(".header-slot");

function measureHeader() {
  const sample = header.cloneNode(true);
  sample.inert = true;
  sample.setAttribute("aria-hidden", "true");
  sample.style.cssText = `position: absolute; visibility: hidden; pointer-events: none; width: ${headerSlot.clientWidth}px; transition: none;`;
  sample.querySelector(".wordmark").style.transition = "none";
  document.body.append(sample);
  sample.classList.remove("is-compact");
  const expandedHeight = sample.getBoundingClientRect().height;
  sample.classList.add("is-compact");
  const compactHeight = sample.getBoundingClientRect().height;
  sample.remove();
  document.documentElement.style.setProperty("--header-height", `${expandedHeight}px`);
  document.documentElement.style.setProperty("--compact-header-height", `${compactHeight}px`);
}

let headerFramePending = false;
function updateHeader() {
  if (window.scrollY > 60) header.classList.add("is-compact");
  else if (window.scrollY < 20) header.classList.remove("is-compact");
  headerFramePending = false;
}
window.addEventListener("scroll", () => {
  if (!headerFramePending) {
    headerFramePending = true;
    requestAnimationFrame(updateHeader);
  }
}, { passive: true });
window.addEventListener("resize", measureHeader);
measureHeader();
document.fonts.ready.then(measureHeader);
updateHeader();
