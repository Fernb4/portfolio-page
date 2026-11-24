// ==========================================================
// Einstiegspunkt der Seite.
// Hier werden später die einzelnen Module (Navigation, Galerie,
// Diagramm, Formular, ...) importiert und gestartet.
// ==========================================================

/**
 * Setzt das aktuelle Jahr überall dort ein, wo ein Element
 * das Attribut data-year hat (z. B. im Footer).
 */
function setCurrentYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = year;
  });
}

setCurrentYear();
